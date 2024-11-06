<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf" content="{{ csrf_token()}}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.3.1/css/all.min.css">
    @vite('resources/css/utilities.css')
    @vite('resources/css/app.css')
    <title>
        @if (isset($title))
            {{$title}}
        @elseif (session()->has('title'))
            {{session('title')}}
        @else
            Leila
        @endif
    </title>
</head>
<body style="padding: 0">
    <div style="height: 100vh;min-width: 600px;" id="root"></div>
    @if($errors->any())
        @php
            $initialData['errors'] = $errors->all();
        @endphp
    @else
        @php
            $initialData['errors'] = [];
        @endphp
    @endif
    <script>
        window.__INITIAL_DATA__ = @json($initialData);
    </script>
    @vite("resources/jsx/modulos/".$moduloJSX) 
</body>
</html>