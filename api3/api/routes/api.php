<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Models\task;

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

// API 3
Route::get('/tasks',[TaskController::class,'index']);
Route::post('/tasks',[TaskController::class,'store']);
Route::put('/tasks',[TaskController::class,'update']);
Route::put('/tasks/marked',[TaskController::class,'marked']);
Route::put('/tasks/unmarked',[TaskController::class,'unmarked']);
Route::delete('/tasks',[TaskController::class,'destroy']);
Route::get('/users',[UserController::class,'index']);

// ------------------------------------------------------------------------


// API 4
Route::get('/tarefas/all',[TaskController::class,'index']);
Route::post('/tarefas/store',[TaskController::class,'store']);

// Route::get('/tarefas/show',[TaskController::class,'show']);

Route::get('/tarefas/show',function(Request $request){
    $tarefa= Task::find($request->id);
    return $tarefa;
});

// Route::put('/tarefas',[TaskController::class,'update']);

// Route::put('/tarefas/marked',[TaskController::class,'marked']);
// Route::put('/tarefas/unmarked',[TaskController::class,'unmarked']);

// Route::delete('/tarefas',[TaskController::class,'destroy']);
