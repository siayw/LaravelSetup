<?php

namespace App\Http\Controllers;

class LocaleController extends Controller
{
    public function __invoke()
    {
        $language = request('language');
        request()->session()->put('language', $language);
        if (url()->previous() == null) {
            return redirect(route('index'));
        }
        return redirect(url()->previous());
    }
}
