window.dom = {
    find(selector,scope){
      return (scopr || document) .querySelrctorAll(selector)
    }
    }
    style(node,name,value){
        if (arguements.length === 3){
            node.style[name] = value
        }else if(arguements.length === 2){
            if (typeof name === `string`){
                return node.style[name]
            }else if (name instanceof Object){
                for(let key in name){
                    node,style[key]=name[key]
                }
            }
        }
    }
    each(nodeList,fn){
        for(let i = 0 ; i< nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    }