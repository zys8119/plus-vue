var plusObject;
var plusObjectCopy = {};
function getPlus(callback){
    if(plusObject){
        plusObject.push(callback);
    }else{
        plusObject = plusObject || [];
        plusObject.push(callback);
        document.addEventListener( "plusready", function(){
            var lng = plusObject.length;
            plusObject.forEach(function(e,i){
                e();
                plusObjectCopy[i.toString()] = e;
                if(i == (lng - 1)){
                    //如果支持defineProperty就走defineProperty
                    if(Object.defineProperty){
                        plusObjectCopy.push = function(pushs){
                            plusObjectCopy[lng.toString()] = pushs;
                            lng += 1;
                            Object.defineProperty(plusObject,lng.toString(),{
                                set:function(val){
                                    val();
                                }
                            })
                        };
                        plusObject = plusObjectCopy;
                        plusObject[lng.toString()] = null;
                        Object.defineProperty(plusObject,lng.toString(),{
                            set:function(val){
                                val();
                            }
                        })
                    }else{
                        setInterval(function(){
                            var lng1 = plusObject.length;
                            if(lng1 > lng){
                                plusObject[lng1 - 1]();
                                lng = lng1;
                            }
                        });
                    }

                }
            });

        }, false );
    }
}
export default getPlus

