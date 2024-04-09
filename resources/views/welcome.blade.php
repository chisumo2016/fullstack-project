<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Full Stack Blog Application</title>
        @vite(['resources/css/grid.min.css','resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="">
{{--    Load View js--}}
       <div id="app">

           <mainapp></mainapp>
       </div>
    </body>
</html>
