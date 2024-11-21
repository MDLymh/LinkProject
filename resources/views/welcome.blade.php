<!DOCTYPE html>
<html>
<head>
    <title>Laravel</title>
</head>
<body>
    <h1>Esto es un ejemplo</h1>

    <h2>Skills</h2>
    <ul>
        @foreach ($skills as $skill)
            <li>{{ $skill->skill_name}}</li> 
        @endforeach
    </ul>

    <h2>Careers</h2>
    <ul>
        @foreach ($careers as $career)
            <li>{{ $career->name }}</li>  
        @endforeach
    </ul>

    <h2>Innovations</h2>
    <ul>
        @foreach ($innovations as $innovation)
            <li>{{ $innovation->innovation_name }}</li> 
        @endforeach
    </ul>

</body>
</html>
