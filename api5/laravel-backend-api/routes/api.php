<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Place;
use App\Models\User;
use App\Models\Categorie;
use App\Models\Iten;
use App\Http\Requests\CategorieRequest;
use App\Http\Requests\PlaceRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\ItenRequest;

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

Route::middleware('api')->get('/user', function (Request $request) {
    return $request->user();
});


// AUTH ----------------------------------------------
Route::post('/login',function(LoginRequest $request){
    $credentials= $request->only(['email','password']);

    if(!$token=auth('api')->attempt($credentials)){
        return abort(401,"Não Autorizado");
    }else{
	//mandando o token após o login bem feito
        return response()->json([
            // 'data'=>[
                'access_token'=>$token,
                'token_type'=>'bearer',
                'expires_in'=>auth('api')->factory()->getTTL()*60,
            // ]
        ]);
    }
})->name('login');

Route::post('/register',function(Request $request){
    // return $request->only(['email','password', 'name']);
    User::create($request->all());
    return response(200);
})->name('register');

// -----------------------------------------------------




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
