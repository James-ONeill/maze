<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Time extends Model
{
    protected $guarded = [];

    public static function topTen() 
    {
        return static::where('uuid', request('uuid'))->get()->map(function ($time) {
            $time->delete();
        });
    }
}
