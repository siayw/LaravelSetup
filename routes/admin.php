<?php

use Illuminate\Support\Facades\Route;

Route::redirect('', 'index');
Auth::routes();

Route::group(['middleware' => ['auth:admin']], function () {
    Route::get('index', 'HomeController@index')->name('index');
});
