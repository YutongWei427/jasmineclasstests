import { hello } from '../functions.js'

describe("A suite of tests for functions.js", function() {
    it('tests for a function named hello that returns "hello"', function() {
      let sHello = hello();
      expect(sHello).toEqual("hello");
    });
  });

//Question 1
function test1 (value) {
  console.log(`feet${value},acre${value/43560}`);
  return true
}
test1(43560)
test1(435600)
test1(4356000)
//Question 2
function test2 (value1,value2,value3) {
  console.log(`width${value1},length${value2},time aquare meters per minute${value3},need${value1*value2/value3}minutes`);
  return true
}
test2(1,2,3)
test2(2,3,4)
test2(3,4,5)
//Question 3
function test3 (value) {
  if(value>=0&&value<=50){
    console.log('Good')
  }else if(value>50&&value<=100){
    console.log('Moderate')
  }else if(value>100&&value<=150){
    console.log('Unhealthy for Sensitive Groups')
  }else if(value>150&&value<=200){
    console.log('Unhealthy')
  }else if(value>200&&value<=300){
    console.log('Very Unhealthy')
  }else if(value>300){
    console.log('Hazardous')
  }
  return true
}
test3(50)
test3(100)
test3(150)
test3(200)
test3(300)
test3(400)
//Question 4
function test4(value){
  if(value%3==0&&value%7!=0){
    console.log('Yee')
  }else if(value%3!=0&&value%7==0){
    console.log('Yee Ha')
  }else if(value%3==0&&value%7==0){
    console.log('Nada')
  }
}
test4(3)
test4(7)
test4(21)
//Question 5
function test5(x1,y1,x2,y2){
  let slp=0
  slp=(y1-y2)/(x1-x2)
  if(slp<0){
    slp=0-slp
  }
  console.log(`slope${slp}`)
}
test5(2,3,4,5)
test5(4,5,6,7)
test5(9,10,11,12)