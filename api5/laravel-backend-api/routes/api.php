<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Place;
use App\Models\User;
use App\Models\Categorie;
use App\Models\Iten;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });





// PLACES ----------------------------------------------

Route::get('/places/list', function () {
    return Place::all();
});

Route::post('/places/store', function (Request $request) {
    Place::create($request->all());
});

// -----------------------------------------------------


















// CATEGORIES ----------------------------------------------

Route::get('/categories/list', function () {
    return Categorie::all();
});

Route::post('/categories/store', function (Request $request) {
    Categorie::create($request->all());
});


// -----------------------------------------------------



















// ITENS ----------------------------------------------

Route::get('/itens', function () {
    return json_encode(Categorie::all());
});

// -----------------------------------------------------
