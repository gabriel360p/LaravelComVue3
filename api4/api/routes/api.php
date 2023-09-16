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



// API 4
Route::get('/tarefas/all',[TaskController::class,'index']);

Route::get('/tarefas/markeds',[TaskController::class,'markeds']);

Route::post('/tarefas/store',[TaskController::class,'store']);

Route::get('/tarefas/show',function(Request $request){
    $tarefa= Task::find($request->id);
    return $tarefa;
});

Route::put('/tarefas/update',[TaskController::class,'update']);

Route::put('/tarefas/marked',[TaskController::class,'marked']);
Route::put('/tarefas/unmarked',[TaskController::class,'unmarked']);

Route::delete('/tarefas/delete',[TaskController::class,'destroy']);

