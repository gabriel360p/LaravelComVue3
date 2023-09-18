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

Route::get('/itens/list', function () {
    return  \DB::table('itens')->where('refound','=',false)->get();
});

Route::get('/itens/show', function (Request $request) {
    return  Iten::find($request->id);
});

Route::get('/itens/refounds', function () {
    return  \DB::table('itens')->where('refound','=',true)->get();
});

Route::post('/itens/store', function (Request $request) {
    Iten::create($request->all());
});

Route::delete('/itens/delete', function (Request $request) {
    Iten::find($request->id)->delete();
});

Route::put('/itens/update', function (Request $request) {
    $i=Iten::find($request->id);
    $i->update($request->all());
});

Route::put('/itens/refound', function (Request $request) {
    $i=Iten::find($request->id);
    $i->update([
        'refound'=>true,
    ]);
});

Route::put('/itens/reopen', function (Request $request) {
    $i=Iten::find($request->id);
    $i->update([
        'refound'=>false,
    ]);
    
});
// -----------------------------------------------------
