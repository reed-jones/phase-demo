<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ReedJones\Phase\Facades\Phase;

class AppController extends Controller
{
    public function HomePage() {
        return Phase::view();
    }

    public function AboutPage() {
        return Phase::view();
    }
}
