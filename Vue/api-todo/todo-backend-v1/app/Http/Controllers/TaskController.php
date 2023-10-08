<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function completed()
    {
        return response(Task::where('status',true)->get(),200);
    }

    public function uncompleted()
    {
        return response(Task::where('status',false)->get(),200);
    }

    public function status(Request $request)
    {
        $id=$request->id;
        $task=Task::find($id);

        if($task->status==false){
            $task->update([
                'status'=>true,
            ]);
        }else{
            $task->update([
                'status'=>false,
            ]);
        }

        return response(200);   
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response(Task::all(),200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Task::create([
            'title'=>$request->title,
            'description'=>$request->description,
            'categorie_name'=>$request->categorie,
        ]);

        return response(200);
        // return response($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task, Request $request)
    {
        Task::find($request->id)->delete();
        return response(200);
    }
}
