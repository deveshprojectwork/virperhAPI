//import { Resolver,Mutation,Arg,Int,Query,InputType,Field } from "type-graphql";
import { Resolver, Mutation, Arg, Int,  InputType, Field } from "type-graphql";

import {Movie} from "../entity/Movie"

@InputType()
class MovieInput {
  @Field()
  title: string;

  @Field(() => Int)
  minutes: number;
}

// @InputType()
// class MovieUpdateInput {
//   @Field(() => String, { nullable: true })
//   title?: string;

//   @Field(() => Int, { nullable: true })
//   minutes?: number;  ///? shows undefined
// }


@Resolver() 
export class MovieResolver{
    @Mutation(()=>Movie)
    async createMovie(@Arg("options", () => MovieInput) options: MovieInput) {
        const movie = await Movie.create(options).save(); //this insert and then return results
        return movie;
      }   

    // @Mutation(() => Boolean)
    // async updateMovie(
    //     @Arg("id", () => Int) id: number,
    //     @Arg("input", () => MovieUpdateInput) input: MovieUpdateInput
    // ) {
    //     await Movie.update({ id }, input);
    //     return true;
    // } 
    
    // @Mutation(() => Boolean)
    // async deleteMovie(@Arg("id", () => Int) id: number) {
    //     await Movie.delete({ id });
    //     return true;
    // }

    // @Query(()=>[Movie])
    // Movies(){
    //     return Movie.find()
    // }
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
// mutation {
//   createMovie(title: "Titanic", minutes: 40)
// }



//--Select and displey movie
// {
//     Movies{
//       id,
//       title,
//       minutes    
//     }
//   }


// ----Create/insert Moview----------
// mutation {
//     createMovie(
//         options:{
//         title:"sdsd",
//         minutes:22
//       }
//     ){
//       id,
//       title,
//       minutes
//     }
//   }


// --update
// mutation{
//     updateMovie(id:4
//     input:{
//       title:"HUM"
//     }
//     )
//   }


//-----------Delete movie
// mutation{
//     deleteMovie(id:5)  
//   }