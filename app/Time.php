<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Time extends Model
{
    protected $guarded = [];

    public static function topTen() 
    {
        return static::orderBy('total', 'asc')->get()->unique('uuid')->take(10);
    }
}
