var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","6cdcbcf0-949c-4b73-9995-b7212092fa34","b50526cc-43c6-437c-b1d0-a834ce9354d9","5d2d153e-4c6c-41f8-9ff2-3625288a5bc3","29d3c11e-b3c0-412c-8f56-09354f95c005","6476b89c-1ec7-4cac-8c8d-b047c7f95fe8","24b0a2b2-b6d6-4f19-8a5a-a3af30e9cdfe","8250efbd-85ce-43d1-8538-329a3c12b7e6","5b8aca1e-b127-4d3c-9835-fc7d7d42dd4a","d8cb6091-ce30-4723-bc96-e44382d20e06","18a5a336-e003-4b4d-99a3-72ac6cd3f848"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"Dw0EDPiVCdyOv0y_eLFt1jrx2kaXaqHA","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"SXBxqGoZ.S2JHIO1w_bgb.5zBlQM3RbQ","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"hA8NbDPgTnwVx6a8E4dSypFYIcJH00E7","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"6cdcbcf0-949c-4b73-9995-b7212092fa34":{"name":"Z","sourceUrl":"assets/api/v1/animation-library/gamelab/NwweAIO.EiWNqaZOuZPFn3HSbtI8KFLY/category_backgrounds/sports_tennis2.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"NwweAIO.EiWNqaZOuZPFn3HSbtI8KFLY","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NwweAIO.EiWNqaZOuZPFn3HSbtI8KFLY/category_backgrounds/sports_tennis2.png"},"b50526cc-43c6-437c-b1d0-a834ce9354d9":{"name":"AVION","sourceUrl":"assets/api/v1/animation-library/gamelab/4so2OhIxXvwQjaRs2XE9yuUnUGnubZj3/category_vehicles/planefront_02.png","frameSize":{"x":372,"y":218},"frameCount":1,"looping":true,"frameDelay":2,"version":"4so2OhIxXvwQjaRs2XE9yuUnUGnubZj3","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":372,"y":218},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4so2OhIxXvwQjaRs2XE9yuUnUGnubZj3/category_vehicles/planefront_02.png"},"5d2d153e-4c6c-41f8-9ff2-3625288a5bc3":{"name":"fondo","sourceUrl":"assets/api/v1/animation-library/gamelab/aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ/category_backgrounds/pine_trees.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ/category_backgrounds/pine_trees.png"},"29d3c11e-b3c0-412c-8f56-09354f95c005":{"name":"ave1","sourceUrl":"assets/api/v1/animation-library/gamelab/1Dwwlsn11G9qOAo5LH8f2JXcAwL0KtR_/category_animals/birdside_01.png","frameSize":{"x":400,"y":202},"frameCount":1,"looping":true,"frameDelay":2,"version":"1Dwwlsn11G9qOAo5LH8f2JXcAwL0KtR_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":202},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1Dwwlsn11G9qOAo5LH8f2JXcAwL0KtR_/category_animals/birdside_01.png"},"6476b89c-1ec7-4cac-8c8d-b047c7f95fe8":{"name":"bee_1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wzg43RjVc2JUtPepg.aHSj1fYH2iiyEA/category_animals/bee_1.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"wzg43RjVc2JUtPepg.aHSj1fYH2iiyEA","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wzg43RjVc2JUtPepg.aHSj1fYH2iiyEA/category_animals/bee_1.png"},"24b0a2b2-b6d6-4f19-8a5a-a3af30e9cdfe":{"name":"ave2","sourceUrl":"assets/api/v1/animation-library/gamelab/oUhuIiJxuqHLbaoGq0UT3YaWt1EnHUaC/category_animals/birdside_16.png","frameSize":{"x":266,"y":176},"frameCount":1,"looping":true,"frameDelay":2,"version":"oUhuIiJxuqHLbaoGq0UT3YaWt1EnHUaC","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":266,"y":176},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oUhuIiJxuqHLbaoGq0UT3YaWt1EnHUaC/category_animals/birdside_16.png"},"8250efbd-85ce-43d1-8538-329a3c12b7e6":{"name":"ave3","sourceUrl":"assets/api/v1/animation-library/gamelab/tjQX5O3sDxZyN99A_gK_QCfm14o_lVW3/category_animals/birdside_13.png","frameSize":{"x":400,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"tjQX5O3sDxZyN99A_gK_QCfm14o_lVW3","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tjQX5O3sDxZyN99A_gK_QCfm14o_lVW3/category_animals/birdside_13.png"},"5b8aca1e-b127-4d3c-9835-fc7d7d42dd4a":{"name":"nube2","sourceUrl":"assets/api/v1/animation-library/gamelab/19.Uhbft7Pr9ez3_WElUGWIRxCBoi5Bv/category_video_games/burst18.png","frameSize":{"x":396,"y":222},"frameCount":1,"looping":true,"frameDelay":2,"version":"19.Uhbft7Pr9ez3_WElUGWIRxCBoi5Bv","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":222},"rootRelativePath":"assets/api/v1/animation-library/gamelab/19.Uhbft7Pr9ez3_WElUGWIRxCBoi5Bv/category_video_games/burst18.png"},"d8cb6091-ce30-4723-bc96-e44382d20e06":{"name":"nube1","sourceUrl":null,"frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":12,"version":"5s.kzvwrSmg0QYEBwm7s5rbaAlJsKplQ","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/d8cb6091-ce30-4723-bc96-e44382d20e06.png"},"18a5a336-e003-4b4d-99a3-72ac6cd3f848":{"name":"planefront_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1/category_vehicles/planefront_01.png","frameSize":{"x":394,"y":154},"frameCount":1,"looping":true,"frameDelay":2,"version":"4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":154},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1/category_vehicles/planefront_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//PERSONAJES Y OBSTACULOS
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"


//ANIMACIONES
hero.setAnimation("AVION");
hero.scale=.2;
enemy1.setAnimation("ave1");
enemy1.scale=.15;
enemy2.setAnimation("ave2");
enemy2.scale=.2;
enemy3.setAnimation("ave3");
enemy3.scale=.15;
net.setAnimation("nube1")
net.scale=.5
enemy1.velocityX=13
enemy2.velocityX=-13
enemy3.velocityX=13

//VARIABLES
var victorias =0;
var muertes = 0;

function draw() {
background("lightblue")  
//TEXTO
textSize(20)
  fill("black")
 stroke("black")
  text("Victorias:"+victorias,300,350);
  
textSize(20)
  fill("black")
  stroke("black")
  text("Muertes:"+muertes,20,350);


//MUSICA Y PUNTAJE
if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  muertes=muertes+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=350
  victorias=victorias+1
}

if (muertes==5) {
 textSize(20)
  fill("black")
  stroke("black")
  text("Perdiste",165,200); 
enemy1.velocityX=0
enemy2.velocityX=0 
enemy3.velocityX=0  
hero.x=200
hero.y=350  
  
}

if (victorias==5) {
 textSize(20)
  fill("black")
  stroke("black")
  text("Ganaste!!",165,200); 
enemy1.velocityX=0
enemy2.velocityX=0 
enemy3.velocityX=0  
hero.x=200
hero.y=350  
  
}



//AGREGAR VELOCIDAD
if(keyDown(UP_ARROW)){
  hero.y=hero.y-4
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+4
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-4
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+4
}

//BORDES
createEdgeSprites()
hero.bounceOff(edges)
enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)





  
drawSprites()
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
