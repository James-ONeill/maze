<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> 
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ mix('css/main.css') }}">

    <script defer src="{{ mix('js/app.js') }}"></script>

    <title>Coffee-to-go – Path to Purchase</title>

    <meta name="description" content="How fast can you grab your coffee and exit the store? Test your skills to find out.">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body style="background-image: url('/img/background.png'); font-family: 'Press Start 2P'; touch-action: manipulation;">
    {{-- <div class="frame-border"></div> --}}
    @yield('content')
</body>
</html>