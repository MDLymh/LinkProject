<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield("Title")</title>
</head>
<script>
    window.__INITIAL_DATA__ = @json($pageData);
</script>
<body>
    <div id="root"></div>

    @vite($viewJsx);
</body>
</html>