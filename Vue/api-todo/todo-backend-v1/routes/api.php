<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(TaskController::class)->group(function () {
   Route::get('tasks', 'index');

   Route::get('tasks/completed', 'completed');

   Route::get('tasks/uncompleted', 'uncompleted');

   Route::post('tasks', 'store');

   Route::put('tasks', 'update');

   Route::put('tasks/status', 'status');

   Route::delete('tasks', 'destroy');

   Route::get('tasks/show', 'show');
});

Route::post('categories', [CategorieController::class, 'store']);

Route::get('categories', [CategorieController::class, 'index']);
