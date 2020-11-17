import { Resolver, Mutation, Arg, Int, Query, InputType, Field } from "type-graphql";
import { User } from "../entity/User"

@InputType()
class UserInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  postcode: string;

  @Field()
  country: string;

  @Field(() => Int)
  roleid: number;

  @Field(() => Int)
  groupid: number;
}

@InputType()
class UserUpdateInput {
  @Field(() => String, { nullable: true })
  firstname?: string;

  @Field(() => String, { nullable: true })
  lastname?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  postcode?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => Int, { nullable: true })
  roleid?: number;  ///? shows undefined

  @Field(() => Int, { nullable: true })
  groupid?: number;  ///? shows undefined

}


@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(@Arg("options", () => UserInput) options: UserInput) {
    const user = await User.create(options).save(); //this insert and then return results
    return user;
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("id", () => Int) id: number,
    @Arg("input", () => UserUpdateInput) input: UserUpdateInput
  ) {
    await User.update({ id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id", () => Int) id: number) {
    await User.delete({ id });
    return true;
  }

  @Query(() => [User])
  Users() {
    return User.find()
  }
}




// TYPE 1

// @Resolver() 
// export class MovieResolver{
//     @Mutation(()=>Boolean)
//     async createMovie(
//         // @Arg("title",()=>String) title:string,
//         @Arg("title") title:string,
//         @Arg("minutes",() => Int ) minutes:number  //number is not graphql, so tp say int

//         ){

//         await Movie.insert({title, minutes})
//         console.log(title);
//         return true;
//     }   

//     @Query(()=>[Movie])
//     Movies(){
//         return Movie.find()
//     }
// }

// ___________________________________
// https://www.youtube.com/watch?v=WhzIjYQmWvs&t=252s
//https://github.com/benawad/typescript-graphql-crud-example/blob/master/src/resolvers/MovieResolver.ts

//Output
// # Write your query or mutation here
// mutation{
//   createUser(
//     options:{
//      	firstname:"Mujmil", 
//       lastname: "A",
//       password :"a1dmin123",
//       email: "muj@gmail.com",
//       phone: "987978998",
//       city: "mumbai", 
//       state:"HP", 
//       postcode: "sn14ah", 
//       country:"India",
//       roleid: 2,
//       groupid: 4
//     }
//   ){
//     id,
//     firstname,
//     lastname,
//     password,
//     email,
//     phone,
//     city,
//     state,
//     postcode,
//     country,
//     roleid,
//     groupid,
//   }
// }


// output 
// {
//   "data": {
//     "createUser": {
//       "id": 2,
//       "firstname": "Mujmil",
//       "lastname": "A",
//       "password": "a1dmin123",
//       "email": "muj@gmail.com",
//       "phone": "987978998",
//       "city": "mumbai",
//       "state": "HP",
//       "postcode": "sn14ah",
//       "country": "India",
//       "roleid": 2,
//       "groupid": 4
//     }
//   }
// }

//--Select and displey User
// {
//   Users{
//     id,
//     firstname,
//     country
//   }
// }


// ----Create/insert User----------
// mutation {
//   createMovie(
//       options:{
//       title:"sdsd",
//       minutes:22
//     }
//   ){
//     id,
//     title,
//     minutes
//   }
// }

// --update
// mutation{
//   updateUser(id:2
//     input:{
//       country:"UK"
//     }
//   )
// }


//-----------Delete User
// mutation{
//   deleteUser(id:4)
// }