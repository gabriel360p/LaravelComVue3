<?php

use App\Models\Book;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('users',function(){
    $users = User::all();
    return response($users,200);
});


Route::get('books',function(){
    $books = Book::all();
    return response($books,200);
});


Route::get('book/view',function(Book $book, Request $request){
    return response(Book::find($request->id),200);
});


Route::post('books',function(Request $request){
    Book::create($request->all());
    return response(201);    
});

Route::delete('books',function(Request $request, Book $book){
    Book::find($request->id)->delete();
    return response(200);
});

Route::put('books',function(Request $request, Book $book){
    $book = Book::find($request->id);

    $book->update([
        'title'=>$request->title,
        'author'=>$request->author,
        'categorie'=>$request->categorie,
    ]);
    
    return response(200);
});