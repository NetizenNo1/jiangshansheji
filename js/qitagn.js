function 黄金乡(){
   id('youyuan').style.display = 'none';
   id('neishiMB').style.display = 'none';
   if(主角._yinntiki == 0){
      停止音乐();
      播放音乐("Music_31");
	  id('剧情对话').style.display = 'block';
      新后宫图形读取程序(剧情头像,31,"特殊");
      剧情背景.src = LJ + "a0aPic_BG/Tu_12.webp";
      对话打字效果("贝阿朵丽切：欢迎来到黄金乡，这里可以给你一切你想要的东西，只要你愿意和我签订契约……");
      剧情对话板.onclick = function(){
         对话打字效果("贝阿朵丽切：一旦契约成立，黄金乡的任何东西你都可以无限索取，但要付出的代价就是当游戏结束的时候，我会夺去你的一切。");
         剧情对话板.onclick = function(){
            对话打字效果("贝阿朵丽切：确定要签订契约吗？",["我再想想","签订契约"]);
               id('剧情an1').onclick = function(){
                  对话打字效果("贝阿朵丽切：契约成立，黄金乡的大门将在每年一月深夜为你敞开。");
                  剧情对话板.onclick = function(){
                     主角._yinntiki += 1;
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                     开始选择加点();
                  };
               };
               id('剧情an0').onclick = function(){
                  对话打字效果("贝阿朵丽切：呵呵，那就请你想好了以后再来吧，我会在每年一月在这里等你。");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     移除板子推进(id('剧情对话'));
                     停止音乐();
                  };
               };
         };
      };
   }
   else{
      主角._yinntiki += 1;
      开始选择加点();
   }
}
function 开始选择加点(){
	var i =0;
	while(i<32){
		if(i<16){
			className('sydb2')[i].style.display = 'block';
		}else{
			className('sydb2')[i].style.display = 'none';
		}
		i++
	}
   id('sy').style.display = 'block';
   id('syb').style.display = 'none';
   id('syb2').style.display = 'block';
   id('syTitle').innerText = '黄金乡';
   id('sysm').innerText = "";
   id('qxsy').onclick = function(){id('syb').style.display = 'block';
   id('syb2').style.display = 'none';缓动黑幕();停止音乐();移除板子推进(id('sy'));}
   var _loc3_ = className('sydb2')[0];
   _loc3_.innerText = "属性全满";
   _loc3_.onclick = function(){
	   属性.道德 = 1000;
	   属性.统帅 = 1000;
	   属性.武力 = 1000;
	   属性.智力 = 1000;
	   属性.政治 = 1000;
	   属性.魅力 = 1000;
	   属性.才艺 = 1000;
	   属性.体力上限 += 9900;
	   更新资料();
     };
   var _loc4_ = className('sydb2')[1];
   _loc4_.innerText = "快乐100";
   _loc4_.onclick = function(){
      属性.快乐 = 100;
      属性.健康 = 100;
      更新资料();
      更新资料();
   };
   var _loc5_ = className('sydb2')[2];
   _loc5_.innerText = "指定名妃";
   _loc5_.onclick = function(){
	if(主角.但为君故[1]==0){
		主角.但为君故[1]=1;
		id('御赐').style.display = 'block';
		id('ycsm').innerText = "指定名妃";
		id('ycts').innerText = "请输入名妃的名字";
		id('输入').value = "";
		id('输入').maxLength = "6";
		id('随机一个').onclick = function(){};
		id('御赐确定').onclick = function(){
			var _loc1_ = [];
			var _loc2_ = 0;
			while(_loc2_ < 后宫名人.length){
				if(后宫名人[_loc2_].用过 == undefined  && id('输入').value == 后宫名人[_loc2_].名称){
					_loc1_.push(后宫名人[_loc2_]);break;
				}
				_loc2_ += 1;
			}
			var _loc2_ = 0;
			while(_loc2_ < 外域美人.length){
				if(外域美人[_loc2_].用过 == undefined  && id('输入').value == 外域美人[_loc2_].名称){
					_loc1_.push(外域美人[_loc2_]);break;
				}
				_loc2_ += 1;
			}
			if(_loc1_.length !== 0){
				_loc1_[0].用过 = 1;
				收入储秀阁(_loc1_[0]);
				小提示(_loc1_[0].名称 + "已收入储秀阁^^")
				黑色幕布();
				id('御赐').style.display = 'none';
			}
			else if(id('输入').value.length==0){
				小提示("请输入名字！");
			}
			else{小提示("查无此人或已获得");}
		};
	}
	else{
		小提示("已经使用过了")
		}
	};
   var _loc6_ = className('sydb2')[3];
   _loc6_.innerText = "指定名臣";
   _loc6_.onclick = function(){
		if(主角.但为君故[0]==0){
			主角.但为君故[0]=1;
			id('御赐').style.display = 'block';
			id('ycsm').innerText = "指定名臣";
			id('ycts').innerText = "请输入名臣的名字";
			id('输入').value = "";
			id('输入').maxLength = "6";
			id('随机一个').onclick = function(){};
			id('御赐确定').onclick = function(){
						var _loc1_ = [];
						var _loc2_ = 0;
						while(_loc2_ < 所有历史名人.length){
							if(所有历史名人[_loc2_].用过 == undefined  && id('输入').value == 所有历史名人[_loc2_].名称){
							    _loc1_.push(所有历史名人[_loc2_]);break;
							}
							_loc2_ += 1;
						}
						if(_loc1_.length !== 0){
						 var _loc3_ = 创建新人才();
						让这个人才变成名人(_loc3_,_loc1_[0]);
						_all_rencai.push(_loc3_);
						小提示(_loc1_[0].名称 + "已进入前朝^^")
						id('御赐').style.display = 'none';
						}
						else if(id('输入').value.length==0){
							小提示("请输入名字！");
						}
						else{小提示("查无此人或已获得");}
			};
		}
		else{
			小提示("已经使用过了")
		}
   };
   var _loc7_ = className('sydb2')[4];
   _loc7_.innerText = "妃子治愈";
   _loc7_.onclick = function(){
      i = 0;
      while(i < _all_feizi.length){
         _all_feizi[i].病 = 0;
         i++;
      }
   };
   var _loc8_ = className('sydb2')[5];
   _loc8_.innerText = "子女治愈";
   _loc8_.onclick = function(){
      i = 0;
      while(i < _all_child.length){
         if(_all_child[i].病 > 0){
            _all_child[i].保 += 24;
         }
         i++;
      }
   };
   var _loc9_ = className('sydb2')[6];
   _loc9_.innerText = "金钱加满";
   _loc9_.onclick = function(){
      国家.金钱 = 10000000000;
      加载进步动画条的说("金钱");
      更新资料();
   };
   _loc9_ = className('sydb2')[7];
   _loc9_.innerText = "随机珍宝";
   _loc9_.onclick = function(){
      来一个宝贝();
      更新资料();
   };
   _loc9_ = className('sydb2')[8];
   _loc9_.innerText = "鹤顶红";
   _loc9_.onclick = function(){
      i = 0;
      while(i < 所有物品.length){
         if(所有物品[i].名称 == "鹤顶红"){
            所有物品[i].数量 += 1;
         }
         i++;
      }
      更新资料();
   };
   _loc9_ = className('sydb2')[9];
   _loc9_.innerText = "敌军弱化";
   _loc9_.onclick = function(){
      i = 0;
      while(i < _all_nation.length){
         if(_all_nation[i].id !== 8){
            _all_nation[i].战力 = 0.01;
         }
         i++;
      }
   };
   _loc9_ = className('sydb2')[10];
   _loc9_.innerText = "甘露丸";
   _loc9_.onclick = function(){
      我的成药[7].数量 += 1;
      更新资料();
   };
   _loc9_ = className('sydb2')[11];
   _loc9_.innerText = "臣子忠诚";
   _loc9_.onclick = function(){
      i = 0;
      while(i < _all_rencai.length){
         _all_rencai[i].忠诚 = 100;
         i++;
      }
   };
   _loc9_ = className('sydb2')[12];
   _loc9_.innerText = "温情酒";
   _loc9_.onclick = function(){
      我的成药[0].数量 += 1;
      更新资料();
   };
   _loc9_ = className('sydb2')[13];
   _loc9_.innerText = "粮食加满";
   _loc9_.onclick = function(){
      国家.粮食 = 50000000000;
      更新资料();
   };
   _loc9_ = className('sydb2')[14];
   _loc9_.innerText = "治安全满";
   _loc9_.onclick = function(){
      var _loc1_ = 0;
      while(_loc1_ < _all_city.length){
         if(_all_city[_loc1_].归属 == 8){
            _all_city[_loc1_].治安 = 100;
         }
         _loc1_ += 1;
      }
   };
   _loc9_ = className('sydb2')[15];
   _loc9_.innerText = "民心全满";
   _loc9_.onclick = function(){
      var _loc1_ = 0;
      while(_loc1_ < _all_city.length){
         if(_all_city[_loc1_].归属 == 8){
            _all_city[_loc1_].民心 = 100;
         }
         _loc1_ += 1;
      }
   };
}
function 大事笔记程序(参数){
   if(这么多年所有大事.length > 0){
      id('jishi').style.display = 'block';
      id('jishitext').innerHTML = "";
      序列 = 0;
      更新大事笔记信息(序列,参数);
   }
}
function 更新大事笔记信息(序列,参数){
   id('jishitext').innerHTML = "";
   var _loc3_ = [];
   var _loc4_ = 序列;
   if(参数==1){
	while(_loc4_ < 敬事房的存档.length){
	   if(敬事房的存档[_loc4_] !== undefined)
	   {
	      _loc3_.push(敬事房的存档[_loc4_]);
	   }
	   _loc4_ += 1;
	}    
   }
   else if(参数==2){
	while(_loc4_ < 后宫记事的存档.length){
	   if(后宫记事的存档[_loc4_] !== undefined)
	   {
	      _loc3_.push(后宫记事的存档[_loc4_]);
	   }
	   _loc4_ += 1;
	}    
   }
   else{
	 while(_loc4_ < 这么多年所有大事.length){
	    if(这么多年所有大事[_loc4_] !== undefined)
	    {
	       _loc3_.push(这么多年所有大事[_loc4_]);
	    }
	    _loc4_ += 1;
	 }  
   }
   _loc4_ = 0;
   while(_loc4_ < _loc3_.length){
      id('jishitext').innerHTML += _loc3_[_loc4_] +"<br>";
      _loc4_ += 1;
   }
}
function 敬事房记档(事件){
   var _loc2_ = 年 + "年" + 月 + "月";
   敬事房的存档.unshift([_loc2_,事件]);
}
function 后宫记事记档(事件){
   var _loc2_ = 年 + "年" + 月 + "月";
   后宫记事的存档.unshift([_loc2_,事件]);
}
function 游园散心程序(){
   缓动黑幕();
   id('neishiMB').style.display = 'block';
   id('neishiBG').style.display = 'block';
   id('neishi2').style.display = 'block';
   id('nsan4').style.display = 'block';id('nsan5').style.display = 'block';id('nsan6').style.display = 'block';
   id('neishiBG').src = LJ + 'a0aPic_BG/Tu_8837469.webp';
   id('neishiTitle').innerText = '游园散心';
   id('neishiText').innerText = "皇上想去哪里逛逛？";
   id('nsan0').innerText = '御景亭';
   id('nsan1').innerText = '千鲤池';
   id('nsan2').innerText = '倚梅园';
   id('nsan3').innerText = '蓬莱阁';
   id('nsan4').innerText = '饮绿轩';
   id('nsan5').innerText = '凝晖堂';
   id('nsan6').innerText = '青云台';
   id('nsan7').innerText = '黄金乡';
   id('nsan0').onclick = function(){御景亭程序();};
   id('nsan1').onclick = function(){千鲤池程序();};
   id('nsan2').onclick = function(){倚梅园程序();};
   id('nsan3').onclick = function(){蓬莱阁程序();};
   id('nsan4').onclick = function(){饮绿轩程序();};
   id('nsan5').onclick = function(){凝晖堂程序();};
   id('nsan6').onclick = function(){青云台程序();};
   if(季 == 1 && 旬 == "上旬" && 国家.事件五 == 1 && 主角.当前时辰 == 3){
   id('nsan7').style.display = 'block';
   id('nsan7').onclick = function(){黄金乡();}
   }
   else{id('nsan7').style.display = 'none';}
}
function 青云台程序(){
   id('neishiMB').style.display = 'none';
   缓动黑幕();
   id('youyuan').style.display = 'block';id('yyBG').src = LJ + "a0aPic_BG/Tu_876543.webp";
   id('yyText').innerText = "散步了一下，心情愉快了些。";
   属性.快乐 += 2;
   属性.健康 += 2;
   属性.体力 += 20;
   更新资料();
   id('yykuang').onclick = function(){
      var _loc3_ = random(3);
      if(主角.武如意 == 11 && _loc3_ == 2){
         青云间驰骋();
      }
      else if(_loc3_ == 0 && 主角.李枫 == 2){
         李枫宫内习武事件();
      }
      else if(_loc3_ == 1 && 国家.事件四 == 0){
         var _loc2_ = 0;
         i = 0;
         while(i < 血滴子.length){
            if(血滴子[i].名称 == "雨化田"){_loc2_ += 1;}
            else if(血滴子[i].名称 == "王士开"){_loc2_ += 1;}
            else if(血滴子[i].名称 == "张起灵"){_loc2_ += 1;}
            else if(血滴子[i].名称 == "黑瞎子"){_loc2_ += 1;}
            else if(血滴子[i].名称 == "阿四"){_loc2_ += 1;}
            else if(血滴子[i].名称 == "李枫"){_loc2_ += 1;}
            else if(血滴子[i].名称 == "一枝梅"){_loc2_ += 1;}
            i++;
         }
         if(_loc2_ == 7){
            燃王交替事件();
         }
      }
	  else{移除板子推进(id('youyuan'));}
   };
}
function 饮绿轩程序(){
    if(季 !== 6){
    id('neishiMB').style.display = 'none';
    缓动黑幕();
    id('youyuan').style.display = 'block';
    id('yyBG').src = LJ + "a0aPic_BG/Tu_485762.webp";
    id('yyText').innerText = "散步了一下，心情愉快了些。";
    属性.快乐 += 2;
    属性.健康 += 2;
    属性.体力 += 20;
    更新资料();
    id('yykuang').onclick = function(){
        var _loc2_ = random(3);
        if(_loc2_ == 1 && 主角.曹夙峰 == 4){
            曹夙峰在树上看书();
        }
        else if(_loc2_ == 2 && 主角.小燕子 == 2){
            小燕子与皇子相爱事件();
        }
		else{移除板子推进(id('youyuan'));}
      };
   }
    else{
        小提示("这个季节饮绿轩不适合散步。");
    }
}
function 凝晖堂程序(){
   id('neishiMB').style.display = 'none';
   缓动黑幕();
   id('youyuan').style.display = 'block';
   id('yyBG').src = LJ + "a0aPic_BG/Tu_57483.webp";
   id('yyText').innerText = "散步了一下，心情愉快了些。";
   属性.快乐 += 2;
   属性.健康 += 2;
   属性.体力 += 20;
   更新资料();
   id('yykuang').onclick = function(){
      var _loc2_ = random(10);
      if(_loc2_ > 0 && 主角.嘉宁 == 1 && 年 <= 10){
         宫女说嘉宁闲话事件();
      }
      else if(_loc2_ > 0 && 主角.嘉宁 == 2 && 年 <= 10){
         嘉宁偷偷哭泣事件();
      }
      else if(_loc2_ >= 0 && 主角.嘉宁 == 6  && 国家.接受挑战的人 !== undefined){
         盛子龙给嘉宁擦眼事件();
      }
      else if(_loc2_ >= 0 && 主角.嘉宁 == 5  && 国家.接受挑战的人 == "盛子龙"){
         嘉宁关心盛子龙事件();
      }
      else if(_loc2_ >= 0 && 主角.嘉宁 == 5&& 国家.接受挑战的人 == "杨天策"){
         嘉宁关心杨天策事件();
      }
      else if(_loc2_ >= 0 && 主角.嘉宁 == 23){
         别叫我将军叫我女王大人();
      }
      else if(_loc2_ >= 0 && 主角.嘉宁 == 41 && 年 < 23){
         子龙悼念嘉宁();
      }
	  else{移除板子推进(id('youyuan'));}
   };
}
function 千鲤池程序(){
   id('neishiMB').style.display = 'none';
   缓动黑幕();
   id('youyuan').style.display = 'block';
   id('yyBG').src = LJ + "a0aPic_BG/Tu_10.webp";
   id('yyText').innerText = "散步了一下，心情愉快了些。";
   属性.快乐 += 2;属性.健康 += 2;属性.体力 += 20;
   更新资料();
   id('yykuang').onclick = function(){
	  var _loc2_ = random(4);
      if(主角.曹夙峰 == 6 && _loc2_ == 3){
         曹夙峰洗澡事件();
      }
      else if(主角.泉灵 == 0 && _loc2_ == 1){
         泉灵事件();
      }
      else if(_loc2_ == 0 && random(3) == 0){
         有人落水事件();
      }
      else if(_loc2_ == 2 && 季 == 3&& random(3) == 0){
         一仗红事件();
      }
	  else{移除板子推进(id('youyuan'));}
   };
}
function 倚梅园程序(){
    if(季 == 4){
      id('neishiMB').style.display = 'none';
      缓动黑幕();
      id('youyuan').style.display = 'block';
      id('yyBG').src = LJ + "a0aPic_BG/Tu_664738.webp";
      id('yyText').innerText = "散步了一下，心情愉快了些。";
      属性.快乐 += 2;
      属性.健康 += 2;
      属性.体力 += 20;
      更新资料();
      id('yykuang').onclick = function(){
         var _loc2_ = random(3);
         if(_loc2_ == 1 && 主角.倚梅园 == 0){
            倚梅园偶遇事件();
         }
         else if(_loc2_ == 2 && 主角.倚梅园 == 4){
            檀奴事件();
         }
         else if(_loc2_ == 0 && 主角.曹夙峰 == 0){
            曹夙峰画画事件();
         }
		 else{移除板子推进(id('youyuan'));}
      };
   }
   else{
      小提示("这个季节倚梅园不适合散步。");
   }
}
function 蓬莱阁程序(){
   id('neishiMB').style.display = 'none';
   缓动黑幕();
   id('youyuan').style.display = 'block';
   id('yyBG').src = LJ + "a0aPic_BG/Tu_394875.webp";
   id('yyText').innerText = "散步了一下，心情愉快了些。";
   属性.快乐 += 2;
   属性.健康 += 2;
   属性.体力 += 20;
   更新资料();
   id('yykuang').onclick = function(){
      var _loc2_ = random(2);
      if(_loc2_ > 0 && 主角.倚梅园 == 2){
         余莺儿以下犯上事件();
      }
      else if(_loc2_ > 0 && 主角.朝旭 == 5){
         朝旭与萤_剧情_真假难辨_执行();
      }
      else if(_loc2_ == 0){
         皇子调戏庶母事件();
      }
	  else{移除板子推进(id('youyuan'));}
   };
}
function 御景亭程序(){
   if(主角.吕四娘 == 3){审问阿四事件();}
   else{
        缓动黑幕();
        id('neishiBG').src = LJ + 'a0aPic_BG/Tu_111.webp';
        id('neishiTitle').innerText = "粘干处";
        id('neishiText').innerText = "粘杆处是绝对忠于皇帝的特务机关。\n皇上想让粘干处的血滴子们执行什么任务？";
        id('nsan7').style.display = 'block';
	    id('nsan0').innerText = "暗杀敌将";
        id('nsan1').innerText = "烧毁敌营";
        id('nsan2').innerText = "调查大臣";
        id('nsan3').innerText = "调查妃子";
	    id('nsan4').innerText = "人员详情";
	    id('nsan5').innerText = "查看俘虏";
	    id('nsan6').innerText = "盗取宝物";
	    id('nsan7').innerText = "调查党派";
		id('nsan0').onclick = function(){
			if(主角.暗杀敌将 == 1){小提示("已经安排血滴子执行任务。");}
			else{
				任务类型 = "暗杀敌将";
			    var _loc2_ = 刷新外交();
			    外交的总表(5,任务类型);
		    };
		}
		id('nsan1').onclick = function(){
			if(主角.烧毁敌营 == 1){小提示("已经安排血滴子执行任务。");}
			else{
				任务类型 = "烧毁敌营";
			    var _loc2_ = 刷新外交();
			    外交的总表(6,任务类型);
		    };
		}
		id('nsan6').onclick = function(){
			if(主角.盗取宝物 == 1){小提示("已经安排血滴子执行任务。");}
			else{
				任务类型 = "盗取宝物";
			    var _loc2_ = 刷新外交();
			    外交的总表(7,任务类型);
		    };
		}
	    id('nsan3').onclick = function(){
	   		if(主角.暗查妃子 == 10){小提示("已经安排血滴子执行任务。");}
	        else{嫔妃一览程序(8);}
	   	};
        id('nsan2').onclick = function(){
		    if(主角.暗查大臣 == 10){小提示("已经安排血滴子执行任务。");}
            else{人才列表显示(27);}
		};
        id('nsan7').onclick = function(){
			if(主角.调查党派 == 1){小提示("已经安排血滴子执行任务。");}
			else{查看血滴子详情程序(1,undefined,"调查党派");}
		};
	    id('nsan4').onclick = function(){查看血滴子详情程序();};
	    id('nsan5').onclick = function(){查看俘虏程序();};
   }
}
function 查看血滴子详情程序(参数,目标,任务类型){
	id('jiajuanyilan').style.display = 'block';
	id("qxzb").style.display = "none";
	id('jia6').style.display = 'block';
	id('jia4').style.display = 'block';
	id('jia3').style.display = 'block';
	id('jjText').innerText = '血滴子';
	id('jia2').innerText = '暗杀';
	id('jia3').innerText = '破坏';
	id('jia4').innerText = '调查';
	id('jia5').innerText = '逃生';
	id('jia6').innerText = '经验';
	id('jia7').innerText = '状态';
    临时血滴子列表 = [];
    if(参数 == undefined){
        var _loc5_ = 0;
        while(_loc5_ < 血滴子.length){
            临时血滴子列表.push(血滴子[_loc5_]);
            _loc5_ += 1;
        }
    }
    else if(参数 == 1){
        _loc5_ = 0;
        while(_loc5_ < 血滴子.length){
            if(血滴子[_loc5_].疗伤中 == 0  && 血滴子[_loc5_].任务中 == 0){
                临时血滴子列表.push(血滴子[_loc5_]);
            }
            _loc5_ += 1;
        }
    }
   序列 = 0;
   更新血滴子信息(临时血滴子列表,序列,参数,目标,任务类型);
   id('jiajuanqian').onclick = function(){
        if(序列 > 0){
            序列 -= 1;
            更新血滴子信息(临时血滴子列表,序列,参数,目标,任务类型);
        }
    };
    id('jiajuanhou').onclick = function(){
        if(序列 < Math.round(临时血滴子列表.length / 10)){
            序列 += 1;
            更新血滴子信息(临时血滴子列表,序列,参数,目标,任务类型);
        }
    };
}
function 更新血滴子信息(临时血滴子列表,序列,参数,目标,任务类型){
    var _loc3_ = 0;
    while(_loc3_ < className('jiajuanlbx').length){
        var _loc4_ = 临时血滴子列表[序列 * 10 + _loc3_];
        var _loc5_ = className('jiajuanlbx')[_loc3_];
        if(_loc4_ == undefined){_loc5_.style.display = 'none';}
        else{
            _loc5_.style.display = 'block';
			className('jj1')[_loc3_].style.color="#ffffff"
            className('jj1')[_loc3_].innerText = _loc4_.名称;
            className('jj2')[_loc3_].innerText = _loc4_.暗杀能力;
            className('jj3')[_loc3_].innerText = _loc4_.破坏能力;
            className('jj4')[_loc3_].innerText = _loc4_.调查能力;
            className('jj5')[_loc3_].innerText = _loc4_.逃生能力;
            className('jj6')[_loc3_].innerText = _loc4_.经验;
            if(_loc4_.疗伤中 !== undefined && _loc4_.疗伤中 > 0){className('jj7')[_loc3_].innerText = "疗伤中";}
            else if(_loc4_.任务中 !== undefined  && _loc4_.任务中 > 0){className('jj7')[_loc3_].innerText = _loc4_.任务类型;}
            else{className('jj7')[_loc3_].innerText = "待命";}
            _loc5_.取 = _loc4_;
            _loc5_.onclick = function(){
                if(参数 == undefined){血滴子详细(this.取);}
                else if(参数 == 1){
               if(任务类型 == "暗杀敌将"){
                  主角.暗杀敌将 = 1;
                  国家.金钱 -= 500000;
                  更新资料();
                  this.取.任务中 = 3;
                  这个人立刻执行敌国任务(this.取,目标,任务类型);
               }
               else if(任务类型 == "烧毁敌营"){
                  主角.烧毁敌营 = 1;
                  国家.金钱 -= 1000000;
                  更新资料();
                  this.取.任务中 = 4;
                  这个人立刻执行敌国任务(this.取,目标,任务类型);
               }
               else if(任务类型 == "暗查大臣"){
                  主角.暗查大臣 = 1;
                  国家.金钱 -= 50000;
                  更新资料();
                  this.取.任务中 = 2;
                  这个人立刻执行暗查任务(this.取,目标,任务类型);
               }
               else if(任务类型 == "暗查妃子"){
                  主角.暗查妃子 = 1;
                  国家.金钱 -= 50000;
                  更新资料();
                  this.取.任务中 = 2;
                  这个人立刻执行暗查任务(this.取,目标,任务类型);
               }
               else if(任务类型 == "调查党派"){
                  主角.调查党派 = 1;
                  国家.金钱 -= 150000;
                  更新资料();
                  this.取.任务中 = 2;
                  这个人立刻执行暗查任务(this.取,目标,任务类型);
               }
               else if(任务类型 == "盗取宝物"){
                  主角.盗取宝物 = 1;
                  国家.金钱 -= 50000;
                  更新资料();
                  this.取.任务中 = 4;
                  这个人立刻执行敌国任务(this.取,目标,任务类型);
               }
               id('jiajuanyilan').style.display = 'none';
            }
         };
      }
      _loc3_ += 1;
   }
}
function 血滴子详细(取数据){
   id('介绍图').style.display = 'block';
   id('介绍图an3').innerText = "关闭";
   出现这个人的头像(id('介绍图头像'),取数据);
   id('介绍图名字').innerText = 取数据.名称;
   id('介绍图介绍').innerText = "暗杀能力：" + 取数据.暗杀能力;
   id('介绍图介绍').innerText += "\n破坏能力：" + 取数据.破坏能力;
   id('介绍图介绍').innerText += "\n调查能力：" + 取数据.调查能力;
   id('介绍图介绍').innerText += "\n逃生能力：" + 取数据.逃生能力;
   id('介绍图介绍').innerText += "\n经验：" + 取数据.经验;
   id('介绍图介绍').innerText += "\n\n";
   var _loc4_ = 导出介绍(取数据);
   id('介绍图介绍').innerText += _loc4_;
   id('介绍图an0').style.display = 'none';
   id('介绍图an1').style.display = 'none';
   id('介绍图an2').style.display = 'none';
   id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';};
}
function 查看俘虏程序(){
   id('sy').style.display = 'block';
   id('syb').style.display = 'none';
   id('syb2').style.display = 'block';
   id('syTitle').innerText = '所有俘虏';
   id('sysm').innerText = "";
   id('qxsy').onclick = function(){id('syb').style.display = 'block';
   id('syb2').style.display = 'none';id('sy').style.display = 'none';}
   var 临时敌将 = [];
   i = 0;
   while(i < 所有敌将.length){
      if(所有敌将[i].被关押 == 1){
         临时敌将.push(所有敌将[i]);
      }
      i++;
   }
    序列 = 0;
   	整理敌将展示(临时敌将,序列);
   	id('syqian').onclick = function(){
      if(序列 >= 1){
         序列 -= 1;
         整理敌将展示(临时敌将,序列);
      }
   };
   id('syhou').onclick = function(){
      if(序列 < 临时敌将.length / 32){
         序列 += 1;
         整理敌将展示(临时敌将,序列);
      }
   };
}
function 整理敌将展示(临时敌将,序列){
   var _loc3_ = 0;
   while(_loc3_ < 32){
      var _loc4_ = 临时敌将[序列 * 32 + _loc3_];
      var _loc2_ = className('sydb2')[_loc3_];
      if(_loc4_ == undefined){
         _loc2_.style.display = 'none';
      }
      else{
        _loc2_.style.display = 'block';
        _loc2_.innerText = _loc4_.名称;
        _loc2_.取 = _loc4_;
        _loc2_.onclick = function(){
			id('sy').style.display = 'none';
            处置俘虏程序(this.取);
         };
      }
      _loc3_ = _loc3_ + 1;
   }
}
function 处置俘虏程序(取数据){
   id('介绍图an2').style.display = 'block';id('介绍图an0').style.display = 'block';id('介绍图an1').style.display = 'block';
   id('介绍图').style.display = 'block';
   id('介绍图名字').innerText = 取数据.名称;
   id('介绍图介绍').innerText = '文化圈：' + _all_nation[取数据.文化].文化;
   id('介绍图介绍').innerText += "\n介  绍：\n\0\0";
   id('介绍图介绍').innerText += 取数据.介绍;
   id('介绍图an2').onclick = function(){人才列表显示(31,取数据);id('介绍图').style.display = 'none';劝诱人才()};
   id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';id('sy').style.display = 'block';}
   var _loc2_ = 取数据.跳;
   新后宫图形读取程序(id('介绍图头像'),_loc2_,"敌将");
   id('介绍图an0').innerText = "直接斩首";
   id('介绍图an1').innerText = "酷刑折磨";
   id('介绍图an2').innerText = "威逼利诱";
   id('介绍图an3').innerText = "继续关押";
   id('介绍图an0').onclick = function(){
      if(主角.处置俘虏 == 1){
         小提示("今天已经处置过俘虏了。");
      }
      else{
         id('介绍图').style.display = 'none';id('sy').style.display = 'block';
         主角.处置俘虏 = 1;
         属性.暴戾 += 20;
         取数据.被关押 = 0;
         处理俘虏时的剧情对话(取数据,0);
      }
   };
   id('介绍图an2').onclick = function(){
      if(主角.处置俘虏 == 1){
         小提示("今天已经处置过俘虏了。");
      }
      else{
         id('介绍图').style.display = 'none';id('sy').style.display = 'block';
         主角.处置俘虏 = 1;
         取数据.抗拒 -= 15;
         处理俘虏时的剧情对话(取数据,1);
      }
   };
   id('介绍图an1').onclick = function(){
      if(主角.处置俘虏 == 1){
         小提示("今天已经处置过俘虏了。");
      }
      else{
         id('介绍图').style.display = 'none';id('sy').style.display = 'block';
         主角.处置俘虏 = 1;
         属性.暴戾 += 5;
         取数据.抗拒 -= 30;
         取数据.魅力 -= 3;
         取数据.智力 -= 3;
         取数据.统帅 -= 3;
         取数据.政治 -= 3;
         取数据.武力 -= 3;
         取数据.野心 += 3;
         取数据.忠诚 -= 10;
         处理俘虏时的剧情对话(取数据,2);
      }
   };
}
function 处理俘虏时的剧情对话(取数据, 参数){
   缓动黑幕();
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情背景,6,"背景");
   新后宫图形读取程序(剧情头像,取数据.跳,"敌将");
   if(参数 == 0){
      对话打字效果(取数据.名称 + "：我做鬼也不会放过你的！！！");
      剧情对话板.onclick = function(){
         缓动黑幕();
         id('剧情对话').style.display = 'none';
      };
   }
   else if(参数 == 1){
      对话打字效果("（粘杆处的血滴子们对" + 取数据.名称 + "进行威逼利诱……）");
      剧情对话板.onclick = function(){
         对话打字效果(取数据.名称 + "：看起来皇上还是想留着我。");
         剧情对话板.onclick = function(){
            if(取数据.抗拒 < 取数据.底线){
               对话打字效果(取数据.名称 + "：那好吧，我就给皇上个面子，反正这牢房我也待腻了。不知皇上想让我做什么事情？",["妃嫔","血滴子","大臣"]);
               id('剧情an2').onclick = function(){
                  对话打字效果(取数据.名称 + "：我愿助皇上一臂之力。（获得人才：【" + 取数据.名称 + "】）");
                  var _loc2_ = 创建新人才();
                  让这个人才变成敌将(_loc2_,取数据);
                  _all_rencai.push(_loc2_);
                  取数据.被关押 = 0;
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
					 id('syb').style.display = 'block';id('syb2').style.display = 'none';id('sy').style.display = 'none';
                  };
               };
               id('剧情an1').onclick = function(){
                  对话打字效果(取数据.名称 + "：我愿助皇上一臂之力。（获得血滴子：【" + 取数据.名称 + "】）");
                  血滴子.push({id:血滴子.length,_code:取数据._code,名称:取数据.名称,暗杀能力:random(8) + 1,破坏能力:random(8) + 1,调查能力:random(8) + 1,逃生能力:random(8) + 1,经验:20,任务中:0,疗伤中:0,任务类型:"无",目标:"无",结果:0,头像:取数据.跳});
                  取数据.被关押 = 0;
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
               id('剧情an0').onclick = function(){
                  
                  if(取数据.魅力 < 80){
                     取数据.抗拒 += 50;
                     对话打字效果(取数据.名称 + "：什么！！？中原皇帝未免太胡来了！恕难从命！");
                     剧情对话板.onclick = function(){
                        缓动黑幕();
                        id('剧情对话').style.display = 'none';
                     };
                  }
                  else{
                     对话打字效果(取数据.名称 + "：这……难道这就是我最终的命运吗……");
                     取数据.被关押 = 0;
                     取数据.年龄 = 25;
                     剧情对话板.onclick = function(){
						 取数据.称呼="刺客";
						 var _loc1_=0;
						 while(_loc1_<_all_family.length){
						 	if(_all_family[_loc1_].名称 == 取数据.名称&&_all_family[_loc1_]._code == 取数据._code){
						 		取数据.年龄 = _all_family[_loc1_].年龄;取数据.称呼=_all_family[_loc1_].身份;
						 		_all_family.splice(_loc1_,1);
						 	}
						 	_loc1_+=1;
						 }
						 _loc2_=取数据.文化;
						 if(_all_nation[_loc2_].皇帝!==undefined){if(取数据.名称==_all_nation[_loc2_].皇帝.名称){取数据.称呼=国王称呼计算(_loc2_);}}
                        强制放入后宫人物(取数据);
						id('syb').style.display = 'block';id('syb2').style.display = 'none';id('sy').style.display = 'none';
                        id('剧情对话').style.display = 'none';
                     };
                  }
               };
            }
            else{
               对话打字效果(取数据.名称 + "：但是我不会这么轻易动摇的，你们休想得逞。");
               剧情对话板.onclick = function(){
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            }
         };
      };
   }
   else if(参数 == 2){
      对话打字效果("（粘杆处的血滴子们对" + 取数据.名称 + "进行酷刑折磨……）");
      剧情对话板.onclick = function(){
         对话打字效果(取数据.名称 + "：啊……哈……啊……！（受到严刑拷打）");
         剧情对话板.onclick = function(){
            if(取数据.抗拒 < 取数据.底线){
               对话打字效果(取数据.名称 + "：不行了……饶了我吧，皇上想让我做什么事情我都做……（皇上要让他做什么？）",["妃嫔","血滴子","大臣"]);
               id('剧情an2').onclick = function(){
                  对话打字效果(取数据.名称 + "：我愿助皇上一臂之力。（获得人才：【" + 取数据.名称 + "】）");
                  var _loc2_ = 创建新人才();
                  让这个人才变成敌将(_loc2_,取数据);
                  _all_rencai.push(_loc2_);
                  取数据.被关押 = 0;
                  剧情对话板.onclick = function(){
                     缓动黑幕();	id('syb').style.display = 'block';id('syb2').style.display = 'none';id('sy').style.display = 'none';
                     id('剧情对话').style.display = 'none';
                  };
               };
               id('剧情an1').onclick = function(){
                  对话打字效果(取数据.名称 + "：我愿助皇上一臂之力。（获得血滴子：【" + 取数据.名称 + "】）");
                  血滴子.push({id:血滴子.length,_code:取数据._code,名称:取数据.名称,暗杀能力:random(8) + 1,破坏能力:random(8) + 1,调查能力:random(8) + 1,逃生能力:random(8) + 1,经验:20,任务中:0,疗伤中:0,任务类型:"无",目标:"无",结果:0,头像:取数据.跳,介绍:undefined});
                  取数据.被关押 = 0;
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
               id('剧情an0').onclick = function(){
                  if(取数据.魅力 < 80){
                     取数据.抗拒 += 50;
                     对话打字效果(取数据.名称 + "：什么！！？中原皇帝未免太胡来了！恕难从命！");
                     剧情对话板.onclick = function(){
                        缓动黑幕();
                        id('剧情对话').style.display = 'none';
                     };
                  }
                  else{
                     对话打字效果(取数据.名称 + "：这……难道这就是我最终的命运吗……");
                     取数据.被关押 = 0;
                     取数据.年龄 = 25;
                     剧情对话板.onclick = function(){
						 取数据.称呼="刺客";
						 _loc2_=取数据.文化;
						 if(_all_nation[_loc2_].皇帝!==undefined){if(取数据.名称==_all_nation[_loc2_].皇帝.名称){取数据.称呼=国王称呼计算(_loc2_);}}
						 var _loc1_=0;
						 while(_loc1_<_all_family.length){
						 	if(_all_family[_loc1_].名称 == 取数据.名称&&_all_family[_loc1_]._code == 取数据._code){
						 		取数据.年龄 = _all_family[_loc1_].年龄;
								取数据.称呼=_all_family[_loc1_].身份;
						 		_all_family.splice(_loc1_,1);
						 	}
						 	_loc1_+=1;
						}
                        强制放入后宫人物(取数据);					 
						id('syb').style.display = 'block';id('syb2').style.display = 'none';id('sy').style.display = 'none';
                        id('剧情对话').style.display = 'none';
                     };
                  }
               };
            }
            else{
               对话打字效果(取数据.名称 + "：呵呵……这算什么？你们就算杀了我，我也绝对不会屈从。");
               剧情对话板.onclick = function(){
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            }
         };
      };
   }
}
function 这个人立刻执行暗查任务(执行人,目标,任务类型){
   缓动黑幕();
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情背景,11,"背景");
   出现这个人的头像(剧情头像,执行人);
   对话打字效果("" + 执行人.名称 + "：是！！臣立刻去办。");
   剧情对话板.onclick = function(){
      缓动黑幕();
      执行人.经验 += 1;
      if(任务类型 == "暗查大臣"){
         执行人.目标 = 目标.名字;
      }
      else if(任务类型 == "暗查妃子"){
         执行人.目标 = 目标.名字;
      }
      执行人.任务类型 = 任务类型;
      id('剧情对话').style.display = 'none';
   };
   if(任务类型 == "暗查大臣"){
      var _loc2_ = 0;
      if(执行人.调查能力 > _loc2_){
         if(目标.野心 < 40){
            执行人.结果 = 1;
         }
         else if(目标.野心 < 60){
            执行人.结果 = 2;
            目标.野心 -= 10;
         }
         else if(目标.野心 < 80){
            执行人.结果 = 3;
            目标.野心 -= 15;
            目标.忠诚 = 60;
         }
         else{
            执行人.结果 = 4;
            目标.野心 -= 20;
            目标.忠诚 = 60;
         }
      }
   }
   else if(任务类型 == "暗查妃子"){
      _loc2_ = 0;
      if(执行人.调查能力 > _loc2_){
         if(目标.任性 < 200){
            执行人.结果 = 1;
         }
         else if(目标.任性 < 500){
            执行人.结果 = 2;
         }
         else if(目标.任性 < 800){
            执行人.结果 = 3;
         }
         else{
            执行人.结果 = 4;
         }
      }
   }
   else if(任务类型 == "调查党派"){
      执行人.结果 = 1;
   }
}
function 这个人立刻执行敌国任务(执行人,目标,任务类型){
   缓动黑幕();
   id('剧情对话').style.display = 'block';
   出现这个人的头像(剧情头像,执行人);
   新后宫图形读取程序(剧情背景,11,"背景");
   对话打字效果("" + 执行人.名称 + "：是！！臣立刻去办。");
   剧情对话板.onclick = function(){
      缓动黑幕();
      执行人.经验 += 1;
      执行人.目标 = 目标.名称;
      执行人.任务类型 = 任务类型;
      id('剧情对话').style.display = 'none';
   };
   if(任务类型 == "暗杀敌将"){
      var _loc2_ = random(10);
      console.log("成功几率" + _loc2_);
      if(执行人.暗杀能力 > _loc2_){
         目标.战力 -= 1 + Math.round(执行人.经验 / 10) + Math.round(执行人.暗杀能力 / 3);
         if(目标.战力 <= 3){
            目标.战力 = 3;
            执行人.结果 = 1;
         }
         else{
            console.log("目标战力" + 目标.战力);
            执行人.结果 = 2;
         }
      }
      else{
         var _loc3_ = random(10);
         if(_loc3_ > 执行人.逃生能力){
            执行人.疗伤中 = 6;
            执行人.结果 = 3;
         }
         else{
            执行人.结果 = 4;
         }
      }
   }
   else if(任务类型 == "盗取宝物"){
      _loc2_ = random(10);
      console.log("成功几率" + _loc2_);
      if(执行人.调查能力 > _loc2_){
         执行人.结果 = 1;
      }
      else{
         _loc3_ = random(10);
         if(_loc3_ > 执行人.逃生能力){
            执行人.疗伤中 = 6;
            执行人.结果 = 3;
         }
         else{
            执行人.结果 = 4;
         }
      }
   }
   else if(任务类型 == "烧毁敌营"){
      _loc2_ = random(12);
      console.log("成功几率" + _loc2_);
      if(执行人.破坏能力 > _loc2_){
         目标.士兵 -= (5 + Math.round(执行人.经验 / 10) + Math.round(执行人.破坏能力 / 2)) * 2000;
         if(目标.士兵 <= 10000){
            目标.士兵 = 10000;
            执行人.结果 = 1;
         }
         else{
            console.log("目标战力" + 目标.士兵);
            执行人.结果 = 2;
         }
      }
      else{
         _loc3_ = random(10);
         if(_loc3_ > 执行人.逃生能力){
            执行人.疗伤中 = 6;
            执行人.结果 = 3;
         }
         else{
            执行人.结果 = 4;
         }
      }
   }
}
function 每月血滴子数据(){
   var _loc1_ = 0;
   while(_loc1_ < 血滴子.length){
      if(血滴子[_loc1_].任务中 > 1){
         血滴子[_loc1_].任务中 -= 1;
         if(血滴子[_loc1_].任务中 == 1){
            血滴子[_loc1_].任务中 = 0;
            血滴子任务结果报告(血滴子[_loc1_]);
         }
      }
      if(血滴子[_loc1_].疗伤中 > 1){
         血滴子[_loc1_].疗伤中 -= 1;
         if(血滴子[_loc1_].疗伤中 == 1){
            血滴子[_loc1_].疗伤中 = 0;
         }
      }
      _loc1_ += 1;
   }
}
function 血滴子任务结果报告(执行人){
   console.log(执行人.名称 + 执行人.任务类型 + 执行人.结果);
   if(执行人.任务类型 == "暗杀敌将"){
      if(执行人.结果 == 1){
         var _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务成功，敌军再无良将可用，实力已经大不如前了。";
         太监报告所有事件.push([_loc3_,"快乐",5,23,2]);
      }
      else if(执行人.结果 == 2){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务成功，但敌军选拔出了新将领，实力依然雄厚。";
         太监报告所有事件.push([_loc3_,"快乐",5,23,3]);
      }
      else if(执行人.结果 == 3){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务失败，敌将武力超群，" + 执行人.名称 + "大人身负重伤，差点丧命。";
         太监报告所有事件.push([_loc3_,"快乐",-5,23,1]);
      }
      else if(执行人.结果 == 4){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务失败，敌将武力超群，但" + 执行人.名称 + "大人身手敏捷，现已经安全回京。";
         太监报告所有事件.push([_loc3_,"快乐",-5,23,5]);
      }
   }
   else if(执行人.任务类型 == "烧毁敌营"){
      if(执行人.结果 == 1){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务成功，敌军兵营尽毁，实力已经大不如前了。";
         太监报告所有事件.push([_loc3_,"快乐",5,23,2]);
      }
      else if(执行人.结果 == 2){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务成功，但敌军常年积蓄的兵马粮草数量太大，实力依然雄厚。";
         太监报告所有事件.push([_loc3_,"快乐",5,23,3]);
      }
      else if(执行人.结果 == 3){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务失败，敌营防守森严，发现了" + 执行人.名称 + "大人，大人身负重伤，差点丧命。";
         太监报告所有事件.push([_loc3_,"快乐",-5,23,1]);
      }
      else if(执行人.结果 == 4){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务失败，敌营防守森严，发现了" + 执行人.名称 + "大人，但大人身手敏捷，现已经安全回京。";
         太监报告所有事件.push([_loc3_,"快乐",-5,23,5]);
      }
   }
   else if(执行人.任务类型 == "盗取宝物"){
      if(执行人.结果 == 1){
         var _loc4_ = 来一个宝贝();
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务成功，获得珍宝" + 颜色代码(_loc4_,"5f5ffc") + "。";
         太监报告所有事件.push([_loc3_,"快乐",5,23,2]);
      }
      else if(执行人.结果 == 3){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务失败，敌国宫殿戒备森严，发现了" + 执行人.名称 + "大人，大人身负重伤，差点丧命。";
         太监报告所有事件.push([_loc3_,"快乐",-5,23,1]);
      }
      else if(执行人.结果 == 4){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。任务失败，敌国宫殿戒备森严，发现了" + 执行人.名称 + "大人，但大人身手敏捷，现已经安全回京。";
         太监报告所有事件.push([_loc3_,"快乐",-5,23,5]);
      }
   }
   else if(执行人.任务类型 == "暗查大臣"){
      if(执行人.结果 == 1){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。" + 执行人.目标 + "大人安分守己，值得信赖。";
         太监报告所有事件.push([_loc3_,"快乐",5,7,2]);
         console.log("报告所有事件.length" + 太监报告所有事件.length);
      }
      else if(执行人.结果 == 2){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。" + 执行人.目标 + "大人没有结党营私之事，看来并无非分之想。" + 执行人.名称 + "大人只是提点了他几句。";
         太监报告所有事件.push([_loc3_,"快乐",2,7,3]);
         console.log("报告所有事件.length" + 太监报告所有事件.length);
      }
      else if(执行人.结果 == 3){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。" + 执行人.目标 + "大人在朝中勾结党羽，结成势力。" + 执行人.名称 + "大人对他进行了严重警告，并削弱了他在地方的势力。";
         太监报告所有事件.push([_loc3_,"快乐",-5,7,1]);
         console.log("报告所有事件.length" + 太监报告所有事件.length);
      }
      else if(执行人.结果 == 4){
         _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。" + 执行人.目标 + "大人野心勃勃，民间传说曾有试穿龙袍等举动。" + 执行人.名称 + "大人暂时扣押了其家人作为人质，同时除去了其不少党羽。";
         太监报告所有事件.push([_loc3_,"快乐",-10,7,5]);
         console.log("报告所有事件.length" + 太监报告所有事件.length);
      }
   }
   else if(执行人.任务类型 == "暗查妃子"){
      var _loc5_ = 0;
      while(_loc5_ < _all_feizi.length){
         if(_all_feizi[_loc5_].名字 == 执行人.目标){
            var _loc6_ = _all_feizi[_loc5_];
         }
         _loc5_ += 1;
      }
      if(_loc6_!== undefined){
		var _loc7_ = 取出程序(0,"大臣","id",_loc6_.朝廷相性);
		var _loc8_ = 取出程序(0,"妃子","id",_loc6_.后宫相性);
		var _loc9_ = 取出程序(0,"子女","id",_loc6_.皇嗣相性);
		console.log(_loc7_);
		if(_loc7_ == undefined||_loc6_.朝廷相性 == undefined){
		   var _loc10_ = "不依附任何大臣";
		}
		else{
			var _loc10_ = "和大臣" + _loc7_.名字 + "相互依附";
		}
		if(_loc9_ == undefined||_loc6_.皇嗣相性 == undefined){
		   var _loc11_ = "不支持任何皇子";
		}else{
			var _loc11_ = "支持皇子" + _loc9_.名称 + "";
		}
		if(_loc8_== undefined||_loc6_.后宫相性 == undefined){
		   _loc12_ = "不依附任何妃嫔";
		}else{
			var _loc12_ = "依附于妃嫔" + _loc8_.名字 + "";
		}
         if(执行人.结果 == 1){
            _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。" + _loc6_.封号 + _loc6_.位分 + "平日安分守己，比较低调。在前朝" + _loc10_ + "，另有" + _loc6_.朝廷势力 + "人支持她，在后宫" + _loc12_ + "，另有" + _loc6_.后宫势力 + "人支持她，并" + _loc11_ + "。";
            太监报告所有事件.push([_loc3_,"快乐",5,7,4]);
         }
         else if(执行人.结果 == 2){
            _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。" + _loc6_.封号 + _loc6_.位分 + "平日嚣张跋扈，有失体统。在前朝" + _loc10_ + "，另有" + _loc6_.朝廷势力 + "人支持她，在后宫" + _loc12_ + "，另有" + _loc6_.后宫势力 + "人支持她，并" + _loc11_ + "。";
            太监报告所有事件.push([_loc3_,"快乐",-2,7,5]);
         }
         else if(执行人.结果 == 3){
            _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。" + _loc6_.封号 + _loc6_.位分 + "平日横行霸道，欺压后宫。在前朝" + _loc10_ + "，另有" + _loc6_.朝廷势力 + "人支持她，在后宫" + _loc12_ + "，另有" + _loc6_.后宫势力 + "人支持她，并" + _loc11_ + "。";
            太监报告所有事件.push([_loc3_,"快乐",-5,7,1]);
         }
         else if(执行人.结果 == 4){
            _loc3_ = "皇上，" + 执行人.名称 + "大人对" + 执行人.目标 + "的" + 执行人.任务类型 + "任务结果已经送来了。" + _loc6_.封号 + _loc6_.位分 + "平日肆意妄为，祸国殃民。在前朝" + _loc10_ + "，另有" + _loc6_.朝廷势力 + "人支持她，在后宫" + _loc12_ + "，另有" + _loc6_.后宫势力 + "人支持她，并" + _loc11_ + "。";
            太监报告所有事件.push([_loc3_,"快乐",-10,7,8]);
         }
      }
   }
   else if(执行人.任务类型 == "调查党派"){
      _loc3_ = "皇上，" + 执行人.名称 + "大人调查党派任务结果已经送来了。请皇上过目。";
      太监报告所有事件.push([_loc3_,"快乐",0,7,4,4]);
   }
}
function 打猎程序(){
   if(主角.打猎 == 1){小提示("围猎过的猎场得休整一下。");}
   else if(主角.当前时辰 == 2){小提示("晚上不适合上山狩猎。");}
   else{
	   id('紫宸殿内').style.display = 'none';
      主角.当前时辰 += 1;
      时辰推进();
      var _loc2_ = 10;
      if(季节 == "春"){_loc2_ = 20;}
      else if(季节 == "夏"){_loc2_ = 24;}
      else if(季节 == "秋"){_loc2_ = 22;}
      else if(季节 == "冬"){_loc2_ = 12;}
      var 打中多少 = Math.round(_loc2_ * 0.5 + random(Math.round(_loc2_ * 0.5)));
      var _loc3_ = random(所有药材.length);
      所有药材[_loc3_].数量 += 1;
      id('youyuan').style.display = 'block';
	  id('yyBG').src = LJ + "a0aPic_BG/Tu_707452.webp";
      id('yyText').innerText ="皇上带领卫队进山狩猎。";
      id('yyText').innerText += "\n打中不少猎物，体力上限增加" + 打中多少 * 2 + "点。\n还得到一味药材：" + 所有药材[_loc3_].名称 + "。";
      id('yykuang').onclick = function(){
         缓动黑幕();
         id('youyuan').style.display = 'none';
         属性.健康 += 3;
         if(属性.健康 > 100){属性.健康 = 100;}
         if(属性.体力上限 < 999){属性.体力上限 += 打中多少 * 2;}
         更新资料();
         if(年 > 19 && 主角.小燕子 == 1){小燕子闯围场事件();}
      };
   }
}
function 召见王爷程序(){
   console.log("与小王爷的关系" + 主角._relation_chenwangyan);
   if(主角.小王爷 == 3||主角.小王爷 == 10||主角.小王爷 == 9){小提示("小王爷已经不在这里了。");}
   else if(主角.召见王爷 == 0){
      主角.召见王爷 = 1;
      if(主角.小王爷 == 1){找小王爷问话();}
      else{
         主角._relation_chenwangyan += random(5);
         id('剧情对话').style.display = 'block';
         id('剧情背景').src = LJ + 'a0aPic_BG/Tu_14.webp';
         if(年 >= 6){
            新后宫图形读取程序(id('剧情头像'),43,"特殊");
            var _loc2_ = random(5);
            if(_loc2_ == 0){
               对话打字效果("小王爷：皇兄，今天叫臣弟来是不是有什么好东西要赐予臣弟啊？(*^__^*) ");
               剧情对话板.onclick = function(){
                  对话打字效果("（皇上与小王爷愉快的交谈着……）");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            }
            else if(_loc2_ == 1){
               对话打字效果("小王爷：这桂花糖糕太好吃了！皇嫂的手艺这么好，皇兄可真有口福。 ");
               剧情对话板.onclick = function(){
                  对话打字效果("（皇上与小王爷愉快的交谈着……）");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            }
            else if(_loc2_ == 2){
               对话打字效果("小王爷：皇兄，你整天憋在这皇宫里多没意思啊，没事多去京城里逛逛，好吃的好玩的多的是。 ");
               剧情对话板.onclick = function(){
                  对话打字效果("（皇上与小王爷愉快的交谈着……）");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            }
            else if(_loc2_ == 3){
               对话打字效果("小王爷：皇兄近来新换的这批护卫看着不错啊，能否给臣弟分两个看家护院？ ");
               剧情对话板.onclick = function(){
                  对话打字效果("（皇上与小王爷愉快的交谈着……）");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            }
            else if(_loc2_ == 4){
               对话打字效果("小王爷：天气这么好，皇兄是否愿意跟臣弟去马场赛赛马？ ");
               剧情对话板.onclick = function(){
                  对话打字效果("（皇上与小王爷愉快的交谈着……）");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            }
         }
         else{
           新后宫图形读取程序(id('剧情头像'),46,"特殊");
            _loc2_ = random(4);
            if(_loc2_ == 0){
               对话打字效果("小王爷：皇兄，有好吃的吗？(*^__^*) ");
               剧情对话板.onclick = function(){
                  对话打字效果("（小王爷偷吃了桌案上的点心……）");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            }
            else if(_loc2_ == 1){
               对话打字效果("小王爷：皇兄，臣弟不要背书啦~~T_T。 ");
               剧情对话板.onclick = function(){
                  对话打字效果("（这时，曹夙峰进来把小王爷带走了……）");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            }
            else if(_loc2_ == 2){
               对话打字效果("小王爷：皇兄，你看~！蜻蜓~！o(∩_∩)o 哈哈。 ");
               剧情对话板.onclick = function(){
                  对话打字效果("（皇上与小王爷愉快的交谈着……）");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            }
            else if(_loc2_ == 3){
               对话打字效果("小王爷：皇兄，抱抱~~（撒娇~扭~o(>///<)o ）");
               剧情对话板.onclick = function(){
                  对话打字效果("（乳母进来把小王爷抱走了……）");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            }
         }
      }
   }
   else{小提示("今天已经召见过小王爷了。");}
}
function 宴请大臣程序(){
   var 临时官员数据 = [];
   i = 0;
   while(i < _all_rencai.length){
      if(_all_rencai[i].任务中 !== 4){
         临时官员数据.push(_all_rencai[i]);
      }
      i++;
   }
   id("kecheng").style.display="block";id("kc5").style.display="none";
   id("kcTittle").innerText ="宴请大臣";
   id("k1t").innerText ="所有大臣";id("k2t").innerText ="宴会名单";
   var 序列号=0;
   处理宴会大臣排列(序列号,临时官员数据);
   所有宴会名单 = [];
   渲染宴会名单(所有宴会名单);
   id("kcqian").onclick = function(){
      if(序列号 > 0){
         序列号 -= 30;
         处理宴会大臣排列(序列号,临时官员数据);
      }
   };
   id("kchou").onclick = function(){
      if(序列号 < 临时官员数据.length - 1){
         序列号 += 30;
         处理宴会大臣排列(序列号,临时官员数据);
      }
   };
   id("kcqd").onclick = function(){
      if(所有宴会名单.length <= 0){
         小提示("需要选取大臣参加");
      }
      else{
         主角.宴会 = 1;
         var _loc11_ = "";
         var _loc5_ = 0;
         while(_loc5_ < 所有宴会名单.length){
            _loc11_ += 所有宴会名单[_loc5_].名字 + "，";
            var _loc9_ = random(2);
            if(_loc9_ == 0){
               所有宴会名单[_loc5_].忠诚 += 3;
            }
            else{
               所有宴会名单[_loc5_].忠诚 += 5;
            }
            if(所有宴会名单[_loc5_].忠诚 > 100){
               所有宴会名单[_loc5_].忠诚 = 100;
            }
            _loc5_ = _loc5_ + 1;
         }
		 id('fulu').style.display = 'block';id('fuluan').style.display = 'none';
		 id('fuluBG').src = LJ + "a0aPic_BG/Tu_11.webp";
		 id('fulutu').src = LJ + "images/1924.webp";
         id('fuluText').innerText = 所有宴会名单[0].名字 + "等" + 所有宴会名单.length + "位大臣。与皇上一同在宴会。";
         国库钱数变动的程序(所有宴会名单.length * 50 * -1);
         临时记录多少人宴请 = 所有宴会名单.length;
         更新资料();
         id('fulukuang').onclick = function(){
            var _loc11_ = random(5);
            if(_loc11_ == 0){
               id('fuluText').innerText = "闲聊，不胜愉快。";
            }
            else if(_loc11_ == 1){
               id('fuluText').innerText = "愉快的宴会，皇上宴上即兴赋诗一首。";
            }
            else if(_loc11_ == 2){
               id('fuluText').innerText = "大臣与皇上聊得很愉快。";
            }
            else if(_loc11_ == 3){
               id('fuluText').innerText = "喝酒，舞曲，不胜愉快。";
            }
            else if(_loc11_ == 4){
               id('fuluText').innerText = "皇上很开心，送每位大臣一件贡品。";
               属性.快乐 += 5;
               国库钱数变动的程序(-1 * 临时记录多少人宴请 * 1000);
               更新资料();
            }
            id('fulukuang').onclick = function(){
               id('fuluText').innerText = "宴会结束。皇上是否要留下某位大臣单独聊聊？";
               id('fuluan').style.display = 'block';
               id('fuluan1').style.display = 'none';
			   id('fuluan2').style.display = 'block';
			   id('fuluan3').style.display = 'block';
               id('fuluan2').innerText = "是";
               id('fuluan2').onclick = function(){
                  id('fuluan').style.display = 'none';id('fuluan1').style.display = 'block';
                  id("sy").style.display = "block";
				  id('sy').style.display = 'block';
				  id('syb').style.display = 'none';
				  id('syb2').style.display = 'block';
				  id('syTitle').innerText = '劝诱人才';
				  id('sysm').innerText = "选择留下哪位大臣？";
				  id('qxsy').onclick = function(){id('syb').style.display = 'block';
				  id('syb2').style.display = 'none';id('sy').style.display = 'none';}
				  var _loc3_ = 0;
				  while(_loc3_ < 32){
				     var _loc4_ = 所有宴会名单[_loc3_];
				     var _loc2_ = className('sydb2')[_loc3_];
				     if(_loc4_ == undefined){
				        _loc2_.style.display = 'none';
				     }
				     else{
				        _loc2_.style.display = 'block';
				        _loc2_.innerText = _loc4_.名字;
				        _loc2_.取 = _loc4_;
				        _loc2_.onclick = function(){
				            if(this.取._code == 6060 && 主角.展昭 == 0){
				              包拯推荐展昭(this.取);
				              id('syb').style.display = 'block';
				              id('syb2').style.display = 'none';id('sy').style.display = 'none';
				           }
				           else
				           {
				              与大臣单独谈话(this.取);
				           }
				        };
				     }
				     _loc3_ = _loc3_ + 1;
				  }
                  id('fulu').style.display = 'none';
                  id('紫宸殿内').style.display = 'none';
               };
			   id('fuluan3').innerText = "否";
			   id('fuluan3').onclick = function(){
                  id('fuluan').style.display = 'none';id('fuluan1').style.display = 'block';
                  id('fulu').style.display = 'none';
                  id('紫宸殿内').style.display = 'none';
                  主角.当前时辰 = 主角.当前时辰 + 1;
                  时辰推进();
               };
            };
         };
         id("kecheng").style.display="none";
      }
   };
}
function 处理宴会大臣排列(序列号,临时官员数据){
   var _loc8_ = 0;
   var _loc3_ = 0;
    while(_loc3_ < 30){
        var _loc4_ = 临时官员数据[序列号 + _loc3_];
        var _loc2_ = className('kcxb')[_loc3_];
        if(_loc4_ == undefined){
            _loc2_.style.display="none";
        }
        else{
   		    _loc2_.style.display="block";
            _loc2_.innerText = _loc4_.名字;
            _loc2_.属性 = _loc4_;
            _loc2_.onclick= function(){
            让这个人物出现宴会(this.属性);
            };
        }
        _loc3_ = _loc3_ + 1;
   }
}
function 让这个人物出现宴会(人物){
   if(所有宴会名单.length < 10){
      var _loc3_ = 0;
      var _loc2_ = 0;
      while(_loc2_ < 所有宴会名单.length){
         if(人物.id == 所有宴会名单[_loc2_].id){
            _loc3_ = 1;
         }
         _loc2_ = _loc2_ + 1;
      }
      if(_loc3_ == 1){
         小提示("已在邀请名单中");
      }
      else{
         所有宴会名单.push(人物);
         渲染宴会名单(所有宴会名单);
      }
   }
   else{
      小提示("十名大臣已满");
   }
}
function 渲染宴会名单(宴会名单){
   var _loc2_ = 0;
   while(_loc2_ < 10){
      if(宴会名单[_loc2_] !== undefined){
         className('kcxb2')[_loc2_].style.display="block";
         className('kcxb2')[_loc2_].序列 = _loc2_;
         className('kcxb2')[_loc2_].innerText = 宴会名单[_loc2_].名字;
         className('kcxb2')[_loc2_].onclick = function(){
            宴会名单.splice(this.序列,1);
            渲染宴会名单(宴会名单);
         };
      }
      else{
         className('kcxb2')[_loc2_].style.display="none";
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 与大臣单独谈话(对象){
   var _loc2_ = [];
   i = 0;
   while(i < _all_rencai.length){
      if(_all_rencai[i].名字 == 对象.名字){
         _all_rencai[i].经验 += 1;
         var 大臣 = _all_rencai[i];
      }
      i++;
   }
   i = 0;
   while(i < _all_rencai.length){
      if(_all_rencai[i].名字 !== 大臣.朝廷相性 && _all_rencai[i].名字 !== 大臣.名字){
         _loc2_.push(_all_rencai[i]);
      }
      i++;
   }
   大臣.关系 += 1;
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情背景,14,"背景");
   if(大臣._code !== undefined){出现这个人的头像(剧情头像,大臣);}
   else{新后宫图形读取程序(剧情头像,大臣.头像,"特殊");}
   对话打字效果(大臣.名字 + "：微臣参见皇上。不知皇上留微臣是有何要事相谈？");
   剧情对话板.onclick= function(){
      对话打字效果("（皇上想谈什么？）",["结束","私人琐事","皇储人选","朝廷现状"]);
      id("剧情an3").onclick = function(){
         if(_loc2_.length == 0){
            对话打字效果(大臣.名字 + "：依微臣所见，目前朝野中表面上一片祥和，实际上暗潮涌动，皇上可派人查查。");
         }
         else{
			_loc2_.sort(compare("朝廷势力",0));
			var 党羽最多的大臣 = _loc2_[0];console.log("党羽最多的大臣" + 党羽最多的大臣.名字);
            对话打字效果(大臣.名字 + "：依微臣所见，目前朝野中大臣，属" + 党羽最多的大臣.名字 + "党羽最多，皇上最好削弱他的力量，以防万一。");
         }
      };
      id("剧情an2").onclick = function(){
         if(大臣.皇嗣相性 == "" || 大臣.皇嗣相性 == undefined){
            对话打字效果(大臣.名字 + "：皇子们个个都继承了皇上的血脉，皇储的事情还是得皇上自己定夺。");
         }
         else{
            var _loc2_ = 取出程序(0,"子女","id",大臣.皇嗣相性);
            对话打字效果(大臣.名字 + "：皇子们虽然都继承了皇上的血脉，但脾气秉性参差不齐，依臣之见，" + _loc2_.名称 + "殿下当为最佳皇储人选。");
         }
      };
      id("剧情an1").onclick = function(){
         if(大臣.关系 < 8){
            对话打字效果(大臣.名字 + "：臣的私事，皇上还是不要过问了吧，不太方便。");
         }
         else if(大臣.关系 < 12){
            对话打字效果(大臣.名字 + "：皇上真是体恤臣下，微臣十分感动。");
         }
         else if((大臣.任务中 == 0 || 大臣.任务中 == 1) && (大臣.性别 == 1 && 大臣._code >= 6000 && 大臣._code <= 6999 || 大臣._code >= 1000 && 大臣._code < 2000 && 大臣.爵位 !== 6)){
            对话打字效果(大臣.名字 + "：皇上英明神武，其实臣已经仰慕皇上很久了，只是一直不知皇上的心意……",["委婉拒绝","收入后宫"]);
            id("剧情an0").onclick = function(){
               对话打字效果(大臣.名字 + "：皇上就当什么也没听见吧。");
               大臣.关系 = 0;
               剧情对话板.onclick= function(){
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
            id("剧情an1").onclick = function(){
               var _loc1_ = {_code:大臣._code,名称:大臣.名字,家族:大臣.家族,性别:大臣.性别,介绍:大臣.介绍,文化:大臣.文化,年龄:16 + random(6),统帅:大臣.统帅,武力:大臣.武力,智力:大臣.智力,政治:大臣.政治,清廉:大臣.清廉,野心:大臣.野心,魅力:大臣.魅力,跳:大臣.头像,朝廷相性:大臣.朝廷相性,出身:""};
               强制放入后宫人物(_loc1_);
               删除指定官员的程序(大臣);
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         }
         else if(大臣.任务中 == 3 && (大臣.性别 == 1 || 大臣._code >= 1000 && 大臣._code < 2000 && 大臣.爵位 !== 6)){
            对话打字效果(大臣.名字 + "：皇上英明神武，其实臣已经仰慕皇上很久了，只是臣一直身有军务，不得常伴君侧。");
         }
         else if(大臣.任务中 == 2 && (大臣.性别 == 1 || 大臣._code >= 1000 && 大臣._code < 2000 && 大臣.爵位 !== 6)){
            对话打字效果(大臣.名字 + "：皇上英明神武，其实臣已经仰慕皇上很久了，只是臣一直外派地方，不得常伴君侧。");
         }
         else{
            对话打字效果(大臣.名字 + "：皇上能和臣如此交心，臣必定为皇上肝脑涂地在所不惜。");
         }
      };
      id("剧情an0").onclick = function(){
         对话打字效果(大臣.名字 + "：微臣告退。");
         剧情对话板.onclick= function(){
            缓动黑幕();
            id('剧情对话').style.display = 'none';
			主角.当前时辰 = 主角.当前时辰 + 1;
            时辰推进();
         };
      };
   };
   id('syb').style.display = 'block';
   id('syb2').style.display = 'none';id('sy').style.display = 'none';
}
function 物品界面(参数){
	id("wpTittle").innerText = "物品界面";
   id("wupin").style.display="block";id("wpxx").style.display="none";
   var 临时宝物 = [];
   if(参数 == 0){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 1){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "衣物"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 2){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "珠宝"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 3){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&(所有物品[_loc6_].类别 == "膳食"||所有物品[_loc6_].类别 == "名茶"||所有物品[_loc6_].类别 == "名酒")){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 4){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "家具"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 5){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&(所有物品[_loc6_].类别 == "文玩"||所有物品[_loc6_].类别 == "字画")){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 6){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "武器"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 7){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "书籍"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 8){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "花草"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 9){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "毒药"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   序列 = 0;
   整理物品展示(临时宝物,序列);
   id("wupinqian").onclick = function(){
      if(序列 >= 1){
         序列 -= 1;
         整理物品展示(临时宝物,序列);
      }
   };
   id("wupinhou").onclick = function(){
      if(序列 < 临时宝物.length / 24){
         序列 += 1;
         整理物品展示(临时宝物,序列);
      }
   };
   id("全部").onclick = function(){
      物品界面(0);
   };
   id("衣物").onclick = function(){
      物品界面(1);
   };
   id("珠宝").onclick = function(){
      物品界面(2);
   };
   id("食品").onclick = function(){
      物品界面(3);
   };
   id("家具").onclick = function(){
      物品界面(4);
   };
   id("文玩").onclick = function(){
      物品界面(5);
   };
   id("武器").onclick = function(){
      物品界面(6);
   };
   id("书籍").onclick = function(){
      物品界面(7);
   };
   id("花草").onclick = function(){
      物品界面(8);
   };
   id("毒药").onclick = function(){
      物品界面(9);
   };
   id("批量处理").innerText = "批量处理";id("wupingb").style.display="block";
   id("批量处理").onclick = function(){
      id('neishiMB').style.display = 'block';
      id('neishiBG').style.display = 'none';
      id('neishi2').style.display = 'none';
      id('neishiTitle').innerText = '批量处理';
      id('nsan0').innerText = '送给大臣';
      id('nsan1').innerText = '送给妃子';
      id('nsan2').innerText = '送给子女';
      id('nsan3').innerText = '贱价处理';
      id('neishiText').innerText = "皇上您想怎么处理？";
      id('nsan0').onclick = function (){id('neishiMB').style.display = 'none';人才列表显示(88);};
      id('nsan1').onclick = function (){id('neishiMB').style.display = 'none';嫔妃一览程序(15);};
      id('nsan2').onclick = function (){id('neishiMB').style.display = 'none';子女一览程序(15);};
      id('nsan3').onclick = function (){
		  var 人物 = new Object;
		  类型=undefined;
		  人物.价格=0;
		  人物.名字 = 所有国内的大名人[random(所有国内的大名人.length)];
		  批量赏赐界面(0,人物,类型);id('neishiMB').style.display = 'none';
	  };
   };
}
function 整理物品展示(临时宝物,序列){
   var _loc3_ = 0;
   while(_loc3_ < 24){
      var _loc4_ = 临时宝物[序列 * 24 + _loc3_];
      var _loc5_ = className('wpxb')[_loc3_];
      if(_loc4_ == undefined){
         _loc5_.style.display="none";
      }
      else{
         _loc5_.style.display="block";
         _loc5_.innerText = _loc4_.名称;
         _loc5_.取 = _loc4_;
         _loc5_.onclick = function(){
            id("wpxx").style.display="block";
			id("wpxx").取 = this.取;
			新后宫图形读取程序(id("wpIcon"),this.取.跳,"物品");
			id("wpmz").innerText = this.取.名称;
			id("wpsm").innerText = "等级：" + this.取.等级;
			id("wpsm").innerText += "\n类别：" + this.取.类别;
			id("wpsm").innerText += "\n数量：" + this.取.数量;
			id("wpan0").onclick = function(){人才列表显示(29,this.parentNode.取);}
			id("wpan1").onclick = function(){嫔妃一览程序(11,this.parentNode.取);}
			id("wpan2").onclick = function(){子女一览程序(11,this.parentNode.取);}
			id("wpan3").onclick = function(){变卖物品(this.parentNode.取);}
         };
      }
      _loc3_ += 1;
   }
}
function 来一个宝贝(){
   var _loc1_ = [];
   i = 0;
   while(i < 所有物品.length){
      if(!(所有物品[i].类别 == "国宝"||所有物品[i].类别 == "家具"||所有物品[i].等级 >= 6)){
         _loc1_.push(所有物品[i]);
      }
      i++;
   }
   var _loc2_ = _loc1_[random(_loc1_.length)];
   if(_loc2_.数量 >= 1){
      _loc2_ = _loc1_[random(_loc1_.length)];
   }
   _loc2_.数量 += 1;
   if(_loc2_._code == 8020&&国家.事件10 == 0){
      国家.事件10 = 1;
   }
   return _loc2_.名称;
}
function 变卖物品(珍宝){
	id("wupin").style.display="none";id("wpxx").style.display="none";
   珍宝.数量 -= 1;
   var _loc3_ = (珍宝.等级 - 1) * 2000 + 珍宝.等级 * random(100);
   var _loc4_ = 所有国内的大名人[random(所有国内的大名人.length)];
   var _loc5_ = "拍卖吸引不少国内名人，最终" + _loc4_ + "以" + _loc3_ + "两白银，将" + 珍宝.名称 + "购走。";
   国家.金钱 += _loc3_;
   更新资料();
   特殊说话(_loc5_,4);
   id('tjBgCon').onclick = function(){
      id('taijianBg').style.display = 'none';
   };
}
function 赏赐这个大臣(人物,珍宝){
   var 结果的话 = "";
   if(珍宝.类别 == "毒药"){
      if(人物.名字 == "比目鱼"){
         结果的话 = 人物.名字 + "很高兴的收下了。";
      }
      else if(人物.名字 == "张起灵"){
         结果的话 = 人物.名字 + "一口喝下，过了半天，一点反应也没有，嘴里还念叨着“这酒味道不好”……";
      }
      else if(人物.名字 == "黑瞎子"){
         结果的话 = 人物.名字 + "接过东西，脚下一滑，毒药全洒在地上了，笑道：“哈哈，本来还想跟皇上对饮呢，没想到可惜了。”";
      }
      else{
         var _loc3_ = random(4);
         if(_loc3_ == 0){
            结果的话 = 人物.名字 + "：哎，君让臣死，臣不得不死……";
         }
         else if(_loc3_ == 1){
            结果的话 = 人物.名字 + "：俗话说伴君如伴虎，我认了……";
         }
         else if(_loc3_ == 2){
            结果的话 = 人物.名字 + "：愿来世还能继续辅佐皇上……";
         }
         else if(_loc3_ == 3){
            结果的话 = 人物.名字 + "：皇上这是为什么，臣死不瞑目啊……";
         }
         删除跟这个人有关的三方相性(人物);
         删除指定官员的程序(人物);
         属性.暴戾 += 5;
      }
      珍宝.数量 -= 1;
   }
   else{
      _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.名字 + "：臣谢皇上隆恩。(大臣很高兴，忠诚提高。)";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.名字 + "：谢主隆恩。(大臣很高兴，忠诚提高。)";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.名字 + "：臣叩谢皇上。(大臣很高兴，忠诚提高。)";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.名字 + "：吾皇万岁万岁万万岁。(大臣很高兴，忠诚提高。)";
      }
      人物.关系 += 1;
      人物.忠诚 = 100;
      珍宝.数量 -= 1;
   }
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情头像,42,"特殊");
   新后宫图形读取程序(剧情背景,599993,"背景");
   对话打字效果("太监：赐【" + 珍宝.名称 + "】予" + 人物.名字 + "，奴才这就去。");
   剧情对话板.onclick = function(){
      if(人物._code !== undefined){
         出现这个人的头像(剧情头像,人物);
      }
      else{
         新后宫图形读取程序(剧情头像,人物.头像,"特殊");
      }
      对话打字效果(结果的话);
      剧情对话板.onclick = function(){
         缓动黑幕();
         id('剧情对话').style.display = 'none';
         物品界面(0);
      };
   };
}
function 赏赐这个妃子(人物,珍宝){
   var 结果的话 = "";
   if(珍宝.类别 == "毒药"){
      var _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.封号 + 人物.位分 + "：臣妾先走一步了……";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.封号 + 人物.位分 + "：看来臣妾是看错皇上了……";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.封号 + 人物.位分 + "：愿来世还能继续伺候皇上……";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.封号 + 人物.位分 + "：皇上，你好狠心。";
      }
      删除跟这个人有关的三方相性(人物);
      删除这个妃子的值(人物);
      属性.暴戾 += 5;
      珍宝.数量 -= 1;
   }
   else{
      _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.封号 + 人物.位分 + "：臣妾谢皇上隆恩。(娘娘很高兴，爱情提高。)";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.封号 + 人物.位分 + "：谢主隆恩。(娘娘很高兴，爱情提高。)";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.封号 + 人物.位分 + "：皇上太帅了，臣妾最爱皇上了。(娘娘很高兴，爱情提高。)";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.封号 + 人物.位分 + "：皇上万岁万岁万万岁。(娘娘很高兴，爱情提高。)";
      }
      人物.爱 += 10;
      珍宝.数量 -= 1;
   }
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情头像,42,"特殊");
   新后宫图形读取程序(剧情背景,599993,"背景");
   对话打字效果("太监：赐【" + 珍宝.名称 + "】予" + 人物.封号 + 人物.位分 + "娘娘，奴才这就去。");
   剧情对话板.onclick = function(){
      if(人物._code !== undefined){
         出现这个人的头像(剧情头像,人物);
      }
      else{
         新后宫图形读取程序(剧情头像,人物.头像);
      }
      对话打字效果(结果的话);
      剧情对话板.onclick = function(){
         缓动黑幕();
         id('剧情对话').style.display = 'none';
         物品界面(0);
      };
   };
}
function 赏赐这个子女(人物,珍宝){
   var 结果的话 = "";
   if(人物.年龄 <= 3){
      结果的话 = "（" + 人物.名称 + "还小，不懂事，见到东西玩了两下就扔到地上了，珍宝已退回。)";
   }
   else if(珍宝.类别 == "毒药"){
      if(人物._code == 9900){
         结果的话 = 人物.名称 + "：父皇，儿臣还不想死……（珍宝已退回）";
      }
      else if(人物._code == 8900){
         结果的话 = 人物.名称 + "：父皇，儿臣还不能死……（珍宝已退回）";
      }
      else{
         var _loc3_ = random(4);
         if(_loc3_ == 0){
            结果的话 = 人物.名称 + "：父皇，到底是为什么非要赐死儿臣……";
         }
         else if(_loc3_ == 1){
            结果的话 = 人物.名称 + "：父皇，儿臣先去了……";
         }
         else if(_loc3_ == 2){
            结果的话 = 人物.名称 + "：既然父皇想要儿臣这条命，儿臣不敢不从……";
         }
         else if(_loc3_ == 3){
            结果的话 = 人物.名称 + "：父皇这是为什么，儿臣死不瞑目啊……";
         }
         判定这个子女死亡(人物);
         属性.暴戾 += 5;
         珍宝.数量 -= 1;
      }
   }
   else{
      _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.名称 + "：儿臣谢父皇隆恩。(与该子女关系提高。)";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.名称 + "：父皇果然还是看重儿臣的。(与该子女关系提高。)";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.名称 + "：儿臣叩谢皇上。(与该子女关系提高。)";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.名称 + "：吾皇万岁万岁万万岁。(与该子女关系提高。)";
      }
      人物.关系 += 5;
      珍宝.数量 -= 1;
   }
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情头像,42,"特殊");
   新后宫图形读取程序(剧情背景,599993,"背景");
   对话打字效果("太监：赐【" + 珍宝.名称 + "】予" + 人物.名称 + "，奴才这就去。");
   剧情对话板.onclick = function(){
      出现这个人的头像(剧情头像,人物);
      对话打字效果(结果的话);
      剧情对话板.onclick = function(){
         缓动黑幕();
         id('剧情对话').style.display = 'none';
         物品界面(0);
      };
   };
}
function 特殊说话(文本,参数){
	id('taijianBg').style.display = 'block';
	id('tjjj').style.top = '0px';
	太监图(参数);
	id('taijianbgText').innerText =文本;
}
function 批量赏赐界面(参数,人物,类型){
   id("wpTittle").innerText = "批量处理";
   id("wupin").style.display="block";id("wpxx").style.display="none";
   var 临时宝物 = [];
   if(参数 == 0){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 !== "毒药"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 1){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "衣物"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 2){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "珠宝"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 3){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&(所有物品[_loc6_].类别 == "膳食"||所有物品[_loc6_].类别 == "名茶"||所有物品[_loc6_].类别 == "名酒")){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 4){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "家具"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 5){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&(所有物品[_loc6_].类别 == "文玩"||所有物品[_loc6_].类别 == "字画")){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 6){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "武器"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 7){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "书籍"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 8){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "花草"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   else if(参数 == 9){
      _loc6_ = 0;
      while(_loc6_ < 所有物品.length){
         if(所有物品[_loc6_].数量 >= 1&&所有物品[_loc6_].等级 < 6&&所有物品[_loc6_].类别 == "毒药"){
            临时宝物.push(所有物品[_loc6_]);
         }
         _loc6_ += 1;
      }
   }
   序列 = 0;
   批量整理物品展示(临时宝物,序列,人物,类型,参数);
   id("wupinqian").onclick = function(){
      if(序列 >= 1){
         序列 -= 1;
         批量整理物品展示(临时宝物,序列,人物,类型,参数);
      }
   };
   id("wupinhou").onclick = function(){
      if(序列 < 临时宝物.length / 24){
         序列 += 1;
         批量整理物品展示(临时宝物,序列,人物,类型,参数);
      }
   };
   id("全部").onclick = function(){
      批量赏赐界面(0,人物,类型);
   };
   id("衣物").onclick = function(){
      批量赏赐界面(1,人物,类型);
   };
   id("珠宝").onclick = function(){
      批量赏赐界面(2,人物,类型);
   };
   id("食品").onclick = function(){
      批量赏赐界面(3,人物,类型);
   };
   id("家具").onclick = function(){
      批量赏赐界面(4,人物,类型);
   };
   id("文玩").onclick = function(){
      批量赏赐界面(5,人物,类型);
   };
   id("武器").onclick = function(){
      批量赏赐界面(6,人物,类型);
   };
   id("书籍").onclick = function(){
      批量赏赐界面(7,人物,类型);
   };
   id("花草").onclick = function(){
      批量赏赐界面(8,人物,类型);
   };
   id("毒药").onclick = function(){
   };
   id("wupingb").style.display="none";
    id("批量处理").innerText = "处理完毕";
   id("批量处理").onclick = function(){
      批量使用物品完毕(人物,类型);
   };
}
function 批量整理物品展示(临时宝物,序列,人物,类型,参数){
   var _loc3_ = 0;
   while(_loc3_ < 24){
      var _loc4_ = 临时宝物[序列 * 24 + _loc3_];
      var _loc5_ = className('wpxb')[_loc3_];
      if(_loc4_ == undefined){
         _loc5_.style.display="none";
      }
      else{
         _loc5_.style.display="block";
         _loc5_.innerText = _loc4_.名称;
         _loc5_.取 = _loc4_;
         _loc5_.onclick = function(){
            id("wpxx").style.display="block";
			新后宫图形读取程序(id("wpIcon"),this.取.跳,"物品");
			id("wpmz").innerText = this.取.名称;
			id("wpsm").innerText = "等级：" + this.取.等级;
			id("wpsm").innerText += "\n类别：" + this.取.类别;
			id("wpsm").innerText += "\n数量：" + this.取.数量;
			id("wpan0").onclick = function(){}
			id("wpan1").onclick = function(){}
			id("wpan2").onclick = function(){}
			id("wpan3").onclick = function(){}
			批量赏赐(this.取,人物,类型,参数);
         };
      }
      _loc3_ += 1;
   }
}
function 批量赏赐(珍宝,人物,类型,参数){
   if(类型 == "妃子"){
	   珍宝.数量 -= 1;
      人物.爱 += 10;
   }
   else if(类型 == "大臣"){
	   珍宝.数量 -= 1;
      人物.关系 += 1;
      人物.忠诚 = 100;
   }
   else if(类型 == "子女"){
      if(人物.年龄 >= 3){
		  珍宝.数量 -= 1;
         人物.关系 += 5;
      }
   }
   else{
	   珍宝.数量 -= 1;
      人物.价格 = 人物.价格 + (珍宝.等级 - 1) * 2000 + 珍宝.等级 * random(100);
   }
   批量赏赐界面(参数,人物,类型);
}
function 批量使用物品完毕(人物,类型){
	_loc2_ = random(4);
	if(类型 !==undefined &&人物!==undefined){
		if(类型 == "妃子"){
			_loc3_=人物.名字;
         if(_loc2_ == 0){
            结果的话 = 人物.封号 + 人物.位分 + "：臣妾谢皇上隆恩。(娘娘很高兴，爱情提高。)";
         }
         else if(_loc2_ == 1){
            结果的话 = 人物.封号 + 人物.位分 + "：谢主隆恩。(娘娘很高兴，爱情提高。)";
         }
         else if(_loc2_ == 2){
            结果的话 = 人物.封号 + 人物.位分 + "：皇上太帅了，臣妾最爱皇上了。(娘娘很高兴，爱情提高。)";
         }
         else if(_loc2_ == 3){
            结果的话 = 人物.封号 + 人物.位分 + "：皇上万岁万岁万万岁。(娘娘很高兴，爱情提高。)";
         }
      }
      else if(类型 == "子女"){
		  _loc3_=人物.名称;
         if(人物.年龄 <= 3){
            结果的话 = "（" + 人物.名称 + "还小，不懂事，见到东西玩了两下就扔到地上了，珍宝已退回。)";
         }
         else if(_loc2_ == 0){
            结果的话 = 人物.名称 + "：儿臣谢父皇隆恩。(与该子女关系提高。)";
         }
         else if(_loc2_ == 1){
            结果的话 = 人物.名称 + "：父皇果然还是看重儿臣的。(与该子女关系提高。)";
         }
         else if(_loc2_ == 2){
            结果的话 = 人物.名称 + "：儿臣叩谢皇上。(与该子女关系提高。)";
         }
         else if(_loc2_ == 3){
            结果的话 = 人物.名称 + "：吾皇万岁万岁万万岁。(与该子女关系提高。)";
         }
      }
      else if(类型 == "大臣"){
		  _loc3_=人物.名字;
         if(_loc2_ == 0){
            结果的话 = 人物.名字 + "：臣谢皇上隆恩。(大臣很高兴，忠诚提高。)";
         }
         else if(_loc2_ == 1){
            结果的话 = 人物.名字 + "：谢主隆恩。(大臣很高兴，忠诚提高。)";
         }
         else if(_loc2_ == 2){
            结果的话 = 人物.名字 + "：臣叩谢皇上。(大臣很高兴，忠诚提高。)";
         }
         else if(_loc2_ == 3){
            结果的话 = 人物.名字 + "：吾皇万岁万岁万万岁。(大臣很高兴，忠诚提高。)";
         }
      }
         id('剧情对话').style.display = 'block';
         新后宫图形读取程序(剧情头像,42,"特殊");
         新后宫图形读取程序(剧情背景,599993,"背景");
        对话打字效果("太监：赐这批珍宝予" + _loc3_ + "，奴才这就去。");
         剧情对话板.onclick = function(){
            出现这个人的头像(剧情头像,人物);
           对话打字效果(结果的话);
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';id("wupin").style.display="none";id("wpxx").style.display="none";
               物品界面(0);
            };
         };
      }
   else if(人物 !== undefined &&类型 ==undefined){
	   缓动黑幕();
      id("wupin").style.display="none";id("wpxx").style.display="none";
      结果的话 = "拍卖吸引不少国内名人，最终" + 人物.名字 + "以" + 人物.价格 + "两白银，将这批珍宝购走。";
      国家.金钱 += 人物.价格;
      更新资料();
      特殊说话(结果的话,4);
      id('tjBgCon').onclick = function(){
         id('taijianBg').style.display = 'none';
      };
   }
   else{
	   id("wupin").style.display="none";id("wpxx").style.display="none";
   }
}