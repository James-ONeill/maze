<?php

namespace App\Http\Controllers;

use App\Time;
use Illuminate\Http\Request;

class TimesController extends Controller
{
    public function index()
    {
        $times = Time::orderBy('total', 'asc')->limit(10)->get();

        return $times;
    }

    public function store()
    {
        $time = Time::create(array_merge(request([
            'name', 
            'minutes', 
            'seconds', 
            'milliseconds'
        ]), [
            'total' => request('milliseconds', 0) + (request('seconds', 0) * 1000) + ((request('minutes', 0) * 60) * 1000)
        ]));

        return response()->json([
            'time' => $time,
            'top_ten' => Time::orderBy('total', 'asc')->limit(10)->get(),
        ]);
    }
}
