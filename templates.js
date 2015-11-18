module.exports= {



  animovies:[
      '<div class="col-md-12 movieupper">',
      '<div class="col-md-3 movieCover"><img alt="" src=',
      '"<%=cover%>">',
      '</div>',
      '<div class="col-md-9 movieInfo">',
      '<div class="movieTitle">',
      '<h2><%=title %>',
      '</h2>',
      '<span><%=mvDate%></span>',
      '</div>',
      '<div class="moviePlot">',
      '<p><%=plot%>',
      '</p>',
      '</div>',
      '</div>',
      '</div>',
      '<div class="col-md-12 movieFoot">',
      '<div class="col-md-3 movieRating">',
      '<%=avgRating()%>/10',
      '</div>',
      '<form action="" class="userinput">',
      '<input type="usersRate" class="userScore" name="userScore" placeholder="rate on 1 - 10">',
      '</form>',
      '<button class="usersub btn btn-primary">Submit</button>',
      '<button class="delete btn btn-danger"  id="<%=_id%>">Delete</button>',
      '</div>'
    ].join(''),

  forms:[
    '<form action="">',
    '<input type="cover" placeholder="cover image">',
    '<input type="title" placeholder="title">',
    '<input type="mvdate" placeholder="release year">',
    '<input type="rate" placeholder="rating out of 10">',
    '<textarea name="plot" class="inpPlot" rows="8" cols="40" placeholder="plot"></textarea>',
    '<button type="submit" class="btn btn-primary submit">Submit</button>',
    '</form>',
  ].join(''),

  headerTmp:[
    '<h1>ANIMOVIES</h1>'
  ].join(''),


















};
