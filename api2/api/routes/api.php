<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//users
Route::get('/users',[UserController::class,'index']);
Route::post('/users',[UserController::class,'store']);
Route::put('/users',[UserController::class,'update']);
Route::delete('/users',[UserController::class,'destroy']);

// Route::get('/users/{user}',[UserController::class,'show']);



//tasks
Route::post('/tasks/{user}',[TaskController::class,'store']);
Route::get('/tasks/{user}',[TaskController::class,'index']);
