function 子女一览程序(参数,珍宝){
	id('zinvyilan').style.display = 'block';
	id('zn5').innerText = "统帅";
	id('zn6').innerText = "武力";
	id('zn7').innerText = "智力";
	id('zn8').innerText = "政治";
	id('zn9').innerText = "魅力";
	var 临时子女列表 = [];
    if(参数 == 0||参数==999){
      var _loc5_ = 0;
      while(_loc5_ < _all_child.length){
         if(_all_child[_loc5_].名称 !== undefined){
            临时子女列表.push(_all_child[_loc5_]);
         }
         _loc5_ = _loc5_ + 1;
      }
    }
    else if(参数 == 1 ||参数 == 5 || 参数 == 8 || 参数 == 11){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_].状态 == 0){
               临时子女列表.push(_all_child[_loc5_]);
            }
            _loc5_ += 1;
         }
      }
    else if(参数 == 2){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_].状态 == 0 && _all_child[_loc5_].年龄 <= 7 && _all_child[_loc5_].被过继过 !== 1){
               临时子女列表.push(_all_child[_loc5_]);
            }
            _loc5_ += 1;
         }
      }
    else if(参数 == 3 ||参数 == 16){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_].状态 == 0 && _all_child[_loc5_].性别 == 0 && _all_child[_loc5_].婚 !== 1 && _all_child[_loc5_].年龄 >= 16){
               临时子女列表.push(_all_child[_loc5_]);
            }
            _loc5_ += 1;
         }
      }
    else if(参数 == 4){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_].状态 == 0 && _all_child[_loc5_].性别 == 1 && _all_child[_loc5_].婚 == 0 && _all_child[_loc5_].年龄 >= 16){
               临时子女列表.push(_all_child[_loc5_]);
            }
            _loc5_ += 1;
         }
      }
    else if(参数 == 6){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_].状态 == 0 && _all_child[_loc5_].性别 == 0 && _all_child[_loc5_].年龄 >= 5){
               临时子女列表.push(_all_child[_loc5_]);
            }
            _loc5_ += 1;
         }
      }
    else if(参数 == 7){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_].状态 == 0 && _all_child[_loc5_].性别 == 0 && _all_child[_loc5_].年龄 >= 5){
               临时子女列表.push(_all_child[_loc5_]);
            }
            _loc5_ += 1;
         }
      }
    else if(参数 == 9){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_].状态 == 0 && _all_child[_loc5_].性别 == 0 && _all_child[_loc5_].年龄 >= 16 && _all_child[_loc5_].病 == 0){
               临时子女列表.push(_all_child[_loc5_]);
            }
            _loc5_ += 1;
         }
      }
    else if(参数 == 10 || 参数 == 14){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_].状态 == 0 && _all_child[_loc5_].性别 == 0 && _all_child[_loc5_].年龄 >= 16){
               临时子女列表.push(_all_child[_loc5_]);
            }
            _loc5_ += 1;
         }
      }
    else if(参数 == 12){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_].状态 == 0 && _all_child[_loc5_].性别 == 0 && _all_child[_loc5_].年龄 >= 16 && _all_child[_loc5_].婚 !== 0){
               临时子女列表.push(_all_child[_loc5_]);
            }
            _loc5_ += 1;
         }
      }
    else if(参数 == 13){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_].状态 == 0 && _all_child[_loc5_].病 !== 0){
               临时子女列表.push(_all_child[_loc5_]);
            }
            _loc5_ += 1;
         }
      }
	else if(参数 == 15){
	        _loc5_ = 0;
	        while(_loc5_ < _all_child.length)
	        {
	           if(_all_child[_loc5_].状态 == 0 &&_all_child[_loc5_].年龄>3)
	           {
	              临时子女列表.push(_all_child[_loc5_]);
	           }
	           _loc5_ += 1;
	        }
	}
	else if(参数 == 17){
	    _loc5_ = 0;
	    while(_loc5_ < _all_child.length){
	        if(_all_child[_loc5_].状态 == 0 &&_all_child[_loc5_].年龄>=16&&_all_child[_loc5_].性别==0){
	            临时子女列表.push(_all_child[_loc5_]);
	        }
	        _loc5_ += 1;
	    }
	}	
	序列 = 0;
	临时子女列表.sort(compare("id"));
	刷新子女信息(临时子女列表,序列,参数,珍宝)
	id('zinvyilanqian').onclick = function(){
		if(序列 > 0 ){
		    序列 -= 1;
		    刷新子女信息(临时子女列表,序列,参数,珍宝)
		    }
		};
	id('zinvyilanhou').onclick = function(){
		if(序列 < Math.round(临时子女列表.length / 10)){
			序列 += 1;
			刷新子女信息(临时子女列表,序列,参数,珍宝)
			}
	};
}
function 刷新子女信息(临时子女列表,序列,参数,珍宝){
	var _loc4_ = 0;
	while(_loc4_ < className('zinvlbx').length){
		var i = 序列 * 10 + _loc4_;
	    var _loc5_ = 临时子女列表[i];
		if(_loc5_ == undefined){className('zinvlbx')[_loc4_].style.display = 'none';}
		else{
            className('zinvlbx')[_loc4_].style.display = 'block';
			className('z1')[_loc4_].innerText = _loc5_.名称;
			className('z2')[_loc4_].innerText = _loc5_.年龄;
			if(_loc5_.序号 == undefined){className('z3')[_loc4_].innerText = "义女";}
            else if(_loc5_.性别 == 0){className('z3')[_loc4_].innerText = 中文序号[_loc5_.序号] + "皇子";}
            else{className('z3')[_loc4_].innerText = 中文序号[_loc5_.序号] + "公主";}
			if(_loc5_.状态 == 1){className('z4')[_loc4_].innerText = "已逝世";}
			else if(_loc5_.状态 == 2){className('z4')[_loc4_].innerText = "已除籍";}
			else if(_loc5_.id == 国家.皇储id){className('z4')[_loc4_].innerText = "皇太子";}
			else{className('z4')[_loc4_].innerText = _loc5_.封号;}
			className('z5')[_loc4_].innerText = Math.round(_loc5_.统帅);
			className('z6')[_loc4_].innerText =  Math.round(_loc5_.武力);
			className('z7')[_loc4_].innerText = Math.round(_loc5_.智力);
			className('z8')[_loc4_].innerText = Math.round(_loc5_.政治);
			className('z9')[_loc4_].innerText = Math.round(_loc5_.魅力);
			className('z10')[_loc4_].innerText = _loc5_.母亲;
			className('z11')[_loc4_].innerText = _loc5_.婚配;
			if(_loc5_.儿女 == undefined){className('z12')[_loc4_].innerText = '';}
           else{className('z12')[_loc4_].innerText = _loc5_.儿女;}
		}
		className('zinvlbx')[_loc4_].取 =  _loc5_;
		className('zinvlbx')[_loc4_].onclick = function(){
			if(参数 == 0){出现这个孩子的介绍(this.取);}
			else if(参数 == 5){
               赏赐这个子女确定(this.取,珍宝);
               id('zinvyilan').style.display = 'none';
            }
            else if(参数 == 8){
               把成药给这个子女(this.取,珍宝);
               id('zinvyilan').style.display = 'none';
            }
            else if(参数 == 6){
               单独教导这个皇子(this.取);
               id('zinvyilan').style.display = 'none';
            }
            else if(参数 == 7){
               单独训练这个皇子(this.取);
               id('zinvyilan').style.display = 'none';
            }
            else if(参数 == 9){
               派皇子攻打(珍宝,this.取);
               id('zinvyilan').style.display = 'none';
            }
            else if(参数 == 10){
               console.log("原来的朝廷势力" + this.取.朝廷势力);
               随机增加这个人的朝廷势力(this.取,1);
               随机增加这个人的朝廷势力(this.取,1);
               刷新朝廷势力(this.取);缓动黑幕();
               console.log("现在的朝廷势力" + this.取.朝廷势力);
               记录大事件的程序("皇子" + this.取.名称 + "代皇上前往祭祖。");
               id('zinvyilan').style.display = 'none';
            }
            else if(参数 == 11){
               赏赐这个子女(this.取,珍宝);
               id('zinvyilan').style.display = 'none';
            }
			else if(参数 == 13){
			    安排御医(3,this.取);
			    id('zinvyilan').style.display = 'none';
			}
			else if(参数 == 15){
			   缓动黑幕();
			   批量赏赐界面(0,this.取,"子女");
			   id('zinvyilan').style.display = 'none';
			}
			else if(参数 == 16){
				民间美女赐给皇子确定(this.取,珍宝);
				id('zinvyilan').style.display = 'none';
			}
			else if(参数 == 17){
			   赏赐秀女确定(this.取,珍宝);
			   id('zinvyilan').style.display = 'none';
			}
			else if(参数 == 999){出现这个孩子的介绍(this.取,参数);}
		}
		_loc4_ += 1;
	}	 
}
function 家眷一览表(参数,子女){
	id('jiajuanyilan').style.display = 'block';
	id("qxzb").style.display = "none";
	id('jjText').innerText = '家眷一览';
	id('jia2').innerText = '家族';
	id('jia3').innerText = '年龄';
	id('jia5').innerText = '身份';
	id('jia7').innerText = '儿女';
	id('jia3').style.display = 'block';
	id('jia4').style.display = 'none';
	id('jia6').style.display = 'none';
	var 临时家眷列表 = [];
    if(参数 == 0){
      var _loc6_ = 0;
      while(_loc6_ < _all_family.length){
         if(_all_family[_loc6_].婚配序号 == 子女.id){
            临时家眷列表.push(_all_family[_loc6_]);
         }
         _loc6_ = _loc6_ + 1;
        }
    }
	else if(参数 == 1){
	  var _loc6_ = 0;
	  while(_loc6_ < _all_family.length){
	     if(_all_family[_loc6_].婚配序号 == 999){
	        临时家眷列表.push(_all_family[_loc6_]);
	     }
	     _loc6_ = _loc6_ + 1;
	    }
	}
	临时家眷列表.sort(compare("地位"));
	序列 = 0;
	刷新家眷信息(临时家眷列表,序列,参数)
	id('jiajuanqian').onclick = function(){
		if(序列 > 0 ){
		    序列 -= 1;
		    刷新家眷信息(临时家眷列表,序列,参数);
		    }
		};
	id('jiajuanhou').onclick = function(){
		if(序列 < Math.round(临时家眷列表.length / 10)){
			序列 += 1;
			    刷新家眷信息(临时家眷列表,序列,参数);
			}
	};
}
function 刷新家眷信息(临时家眷列表,序列,参数){
	var _loc4_ = 0;
	while(_loc4_ < className('jiajuanlbx').length){
		var i = 序列 * 10 + _loc4_;
	    var _loc5_ = 临时家眷列表[i];
		if(_loc5_ == undefined){className('jiajuanlbx')[_loc4_].style.display = 'none';}
		else{
            className('jiajuanlbx')[_loc4_].style.display = 'block';
			className('jj1')[_loc4_].innerText = _loc5_.名称;
			className('jj2')[_loc4_].innerText = _loc5_.家族;
			if(_loc5_.家族==undefined){
				className('jj2')[_loc4_].innerText = "无";
			}
			else{className('jj2')[_loc4_].innerText = _loc5_.家族;}
			className('jj3')[_loc4_].innerText = _loc5_.年龄;
			className('jj5')[_loc4_].innerText = _loc5_.身份;
			className('jj7')[_loc4_].innerText = _loc5_.儿女;
			className('jj6')[_loc4_].innerText = "";
			className('jj4')[_loc4_].innerText = "";
			if(_loc5_._code >=1000&&_loc5_._code<=7999){className('jj1')[_loc4_].style.color="#ffd0cb"}
			else{className('jj1')[_loc4_].style.color="#ffffff"}
		}
		className('jiajuanlbx')[_loc4_].取 =  _loc5_;
		className('jiajuanlbx')[_loc4_].onclick = function(){出现这个秀女的介绍(this.取,4);}
		_loc4_ += 1;
	}	 
}
function 出现这个孩子的介绍(取数据,参数){
   id('介绍图').style.display = 'block';id('介绍图an3').innerText = "关闭";
   出现这个人的头像(id('介绍图头像'),取数据);
   id('介绍图名字').innerText = 取数据.名称;
   id('介绍图an2').style.display = 'block';
   id('介绍图an2').innerText = '事宜'
   id('介绍图an1').style.display = 'block';
   id('介绍图an1').innerText = '家眷'
   id('介绍图an0').style.display = 'block';
   id('介绍图an0').innerText = '儿女';
   id('介绍图an0').onclick = function(){id('介绍图').style.display = 'none';皇孙一览表(1,取数据);}
   id('介绍图an1').onclick = function(){id('介绍图').style.display = 'none';家眷一览表(0,取数据);}
   id('介绍图an2').onclick = function(){id('介绍图').style.display = 'none';子女事宜(取数据);}
   id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';id('介绍图an0').style.display = 'none';id('介绍图an1').style.display = 'none';}
   if(取数据.id == 国家.皇储id){
      id('介绍图介绍').innerText = "封号：皇太子";
   }
   else{
      id('介绍图介绍').innerText = "封号：" + 取数据.封号;
   }
   id('介绍图介绍').innerText += ("\n年龄：" + 取数据.年龄);
   if(取数据.状态 == 1){
      id('介绍图介绍').innerText += "（已逝世）";
   }
   else if(取数据.状态 == 2){
      id('介绍图介绍').innerText += "（已除籍）";
   }
   else if(取数据.状态 == 5){
      id('介绍图介绍').innerText += ("（外封" + _all_city[取数据.封地].名称 + "）");
   }
   if(取数据.年龄 >= 3){
      id('介绍图介绍').innerText += ("\n性格：" + 性情啊[取数据.性情]);
   }
   id('介绍图介绍').innerText += ("\n母亲：" + 取数据.母亲);
   id('介绍图介绍').innerText += ("\n文化圈：" + _all_nation[取数据.文化].文化);
   id('介绍图介绍').innerText += ("\n婚配：" + 取数据.婚配);
   if(取数据.儿女 == undefined){
      id('介绍图介绍').innerText += "\n儿女：0";
   }
   else{
      id('介绍图介绍').innerText += ("\n儿女：" + 取数据.儿女);
   }
   id('介绍图介绍').innerText += "\n\n统/武/智/政/魅";
   id('介绍图介绍').innerText += ("\n" + Math.round(取数据.统帅) + "/" + Math.round(取数据.武力) + "/" + Math.round(取数据.智力) + "/" + Math.round(取数据.政治) + "/" + Math.round(取数据.魅力));
   if(参数==999){id('介绍图an2').style.display = 'none';}
}
function 子女事宜(对象){
	id('sy').style.display = 'block';
	id('syb').style.display = 'block';
	id('syTitle').innerText = '子女事宜';
	id('sysm').innerText = '';
	className('sydb')[0].innerText = '召见';
	className('sydb')[1].innerText = '探望';
	className('sydb')[2].innerText = '过继';
	className('sydb')[4].innerText = '外封';
	className('sydb')[5].innerText = '更改资料';
	if(对象.状态 == 0){
		var i = 0;
		while(i < 15){
			if(i < 6){className('sydb')[i].style.display = 'block';}else{className('sydb')[i].style.display = 'none';}
			i++;
		}
		className('sydb')[0].onclick = function (){
			if(对象.召见 == 1){小提示("已经召见过" + 对象.名称);}
			else{id('zinvyilan').style.display = 'none';id('sy').style.display = 'none';单独召见这个子女(对象);子女一览程序(0);}
		}
		className('sydb')[1].onclick = function (){
			if(对象.病 !== 0){id('zinvyilan').style.display = 'none';id('sy').style.display = 'none';选择探望这个子女(对象);子女一览程序(0);}
			else{小提示(对象.名称 + "没有生病");}
		}
		className('sydb')[2].onclick = function (){
		    if(对象.状态 == 0 && 对象.年龄 <= 7 && 对象.被过继过 !== 1){
				id('zinvyilan').style.display = 'none';id('sy').style.display = 'none';
		        选择去哪个宫殿(50,对象);
		    }
			else{小提示(对象.名称 + "已被过继");}
		}
		if(对象.婚 !== 1  && 对象.年龄 >= 16){
			className('sydb')[3].style.display = 'block';className('sydb')[3].innerText = '婚配';
			className('sydb')[3].onclick = function (){
				if(对象.性别 == 0){选择皇子婚姻(对象);}else if(对象._code == 9900){小提示("嘉宁公主不愿意出嫁");}else{选择公主婚姻(对象);}
			}
		}else{className('sydb')[3].style.display = 'none';}
		className('sydb')[4].onclick = function (){
			if(对象.id == 国家.皇储id){小提示("皇储不可外封");}
			else if(对象.状态 == 0  && 对象.性别 == 0  && 对象.年龄 >= 16  && 对象.婚 !== 0){
				id('zinvyilan').style.display = 'none';id('sy').style.display = 'none';地方发展界面(6,undefined,对象);
			}else{小提示("不可外封");}
		};
	}else{
		var i = 0;
		while(i < 15){
			if(i == 5){className('sydb')[i].style.display = 'block';}else{className('sydb')[i].style.display = 'none';}
			i++;
		}
	}
	className('sydb')[5].onclick = function (){
	id('sy').style.display = 'none';
	}
}
function 公主取名(){
   var _loc1_ = 皇家名字女字[random(皇家名字女字.length)] + 女名[random(女名.length)];
   return _loc1_;
}
function 选择探望这个子女(数据){
   id('youyuan').style.display = 'block';
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_987203.webp";
   id('yyText').innerText = "皇上亲自照料" + 数据.名称 + "，所有人在旁服侍，不可怠慢。";
   数据.保 += 10;
   数据.关系 += 5;
   属性.道德 += 15;
   属性.健康 -= 5;
   属性.体力 -= 50;
   更新资料(属性栏);
   id('yykuang').onclick = function(){
      id('youyuan').style.display = 'none';
	  if(主角.当前时辰==3){
	  	id('紫宸殿内').style.display = 'none';
		id('zinvyilan').style.display = 'none';
	  }
      主角.当前时辰 += 1;
      时辰推进();
   };
}
function 计算成年子女头像(){
   var _loc2_ = 0;
   while(_loc2_ < _all_child.length){
	   if(_all_child[_loc2_].文化 == 8||_all_child[_loc2_].文化 == 20||_all_child[_loc2_].文化 == 21||_all_child[_loc2_].文化 == 22){
		   var _loc3_ = 8;
	   }
      else{var _loc3_ = _all_child[_loc2_].文化;}
      if(_all_child[_loc2_].幼年 == undefined){
         _all_child[_loc2_].幼年 = _loc3_ * 10 + random(10);
      }
      if(_all_child[_loc2_].头像 == undefined){
         _all_child[_loc2_].头像 = _loc3_ * 10 + random(10) + 1000;
         if(_all_child[_loc2_].性别 == 1){
            if(_all_child[_loc2_].文化 == 8||_all_child[_loc2_].文化 == 20||_all_child[_loc2_].文化 == 21||_all_child[_loc2_].文化 == 22){
               _all_child[_loc2_].头像 += random(9) * 1000;
            }
            else if(_all_child[_loc2_].文化 == 18){
               _all_child[_loc2_].头像 += random(5) * 1000;
            }
            else{
               _all_child[_loc2_].头像 += random(2) * 1000;
            }
         }
         else if(_all_child[_loc2_].性别 == 0){
            if(_all_child[_loc2_].文化 == 8||_all_child[_loc2_].文化 == 20||_all_child[_loc2_].文化 == 21||_all_child[_loc2_].文化 == 22){
               _all_child[_loc2_].头像 += random(9) * 1000;
            }
         }
      }
      _loc2_ += 1;
   }
}
function 计算子女魅力(母亲){
   var _loc2_ = Math.round(母亲.魅力 * 0.7 + 属性.魅力 * 0.02) + random(10) - 5;
   if(_loc2_ > 99){
      _loc2_ = 99;
   }
   return _loc2_;
}
function 判定这个子女死亡(子女){
   var _loc2_ = 子女.id;
   var _loc3_ = 0;
   while(_loc3_ < _all_child.length){
      if(_all_child[_loc3_].id == _loc2_){
         _all_child[_loc3_].状态 = 1;
      }
      _loc3_ += 1;
   }
   删除跟这个人有关的三方相性(子女);
   _loc3_ = 0;
   while(_loc3_ < _all_feizi.length){
      var _loc4_ = _all_feizi[_loc3_];
      if(_loc4_.名字 !== undefined){
         if(_loc4_.名字 == 子女.母亲){
            _loc4_.生育 -= 1;
            _loc4_.爱 -= 50;
         }
      }
      _loc3_ += 1;
   }
   _loc3_ = 0;
   while(_loc3_ < 主角.冷宫.length){
      _loc4_ = 主角.冷宫[_loc3_];
      if(_loc4_.名字 !== undefined){
         if(_loc4_.名字 == 子女.母亲){
            _loc4_.生育 -= 1;
            _loc4_.爱 -= 50;
         }
      }
      _loc3_ += 1;
   }
   _loc3_ = 0;
   while(_loc3_ < 主角.掖庭.length){
      _loc4_ = 主角.掖庭[_loc3_];
      if(_loc4_.名字 !== undefined){
         if(_loc4_.名字 == 子女.母亲){
            _loc4_.生育 -= 1;
            _loc4_.爱 -= 50;
         }
      }
      _loc3_ += 1;
   }
}
function 单独召见这个子女(子女){
   子女.召见 = 1;
   var 身体 = 0;
   var 学习 = 0;
   var 生活 = 0;
   子女.关系 += 3 + random(3);
   id('剧情对话').style.display = 'block';
   id('剧情背景').src =LJ +  'a0aPic_BG/Tu_14.webp';
   出现这个人的头像(剧情头像,子女);
   if(子女._code == 8903 || 子女._code == 9903){
      id('剧情背景').src =LJ +  'a0aPic_BG/Tu_998114.webp';
      对话打字效果("（皇上去" + 子女.名称 + "的宫殿里去看望）");
   }
   else if(子女.年龄 <= 3){
      对话打字效果("（乳母把" + 子女.名称 + "小殿下抱来了）");
   }
   else{
      对话打字效果(子女.名称 + "：儿臣给父皇请安。");
   }
   剧情对话板.onclick = function(){
      对话打字效果("（皇上想谈什么？）",["结束","生活琐事","学习情况","身体状况"]);
      id('剧情an3').onclick = function(){
         if(身体 !== 0){
            对话打字效果("（刚刚已经问过了）");
         }
         else{
            身体 = 1;
            if(子女._code == 8903 || 子女._code == 9903){
               if(子女.年龄 <= 9){
                  对话打字效果(子女.名称 + "：……（沉默不语）");
               }
               else{
                  对话打字效果(子女.名称 + "：" + 人鱼身体状况[random(人鱼身体状况.length)]);
               }
            }
            else if(子女.年龄 <= 3){
               if(子女.病 == 0){
                  if(子女.武质 > 80){
                     对话打字效果("乳母：" + 子女.名称 + "小殿下精力十分旺盛，总是跑来跑去，就算跌倒也不怕。");
                  }
                  else if(子女.武质 > 60){
                     对话打字效果("乳母：" + 子女.名称 + "小殿下活泼好动，身体健康。");
                  }
                  else if(子女.武质 > 40){
                     对话打字效果("乳母：" + 子女.名称 + "小殿下很是文静，不跑不闹，喜欢晒太阳。");
                  }
                  else{
                     对话打字效果("乳母：" + 子女.名称 + "小殿下看起来身体比较弱不禁风，平时不太走动，应该多补补营养。");
                  }
               }
               else{
                  子女.病 -= 1;
                  对话打字效果("乳母：" + 子女.名称 + "小殿下最近得病了，不爱吃东西，身体有些虚弱。");
               }
            }
            else if(子女.病 == 0){
               if(子女.寿命 < 2){
                  对话打字效果(子女.名称 + "：儿臣似乎感觉身上一点力气都没有了。");
               }
               else if(子女.寿命 < 3){
                  对话打字效果(子女.名称 + "：儿臣近来有些不适，总感觉虚弱无力。");
               }
               else if(子女.寿命 < 6){
                  对话打字效果(子女.名称 + "：谢父皇挂念，儿臣近来还好，只是有点累。");
               }
               else{
                  对话打字效果(子女.名称 + "：谢父皇挂念，儿臣近来一直无恙。");
               }
            }
            else{
               子女.病 -= 1;
               对话打字效果(子女.名称 + "：咳……咳……儿臣近来偶感风寒而已，父皇不必担心。");
            }
         }
      };
      id('剧情an2').onclick = function(){
         if(学习 !== 0){
            对话打字效果("（刚刚已经问过了）");
         }
         else{
            学习 = 1;
            if(子女._code == 8903 || 子女._code == 9903){
               if(子女.年龄 <= 9){
                  对话打字效果(子女.名称 + "：……（沉默不语）");
               }
               else{
                  对话打字效果(子女.名称 + "：" + 人鱼学习状况[random(人鱼学习状况.length)]);
               }
            }
            else if(子女.年龄 <= 3){
               if(子女.文质 > 80){
                  对话打字效果("乳母：" + 子女.名称 + "小殿下十分聪明，什么都学习得很快。");
               }
               else if(子女.文质 > 60){
                  对话打字效果("乳母：" + 子女.名称 + "小殿下好奇心很强，什么东西都想试试。");
               }
               else if(子女.文质 > 40){
                  对话打字效果("乳母：" + 子女.名称 + "小殿下乖巧听话，各方面都略有进步。");
               }
               else{
                  对话打字效果("乳母：" + 子女.名称 + "小殿下还小，可能天赋还没有显露出来。");
               }
            }
            else if(子女.智力 > 80){
               对话打字效果(子女.名称 + "：" + 智力优加的话[random(智力优加的话.length)]);
            }
            else if(子女.智力 > 60){
               对话打字效果(子女.名称 + "：" + 智力中的话[random(智力中的话.length)]);
            }
            else if(子女.智力 > 40){
               对话打字效果(子女.名称 + "：" + 智力差的话[random(智力差的话.length)]);
            }
            else{
               对话打字效果(子女.名称 + "：" + 天赋低学习状况[random(天赋低学习状况.length)]);
            }
         }
      };
      id('剧情an1').onclick = function(){
         if(生活 !== 0){
            对话打字效果("（刚刚已经问过了）");
         }
         else{
            生活 = 1;
            if(子女._code == 8903 || 子女._code == 9903){
               if(子女.年龄 <= 9){
                  对话打字效果(子女.名称 + "：……（沉默不语）");
               }
               else{
                  对话打字效果(子女.名称 + "：" + 人鱼生活状况[random(人鱼生活状况.length)]);
               }
            }
            else if(子女.年龄 <= 3){
               var _loc4_ = 根据性格判断乳母对话(子女);
               对话打字效果("乳母：" + _loc4_);
            }
            else if(子女.年龄 <= 9){
               var _loc3_ = 取出程序(0,"妃子","名字",子女.母亲);
               if(_loc3_.名字 !== undefined){
                  if(子女.被过继过 == 1){
                     if(_loc3_.野心 > 80){
                        对话打字效果(子女.名称 + "：父皇，儿臣不知做错了什么。母妃总是拿儿臣撒气。");
                     }
                     else if(_loc3_.野心 > 60){
                        对话打字效果(子女.名称 + "：母妃总是对儿臣不理不睬的，似乎不喜欢见到儿臣。");
                     }
                     else if(_loc3_.野心 > 40){
                        对话打字效果(子女.名称 + "：母妃与儿臣的关系好像淡淡的，虽然儿臣时常去请安，但儿臣已经许久没有和母妃一起用膳了。");
                     }
                     else if(_loc3_.野心 > 20){
                        对话打字效果(子女.名称 + "：母妃时常叫儿臣前去聊天，要是父皇也能一起聊天就好了。");
                     }
                     else{
                        对话打字效果(子女.名称 + "：儿臣虽然不是母妃的亲生子，但母妃待儿臣却胜似亲子，儿臣十分感谢母妃的养育。");
                     }
                  }
                  else{
                     对话打字效果(子女.名称 + "：母妃时常叫儿臣前去聊天，要是父皇也能一起聊天就好了。");
                  }
               }
               else{
                  对话打字效果(子女.名称 + "：儿臣十分想念母妃。");
               }
            }
            else if(子女.年龄 <= 15){
               var _loc2_ = 取出程序(1,"子女","关系",random(4));
               if(_loc2_.关系 < 子女.关系){
                  _loc2_ = 取出程序(1,"子女","关系",0);
               }
               if(_loc2_.id == 子女.id || _loc2_.状态 !== 0){
                  _loc4_ = 按子女关系判断对话(子女);
                  对话打字效果(子女.名称 + "：" + _loc4_);
               }
               else{
                  var _loc5_ = "";
                  if(_loc2_.年龄 > 子女.年龄){
                     if(_loc2_.性别 == 0){
                        _loc5_ = "哥哥";
                     }
                     else if(_loc2_.性别 == 1){
                        _loc5_ = "姐姐";
                     }
                  }
                  else if(_loc2_.年龄 < 子女.年龄){
                     if(_loc2_.性别 == 0){
                        _loc5_ = "弟弟";
                     }
                     else if(_loc2_.性别 == 1){
                        _loc5_ = "妹妹";
                     }
                  }
                  对话打字效果(子女.名称 + "：" + _loc2_.名称 + _loc5_ + "能时常得父皇关爱，儿臣好生羡慕。");
               }
            }
            else if(子女.性别 == 0){
               _loc4_ = 按子女关系判断对话(子女);
               对话打字效果(子女.名称 + "：" + _loc4_);
            }
            else{
               _loc4_ = 按子女关系判断对话(子女);
               对话打字效果(子女.名称 + "：" + _loc4_);
            }
         }
      };
      id('剧情an0').onclick = function(){
         if(子女._code == 8903 || 子女._code == 9903){
            对话打字效果(子女.名称 + "：……");
         }
         else if(子女.年龄 <= 3){
            对话打字效果("（乳母把" + 子女.名称 + "小殿下抱走了）");
         }
         else{
            对话打字效果(子女.名称 + "：儿臣告退。");
         }
         剧情对话板.onclick = function(){
            缓动黑幕();
            id('剧情对话').style.display = 'none';
         };
      };
   };
}
function 根据性格判断乳母对话(子女){
   var _loc1_ = [];
   _loc1_.push(子女.名称 + "小殿下喜欢和小动物玩耍。");
   _loc1_.push(子女.名称 + "小殿下喜欢和小伙伴玩耍。");
   _loc1_.push(子女.名称 + "小殿下似乎从来不知道害怕，什么都敢尝试。");
   _loc1_.push(子女.名称 + "小殿下很善良，即使是玩物，也从不伤害小动物。");
   _loc1_.push(子女.名称 + "小殿下总是笑嘻嘻的，很是无忧无虑。");
   _loc1_.push(子女.名称 + "小殿下玩耍的时候，摔倒了也继续爬起来玩，不哭不闹。");
   _loc1_.push(子女.名称 + "小殿下很爱干净，喜欢听琴淑阁的乐曲。");
   _loc1_.push(子女.名称 + "小殿下非常乖巧，从不惹事。");
   _loc1_.push(子女.名称 + "小殿下特别喜欢笑，十分开朗活泼。");
   _loc1_.push(子女.名称 + "小殿下总是把玩具丢来丢去。");
   _loc1_.push(子女.名称 + "小殿下十分爱哭，不太敢见生人。");
   _loc1_.push(子女.名称 + "小殿下总是无故摔坏东西。");
   _loc1_.push(子女.名称 + "小殿下似乎不太喜人，总是喜欢一个人安安静静的。");
   _loc1_.push(子女.名称 + "小殿下喜欢漂亮的金光闪闪的东西。");
   _loc1_.push(子女.名称 + "小殿下有点我行我素的样子，想去哪里就非要去，有时宫人们十分头疼。");
   _loc1_.push(子女.名称 + "小殿下不知为何，总是动手打身边的宫人，虽然是小孩子。");
   _loc1_.push(子女.名称 + "小殿下有点我行我素的样子，想去哪里就非要去，有时宫人们十分头疼。");
   _loc1_.push(子女.名称 + "小殿下胆子很小，动不动就哭起来。");
   _loc1_.push(子女.名称 + "小殿下喜欢和小动物玩耍。");
   _loc1_.push(子女.名称 + "小殿下喜欢和宫人们玩耍。");
   var _loc3_ = _loc1_[子女.性情];
   return _loc3_;
}
function 按子女关系判断对话(子女){
   if(子女.关系 < 10){
      var _loc2_ = "父皇是不是不大喜欢见儿臣？";
   }
   else if(子女.关系 < 30){
      _loc2_ = "父皇若能多陪陪儿臣就好了。";
   }
   else if(子女.关系 < 60){
      _loc2_ = "多日不得见父皇一面，儿臣十分想念父皇。不知父皇想念儿臣否？";
   }
   else if(子女.关系 < 100){
      _loc2_ = "儿臣很喜欢和父皇聊天，只是父皇日理万机。";
   }
   else if(子女.关系 < 150){
      _loc2_ = "儿臣觉得与父皇在一起的时间总是过得很快。";
   }
   else{
      _loc2_ = "知子莫若父，果然最了解儿臣的还是父皇。";
   }
   return _loc2_;
}
function 过继子女结算(子女,妃子){
	id('后宫内').style.display = 'none';
   if(子女.性别 == 0){
      出圣旨(妃子.封号 + 妃子.位分 + 妃子.名字 + " 敏慧聪雅，性情温良，工于妇德。故令皇子" + 子女.名称 + "，承欢膝下，尽心尽孝。");
      妃子.生育 += 1;
      妃子.爱 += 80;
      var _loc3_ = 0;
      while(_loc3_ < _all_feizi.length){
         if(_all_feizi[_loc3_].名字 == 子女.生母){
            _all_feizi[_loc3_].生育 -= 1;
            _all_feizi[_loc3_].爱 -= 110;
         }
         _loc3_ += 1;
      }
   }
   else{
      出圣旨(妃子.封号 + 妃子.位分 + 妃子.名字 + " 敏慧聪雅，性情温良，工于妇德。故令公主" + 子女.名称 + "，承欢膝下，尽心尽孝。");
      妃子.生育 += 1;
      妃子.爱 += 50;
      _loc3_ = 0;
      while(_loc3_ < _all_feizi.length){
         if(_all_feizi[_loc3_].名字 == 子女.生母){
            _all_feizi[_loc3_].生育 -= 1;
            _all_feizi[_loc3_].爱 -= 80;
         }
         _loc3_ += 1;
      }
   }
   子女.母亲 = 妃子.名字;
   子女.被过继过 = 1;
   子女一览程序(0);
}
function 子女封地确认(子女,封地){
  id('hukoupucha').style.display = 'block';
  id('huhouTitle').innerText = "外封";
  id('huhouText').innerText = "确认要把" + 封地.名称 + "分封给" + 子女.名称 + "吗？\n注：一旦外封，封地将变为诸侯国，无法由中央治理，并且无法收回。外封子女将离开皇宫，到封地居住，并且除特殊情况无法召回。诸侯国每月可向中央进贡，进贡额度由外封子女的能力决定。";
  id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
  id('hkan0').onclick = function(){
      封地.归属 = 23;
      子女.状态 = 5;
      子女.封地 = 封地.id;
      删除跟这个人有关的三方相性(子女);
      出圣旨(子女.封号 + 子女.名称 + "，南风斯玄，俊秀笃学，颖才具备。大有乃父之风范，朕之夕影。 特封" + 封地.名称 + "为其封地，即日起前往封地自行治理。");
      id('hukoupucha').style.display = 'none';
   };
}
function 选择公主婚姻(数据){
  id('zinvyilan').style.display = 'none';id('sy').style.display = 'none';
  id('gzhjxz').style.display = 'block';
  id('gzhjTittle').innerText = "公主赐婚";
   id('gzhjText').innerText = "公主：" + 数据.名称 + "\n母亲：" + 数据.母亲 + "，年龄：" + 数据.年龄 + "\n统帅：" + Math.round(数据.统帅) + "，武力：" + Math.round(数据.武力) + "，智力：" + Math.round(数据.智力) + "，政治：" + Math.round(数据.政治) + "，魅力：" + Math.round(数据.魅力) + "。";
   id('gzhjText').innerText += "\n皇上准备怎么安排。";
   id('gzhjan0').innerText = "天下招驸";
   id('gzhjan1').innerText  = "朝中大臣";
   id('gzhjan2').onclick = function(){id('gzhjxz').style.display = 'none';};
   id('gzhjan0').onclick = function(){
      id('gzhjxz').style.display = 'none';
      天下招驸(数据);
   };
   id('gzhjan1').onclick = function(){
      人才列表显示(25,undefined,数据);
      id('gzhjxz').style.display = 'none';
   };
}
function 进入选择公主名号(女儿数据, 驸马数据){
   id('御赐').style.display = 'block';
   id('输入').value = "";
   id('ycsm').innerText = "赐公主封号";
   id('ycts').innerText =女儿数据.名称 + "公主嫁给" + 驸马数据.名字 + "，要御赐什么封号呢？";
   id('输入').maxlength = "2";
   id('随机一个').onclick = function(){
      id('输入').value = 各种封爵需要的地名[random(各种封爵需要的地名.length)];
   };
   id('御赐确定').onclick = function(){
      女儿数据.封号 = id('输入').value;
      if(女儿数据.封号.length == 0){小提示("请赐一个封号");}
      else{
         if(女儿数据.心 !== undefined && 女儿数据.心 !== 驸马数据.名字 && random(3) == 0){
            女儿为情自杀(女儿数据);
         }
         else{
            var _loc2_ = 女儿数据.名称 + "朕之爱女。如今已到成婚之龄。前朝大臣" + 驸马数据.名字 + "一表人才，为人诚恳。谨此朕赐婚。加封公主为" + 女儿数据.封号 + "公主，礼部挑选吉日，隆重举行。";
            记录大事件的程序(驸马数据.名字 + "被选为" + 女儿数据.名称 + "公主的驸马。隆重举行婚礼。");
            国家.金钱 -= 100000;
            更新资料(属性栏);
            _all_family.push({id:_all_family.length,_code:驸马数据._code,名称:驸马数据.名字,文化:驸马数据.文化,性格:驸马数据.性格,头像:驸马数据.头像,介绍:驸马数据.介绍,家族:驸马数据.家族,年龄:驸马数据.年龄,婚配:女儿数据.名称,婚配序号:女儿数据.id,身份:"夫君",儿女:0,地位:0,爱:random(80)});
            女儿数据.封号 = id('输入').value + "公主";
            女儿数据.婚 = 1;
            女儿数据.婚配 = 驸马数据.名字;
            驸马数据.爵位 = 6;
            驸马数据.结婚 = 1;
            if(驸马数据.朝廷相性 == ""){
               var _loc3_ = 0;
               while(_loc3_ < _all_feizi.length){
                  if(_all_feizi[_loc3_].名字 == 女儿数据.母亲){
                     更改这个人的后宫相性(驸马数据,_all_feizi[_loc3_].id);
                  }
                  _loc3_ += 1;
               }
            }
            驸马数据.智力 += Math.round(女儿数据.智力 / 5);
            if(驸马数据.智力 > 100){驸马数据.智力 = 100;}
            驸马数据.武力 += Math.round(女儿数据.武力 / 5);
            if(驸马数据.武力 > 100){驸马数据.武力 = 100;}
            驸马数据.统帅 += Math.round(女儿数据.统帅 / 5);
            if(驸马数据.统帅 > 100){驸马数据.统帅 = 100;}
            驸马数据.政治 += Math.round(女儿数据.政治 / 5);
            if(驸马数据.政治 > 100){驸马数据.政治 = 100;}
            驸马数据.野心 -= Math.round(女儿数据.魅力 / 5);
            if(驸马数据.野心 < 0){驸马数据.野心 = 0;}
            驸马数据.忠诚 = 100;
            出圣旨(_loc2_);
         }
         id('御赐').style.display = 'none';
      }
   };
}
function 选择皇子婚姻(数据){
   id('zinvyilan').style.display = 'none';id('sy').style.display = 'none';
   id('gzhjxz').style.display = 'block';
   id('gzhjTittle').innerText = "皇子赐婚";
   id('gzhjText').innerText = "皇子：" + 数据.名称 + "\n母亲：" + 数据.母亲 + "，年龄：" + 数据.年龄 + "\n统帅：" + Math.round(数据.统帅) + "，武力：" + Math.round(数据.武力) + "，智力：" + Math.round(数据.智力) + "，政治：" + Math.round(数据.政治) + "，魅力：" + Math.round(数据.魅力) + "。";
   id('gzhjText').innerText += "\n皇上准备怎么安排。";
   id('gzhjan0').innerText  = "亲选王妃";
   id('gzhjan1').innerText  = "礼部安排";
   id('gzhjan2').onclick = function(){id('gzhjxz').style.display = 'none';};
   id('gzhjan1').onclick = function(){
      id('gzhjxz').style.display = 'none';
      var _loc2_ = 各种封爵需要的地名[random(各种封爵需要的地名.length)];
      var _loc4_ = 最新的取名程序("女");
      var _loc5_ = _loc3_[random(_loc3_.length)];
      数据.封号 = _loc2_ + "王";
      数据.婚配 = _loc4_[1];
      _loc13_ = ["婉顺贤明","柔嘉淑慎","淑顺令仪","素娴礼教"];
      _loc6_ = 出身计算(1);
      _loc7_ = _loc6_ + "，因" + _loc13_[random(_loc13_.length)] + "扬名，于" + 主角.年号 + 年 + "年" + 月 + "月赐婚予" + 数据.名称 + "。";
      记录大事件的程序("皇子" + 数据.名称 + "大婚，封" + _loc2_ + "，娶" + _loc6_ + _loc4_[1] + "为王妃。");
      出圣旨("皇子" + 数据.名称 + "轨度端和，敦睦嘉仁，今已到大婚之年，封" + _loc2_ + "，娶" + _loc5_ + "之女" + _loc4_[1] + "为王妃，择良辰吉日完婚。");
      var _loc10_=[];
	  _loc10_.统帅 = random(40);
	  _loc10_.武力 = random(40);
	  _loc10_.智力 = random(99);
	  _loc10_.政治 = random(99);
	  _loc10_.清廉 = random(99);
	  _loc10_.野心 = random(99);_loc10_.性别 = 1;
	  _loc1_ =性格计算(_loc10_);
	  _all_family.push({id:_all_family.length,名称:_loc4_[1],性格:_loc1_,家族:_loc4_[0],出身:_loc6_,介绍:_loc7_,年龄:16,文化:8,婚配:数据.名称,婚配序号:数据.id,身份:"王妃",儿女:0,地位:0,爱:random(80),头像:random(600) + 1});
	  数据.婚 = 1;
   };
   id('gzhjan0').onclick = function(){
      亲选王妃程序(数据);
      id('gzhjxz').style.display = 'none';
   };
}
function 亲选王妃程序(数据){
	缓动黑幕();
    id('xfmb').style.display = 'block';
    id('xfsm').innerText = "选择满意者赐婚";
    var _loc2_ = 0;
    var _loc11_ = [];
    var _loc4_ = 0;
    while(_loc4_ < 12){
        _loc10_ = 最新的取名程序("女");
        _loc12_ = new Object();
        _loc12_.修养 = random(12);
        _loc12_.头像 = random(626)+1;
		_loc12_.性别 = 1;
        _loc12_.名称 = _loc10_[1];
        _loc12_.家族 = _loc10_[0];
        _loc12_.出身 = 出身计算(1);
        _loc12_.文化 = 8;
        _loc12_.介绍 = _loc12_.出身 + "。";
        _loc12_.魅力 = random(30) + 60;
		_loc10_.统帅 = random(40);
		_loc10_.武力 = random(40);
		_loc10_.智力 = random(99);
		_loc10_.政治 = random(99);
		修养计算属性(_loc12_);
		性格计算(_loc12_);
        if(random(3) == 0){把这个人变成名妃(_loc12_);}
        _loc12_.家产 = random(30) + 6;
        _loc12_.朝廷相性 = "";
        _loc11_.push(_loc12_);
        _loc4_ += 1;
   }
   id('xfgb').onclick = function(){
        id('xfmb').style.display = 'none';
    };
    _loc18_ = 0;
    while(_loc18_ < 12){
        _loc20_ = className('xfxb')[_loc18_];
        _loc20_.序号 = _loc18_;
        _loc20_.对象 = _loc11_[_loc18_];
        _loc24_ = _loc20_.对象.头像;
   		className('xfxbmz')[_loc18_].innerText = _loc20_.对象.名称;
        if(_loc20_.对象._code == undefined){
            className('xfxbmz')[_loc18_].style.color  = '#ffffff';
   			_loc20_.src = LJ +'a0aPic_FeiZi/Tu_' +_loc24_ +'.webp';
        }
        else{
   			className('xfxbmz')[_loc18_].style.color= '#ff7300';
            _loc20_.src = LJ +'a0aPic_MingFei/Tu_' +_loc24_ +'.webp';
            }
        _loc20_.onclick = function(){
             出现这个秀女的介绍(this.对象,9,_loc11_,数据);
        };
        _loc2_ += 1;
        _loc18_ += 1;
	}
}
function 御赐皇子封号并且赐婚(数据,皇子妃){
   id('御赐').style.display = 'block';
   id('ycsm').innerText = '赐皇子封号';
   id('输入').value = "";
   id('ycts').innerText = "皇子" + 数据.名称 + "大婚，要御赐什么封号呢？";
   id('输入').maxlength = "2";
   id('随机一个').onclick = function(){
      id('输入').value = 各种封爵需要的地名[random(各种封爵需要的地名.length)];
   };
   id('御赐确定').onclick = function(){
      数据.封号 = id('输入').value;
      if(id('输入').value.length == 0){
         小提示("请赐一个封号");
      }
      else{
         数据.封号 = id('输入').value + "王";
         随机增加这个人的朝廷势力(数据,1);
         国家.金钱 -= 200000;
         更新资料(属性栏);
         数据.婚 = 1;
         数据.婚配 = 皇子妃.名称;
		 if(皇子妃._code == undefined){
			 _loc13_ = ["婉顺贤明","柔嘉淑慎","淑顺令仪","素娴礼教"];
			 皇子妃.介绍 +="因" + _loc13_[random(_loc13_.length)] + "扬名，于" + 主角.年号 + 年 + "年" + 月 + "月赐婚予" + 数据.名称 + "。"
		 }else{皇子妃.介绍 =undefined}
         记录大事件的程序("皇子" + 数据.名称 + "大婚，娶" + 皇子妃.出身 + 皇子妃.名称 + "为王妃,封" + 数据.封号 + "。隆重举行婚礼。");
         出圣旨("皇子" + 数据.名称 + "克佐壶仪，轨度端和，敦睦嘉仁，今已到大婚之年，封" + 数据.封号 + "，娶" + 皇子妃.出身 + 皇子妃.名称 + "为王妃，择良辰吉日完婚。");
         _all_family.push({id:_all_family.length,_code:皇子妃._code,家族:皇子妃.家族,名称:皇子妃.名称,文化:皇子妃.文化,年龄:16,婚配:数据.名称,婚配序号:数据.id,介绍:皇子妃.介绍,性格:皇子妃.性格,身份:"王妃",儿女:0,头像:皇子妃.头像,地位:0,爱:皇子妃.爱});
         id('御赐').style.display = 'none';
      }
   };
}
function 把这个人变成名妃(对象){
   _loc15_ = 0;
   _loc16_ = [];
   while(_loc15_ < 后宫名人.length){
      if(后宫名人[_loc15_].用过 == undefined){
         _loc16_.push(后宫名人[_loc15_]);
      }
      _loc15_ += 1;
   }
   if(_loc16_.length > 0){
      _loc17_ = random(_loc16_.length);
      对象.名称 = _loc16_[_loc17_].名称;
      对象._code = _loc16_[_loc17_]._code;
      对象.文化 = _loc16_[_loc17_].文化;
      对象.头像 = _loc16_[_loc17_].跳;
	  对象.跳 = _loc16_[_loc17_].跳;
      对象.魅力 = _loc16_[_loc17_].魅力;
      对象.性格 = _loc16_[_loc17_].性格;
      对象.家族 = _loc16_[_loc17_].家族;
      对象.修养 = 名妃修养计算(_loc16_[_loc17_]);
	  对象.清廉 =_loc16_[_loc17_].清廉;
	  对象.野心 =_loc16_[_loc17_].野心;
      对象.介绍 = undefined;
   }
}
function 皇子是否中意(对象,所有对象,数据){
	id('xfmb').style.display = 'none';
   _loc5_ = 所有对象;
   所有对象.sort(compare("魅力",0));
   _loc6_ = 所有对象[0];
   _loc5_.sort(compare(["修养"]));
   _loc7_ = _loc5_[0];
   if(_loc6_.名称 !== 对象.名称){新对象 = _loc6_;}
   else{新对象 = 对象;}
   if(_loc7_.名称 !== 对象.名称){新对象2 = _loc7_;}
   else{新对象2 = 对象;}
   var 结果的话 = "";
   var _loc3_ = random(100);
   if(数据.性情 == 10 || 数据.性情 == 11 || 数据.性情 == 12){
      if(_loc3_ > 50){
         结果的话 = 数据.名称 + "：儿臣也觉得" + 对象.名称 + "与儿臣最为相宜。";
         _loc8_ = "同意";
      }
      else{
         结果的话 = 数据.名称 + "：父皇觉得好便好。儿臣都听父皇的。";
         _loc8_ = "同意";
      }
   }
   else if(数据.性情 >= 13){
      if(新对象.名称 == 对象.名称){
         结果的话 = "（顿露喜色）" + 数据.名称 + "：父皇的眼光果然好，儿臣觉得" + 对象.名称 + "最为出众，与儿臣最为相宜。";
         _loc8_ = "同意";
      }
      else if(对象.相貌 > 80){
         if(_loc3_ > 50){
            结果的话 = "（顿露喜色）" + 数据.名称 + "：父皇的眼光果然好，儿臣也觉得" + 对象.名称 + "姿容出众，与儿臣最为相宜。";
            _loc8_ = "同意";
         }
         else{
            结果的话 = "（目光扫向 " + 新对象.出身 + "）" + 数据.名称 + "：儿臣觉得" + 新对象.出身 + 新对象.名称 + "，更为出众，求父皇赐婚！";
            _loc8_ = "拒绝";
         }
      }
      else{
         结果的话 = "（目光扫向 " + 新对象.出身 + "）" + 数据.名称 + "：儿臣更属意于" + 新对象.出身 + 新对象.名称 + "，求父皇赐婚！";
         _loc8_ = "拒绝";
      }
   }
   else if(数据.性情 <= 9){
      if(新对象2.名称 == 对象.名称){
         结果的话 = "（微露喜色）" + 数据.名称 + "：父皇的眼光果然好，儿臣觉得" + 对象.出身 + "蕙质兰心，与儿臣最为相宜。";
         _loc8_ = "同意";
      }
      else if(对象.修养 == 1 || 对象.修养 == 2 || 对象.修养 == 3 || 对象.修养 == 4 || 对象.修养 == 5){
         if(_loc3_ > 50){
            结果的话 = "（微露喜色）" + 数据.名称 + "：父皇的眼光果然好，儿臣觉得" + 对象.出身 + "蕙质兰心，与儿臣最为相宜。";
            _loc8_ = "同意";
         }
         else{
            新对象 = 新对象2;
            结果的话 = "（目光扫向 " + 新对象2.出身 + "）" + 数据.名称 + "：儿臣觉得" + 新对象2.出身 + 新对象2.名称 + "更为柔嘉淑慎，适合做儿臣的王妃，恳请父皇赐婚。";
            _loc8_ = "拒绝";
         }
      }
      else{
         新对象 = 新对象2;
         结果的话 = "（目光扫向 " + 新对象2.出身 + "）" + 数据.名称 + "：儿臣觉得" + 新对象2.出身 + 新对象2.名称 + "柔嘉淑慎，更适合做儿臣的王妃，恳请父皇赐婚。";
         _loc8_ = "拒绝";
      }
   }
   id('剧情对话').style.display = 'block';
   剧情背景.src =LJ +  'a0aPic_BG/Tu_160160.webp';
   新后宫图形读取程序(剧情头像,0,"特殊");
   对话打字效果("（春晖微露，朱羲由白。红药翻阶，芳辰嘉时。今日是秀女殿选之日，各家都嫁女进宫，争无上荣华，飞琼弄玉，惊鸿媛女，荟萃云集。不知应归何处、归来何定。）\n（宫室精巧，殿内方砖墁地，金顶红门，各自争奇，却闲雅别致。）\n（有太监翻开花名册，唱着殿选之人的名姓。秀女们整衣肃容入内，敛衣行礼，环佩玉声璆然。）");
   剧情对话板.onclick = function(){
      对话打字效果("（唤人上前，将斟好的茶盏推至" + 数据.名称 + "面前）今日之事是你一手操办，皇儿觉得哪位官家女子可堪你皇子妃之选？");
      剧情对话板.onclick = function(){
		  出现这个人的头像(剧情头像,数据);
         对话打字效果(数据.名称 + "：不知父皇看上了哪家姑娘？");
         剧情对话板.onclick = function(){
			 新后宫图形读取程序(剧情头像,0,"皇帝");
            对话打字效果("皇上：素闻" + 对象.出身 + 对象.名称 + "素娴礼教，恭顺贤明。朕以为，她合该做你的皇子妃，朕的儿媳。");
            剧情对话板.onclick = function(){
				出现这个人的头像(剧情头像,数据);
               对话打字效果(结果的话);
               剧情对话板.onclick = function(){
                  if(_loc8_ == "拒绝"){
                     出现这个人的头像(剧情头像,新对象);
                     对话打字效果(新对象.名称 + "\n出身：" + 新对象.出身 + "\n相貌：" + 新对象.魅力 + "  修养：" + 修养[新对象.修养] + "\n性格：" + 出现性格(新对象),["拒绝","同意"]);
                     id('剧情an1').onclick = function(){
						 新后宫图形读取程序(剧情头像,0,"皇帝");
                        对话打字效果("（脸色说不上难看，只得作罢。）皇上：行吧，皇儿喜欢就好。");
                        剧情对话板.onclick = function(){
                           出现这个人的头像(剧情头像,数据);
                           对话打字效果("（顿露喜色）" + 数据.名称 + "：儿臣多谢父皇！");
                           剧情对话板.onclick = function(){
                              对象.爱 = 90;
                              缓动黑幕();
                              id('剧情对话').style.display = 'none';
                              御赐皇子封号并且赐婚(数据,新对象);
                           };
                        };
                     };
                     id('剧情an0').onclick = function(){
						 新后宫图形读取程序(剧情头像,0,"皇帝");
                        对话打字效果("（面上笑意全无，瞬间勃然变色。上下看了她一眼，眉目肃然，语气中隐有严厉）皇上：亲贵娶亲，真心是向来不要紧的。朕以为，" + 对象.出身 + "与你最为相配，想必日后嫁入你府中，也能做好你的贤内助。");
                        剧情对话板.onclick = function(){
                           出现这个人的头像(剧情头像,数据);
                           对话打字效果("（连大气也不敢出，垂首静默，眉心微低，惶恐起身，恭敬称道）" + 数据.名称 + "：儿臣知道了，父皇选的那自然便是好的。儿臣多谢父皇。");
                           剧情对话板.onclick = function(){
                              对象.爱 = 20;
                              缓动黑幕();
                              id('剧情对话').style.display = 'none';
                              御赐皇子封号并且赐婚(数据,对象);
                           };
                        };
                     };
                  }
                  else{
					  新后宫图形读取程序(剧情头像,0,"皇帝");
                     对话打字效果("（面露微笑）皇上：如此便好。");
                     剧情对话板.onclick = function(){
                        对象.爱 = 90;
                        缓动黑幕();
                        id('剧情对话').style.display = 'none';
                        御赐皇子封号并且赐婚(数据,对象);
                     };
                  }
               };
            };
         };
      };
   };
}
function 天下招驸(公主){
   停止音乐();
   播放音乐("Music_17",1);
   id('剧情对话').style.display = 'block';
   出现这个人的头像(剧情头像,公主);
   剧情背景.src='a0aPic_BG/Tu_14.webp';
   对话打字效果("皇上：" + 公主.名称 + "啊，男大当婚，女大当嫁，你年龄也不小了，朕决定为你举行一场天下大会，选出最优秀的人，招为驸马，你觉得如何？");
   剧情对话板.onclick = function(){
      if(公主.心 == undefined){
         对话打字效果(公主.名称 + "：父皇为儿臣的婚事煞费苦心，儿臣全凭父皇安排。");
         剧情对话板.onclick = function(){
			 新后宫图形读取程序(剧情头像,0,"皇帝");
            对话打字效果("皇上：那么，既然是为你举办的，就由你来选择比试的项目吧。");
            剧情对话板.onclick = function(){
				出现这个人的头像(剧情头像,公主);
               var 随机 = random(4);
               if(随机 == 0){
                  对话打字效果(公主.名称 + "：儿臣平日最欣赏运筹帷幄的人，不如就以对弈招选驸马吧。");
               }
               else if(随机 == 1){
                  对话打字效果(公主.名称 + "：儿臣平日最欣赏武艺高强的人，不如就以比武招选驸马吧。");
               }
               else if(随机 == 2){
                  对话打字效果(公主.名称 + "：儿臣平日最欣赏聪明绝顶的人，不如就以辩论招选驸马吧。");
               }
               else if(随机 == 3){
                  对话打字效果(公主.名称 + "：儿臣平日最欣赏才华横溢的人，不如就以作文招选驸马吧。");
               }
               剧情对话板.onclick = function(){
				   新后宫图形读取程序(剧情头像,0,"皇帝");
                  对话打字效果("皇上：好，就依你。朕这便昭告天下，定能选出最好的驸马。");
                  剧情对话板.onclick = function(){
                     驸马比试现场(公主,随机);
                  };
               };
            };
         };
      }
      else{
		  出现这个人的头像(剧情头像,公主);
         对话打字效果(公主.名称 + "：父皇，儿臣已心有所许，请父皇收回成命，赐儿臣与" + 公主.心 + "大人成婚吧。");
         剧情对话板.onclick = function(){
			 新后宫图形读取程序(剧情头像,0,"皇帝");
            对话打字效果("皇上：如果他真能配得上朕的女儿，就让他也来参加，若他能夺得头筹，朕就赐婚与你们。");
            剧情对话板.onclick = function(){
				出现这个人的头像(剧情头像,公主);
               对话打字效果(公主.名称 + "：君无戏言，父皇可要说话算话。");
               剧情对话板.onclick = function(){
				   新后宫图形读取程序(剧情头像,0,"皇帝");
                  对话打字效果("皇上：那是当然。可如果他输了，你就再莫要惦念他了。");
                  剧情对话板.onclick = function(){
					  出现这个人的头像(剧情头像,公主);
                     对话打字效果(公主.名称 + "：儿臣明白。");
                     剧情对话板.onclick = function(){
                        var _loc2_ = random(4);
                        var _loc3_ = ["对弈","武艺","辩论","作文"];
						新后宫图形读取程序(剧情头像,0,"皇帝");
                        对话打字效果("皇上：那就让礼部安排" + _loc3_[_loc2_] + "大赛吧，朕要看看这" + 公主.心 + "是不是真得配得上朕的女儿。");
                        剧情对话板.onclick = function(){
                           var _loc1_ = random(4);
                           驸马比试现场(公主,_loc1_);
                        };
                     };
                  };
               };
            };
         };
      }
   };
}
function 驸马比试现场(公主, 随机){
   var _loc3_ = 0;
   while(_loc3_ < 剧情汇总.length){
      if(剧情汇总[_loc3_]._code == 110){
         剧情汇总[_loc3_].达成 = 1;
      }
      _loc3_ += 1;
   }
   _loc3_ = 0;
   _loc5_ = [];_loc6_ = [];_loc7_ = [];_loc8_ = [];
   while(_loc3_ < 所有历史名人.length){
      if(所有历史名人[_loc3_].用过 == undefined){
         if(所有历史名人[_loc3_].统帅 >= 90){_loc5_.push(_loc3_);}
         if(所有历史名人[_loc3_].武力 >= 90){_loc6_.push(_loc3_);}
         if(所有历史名人[_loc3_].智力 >= 90){_loc7_.push(_loc3_);}
         if(所有历史名人[_loc3_].政治 >= 90){_loc8_.push(_loc3_);}
      }
      _loc3_ += 1;
   }
   var _loc4_ = 创建新人才();
   _loc4_.年龄 = 18 + random(5);
   _loc4_.统帅 = 70 + random(25);
   _loc4_.武力 = 70 + random(25);
   _loc4_.智力 = 70 + random(25);
   _loc4_.政治 = 70 + random(25);
   _loc4_.魅力 = 70 + random(25);
   _loc4_.清廉 = 70 + random(25);
   _loc4_.野心 = 1 + random(25);
   _loc4_.忠诚 = 100;
   _loc4_.地位 = 4;
   _loc4_.头像 = random(40);
   if(随机 == 0){
      _loc4_.介绍 = _loc4_.名字 + "，因在对弈比赛中拔得头筹，于" + 主角.年号 + 年 + "年" + 月 + "月招为" + 公主.名称 + "的驸马。";
      _loc4_.统帅 = 90 + random(5);
      if(_loc5_.length > 0 && random(3) == 0){
         _loc9_ = _loc5_[random(_loc5_.length)];
         让这个人才变成名人(_loc4_,所有历史名人[_loc9_]);
      }
   }
   else if(随机 == 1){
      _loc4_.武力 = 90 + random(5);
      _loc4_.介绍 = _loc4_.名字 + "，因在比武比赛中拔得头筹，于" + 主角.年号 + 年 + "年" + 月 + "月招为" + 公主.名称 + "的驸马。";
      if(_loc6_.length > 0 && random(3) == 0){
         _loc9_ = _loc6_[random(_loc6_.length)];
         让这个人才变成名人(_loc4_,所有历史名人[_loc9_]);
      }
   }
   else if(随机 == 2){
      _loc4_.智力 = 90 + random(5);
      _loc4_.介绍 = _loc4_.名字 + "，因在辩论比赛中拔得头筹，于" + 主角.年号 + 年 + "年" + 月 + "月招为" + 公主.名称 + "的驸马。";
      if(_loc7_.length > 0 && random(3) == 0){
         _loc9_ = _loc7_[random(_loc7_.length)];
         让这个人才变成名人(_loc4_,所有历史名人[_loc9_]);
      }
   }
   else if(随机 == 3){
      _loc4_.政治 = 90 + random(5);
      _loc4_.介绍 = _loc4_.名字 + "，因在作文比赛中拔得头筹，于" + 主角.年号 + 年 + "年" + 月 + "月招为" + 公主.名称 + "的驸马。";
      if(_loc8_.length > 0 && random(3) == 0){
         _loc9_ = _loc8_[random(_loc8_.length)];
         让这个人才变成名人(_loc4_,所有历史名人[_loc9_]);
      }
   }
   var 驸马 = _loc4_;
   新后宫图形读取程序(剧情头像,0,"特殊");
   剧情背景.src='a0aPic_BG/Tu_160160.webp';
   对话打字效果("（不日，礼部举行了盛大的天下招驸大会，各路奇人异士均来参赛）");
   剧情对话板.onclick = function(){
      出现这个人的头像(剧情头像,公主);
      对话打字效果(公主.名称 + "：好多人啊。");
      剧情对话板.onclick = function(){
         新后宫图形读取程序(剧情头像,81,"特殊");
         对话打字效果("（比赛进行着，公主的心也一直悬着）");
         剧情对话板.onclick = function(){
            对话打字效果("（经过激烈的对决，结果已经揭晓……）");
            剧情对话板.onclick = function(){
               if(驸马._code !== undefined){
                  出现这个人的头像(剧情头像,驸马);
               }
               else{
                  新后宫图形读取程序(驸马.头像,"特殊");
               }
               对话打字效果("（……是" + 驸马.名字 + "得了第一名）");
               剧情对话板.onclick = function(){
                  出现这个人的头像(剧情头像,公主);
                  对话打字效果(公主.名称 + "：啊……（公主长叹了一口气）。");
                  剧情对话板.onclick = function(){
					 新后宫图形读取程序(剧情头像,0,"皇帝");
                     对话打字效果("皇上：好！" + 驸马.名字 + "一表人才，配得上驸马的头衔，朕即刻赐你与" + 公主.名称 + "公主完婚。");
                     剧情对话板.onclick = function(){
						 if(驸马._code !== undefined){
						    出现这个人的头像(剧情头像,驸马);
						 }
						 else{
						    新后宫图形读取程序(剧情头像,驸马.头像,"特殊");
						 }
                        对话打字效果(驸马.名字 + "：皇上万岁万岁万万岁。");
                        剧情对话板.onclick = function(){
                           对话打字效果("皇上：以后你既是驸马，便入朝为官吧。");
                           剧情对话板.onclick = function(){
                              对话打字效果(驸马.名字 + "：臣领旨谢恩。");
                              剧情对话板.onclick = function(){新后宫图形读取程序(剧情头像,0,"特殊");
                                 对话打字效果("（天下招驸结束了，而后，公主与驸马完婚）");
                                 剧情对话板.onclick = function(){
                                    缓动黑幕();
                                    停止音乐();
                                    id('剧情对话').style.display = 'none';
                                    公主.婚配 = 驸马.名字;
                                    公主.封号 = 各种封爵需要的地名[random(各种封爵需要的地名.length)] + "公主";
                                    公主.婚 = 1;
                                    驸马.爵位 = 6;
                                    驸马.结婚 = 1;
                                    _all_family.push({id:_all_family.length,_code:驸马._code,名称:驸马.名字,文化:驸马.文化,性格:驸马.性格,头像:驸马.头像,介绍:驸马.介绍,家族:驸马.家族,年龄:驸马.年龄,婚配:公主.名称,婚配序号:公主.id,身份:"夫君",儿女:0,地位:0,爱:random(50)});
                                    _all_rencai.push(驸马);
                                 };
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
      };
   };
}
function 皇孙一览表(参数,父母){
	id('jiajuanyilan').style.display = 'block';
	id("qxzb").style.display = "none";
	id('jjText').innerText = '皇孙一览';
	id('jia2').innerText = '性别';
	id('jia3').innerText = '年龄';
	id('jia5').innerText = '父亲';
	id('jia7').innerText = '母亲';
	id('jia3').style.display = 'block';
	id('jia4').style.display = 'none';
	id('jia6').style.display = 'none';
	var 临时皇孙列表 = [];
    if(参数 == 0){
        var _loc6_ = 0;
        while(_loc6_ < _all_grandchild.length){
            临时皇孙列表.push(_all_grandchild[_loc6_]);
            _loc6_ += 1;
        }
    }
    else if(参数 == 1){
        _loc6_ = 0;
        while(_loc6_ < _all_grandchild.length){
            if(_all_grandchild[_loc6_].脉系 == 父母.id){
                临时皇孙列表.push(_all_grandchild[_loc6_]);
            }
            _loc6_ += 1;
        }
    }
	序列 = 0;
	临时皇孙列表.sort(compare("id"));
	刷新皇孙信息(临时皇孙列表,序列)
	id('jiajuanqian').onclick = function(){
		if(序列 > 0 ){
		    序列 -= 1;
		    刷新皇孙信息(临时皇孙列表,序列);
		}
	};
	id('jiajuanhou').onclick = function(){
		if(序列 < Math.round(临时皇孙列表.length / 10)){
			序列 += 1;
			刷新皇孙信息(临时皇孙列表,序列);
		}
	};
}
function 刷新皇孙信息(临时皇孙列表,序列){
	var _loc4_ = 0;
	while(_loc4_ < className('jiajuanlbx').length){
		var i = 序列 * 10 + _loc4_;
	    var _loc5_ = 临时皇孙列表[i];
		if(_loc5_ == undefined){className('jiajuanlbx')[_loc4_].style.display = 'none';}
		else{
            className('jiajuanlbx')[_loc4_].style.display = 'block';
			className('jj1')[_loc4_].innerText = _loc5_.名称;
			className('jj2')[_loc4_].innerText = _loc5_.性别;
			className('jj3')[_loc4_].innerText = _loc5_.年龄;
			className('jj5')[_loc4_].innerText =  _loc5_.父亲;
			className('jj7')[_loc4_].innerText = _loc5_.母亲;
			className('jj4')[_loc4_].innerText = "";
			className('jj6')[_loc4_].innerText = "";
		}
		className('jiajuanlbx')[_loc4_].取 =  _loc5_;
		className('jiajuanlbx')[_loc4_].onclick = function(){}
		_loc4_ += 1;
	}	 
}
function 计算皇孙出生(){
   i = 0;
   while(i < _all_child.length){
      var _loc1_ = _all_child[i];
      if((_loc1_.状态 == 0 || _loc1_.状态 == 5) && _loc1_.婚 == 1 && _loc1_.婚配 !== "" && _loc1_._sheng == undefined && _loc1_.寿命 > 3){
         if(_loc1_.儿女 == undefined){
            if(random(5) == 0){_loc1_._sheng = 12;}
         }
         else if(_loc1_.儿女 !== undefined){
            if(_loc1_.性别 == 1 && random(_loc1_.儿女 * 30) == 0){
               _loc1_._sheng = 12;
            }
            else if(_loc1_.性别 == 0){
               var _loc2_ = 有几个妻室(_loc1_);
               var _loc3_ = random(Math.round(_loc1_.儿女 * 30 / _loc2_));
               if(_loc3_ == 0){
                  _loc1_._sheng = 11;
               }
            }
         }
      }
      else if((_loc1_.状态 == 0 || _loc1_.状态 == 5) && _loc1_.婚 == 1 && _loc1_.婚配 !== "" && _loc1_._sheng !== undefined && _loc1_.寿命 > 3){
         _loc1_._sheng -= 1;
         if(_loc1_._sheng == 1){
			 _loc1_._sheng = undefined;
			 皇孙出生(_loc1_,undefined);
         }
      }
      i++;
   }
   q = 0;
   	while(q < _all_family.length){
        if(_all_family[q].孕 !== undefined && _all_family[q].婚配 !== undefined && _all_family[q].婚配序号!== undefined && _all_family[q].身份 !== "男宠"){
            _all_family[q].孕-=1;
            if(_all_family[q].孕 == 0){
            	_all_family[q].孕 = undefined;
            	皇孙出生(_all_child[_all_family[q].婚配序号],_all_family[q]);
            }
        }
        q++;
   }
}
function 皇孙出生(父母,家眷){
    var _loc2_ = random(2);
    if(_loc2_ == 0){
        var _loc3_ = 主名[random(主名.length)] + 男名[random(男名.length)];
        var _loc4_ = 0;
    }
    else{
        _loc3_ = 公主取名();
        _loc4_ = 1;
    }
    var _loc5_ = [];
    q = 0;
	while(q < _all_family.length){
        if(_all_family[q].孕 == undefined && _all_family[q].婚配 == 父母.名称 && _all_family[q].婚配序号 == 父母.id && _all_family[q].身份 !== "男宠"){
            _loc5_.push(_all_family[q]);
        }
        q++;
   }
   if(家眷!==undefined){
	   var _loc6_ = 家眷;
   }else{var _loc6_ = _loc5_[random(_loc5_.length)];}
   if(_loc6_!== undefined){
        _loc6_.儿女 += 1;
        if(父母.性别 == 1){
        var _loc7_ = 父母.名称;
        var _loc8_ = _loc6_.名称;
        }
        else{
            _loc7_ = _loc6_.名称;
            _loc8_ = 父母.名称;
        }
        _all_grandchild.push({id:_all_grandchild.length,名称:_loc3_,性别:_loc4_,母亲:_loc7_,父亲:_loc8_,年龄:1,脉系:父母.id});
        if(父母.儿女 == undefined){父母.儿女 = 1;}
        else{父母.儿女 += 1;}
        var _loc9_ = "启禀皇上，" + 颜色代码(父母.封号,"ff0000") + 颜色代码(父母.名称,"5f5ffc") + "殿下喜得贵子，取名" + 颜色代码(_loc3_,"5f5ffc") + "，陛下可以抱上皇孙了，真是可喜可贺。";
        太监报告所有事件.push([_loc9_,"快乐",5,16,2]);
   }
   else
   {
      console.log("没有家眷");
   }
}
function 外国皇室一览表(参数,文化){
	id('jiajuanyilan').style.display = 'block';
	id("qxzb").style.display = "none";
	id('jjText').innerText = '皇室一览';
	id('jia2').innerText = '家族';
	id('jia3').innerText = '年龄';
	id('jia5').innerText = '身份';
	id('jia7').innerText = '魅力';
	id('jia3').style.display = 'block';
	id('jia4').style.display = 'none';
	id('jia6').style.display = 'none';
	var 临时皇室列表 = [];
    if(参数 == 0 ||参数 == 3){
        var _loc6_ = 0;
        while(_loc6_ < _all_family.length){
			if(_all_nation[文化].皇帝!==undefined&&_all_family[_loc6_].婚配序号!==undefined&&_all_family[_loc6_].婚配序号==_all_nation[文化].皇帝._code){
				临时皇室列表.push(_all_family[_loc6_]);
			}
            _loc6_ += 1;
        }
		临时皇室列表.sort(compare("地位"));
    }
    else if(参数 == 1){
        var _loc6_ = 0;
        while(_loc6_ < _all_family.length){
        	if(_all_nation[文化].皇帝!==undefined&&_all_family[_loc6_].脉系!==undefined&&_all_family[_loc6_].脉系==_all_nation[文化].皇帝._code&&_all_family[_loc6_].儿女==0){
        		临时皇室列表.push(_all_family[_loc6_]);
        	}
            _loc6_ += 1;
        }
		临时皇室列表.sort(compare("年龄",0));
    }
	else if(参数 == 2||参数 == 4){
	    var _loc6_ = 0;
	    while(_loc6_ < _all_family.length){
	    	if(_all_nation[文化].皇帝!==undefined&&_all_family[_loc6_].脉系!==undefined&&_all_family[_loc6_].脉系==_all_nation[文化].皇帝._code&&_all_family[_loc6_].儿女==1){
	    		临时皇室列表.push(_all_family[_loc6_]);
	    	}
	        _loc6_ += 1;
	    }
		临时皇室列表.sort(compare("年龄",0));
	}
	序列 = 0;
	刷新外国皇室信息(临时皇室列表,序列,参数)
	id('jiajuanqian').onclick = function(){
		if(序列 > 0 ){
		    序列 -= 1;
		    刷新外国皇室信息(临时皇室列表,序列,参数);
		}
	};
	id('jiajuanhou').onclick = function(){
		if(序列 < Math.round(临时皇室列表.length / 10)){
			序列 += 1;
			刷新外国皇室信息(临时皇室列表,序列,参数);
		}
	};
}
function 刷新外国皇室信息(临时皇室列表,序列,参数){
	var _loc4_ = 0;
	while(_loc4_ < className('jiajuanlbx').length){
		var i = 序列 * 10 + _loc4_;
	    var _loc5_ = 临时皇室列表[i];
		if(_loc5_ == undefined){className('jiajuanlbx')[_loc4_].style.display = 'none';}
		else{
            className('jiajuanlbx')[_loc4_].style.display = 'block';
			if(_loc5_._code >=2000&&_loc5_._code<=6999){className('jj1')[_loc4_].style.color="#ffd0cb"}
			else{className('jj1')[_loc4_].style.color="#ffffff"}
			className('jj1')[_loc4_].innerText = _loc5_.名称;
			className('jj2')[_loc4_].innerText = _loc5_.家族;
			if(_loc5_.家族==undefined){
				className('jj2')[_loc4_].innerText = "无";
			}
			className('jj3')[_loc4_].innerText = _loc5_.年龄;
			className('jj5')[_loc4_].innerText =  _loc5_.身份;
			className('jj7')[_loc4_].innerText = _loc5_.身份;
			className('jj4')[_loc4_].innerText = "";
			className('jj6')[_loc4_].innerText = "";
		}
		className('jiajuanlbx')[_loc4_].取 =  _loc5_;
		className('jiajuanlbx')[_loc4_].onclick = function(){
			if(参数==0||参数==1||参数==2){
				出现这个皇室的介绍(this.取);
			}
			if(参数==3||参数==4){
				出现这个皇室的介绍(this.取,参数);
			}
		}
		_loc4_ += 1;
	}	 
}
function 出现这个皇室的介绍(取数据,参数){
   id('介绍图').style.display = 'block';
   id('介绍图an0').style.display = 'none';
   id('介绍图an1').style.display = 'none';id('介绍图an3').innerText = "关闭";
   出现这个人的头像(id('介绍图头像'),取数据);
   id('介绍图名字').innerText = 取数据.名称;
   id('介绍图介绍').innerText = '文化圈：' + _all_nation[取数据.文化].文化;
   id('介绍图介绍').innerText += "\n介绍：\n";
   id('介绍图介绍').innerText += 导出介绍(取数据);
   id('介绍图an2').style.display = 'none';
   id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';}
   if(参数==3||参数==4){
   	   id('介绍图an2').style.display = 'block';id('介绍图an3').innerText = "选择";
	   id('介绍图an2').onclick = function(){id('介绍图').style.display = 'none';}
   }
}
function 赏赐秀女确定(皇子,取数据){
	var i = 0;
	while(i < _all_feizi.length){
	   if(_all_feizi[i].id == 取数据.id){
	      var _loc1_ =i;
	   }
	   i++;
	}
   if(皇子.婚 ==0){
	id('zinvyilan').style.display = 'none';
	id('gzhjxz').style.display = 'block';
	id('gzhjTittle').innerText = "皇子赐婚";
	id('gzhjText').innerText = "皇子尚未成婚，皇上准备怎么安排。";
	id('gzhjan0').innerText  = "王妃";
	id('gzhjan1').innerText  = "侧妃";
	id('gzhjan2').onclick = function(){id('gzhjxz').style.display = 'none';};
	id('gzhjan0').onclick = function(){
	   id('gzhjxz').style.display = 'none';	id('feiziyilan').style.display = 'none';
	   var _loc2_ = 各种封爵需要的地名[random(各种封爵需要的地名.length)];
	   皇子.封号 = _loc2_ + "王";
	   皇子.婚配 = 取数据.名字;if(取数据.孕 ==0){取数据.孕 ==undefined}
	   记录大事件的程序("皇子" + 皇子.名称 + "大婚，封" + _loc2_ + "王，娶" + 取数据.出身 + 取数据.名字 + "为王妃。");
	   出圣旨("皇子" + 皇子.名称 + "轨度端和，敦睦嘉仁，今已到大婚之年，封" + _loc2_ + "王，娶" + 取数据.出身 + 取数据.名字 + "为王妃，择良辰吉日完婚。");
		_all_family.push({id:_all_family.length,名称:取数据.名字,性格:取数据.性格,家族:取数据.家族,出身:取数据.出身,介绍:取数据.介绍,年龄:取数据.年龄,文化:取数据.文化,婚配:皇子.名称,婚配序号:皇子.id,身份:"王妃",儿女:0,地位:0,爱:random(80),头像:取数据.头像,_code:取数据._code,孕:取数据.孕});
		皇子.婚 = 1;
		删除跟这个人有关的三方相性(取数据);
		_all_feizi.splice(_loc1_,1);
	};
	id('gzhjan1').onclick = function(){	id('feiziyilan').style.display = 'none';if(取数据.孕 ==0){取数据.孕 ==undefined}
		出圣旨(取数据.出身 + 取数据.名字+ "柔嘉淑慎，婉顺贤明，封为" + 皇子.封号+"王侧妃。");
	   _all_family.push({id:_all_family.length,名称:取数据.名字,性格:取数据.性格,家族:取数据.家族,出身:取数据.出身,介绍:取数据.介绍,年龄:取数据.年龄,文化:取数据.文化,婚配:皇子.名称,婚配序号:皇子.id,身份:"侧妃",儿女:0,地位:1,爱:random(80),头像:取数据.头像,_code:取数据._code,孕:取数据.孕});
	   id('gzhjxz').style.display = 'none';
	   删除跟这个人有关的三方相性(取数据);
	   _all_feizi.splice(_loc1_,1);
	};
   }
   else{id('feiziyilan').style.display = 'none';if(取数据.孕 ==0){取数据.孕 ==undefined}
	 出圣旨(取数据.出身 + 取数据.名字+ "柔嘉淑慎，婉顺贤明，封为" + 皇子.封号+"侧妃。");
	 _all_family.push({id:_all_family.length,名称:取数据.名字,性格:取数据.性格,家族:取数据.家族,出身:取数据.出身,介绍:取数据.介绍,年龄:取数据.年龄,文化:取数据.文化,婚配:皇子.名称,婚配序号:皇子.id,身份:"侧妃",儿女:0,地位:1,爱:random(80),头像:取数据.头像,_code:取数据._code,孕:取数据.孕});
	 id('gzhjxz').style.display = 'none'; 
	  删除跟这个人有关的三方相性(取数据);
	  _all_feizi.splice(_loc1_,1);
   }
}