<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\LoginRequest;
use App\Models\User;

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


//middleware de auth para api's usando o jwt
Route::middleware('api')->get('/user', function (Request $request) {
        return $request->user();
});
    

//realizando o login
Route::post('/login',function(LoginRequest $request){
    $credentials= $request->only(['email','password']);

    if(!$token=auth('api')->attempt($credentials)){
        return abort(401,"Não Autorizado");//dados não encontrados no sistema
    }else{
        return response()->json([
            // 'data'=>[
                'access_token'=>$token,
                'token_type'=>'bearer',
                'expires_in'=>auth('api')->factory()->getTTL()*60,
            // ]
        ]);
    }

})->name('login');

Route::post('/register',function(LoginRequest $request){
    User::create($request->all());
    return response(200);
})->name('register');