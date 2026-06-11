function 微服出访程序(){
	缓动黑幕();
	id("jingcheng").style.display="block";
	if(季 == 1){id("jcBG").src="a0aPic_BG/Tu_111343126.webp";}
    else if(季 == 2){id("jcBG").src="a0aPic_BG/Tu_111343127.webp";}
    else if(季 == 3){id("jcBG").src="a0aPic_BG/Tu_111343128.webp";}
    else if(季 == 4){id("jcBG").src="a0aPic_BG/Tu_111343129.webp";}
	 var _loc3_ = random(6);
	if(主角.微服 ==0 &&_loc3_ == 0){
	    桂公公获得珍宝事件();
	}     
    else if(_loc3_ > 0&&主角.吕四娘 == 0&&年 > 6){
         遇到阿四事件();
    }
    else if(_loc3_ > 0&&年 > 12&&年 < 15&&主角.嘉宁 < 9){
		主角.嘉宁 == 7
        遇到金闪闪事件();
    }
	id("jcText").innerText="去哪里逛逛呢？";
	主角.微服 = 1;
	id("回宫").onclick=function(){
        id("jingcheng").style.display="none";
        主角.当前时辰 += 1;
        时辰推进();
	}
	id("jcan0").onclick=function(){风评程序();}
	id("jcan1").onclick=function(){
		if(国家.事件六 == 0){小提示("此地暂时无人居住");}
        else{候爵府程序();
            id("jingcheng").style.display="none";
        }
	}
	id("jcan2").onclick=function(){街边小贩程序();}
	id("jcan3").onclick=function(){前往灵山程序();id("jingcheng").style.display="none";}
	id("jcan4").onclick=function(){ 
		属性.才艺 += 4;属性.魅力 += 24;
        梨花园程序();id("jingcheng").style.display="none";}
	id("jcan5").onclick=function(){怡红院程序();id("jingcheng").style.display="none";}
	id("jcan6").onclick=function(){奇兰茶馆程序();id("jingcheng").style.display="none";}
	id("jcan7").onclick=function(){鸿宾楼程序();id("jingcheng").style.display="none";}
}
function 风评程序(){
   var _loc3_ = 0;
   var _loc4_ = 0;
   var _loc5_ = 0;
   var _loc6_ = 0;
   var _loc7_ = 0;
   var _loc8_ = 0;
   var _loc9_ = 0;
   var _loc10_ = 0;
   var _loc11_ = 0;
   while(_loc11_ < _all_city.length){
      if(_all_city[_loc11_].归属 == 8){
         _loc3_ += 1;
         _loc4_ += _all_city[_loc11_].人口;
         _loc6_ += _all_city[_loc11_].治安;
         _loc7_ += _all_city[_loc11_].粮食;
         _loc5_ += _all_city[_loc11_].民心;
      }
      _loc11_ += 1;
   }
   var _loc12_ = 0;
   while(_loc12_ < _all_rencai.length){
      _loc8_ += _all_rencai[_loc12_].清廉;
      _loc12_ += 1;
   }
   var _loc13_ = Math.round(_loc8_ / _all_rencai.length);
   var _loc14_ = Math.round(_loc6_ / _loc3_);
   var _loc15_ = Math.round(_loc5_ / _loc3_);
   var _loc16_ = 0;
   _loc11_ = 0;
   while(_loc11_ < _all_feizi.length){
      if(_all_feizi[_loc11_].名字 !== undefined){
         _loc16_ += 1;
      }
      _loc11_ += 1;
   }
   var _loc17_ = [];
   if(_loc14_ < 40){
      var _loc18_ = "差役：你说这到底是怎么了，抓不完的犯人。\n眼看大牢就快满了。";
   }
   else if(_loc14_ < 50){
      _loc18_ = "差役：在六扇门当差就是辛苦，各地跑。\n治安什么时候才能变好呢？";
   }
   else if(_loc14_ < 60){
      _loc18_ = "差役：各地流犯很多。\n不停的跑远差，六扇门当差真要命。\n我都好几个月没回家了。";
   }
   else if(_loc14_ < 70){
      _loc18_ = "差役：采花贼，飞天贼，强盗，小偷，抓不完的犯人，断不完的案。";
   }
   else if(_loc14_ < 80){
      _loc18_ = "差役：近来治安好像好一些了，\n没有那么多毛贼了。";
   }
   else if(_loc14_ < 90){
      _loc18_ = "差役：真轻松，三天没活干了。\n下午到哥们家喝几杯。";
   }
   else{
      _loc18_ = "差役：处处风平浪静，巡逻一圈然后禀报下老爷，然后等下班。真是愉快的一天。";
   }
   _loc17_.push(_loc18_);
   if(_loc16_ < 3){
      var _loc19_ = "文人：听说皇上重情重义，很少新纳后宫。\n妃子们一定都很幸福。";
   }
   else if(_loc16_ < 10){
      _loc19_ = "文人：听说皇上有一批妃子长得国色天香。";
   }
   else if(_loc16_ < 20){
      _loc19_ = "文人：听说皇上的后宫阵容强大到让人感动的程度了。";
   }
   else if(_loc16_ < 30){
      _loc19_ = "文人：皇上貌似急着延续子女，听说后宫妃子都快住满了。纵欲伤身，真希望皇上能保重龙体。";
   }
   else{
      _loc19_ = "文人：据说皇上沉迷女色。后宫几次新建屋舍都不够妃子住。楼道上都住着妃子，想想真让人感动。";
   }
   _loc17_.push(_loc19_);
   if(_loc13_ < 50){
      var _loc20_ = "老者：各地官员贪腐成风，难道皇上一点都不知道吗？";
   }
   else if(_loc13_ < 60){
      _loc20_ = "老者：各地贪腐严重，国家的税赋基本都入了他们的荷包。";
   }
   else if(_loc13_ < 70){
      _loc20_ = "老者：官员贪腐现象好像略微好转。";
   }
   else if(_loc13_ < 80){
      _loc20_ = "老者：各地官员清廉程度比以前好很多了，百姓感到欣慰。";
   }
   else if(_loc13_ < 90){
      _loc20_ = "老者：各地清廉风气正在蔓延，各地官员都相对比较廉洁。皇上之幸，百姓之幸。";
   }
   else{
      _loc20_ = "老者：各地官员上下一心，已经很少听到官员贪赃枉法的传闻了。";
   }
   _loc17_.push(_loc20_);
   if(_loc15_ < 50){
      var _loc21_ = "婆婆媳妇：各地民心不稳，人心惶惶。\n媳妇你还是尽量少上街。";
   }
   else if(_loc15_ < 60){
      _loc21_ = "婆婆媳妇：民心惶惶，你可不许让你相公跟别人混在一起。";
   }
   else if(_loc15_ < 70){
      _loc21_ = "婆婆媳妇：各地民心好像略有好转。";
   }
   else if(_loc15_ < 80){
      _loc21_ = "婆婆媳妇：太平之年，民心稳定。媳妇你生在一个好年代里。";
   }
   else if(_loc15_ < 90){
      _loc21_ = "婆婆媳妇：各地民心所向，皇上是位好皇上。";
   }
   else{
      _loc21_ = "婆婆媳妇：皇上真是难得一见的明君，真乃百姓之福。";
   }
   _loc17_.push(_loc21_);
   id("jcText").innerText = _loc17_[random(_loc17_.length)];
}
function 街边小贩程序(){
    if(年 >= 25&&年 <= 30&&所有技术[20].开启 == 0){购买神力秘术();}
    else{id("jcText").innerText = "小贩：今天的货都卖完了，下次再来吧。";}
}
function 候爵府程序(){
   id('youyuan').style.display = 'block';
   if(季 == 4&&旬 == "上旬"){
      id('yyBG').src =LJ +  "a0aPic_BG/Tu_846921.webp";
   }
   else{
      id('yyBG').src =LJ +  "a0aPic_BG/Tu_599993.webp";
   }
   if(季 == 4&&旬 == "上旬"){
      id('yyText').innerText = "时至冬至，皇上参加了侯爵府上的冬至日宴会。";
   }
   else{
      id('yyText').innerText = "皇上驾临侯爵府，襄阳侯热情招待了皇上。";
   }
   属性.快乐 += 2;
   属性.健康 += 2;
   属性.体力 += 40;
   更新资料();
   id('yykuang').onclick = function(){
      id('youyuan').style.display = 'none';id("jingcheng").style.display="none";
      主角.当前时辰 += 1;
      时辰推进();
      if(年 > 10&&年 < 30&&季 == 4&&旬 == "上旬"&&国家.事件六 == 1&&国家.事件七 == 0){
         襄阳公主献卫子夫();
      }
   };
}
function 前往灵山程序(){
   id('gzhjxz').style.display = 'block';id('gzhjBG').style.display = 'block';
   id('gzhjTittle').innerText = "灵山";id('gzhjBG').src="a0aPic_BG/Tu_100008.webp";
   id('gzhjText').innerText = "";
   id('gzhjan0').style.display = 'none';
   id('gzhjan1').innerText  = "随便走走";
   id('gzhjan2').onclick = function(){关闭前往灵山程序();};
   id('gzhjan1').onclick = function (){
	   id('youyuan').style.display = 'block';id('gzhjxz').style.display = 'none';
	   id('yyBG').src =LJ +  "a0aPic_BG/Tu_100008.webp";
	   id('yyText').innerText =  "青山古寺，心情愉快了些。";
	   属性.快乐 += 2;
	   属性.健康 += 2;
	   属性.体力 += 20;
	   更新资料();
	   id('yykuang').onclick = function(){
	      id('youyuan').style.display = 'none';
	      关闭前往灵山程序();
	   };
	};
   if(主角.小王爷 == 9&&主角._relation_chenwangyan !== 200){
      灵山探望小王爷事件();
   }
   else if(主角.小王爷 == 9&&主角._relation_chenwangyan == 200){
      与小王爷的结局();
   }
}
function 灵山探望小王爷事件(){
   主角._relation_chenwangyan += 1;
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情头像,32,"特殊");
   新后宫图形读取程序(剧情背景,333111,"背景");
   var _loc2_ = random(5);
   if(_loc2_ == 0){
      属性.魅力 += 20;
      对话打字效果("小王爷：皇兄，多日不见，想臣弟吗？臣弟可是想皇兄了。");
      剧情对话板.onclick = function (){
         对话打字效果("（时间过得飞快……皇上依依不舍地回宫了）");
         剧情对话板.onclick = function (){
            缓动黑幕();
            id('剧情对话').style.display = 'none';
         };
      };
   }
   else if(_loc2_ == 1){
      属性.健康 += 20;
      对话打字效果("小王爷：这是我自己在灵山里种的茶，比宫里的好喝多了，皇兄尝尝吧，臣弟亲自喂皇兄可好？ ");
      剧情对话板.onclick = function (){
         对话打字效果("（时间过得飞快……皇上依依不舍地回宫了）");
         剧情对话板.onclick = function (){
            缓动黑幕();
            id('剧情对话').style.display = 'none';
         };
      };
   }
   else if(_loc2_ == 2){
      属性.才艺 += 20;
      对话打字效果("小王爷：皇兄样样都好，可这棋艺还是不如臣弟啊。不服我们来一盘，皇兄赢了有奖励哟~！ ");
      剧情对话板.onclick = function (){
         对话打字效果("（时间过得飞快……皇上依依不舍地回宫了）");
         剧情对话板.onclick = function (){
            缓动黑幕();
            id('剧情对话').style.display = 'none';
         };
      };
   }
   else if(_loc2_ == 3){
      属性.体力 += 100;
      对话打字效果("小王爷：皇兄，要不要留下来陪臣弟住两天？ ");
      剧情对话板.onclick = function (){
         对话打字效果("（时间过得飞快……皇上依依不舍地回宫了）");
         剧情对话板.onclick = function (){
            缓动黑幕();
            id('剧情对话').style.display = 'none';
         };
      };
   }
   else if(_loc2_ == 4){
      属性.健康 += 20;
      对话打字效果("小王爷：皇兄……臣弟一个人好寂寞，皇兄不要走了……");
      剧情对话板.onclick = function (){
         对话打字效果("（时间过得飞快……皇上依依不舍地回宫了）");
         剧情对话板.onclick = function (){
            缓动黑幕();
            id('剧情对话').style.display = 'none';
         };
      };
   }
}
function 关闭前往灵山程序(){
   id('gzhjxz').style.display = 'none';
   id("jingcheng").style.display="none";
   id('gzhjBG').style.display = 'none';
   主角.当前时辰 += 1;
   时辰推进();
}
function 生成开局太妃(){
   var 太妃位分 = [[0,"太妃"],[1,"太嫔"],[2,"太贵人"],[3,"太美人"],[4,"太才人"],[5,"太御女"],[6,"太采女"],[7,"太官女"]];
   var _loc2_ = 2 + random(3);
   var _loc3_ = 0;
   while(_loc3_ <= _loc2_){
      是否是历史美女 = random(3);
      var _loc4_ = [];
      var _loc5_ = 0;
      while(_loc5_ < 后宫名人.length){
         if(后宫名人[_loc5_].用过 == undefined){
            _loc4_.push(后宫名人[_loc5_]);
         }
         _loc5_ += 1;
      }
      if((_loc3_ == 0||是否是历史美女 == 0)&&_loc4_.length > 0){
         var _loc6_ = random(_loc4_.length);
         var _loc7_ = _loc4_[_loc6_];
         var _loc8_ = random(6) + 16;
         var _loc9_ = _loc7_.跳;
         var _loc10_ = _loc7_.名称;
         var _loc11_ = _loc7_.名称;
         var _loc12_ = _loc7_.家族;
         var _loc13_ = _loc7_.党;
         var _loc14_ = _loc7_.统帅;
         var _loc15_ = _loc7_.武力;
         var _loc16_ = _loc7_.智力;
         var _loc17_ = _loc7_.政治;
         var _loc18_ = _loc7_.魅力;
         var _loc19_ = _loc7_.清廉;
         var _loc20_ = _loc7_.野心;
         var _loc21_ = _loc7_.性别;
         var _loc22_ = _loc7_.喜好;
         var _loc23_ = _loc7_.介绍;
         var _loc24_ = _loc7_.文化;
         var _loc25_ = _loc7_._code;
         var _loc26_ = _loc7_.性格;
         var _loc27_ = (random(5) + 3) * 8;
		 _loc5_ = 0;
		 while(_loc5_ < 后宫名人.length){
		    if(后宫名人[_loc5_]._code == _loc7_._code){
		       后宫名人[_loc5_].用过 = 1;
		    }
		    _loc5_ += 1;
		 }
         var _loc28_ = {_code:_loc25_,爱:undefined,出身:"先帝嫔妃",身份:undefined,名称:_loc10_,家族:_loc12_,文化:_loc24_,性格:_loc26_,介绍:_loc23_,年龄:_loc8_,头像:_loc9_,地位:0,婚配序号:999,脉系:undefined,儿女:0};
         _loc28_.地位 = random(7);
         if(random(5) == 0||_loc28_.地位 <= 2||(_loc28_.家族 !== undefined&&_loc28_.家族.length >= 3)){
            _loc28_.身份 = 皇家名字女字[random(皇家名字女字.length)]+太妃位分[_loc28_.地位][1];
         }
         else{
            _loc28_.身份 = _loc28_.家族+太妃位分[_loc28_.地位][1];
         }
		 _all_family.push(_loc28_);
      }
      else{
         _loc8_ = random(4) + 16;
         _loc9_ = random(626)+1;
         var _loc29_ = 姓[random(姓.length)];
         if(random(10) > 4){
            临时名字 = _loc29_ + 女名[random(女名.length)] + 女名[random(女名.length)];
         }
         else{
            临时名字 = _loc29_ + 女名[random(女名.length)];
         }
         _loc28_ = {身份:undefined,名称:临时名字,出身:"先帝嫔妃",家族:_loc29_,文化:8,年龄:_loc8_,头像:_loc9_,地位:undefined,婚配序号:999,脉系:undefined,儿女:0};
		 _loc28_.统帅 = random(40);
		 _loc28_.武力 = random(40);
		 _loc28_.智力 = random(99);
		 _loc28_.政治 = random(99);
		 _loc28_.清廉 = random(99);
		 _loc28_.野心 = random(99);_loc28_.性别 = 1;
		 _loc28_.性格 =性格计算(_loc28_);
         _loc28_.地位 = random(7);
         if(random(5) == 0||_loc28_.地位 <= 2||(_loc28_.家族 !== undefined&&_loc28_.家族.length >= 3)){
            _loc28_.身份 = 皇家名字女字[random(皇家名字女字.length)]+太妃位分[_loc28_.地位][1];
         }
         else{
            _loc28_.身份 = _loc28_.家族+太妃位分[_loc28_.地位][1];
         }
		 _loc28_.介绍 = "  先帝的"+_loc28_.身份+"。";
		 _all_family.push(_loc28_);
      }
      _loc3_ += 1;
   }
}
function 生成随机女子(取数据){
   _loc5_ = undefined;
   _loc6_ = 外国女子名字(取数据.id);
   _loc7_ = _loc6_[1];
   _loc8_ = _loc6_[0];
   _loc9_ = 取数据.id;
   _loc10_.统帅 = random(40);
   _loc11_ = random(40);
   _loc12_ = random(99);
   _loc13_ = random(99);
   _loc14_ = 60 + random(40);
   _loc15_ = {_code:_loc5_,名称:_loc7_,名字:_loc7_,家族:_loc8_,文化:_loc9_,性别:1,统帅:_loc10_,武力:_loc11_,智力:_loc12_,政治:_loc13_,魅力:_loc14_};
   _loc15_.性情 = 性格计算(_loc15_);
   return _loc15_;
}
function 梨花园程序(){
   id('出现这位后宫').style.display = 'block';
   id('后宫对话板').style.display = 'block';
   id('出现后宫an0').style.display = 'block';
   id("出现背景").src="a0aPic_BG/Tu_234234.webp";
   id('后宫头像').onclick = function (){};
   var 梨花园中的戏子 = [];
   var _loc3_ = 0;
   while(_loc3_ < 所有戏子.length){
      if(所有戏子[_loc3_].伶官 == 0){
         梨花园中的戏子.push(所有戏子[_loc3_]);
      }
      _loc3_ = _loc3_ + 1;
   }
   var 使用的戏子序号 = random(梨花园中的戏子.length);
   var 生成的戏子 = 梨花园中的戏子[使用的戏子序号];
   var _loc5_ = 生成的戏子.跳;
   新后宫图形读取程序(id("后宫头像"),_loc5_,"戏子");
   生成的戏子.见面 += 1;
   id('后宫对话').innerHTML = "今天的戏是【" + 生成的戏子.戏码 + "】，主角是：" + 生成的戏子.名称 + "。\n";
   id('出现后宫an0').onclick = function(){
      id('出现后宫an0').style.display = 'none';
      id('后宫对话板').style.display = 'none';
      id('后宫对话框').style.display = 'block';
      if(生成的戏子.见面 < 2){
         id('后宫对话2').innerText= "戏演完了。是时候该回宫了。";
         id('后宫对话框').onclick = function (){
            关闭梨花园程序();
         };
      }
      else{
         id('后宫对话2').innerText= 生成的戏子.名称 + "演得真好，要不要把他接到宫里去演戏？";
         id('出现后宫an1').style.display = 'block';
         id('出现后宫an2').style.display = 'block';
         id('出现后宫an1').innerText = "接进宫";
		 id('后宫对话框').onclick = function (){};
         id('出现后宫an1').onclick = function(){
            id('出现后宫an1').style.display = 'none';id('出现后宫an2').style.display = 'none';
            if(生成的戏子._code == 3001){
               id('后宫对话2').innerText = 生成的戏子.名称 + "：“皇上，奴家不想进宫。若皇上执意如此，那就拿奴家的画像进宫吧。”";
               生成的戏子.见面 -= 2;
            }
            else if(生成的戏子._code == 3000){
               id('后宫对话2').innerText = 生成的戏子.名称 + "：“皇上您也爱听戏啊。（穿个越，居然还碰见皇上了，也许他能帮我找到他们。）”";
               梨花园中的戏子.splice(使用的戏子序号,1);
               生成的戏子.伶官 = 1;
            }
            else{
               id('后宫对话2').innerText = 生成的戏子.名称 + "：“原来您是皇上……那今后奴家就在宫里演戏了。”";
               梨花园中的戏子.splice(使用的戏子序号,1);
               生成的戏子.伶官 = 1;
            }
            id('后宫对话框').onclick = function(){
               关闭梨花园程序();
            };
         };
		 id('出现后宫an2').innerText = "不接";
        id('出现后宫an2').onclick = function(){
            id('出现后宫an1').style.display = 'none';id('出现后宫an2').style.display = 'none';
            id('后宫对话2').innerText = "今天的戏就先听到这。";
            id('后宫对话框').onclick = function(){
               关闭梨花园程序();
            };
         };
      }
   };
}
function 关闭梨花园程序(){
  id('出现这位后宫').style.display = 'none';id('出现后宫an1').style.display = 'none';id('出现后宫an2').style.display = 'none';id('出现后宫an3').style.display = 'none';id('后宫对话板').style.display = 'block';id('后宫对话框').style.display = 'none';
   主角.当前时辰 += 1;
   时辰推进();
}
function 鸿宾楼程序(){
   缓动黑幕();
   id('youyuan').style.display = 'block';
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_343126.webp";
   if(年 >= 6&&年 < 16&&主角._relation_chenwangyan >= 50&&_all_city[22].归属 == 2&&主角.摩葛可汗 == 0){
      主角.摩葛可汗 = 1;
      id('yyText').innerText = "诶？今天鸿宾楼里面好吵，好像有人打架。";
      id('yykuang').onclick = function(){
         小王爷初次遇到摩葛可汗();
         id('youyuan').style.display = 'none';
         id("jingcheng").style.display="none";
         主角.当前时辰 += 1;
         时辰推进();
      };
   }
   else{
      id('yyText').innerText = "小二：客官里边请，楼上有雅座。这位客官，您要来点什么？";
      id('yyan1').innerText = "点菜";
      id('yyan2').innerText = "离开";id('yyan').style.display = 'block';
	  id('yykuang').onclick = function(){};
      id('yyan1').onclick = function(){
         菜单程序();
      };
      id('yyan2').onclick = function(){
         缓动黑幕();
         id('youyuan').style.display = 'none';id('yyan').style.display = 'none';
      };
   }
}
function 菜单程序(鸿宾楼面板){
  id('sy').style.display = 'block';
  id('syb').style.display = 'none';
  id('syb2').style.display = 'block';
  id('syTitle').innerText = '菜单';
  id('sysm').innerText = "";id('yyan').style.display = 'none';
  id('qxsy').onclick = function(){id('syb').style.display = 'block';
  id('syb2').style.display = 'none';id('sy').style.display = 'none';
  鸿宾楼程序();
  }
   var 临时菜单 = [];
   _loc6_ = 0;
   while(_loc6_ < 所有菜名.length){
      临时菜单.push(所有菜名[_loc6_]);
      _loc6_ = _loc6_ + 1;
   }
   var i =0;
    while(i<32){
   	    if(i<临时菜单.length){
   			className('sydb2')[i].取=临时菜单[i];
   			className('sydb2')[i].style.display = 'block';
   			className('sydb2')[i].innerText = 临时菜单[i].名称;
   			className('sydb2')[i].onclick = function(){
   			   吃掉这个菜(this.取);
   			};
   		}else{
   			className('sydb2')[i].style.display = 'none';
   		}
   	i++
   }
   id('syqian').onclick = function(){};
   id('syhou').onclick = function(){};
}
function 吃掉这个菜(菜名){
	id('sy').style.display = 'none';
	id('hukoupucha').style.display = 'block';
	id('huhouTitle').innerText = 菜名.名称;
	id('huhouText').innerText = 菜名.名称 + "，属于" + 菜名.类 + "类，价格：" + 菜名.级别 * 10000;
	id('huhouText').innerText += "\n要点这个菜吗？";
	id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';id('sy').style.display = 'block';}
	id('hkan0').onclick = function(){
	    if(菜名.类 == "肉"){
	       属性.才艺 += 5 * 菜名.级别;
	       属性.体力上限 += 5 * 菜名.级别;
	       属性.武力 += 2 * 菜名.级别;
	       属性.统帅 += 2 * 菜名.级别;
	       国家.金钱 -= 10000 * 菜名.级别;
	    }
	    else if(菜名.类 == "素"){
	       属性.才艺 += 5 * 菜名.级别;
	       属性.健康 += 10 * 菜名.级别;
	       属性.政治 += 2 * 菜名.级别;
	       属性.智力 += 2 * 菜名.级别;
	       国家.金钱 -= 10000 * 菜名.级别;
	    }
	    else if(菜名.类 == "汤"){
	       属性.健康 += 10 * 菜名.级别;
	       属性.魅力 += 2 * 菜名.级别;
	       属性.才艺 += 5 * 菜名.级别;
	       国家.金钱 -= 10000 * 菜名.级别;
	    }
	    else if(菜名.类 == "套餐"){
	       属性.才艺 += 5 * 菜名.级别;
	       属性.体力上限 += random(5 * 菜名.级别);
	       属性.政治 += random(2 * 菜名.级别);
	       属性.统帅 += random(2 * 菜名.级别);
	       属性.武力 += random(2 * 菜名.级别);
	       属性.智力 += random(2 * 菜名.级别);
	       国家.金钱 -= 10000 * 菜名.级别;
	    }
	    更新资料();
		关闭鸿宾楼程序();
		id('hukoupucha').style.display = 'none';id('syb').style.display = 'block';
        id('syb2').style.display = 'none';id('sy').style.display = 'none';
	}
   
}
function 关闭鸿宾楼程序(){
	缓动黑幕();
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_343126.webp";
   id('yyText').innerText = "小二：好酒好菜来啦！客官，请慢用。";
   id('yykuang').onclick = function(){
      var _loc2_ = random(6);
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].朝廷相性 !== ""&&_all_rencai[i].朝廷相性 !== undefined&&_all_rencai[i].名字 !== "张起灵"&&_all_rencai[i].名字 !== "黑瞎子"){
            var 小官 = _all_rencai[i];
         }
         i++;
      }
	  if(小官 !== undefined){
		  d = 0;
		  while(d < _all_rencai.length)
		  {
		     if(_all_rencai[d].名字 == 小官.朝廷相性&&_all_rencai[d].名字 !== "张起灵"&&_all_rencai[d].名字 !== "黑瞎子")
		     {
		        var 大官 = _all_rencai[d];
		     }
		     d++;
		  }
		}
      
      if(_loc2_ == 0&&小官 !== undefined&&大官 !== undefined){
         id('yyText').innerText = "（诶？坐在那边的不是" + 小官.名字 + "和" + 大官.名字 + "吗？）";
         id('yykuang').onclick = function(){
            id('yyText').innerText = "" + 小官.名字 + "：" + 大官.名字 + "大人，这次还多亏了您照顾啊，要不被言官弹劾，下官可就不好办了。这个，区区薄礼请您笑纳。";
            id('yykuang').onclick = function(){
               id('yyText').innerText = "" + 大官.名字 + "：都是我一句话的事儿，好办。说白了，大家都是一条船上的人，互相照应是应该的。往后你要是发达了，本官还得靠你提拔呢。";
               id('yykuang').onclick = function(){
                  id('yyText').innerText = "" + 小官.名字 + "：哎哟，瞧您说的，下官以后可就仰仗大人了。";
                  id('yykuang').onclick = function(){
                     缓动黑幕();
                     id('youyuan').style.display = 'none';
                     id("jingcheng").style.display="none";
                     主角.当前时辰 += 1;
                     时辰推进();
                  };};
            };
         };
      }
      else if(_loc2_ == 1&&小官 !== undefined&&大官 !== undefined){
         id('yyText').innerText = "（诶？坐在那边的不是" + 小官.名字 + "和" + 大官.名字 + "吗？）";
         id('yykuang').onclick = function(){
            id('yyText').innerText = "" + 小官.名字 + "：" + 大官.名字 + "大人，一点心意，请您笑纳。";
            id('yykuang').onclick = function(){
               id('yyText').innerText = "" + 大官.名字 + "：这是干什么？本官提拔你的亲属也不是为了这点钱。";
               id('yykuang').onclick = function(){
                  id('yyText').innerText = "" + 小官.名字 + "：这也是下官亲属的意思，下官只是代他交给大人，请大人收下。往后在朝中还希望大人多提携。";
                  id('yykuang').onclick = function(){
                     缓动黑幕();
                     id('youyuan').style.display = 'none';
                     id("jingcheng").style.display="none";
                     主角.当前时辰 += 1;
                     时辰推进();
                  };};
            };
         };
      }
      else if(_loc2_ == 2&&小官 !== undefined&&大官 !== undefined){
         id('yyText').innerText = "（诶？坐在那边的不是" + 小官.名字 + "和" + 大官.名字 + "吗？）";
         id('yykuang').onclick = function(){
            id('yyText').innerText = "" + 小官.名字 + "：" + 大官.名字 + "大人，最近下官想买下西街的那家店铺，可是那掌柜死活就是不肯卖，能不能给他点颜色瞧瞧。";
            id('yykuang').onclick = function(){
               id('yyText').innerText = "" + 大官.名字 + "：就这么点小事，一会儿带着我的人去，就说是官府查封，把人抓起来关几天，看他还敢不卖。";
               id('yykuang').onclick = function(){
                  id('yyText').innerText = "" + 小官.名字 + "：有大人这句话就够了。";
                  id('yykuang').onclick = function(){
                     缓动黑幕();
                     id('youyuan').style.display = 'none';
                     id("jingcheng").style.display="none";
                     主角.当前时辰 += 1;
                     时辰推进();
                  };};
            };
         };
      }
      else if(_loc2_ == 3&&小官 !== undefined&&大官 !== undefined){
         id('yyText').innerText = "（诶？坐在那边的不是" + 小官.名字 + "和" + 大官.名字 + "吗？）";
         id('yykuang').onclick = function(){
            id('yyText').innerText = "" + 小官.名字 + "：最近朝野中出现了一股新势力，" + 大官.名字 + "大人有何想法？";
            id('yykuang').onclick = function(){
               id('yyText').innerText = "" + 大官.名字 + "：应该还不成气候，也并没有对我们构成威胁。";
               id('yykuang').onclick = function(){
                  id('yyText').innerText = "" + 小官.名字 + "：在下倒觉得应该提防着点……";
                  id('yykuang').onclick = function(){
                     缓动黑幕();
                     id('youyuan').style.display = 'none';
                     id("jingcheng").style.display="none";
                     主角.当前时辰 += 1;
                     时辰推进();
                  };};
            };
         };
      }
      else if(_loc2_ == 4&&小官 !== undefined&&大官 !== undefined){
         id('yyText').innerText = "（诶？坐在那边的不是" + 小官.名字 + "和" + 大官.名字 + "吗？）";
         id('yykuang').onclick = function(){
            id('yyText').innerText = "" + 小官.名字 + "：" + 大官.名字 + "大人，您看皇储之争最后会是那家赢，我们要不要先站好队？";
            id('yykuang').onclick = function(){
               id('yyText').innerText = "" + 大官.名字 + "：你不要命了？这种事情最好还是不要在外面谈论。";
               id('yykuang').onclick = function(){
                  id('yyText').innerText = "" + 小官.名字 + "：是……";
                  id('yykuang').onclick = function(){
                     缓动黑幕();
                     id('youyuan').style.display = 'none';
                     id("jingcheng").style.display="none";
                     主角.当前时辰 += 1;
                     时辰推进();
                  };};
            };
         };
      }
      else{
         id('yyText').innerText = "酒足饭饱。该回宫了。";
         id('yykuang').onclick = function(){
            缓动黑幕();
            id('youyuan').style.display = 'none';
            id("jingcheng").style.display="none";
            主角.当前时辰 += 1;
            时辰推进();
         };
      }
   };
}
function 怡红院程序(){
  id('qinglou').style.display = 'block';
   var _loc2_ = [];
   var _loc3_ = 0;
   while(_loc3_ < _all_mingji.length){
      if(_all_mingji[_loc3_].标 == 0){
         _loc2_.push(_all_mingji[_loc3_]);
      }
      _loc3_ += 1;
   }
   if(_loc2_.length > 0&&random(1) == 0){
      var _obj = _loc2_[random(_loc2_.length)];
      id("qltx0").style.display="none";
      id("qltx1").style.display="none";
      id("ql板").style.display="none";
	  id('ql框').style.display = 'block';
      id("ql对话2").innerText = "老鸨：我们这的新来了位【" + _obj.名称 + "】姑娘，那生的是美若天仙啊。可这姑娘出了几道题，说是全答对了的人才肯见，黄老爷要不要试试？";
      id("qlan1").style.display="block";
      id("qlan2").style.display="block";
	  id("qlan0").style.display="none";
      id("qlan1").innerText = "试试看";
      id("qlan2").innerText = "没兴趣";
      id("qlan1").onclick = function(){
         id("ql对话2").innerText = "老鸨：那就请黄老爷接题吧。";
         id("qlan1").style.display="none";id("qlan2").style.display="none";
         id("ql框").onclick = function(){
            问答程序(3,_obj);
            关闭青楼程序();
         };
      };
      id("qlan2").onclick = function(){
         id("qlan1").style.display="none";id("qlan2").style.display="none";
         id("ql对话2").innerText = "老鸨：没关系我们这还有其他姑娘。";
         id("ql框").onclick = function(){
            关闭青楼程序();
         };
      };
   }
   else{
	   id("qltx0").style.display="block";
	   id("qltx1").style.display="block";
	   id("ql板").style.display="block";id('ql框').style.display = 'none';
      var _loc4_ = random(65) + 1;
      新后宫图形读取程序(id("qltx0"),_loc4_,"青楼");
      _loc4_ = random(50) + 66;
      新后宫图形读取程序(id("qltx1"),_loc4_,"青楼");
      var _loc5_ = 姓[random(姓.length)] + "姑娘";
      var _loc6_ = 姓[random(姓.length)] + "姑娘";
      id("ql对话").innerText = "老鸨安排" + _loc5_ + "与" + _loc6_ + "前来伺候。(快乐增加)";
      var _loc7_ = random(100);
      if(_loc7_ < 7){
         id("ql对话").innerText += "，很快乐。";
         属性.快乐 += 25;
         if(属性.快乐 > 100){
            属性.快乐 = 100;
         }
         id("qlan0").onclick = function(){
            id("ql板").style.display="none";id('ql框').style.display = 'block';
            id("ql对话2").innerText= "老鸨：黄老爷今天玩得这么开心。\n我想替姑娘们求点打赏。";
			id("qlan0").style.display="none";
			id("qlan1").style.display="block";
			id("qlan2").style.display="block";
			id("qlan3").style.display="block";
			id("qlan1").innerText = "一百两";
			id("qlan2").innerText = "五十两";
			id("qlan3").innerText = "没零钱";
            id("qlan3").onclick = function(){
               id("ql对话2").innerText= "老鸨：一毛不拔。";
               id("qlan1").style.display="none";
               id("qlan2").style.display="none";
               id("qlan3").style.display="none";
               id('ql框').onclick = function(){
                  关闭青楼程序();               };
            };
            id("qlan2").onclick = function(){
              id("qlan1").style.display="none";
              id("qlan2").style.display="none";
              id("qlan3").style.display="none";
               id("ql对话2").innerText = "老鸨：谢谢黄老爷。";
               id('ql框').onclick = function(){
                  关闭青楼程序();};
            };
            id("qlan1").onclick = function(){
               id("qlan1").style.display="none";
               id("qlan2").style.display="none";
               id("qlan3").style.display="none";
               id("ql对话2").innerText = "老鸨：黄老爷真大方，姑娘们好生伺候着。";
               id('ql框').onclick = function(){
                  关闭青楼程序();};
            };
         };
      }
      else if(_loc7_ < 13){
         id("qlan0").onclick = function(){
			 id("qlan0").style.display="none";
            id("ql板").style.display="none";id('ql框').style.display = 'block';
            id("ql对话2").innerText = "老鸨：黄老爷既然今天玩得那么高兴。\n不如留宿一晚，我多安排一些姑娘来伺候。";
            id('ql框').onclick = function(){
               关闭青楼程序();
            };
         };
      }
      else if(_loc7_ < 16){
         id("qlan0").onclick = function(){
			 id("qlan0").style.display="none";
            id("ql板").style.display="none";id('ql框').style.display = 'block';
            id("ql对话2").innerText = "老鸨：有些姑娘跟着我做了很多年了。\n黄老爷如有兴趣，可以八折让老爷赎回去当丫鬟。";
            id('ql框').onclick = function(){
               关闭青楼程序();
            };
         };
      }
      else{
         属性.快乐 += 20;
         if(属性.快乐 > 100){
            属性.快乐 = 100;
         }
         id("qlan0").onclick = function(){
            关闭青楼程序();
         };
      }
      属性.体力 += 100;
      if(属性.体力 > 属性.体力上限){
         属性.体力 = 属性.体力上限;
      }
      更新资料();
   }
}
function 关闭青楼程序(){
   属性.健康 -= 5;
   id('qinglou').style.display = 'none';
   id("qlan0").style.display="block";
   主角.当前时辰 += 1;
   时辰推进();
}
function 问答程序(_num,_obj){
	缓动黑幕();
	id("倒计时").style.display = 'block';
	var sui = random(_wentiku.length);
	var linshi = 刷出题目(sui);
	id('剧情对话').style.display = 'block';剧情对话板.onclick = function(){};
	剧情背景.src="a0aPic_BG/Tu_777000.webp";
	剧情头像.style.display = 'none';
	id('剧情an0').onclick = function(){
	    _daan = linshi[0]._at;
	    回答结果(_daan,sui,_num,_obj);
	};
	id('剧情an1').onclick = function(){
	    _daan = linshi[1]._at;
	    回答结果(_daan,sui,_num,_obj);
	};
	id('剧情an2').onclick = function(){
	    _daan = linshi[2]._at;
	    回答结果(_daan,sui,_num,_obj);
	};
}
function 刷出题目(sui){
   var _loc3_ = 0;
   var _loc4_ = [];
   _loc3_ = 0;
   while(_loc3_ < 3)
   {
      _wentiku[sui]._A[_loc3_]._n = random(100);
      _loc4_.push(_wentiku[sui]._A[_loc3_]);
      _loc3_ += 1;
   }
   _loc4_.sort(compare("_n"));
   对话打字效果(_wentiku[sui]._Q,[_loc4_[0]._at,_loc4_[1]._at,_loc4_[2]._at]);
   return _loc4_; 
}
function 回答结果(_daan,sui,_num,_obj){
	id("倒计时").style.display = 'none';
   if(_daan == _wentiku[sui]._A[0]._at){
      播放音乐("zhengque");
      小提示("回答正确")
	  _num1 = _num - 1;
     if(_num1 <= 0)
     {
        名妓见面(_obj);
     }
     else
     {
        问答程序(_num1,_obj);
     }
   }
   else
   {
	  小提示("回答错误！")
      播放音乐("cuowu");
      对话打字效果("老鸨：对不住，您答错了，今儿还是先请回吧。");
      剧情对话板.onclick = function()
      {
         缓动黑幕();
         id('剧情对话').style.display = 'none';
      };
   }
}
function 名妓见面(名妓){
   名妓.标 = 1;
   对话打字效果("老鸨：终于有人全答对了。有请" + 名妓.名称 + "姑娘。");
   剧情对话板.onclick = function()
   {剧情头像.style.display = 'block';
      出现这个人的头像(剧情头像,名妓);
      对话打字效果(名妓.名称 + "：" + 名妓.名称 + "见过黄老爷。");
      剧情对话板.onclick = function()
      {
         对话打字效果("（有" + 名妓.名称 + "姑娘作陪，喝酒聊天，十分愉快。）");
         剧情对话板.onclick = function()
         {
            对话打字效果(名妓.名称 + "：黄老爷才高八斗，学富五车，小女子十分钦佩，有心相许，不知黄老爷可否帮小女子赎身？小女子终生为报。");
            剧情对话板.onclick = function()
            {
               var 赎金 = (random(50) + 120) * 1000;
               对话打字效果("（要帮她赎身吗？需要赎金" + 赎金 + "两）",["算了","帮她赎身"]);
              id('剧情an1').onclick = function()
               {
                  国家.金钱 -= 赎金;
                  对话打字效果(名妓.名称 + "：那小女子就跟着黄老爷了。");
                  剧情对话板.onclick = function()
                  {
                     名妓后宫册封(名妓);
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
              id('剧情an0').onclick = function()
               {
                  对话打字效果(名妓.名称 + "：看来是小女子想多了。");
                  剧情对话板.onclick = function()
                  {
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            };
         };
      };
   };
}
function 名妓后宫册封(对象){
   var 临时对象 = new Object();
   临时对象._code = 对象._code;
   临时对象.年龄 = 14 + random(7);
   临时对象.性别 = 对象.性别;
   临时对象.喜好 = 0;
   临时对象.介绍 = undefined;
   临时对象.爱 = 55 + random(10);
   临时对象.经验 = 100;
   临时对象.称呼 = "宫女";
   临时对象.名字 = 对象.名称;
   临时对象.家族 = 对象.家族;
   临时对象.文化 = 8;
   临时对象.头像 = 对象.头像;
   临时对象.统帅 = 对象.统帅;
   临时对象.武力 = 对象.武力;
   临时对象.智力 = 对象.智力;
   临时对象.政治 = 对象.政治;
   临时对象.魅力 = 对象.魅力;
   临时对象.野心 = 对象.野心;
   临时对象.清廉 = 对象.清廉;
   临时对象.简介 = 对象.介绍;
   临时对象.状态 = 0;
   性格计算(临时对象);
   临时对象.id = undefined;
   临时对象.孕 = 0;
   临时对象.病 = 0;
   临时对象.仙 = 0;
   临时对象.护 = 0;
   临时对象.生育 = 0;
   临时对象.出身 = "青楼花魁";
   临时对象.宫殿 = "";
   临时对象.寝殿 = "";
   临时对象.后宫相性 = "";
   临时对象.后宫势力 = 0;
   临时对象.朝廷相性 = "";
   临时对象.朝廷势力 = 0;
   临时对象.皇嗣相性 = "";
   册封名号(临时对象,8)
}
function 奇兰茶馆程序(){
   id("chaguan").style.display="block";
   id("lkcg").onclick = function(){
      id("chaguan").style.display="none";
      主角.当前时辰 += 1;
      时辰推进();
   };
   if(主角.解语花 == 1&&主角.吴邪 == 0&&主角.张起灵 == 0){
      主角.吴邪 = 1;
      id("cgText").innerText = "今天茶馆里来了一个奇怪的古董贩子。";
      id("cgkuang").onclick = function(){
         抓住吴邪();
         id("chaguan").style.display="none";
         主角.当前时辰 += 1;
         时辰推进();
      };
   }
   else{
      id("cgText").innerText = "茶馆里什么样的人都有，其中还有一些来历不明的，要去找谁攀谈一下吗？";
      id("cgkuang").onclick = function(){};
	  if(主角.李枫 > 0){
         id("武林人士").style.display="none";
      }
	  else{id("武林人士").style.display="block";}
      if(主角.顾惜朝 > 0){
         id("落魄书生").style.display="none";
      }else{id("落魄书生").style.display="block";}
      id("算命先生").onclick = function(){
         id("chaguan").style.display="none";
         跟算命先生攀谈();
      };
     id("和尚").onclick = function(){
         id("chaguan").style.display="none";
         跟和尚攀谈();
      };
      id("江湖郎中").onclick = function(){
         id("chaguan").style.display="none";
         跟江湖郎中攀谈();
      };
      id("武林人士").onclick = function(){
         id("chaguan").style.display="none";
         跟武林人士攀谈();
      };
      id("落魄书生").onclick = function(){
         id("chaguan").style.display="none";
         跟落魄书生攀谈();
      };
      id("失明琴师").onclick = function(){
         id("chaguan").style.display="none";
         跟失明琴师攀谈();
      };
   }
}
function 跟算命先生攀谈(){
   id('youyuan').style.display = 'block';id('yyan').style.display = 'block';
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_152345.webp";id('yykuang').onclick = function(){};
   id('yyText').innerText = "算命先生：这位客官，看您器宇轩昂，定不是平凡之辈，只需500两，容在下给您算一卦如何？";
   id('yyan1').innerText = "算一卦";
   id('yyan2').innerText = "不算";
   id('yyan1').onclick= function(){
      id('yyan').style.display = 'none';
      国家.金钱 -= 500;
      id('yyText').innerText = "算命先生：这位客官，客官请您伸出手来……";
      id('yykuang').onclick = function(){
         id('yyText').innerText = "（看手相中……）";
         id('yykuang').onclick = function(){
            id('yyText').innerText = "算命先生：恕在下无礼，客官您还有" + Math.round(属性.寿命 / 12) + "年阳寿。";
            id('yykuang').onclick = function(){
               id('youyuan').style.display = 'none';
               主角.当前时辰 += 1;
               时辰推进();
            };
         };
      };
   };
   id('yyan2').onclick= function(){
      id('youyuan').style.display = 'none';
      主角.当前时辰 += 1;id('yyan').style.display = 'none';
      时辰推进();
   };
}
function 跟和尚攀谈(){
   id('youyuan').style.display = 'block';
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_152345.webp";id('yykuang').onclick = function(){};
   if(年 >= 6&&主角._relation_chenwangyan >= 50&&主角.小王爷 == 0){
      主角.小王爷 = 1;
      小王爷调戏和尚();
      id('youyuan').style.display = 'none';
      主角.当前时辰 += 1;
      时辰推进();
   }
   else{
      id('yyText').innerText = "和尚：贫僧来自西山红螺寺，法号戒元，此次下山是为修缮寺庙筹集善款而来，施主是否愿意捐些钱财？";
      id('yyan').style.display = 'block';
      id('yyan1').innerText = "给一万两";
      id('yyan2').innerText = "不给";
      id('yyan1').onclick= function(){
         id('yyan').style.display = 'none';
         属性.道德 += 40;
         国家.金钱 -= 10000;
         id('yyText').innerText = "和尚：阿弥陀佛，善哉善哉。";
         id('yykuang').onclick = function(){
            id('youyuan').style.display = 'none';
            主角.当前时辰 += 1;
            时辰推进();
         };
      };
      id('yyan2').onclick= function(){
         id('youyuan').style.display = 'none';
         主角.当前时辰 += 1;id('yyan').style.display = 'none';
         时辰推进();
      };
   }
}
function 跟江湖郎中攀谈(){
   id('youyuan').style.display = 'block';
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_152345.webp";id('yykuang').onclick = function(){};
   id('yyText').innerText = "江湖郎中：这位老爷，看您印堂发黑，面色不佳，这是有大病的征兆啊！老夫这里有一剂良药，只需10000两，定能保您寿比南山。";
   id('yyan').style.display = 'block';
   id('yyan1').innerText = "买了";
   id('yyan2').innerText = "不买";
   id('yyan1').onclick= function(){
       id('yyan').style.display = 'none';
      属性.寿命 += random(5) - 2;
      国家.金钱 -= 10000;
      id('yyText').innerText = "江湖郎中：老夫这就给您把药化开，请您服药。";
      id('yykuang').onclick = function(){
         id('yyText').innerText = "（服药中……）";
         id('yykuang').onclick = function(){
            id('yyText').innerText = "（感觉似乎是有点不一样了）";
            id('yykuang').onclick = function(){
               id('youyuan').style.display = 'none';
               主角.当前时辰 += 1;id('yyan').style.display = 'none';
               时辰推进();
            };
         };
      };
   };
   id('yyan2').onclick= function(){
      id('youyuan').style.display = 'none';id('yyan').style.display = 'none';
      主角.当前时辰 += 1;
      时辰推进();
   };
}
function 跟武林人士攀谈(){
   id('youyuan').style.display = 'block';id('yyan').style.display = 'block';
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_152345.webp";id('yykuang').onclick = function(){};
   id('yyText').innerText = "武林人士：这位兄台是哪个门派的？要不要和在下过两招？";
   id('yyan1').innerText = "比武";
   id('yyan2').innerText = "算了";
   id('yyan1').onclick= function(){
      id('yyan').style.display = 'none';
      属性.武力 += 4;
      id('yyText').innerText = "（比武中……）";
      if(属性.武力 > 600&&主角.李枫 == 0){
         主角.李枫 = 1;
         id('yykuang').onclick = function(){
            id('yyText').innerText = "（虽然武林中人也很厉害，但还是不如皇上）";
            id('yykuang').onclick = function(){
				id('yyan').style.display = 'block';
               id('yyText').innerText = "武林人士：大侠武力超群，李某甘拜下风。不知大侠是否愿意收李枫为徒？";
               id('yyan1').innerText = "收";
               id('yyan2').innerText = "不收";
               id('yyan1').onclick= function(){
                  id('yyan').style.display = 'none';
                  id('yyText').innerText = "皇上：你可是做了天下最大的门派掌门的徒弟啊，哈哈哈，跟朕回宫，给朕效力吧。";
                  id('yykuang').onclick = function(){
                     主角.李枫 = 2;
                     var _loc2_ = 开启血滴子(5);
                     血滴子.push(_loc2_);
                     id('youyuan').style.display = 'none';id('yyan').style.display = 'none';
                     主角.当前时辰 += 1;
                     时辰推进();
                  };};
               id('yyan2').onclick= function(){
                  id('yyan').style.display = 'none';
                  id('yyText').innerText = "皇上：算了，我这门派已经不收弟子了，哈哈哈。";
                  id('yykuang').onclick = function(){
                     id('youyuan').style.display = 'none';id('yyan').style.display = 'none';
                     主角.当前时辰 += 1;
                     时辰推进();
                  };};
            };
         };
      }
      else{
         id('yykuang').onclick = function(){
            id('yyText').innerText = "（武林中人果然厉害）";
            id('yykuang').onclick = function(){
               id('yyText').innerText = "武林人士：承让了。";
               id('yykuang').onclick = function(){
                  id('youyuan').style.display = 'none';
                  主角.当前时辰 += 1;id('yyan').style.display = 'none';
                  时辰推进();};
            };
         };
      }
   };
   id('yyan2').onclick= function(){
      id('youyuan').style.display = 'none';
      主角.当前时辰 += 1;id('yyan').style.display = 'none';
      时辰推进();
   };
}
function 跟落魄书生攀谈(){
   id('youyuan').style.display = 'block';
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_152345.webp";id('yykuang').onclick = function(){};
   id('yyText').innerText = "落魄书生：这位兄台也是今年的落榜生？哎！可惜我满腔抱负无处施展。";
   id('yyan').style.display = 'block';
   id('yyan1').innerText = "听他说说";
   id('yyan2').innerText = "算了";
   id('yyan1').onclick= function(){
       id('yyan').style.display = 'none';
      属性.智力 += 4;
      id('yyText').innerText = "落魄书生：当今的朝政若能……";
      id('yykuang').onclick = function(){
         id('yyText').innerText = "（高谈阔论中……）";
         id('yykuang').onclick = function(){
            id('yyText').innerText = "（这书生好像还有点才华。）";
            id('yykuang').onclick = function(){
               if(属性.智力 > 600&&主角.顾惜朝 == 0){
                  id('yyText').innerText = "（是否让他入朝为官？）";
                  id('yyan').style.display = 'block';
                  id('yyan1').innerText = "入朝";
                  id('yyan2').innerText = "算了";
                  id('yyan1').onclick= function(){
                    id('yyan').style.display = 'none';
                     id('yyText').innerText = "皇上：阁下的才华十分难得，可谓国家栋梁之材。这里有一封书信，你明日拿着它去官府，他们自会给你安排。";
                     id('yykuang').onclick = function(){
                        主角.顾惜朝 = 1;
                        var _loc2_ = 创建新人才();
                        var _loc3_ = 所有敌将[110];
                        让这个人才变成敌将(_loc2_,_loc3_);
                        _all_rencai.push(_loc2_);
                        id('youyuan').style.display = 'none';id('yyan').style.display = 'none';
                        主角.当前时辰 += 1;
                        时辰推进();
                     };
                  };
                  id('yyan2').onclick= function(){
                     id('youyuan').style.display = 'none';id('yyan').style.display = 'none';
                     主角.当前时辰 += 1;
                     时辰推进();
                  };}
               else{
                  id('youyuan').style.display = 'none';
                  主角.当前时辰 += 1;id('yyan').style.display = 'none';
                  时辰推进();}
            };
         };
      };
   };
   id('yyan2').onclick= function(){
      id('youyuan').style.display = 'none';id('yyan').style.display = 'none';
      主角.当前时辰 += 1;
      时辰推进();
   };
}
function 跟失明琴师攀谈(){
   id('youyuan').style.display = 'block';id('yyan').style.display = 'block';
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_152345.webp";id('yykuang').onclick = function(){};
   id('yyText').innerText = "失明琴师：客官想听什么曲子？";
   id('yyan1').innerText = "点首曲子";
   id('yyan2').innerText = "算了";
   id('yyan1').onclick= function(){
      id('yyan').style.display = 'none';
      属性.魅力 += 23;
      属性.才艺 += 23;
      id('yyText').innerText = "（听琴中……）";
      id('yykuang').onclick = function(){
         id('yyText').innerText = "（曲中似乎带着一丝哀婉）";
         id('yykuang').onclick = function(){
            id('yyText').innerText = "失明琴师：客官喜欢这首曲子吗？";
            id('yykuang').onclick = function(){
               id('youyuan').style.display = 'none';
               主角.当前时辰 += 1;
               时辰推进();
            };
         };
      };
   };
   id('yyan2').onclick= function(){
      id('youyuan').style.display = 'none';id('yyan').style.display = 'none';
      主角.当前时辰 += 1;
      时辰推进();
   };
}
function 青炉房程序(){
  id("qita").style.display="block";
  id("qinglufang").style.display="block";
  id('qitaTittle').innerText = '青炉房';
  id('qitalikai').onclick = function (){id("qinglufang").style.display="none";id("qita").style.display="none";};
  id('qitaBG').src =LJ +  'a0aPic_BG/Tu_8.webp';
  id("ziyin").onclick = function(){
     id('neishiMB').style.display = 'block';
     id('neishiBG').style.display = 'none';
     id('neishi2').style.display = 'none';
     id('neishiTitle').innerText = '青炉房';
     id('neishiText').innerText = "恭迎皇上。";
     id('nsan0').innerText = '开炉炼丹';
     id('nsan1').innerText = '服用丹药';
     id('nsan2').innerText = '试验丹药';
     id('nsan3').innerText = '丢弃丹药';
     id('nsan0').onclick = function (){开炉炼丹();id('neishiMB').style.display = 'none';};
     id('nsan1').onclick = function (){服用丹药程序();};
     id('nsan2').onclick = function (){试验丹药程序();};
     id('nsan3').onclick = function (){丢弃丹药程序();};
   };
}
function 查看丹药程序(区别参数){
   id('sy').style.display = 'block';
   id('syb').style.display = 'none';
   id('syb2').style.display = 'block';
   id('sysm').innerText = "";
   id('qxsy').onclick = function(){id('syb').style.display = 'block';
   id('syb2').style.display = 'none';id('sy').style.display = 'none';}
   if(区别参数 == undefined){
      id('syTitle').innerText = "丹药列表";
   }
   else if(区别参数 == 1){
      id('syTitle').innerText = "试用丹药";
   }
   else if(区别参数 == 2){
      id('syTitle').innerText = "丢弃丹药";
   }
   else if(区别参数 == 3){
      id('syTitle').innerText = "服用丹药";
   }
   序列 = 0;
   更新丹药详细资料(序列,区别参数);
   id('syqian').onclick = function(){
      if(序列 > 0){
         序列 -= 1;
         更新丹药详细资料(序列,区别参数);
      }
   };
   id('syhou').onclick = function(){
      if(序列 < Math.round(主角.丹药.length / 20)){
         序列 += 1;
         更新丹药详细资料(序列,区别参数);
      }
   };
}
function 更新丹药详细资料(序列,区别参数){
   var _loc5_ = 序列;
   var _loc3_ = 0;
   while(_loc3_ < 32){
      if(主角.丹药[_loc5_ * 32 + _loc3_] !== undefined){
         className('sydb2')[_loc3_].style.display="block";
         _loc6_ = ["[阳]","[阴]"];
         className('sydb2')[_loc3_].innerText = 主角.丹药[_loc5_ * 20 + _loc3_].名称 + _loc6_[主角.丹药[_loc5_ * 20 + _loc3_].性];
         if(主角.丹药[_loc5_ * 20 + _loc3_].性 == 0){
            className('sydb2')[_loc3_].color = "#ffff00";
         }
         className('sydb2')[_loc3_].属性 = _loc5_ * 20 + _loc3_;
         if(区别参数 == 1){
            className('sydb2')[_loc3_].onclick = function(){
               太监吃下这个药(this.属性);id('syb').style.display = 'block';
               id('syb2').style.display = 'none';id('sy').style.display = 'none';
            };
         }
         else if(区别参数 == 2){
            className('sydb2')[_loc3_].onclick = function(){
               var _loc3_ = 主角.丹药[this.属性].名称;
               主角.丹药.splice(this.属性,1);
               id('syb').style.display = 'block';
               id('syb2').style.display = 'none';id('sy').style.display = 'none';
            };
         }
         else if(区别参数 == 3){
            className('sydb2')[_loc3_].onclick = function(){
               var _loc4_ = 主角.丹药[this.属性].名称;
               var _loc3_ = 0;
               while(_loc3_ < 主角.丹药[this.属性].增加.length){
                  属性[主角.丹药[this.属性].增加[_loc3_][0]] += 主角.丹药[this.属性].增加[_loc3_][1];
                  _loc3_ = _loc3_ + 1;}
               更新资料(属性栏);
               主角.丹药.splice(this.属性,1);
               id('syb').style.display = 'block';
               id('syb2').style.display = 'none';id('sy').style.display = 'none';
            };
         }
      }
      else{
         className('sydb2')[_loc3_].style.display="none";
      }
      _loc3_ = _loc3_ + 1;
   }
}
function 太监吃下这个药(对象){
   var 药剂 = 主角.丹药[对象];
   id('yyText').innerText  = "谢皇上赐药。";
   id('yykuang').onclick = function(){
      缓动黑幕();
      id('yyText').innerText = "过了一会……";
      id('yykuang').onclick= function(){
         缓动黑幕();
         id('yyText').innerText = "又过了一会……";
         id('yykuang').onclick= function(){
            缓动黑幕();
            var _loc2_ = 药剂.增加[0];
            if(_loc2_[0] == "寿命"){
               if(_loc2_[1] < 0){
                  id('yyText').innerText = 太监名字 + "脸色发青，已抬出宫外。";}
               else{
                  id('yyText').innerText = 太监名字 + "脸色微红，精神抖擞。看来丹药可能有益寿延年之效。";}
            }
            else if(_loc2_[0] == "体力上限"){
               if(_loc2_[1] < 0){
                  id('yyText').innerText = 太监名字 + "印堂发黑，已送往御医所救治。";}
               else{
                  id('yyText').innerText = 太监名字 + "双目有光，红光满面。丹药估计有强精壮骨之效。";}
            }
            else if(_loc2_[0] == "兴奋"){
               if(_loc2_[1] < 0){
                  id('yyText').innerText = 太监名字 + "好像没什么事发生。";}
               else{
                  id('yyText').innerText = 太监名字 + "：好奇怪，很想找根柱子蹭一下。";}
            }
            else if(_loc2_[0] == "体力"){
               if(_loc2_[1] < 0){
                  id('yyText').innerText = 太监名字 + "突然晕倒了，已送往御医院。";}
               else{
                  id('yyText').innerText = 太监名字 + "：感觉精神了很少。";}
            }
            else if(_loc2_[0] == "才艺"){
               if(_loc2_[1] < 0){
                  id('yyText').innerText = 太监名字 + "：耳朵可以听到鸣叫声。";}
               else{
                  id('yyText').innerText = 太监名字 + "：感觉耳朵听声音变清晰了。";}
            }
            else if(_loc2_[0] == "魅力"){
               if(_loc2_[1] < 0){
                  id('yyText').innerText = 太监名字 + "：没什么感觉。";}
               else{
                  id('yyText').innerText = 太监名字 + "：感觉身体残疾的部分有了生机。";}
            }
            else if(_loc2_[0] == "武力"){
               if(_loc2_[1] < 0){
                  id('yyText').innerText = 太监名字 + "：没什么感觉。";}
               else{
                  id('yyText').innerText = 太监名字 + "：没什么感觉。";}
            }
            else if(_loc2_[0] == "智力"){
               if(_loc2_[1] < 0){
                  id('yyText').innerText = 太监名字 + "：没什么感觉。";}
               else{
                  id('yyText').innerText = 太监名字 + "：没什么感觉。";}
            }
            else if(_loc2_[0] == "健康"){
               if(_loc2_[1] < 0){
                  id('yyText').innerText = 太监名字 + "：感觉有点虚，站不住。";}
               else{
                  id('yyText').innerText = 太监名字 + "：好像体内觉得舒服通畅了。";}
            }
            else if(_loc2_[0] == "快乐"){
               if(_loc2_[1] < 0){
                  id('yyText').innerText = 太监名字 + "：感觉心里有种不愉快。";}
               else{
                  id('yyText').innerText = 太监名字 + "：觉得心情突然好了不少。";}
            }
            else{
               id('yyText').innerText = 太监名字 + "没什么感觉。";
            }
            id('yykuang').onclick= function(){
               id('yyText').innerText = "试药结束。";
               id('yykuang').onclick= function(){
                  id('youyuan').style.display = 'none';id('yy头像').style.display = 'none';};
            };
         };
      };
   };
}
function 开炉炼丹(){
   id('liandan').style.display = 'block';
   var _loc10_ = 2;
   var _loc12_ = 10;
   var _loc5_ = 0;
   var _loc9_ = [];
   更新药材数量();
   更新炼制();
   id('lianzhi').onclick = function(){
      var _loc1_ = 0;
      i = 0;
      while(i < 主角.炼制.length){
         _loc1_ += 主角.炼制[i];
         i++;
      }
      if(_loc1_ == 0){
         小提示("炉里没有药材");
      }
      else{
         出锅();
      }
   };
}
function 出锅(){
   var _loc5_ = 999;
   var _loc8_ = 0;
   var _loc7_ = 0;
   i = 0;
   while(i < 主角.炼制.length){
      if(主角.炼制[i] >= 90 &&主角.炼制[i] <= 99){
         _loc8_ += 1;
      }
      else if(主角.炼制[i] >= 50){
         _loc7_ += 1;
      }
      i++;
   }
   if(_loc8_ == 8){
      _loc5_ = 8;
   }
   else if(_loc7_ == 8){
      _loc5_ = random(8);
   }
   if(主角.炼制[0] + 主角.炼制[1] + 主角.炼制[2] + 主角.炼制[3] >= 主角.炼制[4] + 主角.炼制[5] + 主角.炼制[6] + 主角.炼制[7]){
      var _loc11_ = 0;
   }
   else{
      _loc11_ = 1;
   }
   var _loc3_ = [];
   var _loc4_ = 0;
   if(_loc5_ == 8){
      药剂名称 = "天地长寿丹";
      _loc3_ = [["寿命",6]];
      _loc4_ = 0;
   }
   else if(_loc5_ == 7){
      药剂名称 = "含笑半步颠";
      _loc3_ = [["寿命",-900]];
      _loc4_ = 1;
   }
   else if(_loc5_ == 6){
      药剂名称 = "狮虎强壮丹";
      _loc3_ = [["体力",500],["体力上限",25]];
      _loc4_ = 0;
   }
   else if(_loc5_ == 5){
      药剂名称 = "七星通络丹";
      _loc3_ = [["体力上限",40]];
      _loc4_ = 0;
   }
   else if(_loc5_ == 4){
      药剂名称 = "壮骨丸";
      _loc3_ = [["体力上限",5]];
      _loc4_ = 0;
   }
   else if(_loc5_ == 3){
      药剂名称 = "长生丸";
      _loc3_ = [["寿命",2]];
      _loc4_ = 0;
   }
   else if(_loc5_ == 2){
      药剂名称 = "消疲丹";
      _loc3_ = [["体力",300]];
      _loc4_ = 0;
   }
   else if(_loc5_ == 1){
      药剂名称 = "长生丸";
      _loc3_ = [["寿命",2]];
      _loc4_ = 0;
   }
   else if(_loc5_ == 0){
      药剂名称 = "消疲丹";
      _loc3_ = [["体力",300]];
      _loc4_ = 0;
   }
   else{
      var _loc2_ = [];
      _loc2_[0] = ["红",[["寿命",-80]]];
      _loc2_[1] = ["橙",[["体力上限",-35],["寿命",-40]]];
      _loc2_[2] = ["黄",[["寿命",2]]];
      _loc2_[3] = ["绿",[["体力上限",-45],["寿命",-40]]];
      _loc2_[4] = ["青",[["体力上限",15]]];
      _loc2_[5] = ["橙",[["寿命",2]]];
      _loc2_[6] = ["蓝",[["体力上限",35],["寿命",-24]]];
      _loc2_[7] = ["紫",[["体力",280]]];
      _loc2_[8] = ["白",[["才艺",4]]];
      _loc2_[9] = ["黑",[["魅力",3]]];
      _loc2_[10] = ["绿",[["武力",3]]];
      _loc2_[11] = ["银",[["智力",2]]];
      _loc2_[12] = ["金",[["体力",270],["寿命",-10]]];
      _loc2_[13] = ["褐",[["健康",50]]];
      _loc2_[14] = ["绿",[["快乐",50]]];
      var _loc10_ = ["药丸","药片","丹药","药粉","颗粒","药块","药条"];
      var _loc6_ = random(_loc2_.length);
      var _loc9_ = _loc2_[_loc6_][1].length;
      var i = 0;
      while(i < _loc9_){
         _loc3_.push(_loc2_[_loc6_][1][i]);
         i++;
      }
      _loc4_ = 0;
      药剂名称 = _loc2_[_loc6_][0] + "的" + _loc10_[random(_loc10_.length)];
      if(random(30) == 0){
         _loc4_ = 99;
      }
   }
   主角.丹药列表 = {};
   主角.丹药列表.名称 = 药剂名称;
   主角.丹药列表.增加 = _loc3_;
   主角.丹药列表.性 = _loc11_;
   主角.丹药列表.特殊 = _loc4_;
   主角.丹药.unshift(主角.丹药列表);
   主角.丹药列表 = undefined;
   主角.炼制 = [0,0,0,0,0,0,0,0];
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情头像,27,"特殊");
   新后宫图形读取程序(剧情背景,8,"背景");
   对话打字效果("开始炼丹");
   剧情对话板.onclick = function(){
      战斗震屏程序();
      对话打字效果("（——————————————炼制中——————————————）");
      剧情对话板.onclick = function(){
         对话打字效果("得到【" + 药剂名称 + "】");
         剧情对话板.onclick = function(){
            id('剧情对话').style.display = 'none'
            开炉炼丹();
         };
      };
   };
}
function 更新药材数量(){
   var _loc4_ = 0;
   while(_loc4_ < 20){
      var _loc3_ = 所有药材[_loc4_];
      var _loc2_ = className('ycxb')[_loc4_];
      if(_loc3_ == undefined){
         _loc2_.style.display="none";
      }
      else{
         _loc2_.style.display="block";
         _loc2_.innerText = _loc3_.名称;
         className('ycsl')[_loc4_].innerText = "X "+_loc3_.数量;
         _loc2_.取 = _loc3_;
         _loc2_.onclick = function(){
            if(this.取.数量 <= 0){小提示("这个药材已经没有了");}
            else{
               加入药材(this.取);
            }
         };
      }
      _loc4_ = _loc4_ + 1;
   }
}
function 更新炼制(){
   i = 0;
   while(i < 主角.炼制.length){
      if(主角.炼制[i] > 100){主角.炼制[i] = 100;}
      if(主角.炼制[i] < 0){主角.炼制[i] = 0;}
      i++;
   }
   id("土").innerText = 主角.炼制[0];
   id("火").innerText = 主角.炼制[1];
   id("光").innerText = 主角.炼制[2];
   id("雷").innerText = 主角.炼制[3];
   id("木").innerText = 主角.炼制[4];
   id("水").innerText = 主角.炼制[5];
   id("暗").innerText = 主角.炼制[6];
   id("风").innerText = 主角.炼制[7];
   var _loc2_ = 212;
   var _loc3_ = 235;
   var _loc6_ = _loc2_;
   var _loc5_ = _loc3_ - Math.round(主角.炼制[0] * 1.4);
   var _loc16_ = _loc2_ - Math.round(主角.炼制[1] * 0.70710678118655 * 1.4);
   var _loc17_ = _loc3_ - Math.round(主角.炼制[1] * 0.70710678118655 * 1.4);
   var _loc20_ = _loc2_ - Math.round(主角.炼制[2] * 1.4);
   var _loc9_ = _loc3_;
   var _loc12_ = _loc2_ - Math.round(主角.炼制[3] * 0.70710678118655 * 1.4);
   var _loc13_ = _loc3_ + Math.round(主角.炼制[3] * 0.70710678118655 * 1.4);
   var _loc11_ = _loc2_;
   var _loc10_ = _loc3_ + Math.round(主角.炼制[4] * 1.4);
   var _loc19_ = _loc2_ + Math.round(主角.炼制[5] * 0.70710678118655 * 1.4);
   var _loc18_ = _loc3_ + Math.round(主角.炼制[5] * 0.70710678118655 * 1.4);
   var _loc15_ = _loc2_ + Math.round(主角.炼制[6] * 1.4);
   var _loc14_ = _loc3_;
   var _loc8_ = _loc2_ + Math.round(主角.炼制[7] * 0.70710678118655 * 1.4);
   var _loc7_ = _loc3_ - Math.round(主角.炼制[7] * 0.70710678118655 * 1.4);
}
function 加入药材(药材){
   id('lddh').style.display="block";
   setTimeout(function() {id('lddh').style.display="none";}, 590);
   药材.数量 -= 1;
   主角.炼制[0] += 药材._tu;
   主角.炼制[1] += 药材._huo;
   主角.炼制[2] += 药材._guang;
   主角.炼制[3] += 药材._lei;
   主角.炼制[4] += 药材._mu;
   主角.炼制[5] += 药材._shui;
   主角.炼制[6] += 药材._an;
   主角.炼制[7] += 药材._feng;
   更新药材数量();
   更新炼制();
}
function 试验丹药程序(){
   if(主角.丹药.length <= 0){小提示("没有丹药");}
   else{
      id('youyuan').style.display = 'block';id('yyBG').src =LJ +  "a0aPic_BG/Tu_8.webp";
	  id('yy头像').style.display = 'block';
	  新后宫图形读取程序(id('yy头像'),42,"特殊");
      var _loc2_ = "小" + 太监名字字库[random(太监名字字库.length)] + "子";
      var _loc3_ = ["习礼监","御用监","内官监","御马监","司设监","尚宝监","神宫监","尚膳监","尚衣监","印绶监","直殿监","都知监","惜薪司","宝钞司","钟鼓司","混堂司","兵仗局","巾帽局","针工局","内织局","酒醋局","司苑局","银作局","浣衣局"];
      id('yyText').innerText = _loc3_[random(_loc3_.length)] + _loc2_ + "参见皇上。\n皇上传唤小的有什么吩咐。";
      太监名字 = _loc2_;
      id('yykuang').onclick = function(){
         查看丹药程序(1);
      };
   }
}
function 丢弃丹药程序(){
   if(主角.丹药.length <= 0){小提示("没有丹药");}
   else{查看丹药程序(2);}
}
function 服用丹药程序(){
   if(主角.丹药.length <= 0){小提示("没有丹药");}
   else{查看丹药程序(3);}
}
function 浩荡出巡程序(){
   地方发展界面(3);
}
function 浩荡出巡程序哦(城市){
   id("hdcx").style.display="block";
   id("hdcxtu").src=LJ+"azcPic_Jyou/" + 城市.id + ".webp";
   id("cxText").innerText = "当地百姓庆祝皇帝出巡到此。";
   id("cxkuang").onclick = function(){
      id("cxText").innerText = "皇威增加，当地民心治安发生变化。";
      城市.民心 += 15;
      if(城市.民心 > 100){城市.民心 = 100;}
      id("cxText").innerText += "\n当前民心升至：" + 城市.民心;
      var _loc2_ = random(300000) + 300000;
      国库钱数变动的程序(_loc2_ * -1);
      属性.威望 += random(10) + 10;
      if(属性.威望 > 1000){属性.威望 = 1000;}
      更新资料();
      _loc5_ = 判定城里的民间美女(城市);
      if(城市.id == 9&&主角.鱼美人 == 0&&年 < 9&&季 !== 4){
         鱼美人事件();
         id("hdcx").style.display="none";
         id("紫宸殿内").style.display="none";
      }
      else if(城市.刺客开关 == 0&&random(3) == 0)
      {
         判定城里的刺客(城市);
         id("hdcx").style.display="none";
         id("紫宸殿内").style.display="none";
      }
      else if(_loc5_ !== undefined)
      {
         id("cxkuang").onclick = function()
         {
            id("cxText").innerText = "当地知府还特意挑选了一名美女来侍奉皇上。";
            id("cxkuang").onclick = function()
            {
               出现民间美女(_loc5_,城市);
               id("hdcx").style.display="none";
               id("紫宸殿内").style.display="none";
            };
         };
      }
      else
      {
         id("hdcx").style.display="none";
         id("紫宸殿内").style.display="none";
         主角.当前时辰 = 4;
         时辰推进();
      }
   };
}
function 判定城里的民间美女(城市){
   var _loc2_ = [];
   var _loc3_ = 0;
   while(_loc3_ < 外域美人.length)
   {
      if(外域美人[_loc3_].用过 == undefined&&外域美人[_loc3_].文化 == 城市.文化)
      {
         _loc2_.push(外域美人[_loc3_]);
      }
      _loc3_ += 1;
   }
   if(_loc2_.length > 0)
   {
      var _loc4_ = random(_loc2_.length);
      var _loc5_ = _loc2_[_loc4_].id;
   }
   else
   {
      _loc5_ = undefined;
   }
   return _loc5_;
}
function 出现民间美女(对象, 城市){
   外域美人[对象].经验 = random(50);
   if(外域美人[对象].地位 !== undefined)
   {
      if(外域美人[对象].地位 == 1||外域美人[对象].地位 == 2)
      {
         外域美人[对象].经验 = 0;
		 外域美人[对象].出身 = _all_nation[城市.文化].名称 + "公主";
      }
      if(外域美人[对象].地位 == 0)
      {
         外域美人[对象].出身 = _all_nation[城市.文化].名称 + "妃嫔";
      }
      外域美人[对象].地位 == undefined;
   }
   else
   {
      外域美人[对象].出身 = 城市.名称 + 出身计算(3);
   }
   var 取数据 = 外域美人[对象];
   取数据.年龄 = 15 + random(4);
   id('介绍图').style.display = 'block';
   var _loc3_ = 取数据.跳;
   新后宫图形读取程序(id('介绍图头像'),_loc3_,"外域");
   id('介绍图名字').innerText = 取数据.名称;
   id('介绍图介绍').innerText = "外貌：" + 取数据.魅力;
   id('介绍图介绍').innerText += "\n\n";
   id('介绍图介绍').innerText += 取数据.介绍;
   id('介绍图an0').innerText = "赐婚皇族";id('介绍图an0').style.display = 'block';
   id('介绍图an1').innerText = "收为义女";id('介绍图an1').style.display = 'block';
   id('介绍图an2').innerText = "留在行宫";id('介绍图an2').style.display = 'block';
   id('介绍图an3').innerText = "入储秀阁";id('介绍图an3').style.display = 'block';
   id('介绍图an0').onclick = function()
   {
	   var _loc1_=0;
	   while(_loc1_<_all_family.length){
	   	if(_all_family[_loc1_].名称 == 取数据.名称&&_all_family[_loc1_]._code == 取数据._code){
	   		取数据.年龄=_all_family[_loc1_].年龄;
	   		_all_family.splice(_loc1_,1);
	   	}
	   	_loc1_+=1;
	   }
      民间美女赐给皇子(取数据,城市);
      取数据.用过 = 1;
   };
  id('介绍图an1').onclick = function()
   {
	   var _loc1_=0;
	   var _loc2_=16;
	   while(_loc1_<_all_family.length){
	   	if(_all_family[_loc1_].名称 == 取数据.名称&&_all_family[_loc1_]._code == 取数据._code){
	   		_loc2_=_all_family[_loc1_].年龄;
	   		_all_family.splice(_loc1_,1);
	   	}
	   	_loc1_+=1;
	   }
      出圣旨(取数据.名称 + "乖巧伶俐，深得朕心，遂入宫收为义女。",2);
      取数据.用过 = 1;
      _all_child.push({id:国家.子女顺序,_code:取数据._code,文化:取数据.文化,名称:取数据.名称,性别:1,母亲:"无",生母:"无",年龄:_loc2_,婚:0,婚配:"",病:0,保:0,关系:0,幼年:0,头像:取数据.跳,统帅:取数据.统帅,武力:取数据.武力,智力:取数据.智力,政治:取数据.政治,魅力:取数据.魅力,清廉:取数据.清廉,野心:取数据.野心,功勋:0,状态:0,寿命:random(80) + 16,被过继过:0,封号:"",文质:50,武质:50,魅质:50,朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
      国家.子女顺序 += 1;
      id('介绍图').style.display = 'none';
   };
   id('介绍图an2').onclick = function()
   {
      id('介绍图').style.display = 'none';
      主角.当前时辰 = 4;
      时辰推进();
   };
  id('介绍图an3').onclick = function()
   {
      民间美女后宫册封(取数据);
      取数据.用过 = 1;
      id('介绍图').style.display = 'none';
   };
}
function 民间美女赐给皇子(取数据,城市){
	未婚皇子列表=[];   id('介绍图').style.display = 'none';
   _loc3_ = 0;
   while(_loc3_ < _all_child.length)
   {
      if(_all_child[_loc3_].性别 == 0&&_all_child[_loc3_].婚 !== 1&&_all_child[_loc3_].年龄 >= 16&&_all_child[_loc3_].状态 == 0)
      {
         未婚皇子列表.push(_all_child[_loc3_]);
      }
      _loc3_ += 1;
   }
   if(未婚皇子列表.length == 0)
   {
      小提示("没有可赐婚的皇子");
   }
   else
   {
      子女一览程序(16,取数据);
   }
}
function 民间美女赐给皇子确定(皇子,取数据){
   随机增加这个人的朝廷势力(皇子,1);
   随机增加这个人的朝廷势力(皇子,1);
   国家.金钱 -= 200000;
   更新资料();
   var _loc3_ = 各种封爵需要的地名[random(各种封爵需要的地名.length)];
   出圣旨(取数据.名称 + "贤良淑德，皇子" + 皇子.名称 + "轨度端和，二人十分般配。即封皇子" + 皇子.名称 + "为" + _loc3_ + "，择良辰吉日与" + 取数据.名称 + "成婚。",2);
   _all_family.push({id:_all_family.length,名称:取数据.名称,年龄:取数据.年龄,婚配:皇子.名称,婚配序号:皇子.id,身份:"王妃",儿女:0,文化:取数据.文化,家族:取数据.家族,头像:取数据.跳,_code:取数据._code,孕:0,出身:取数据.出身,性格:取数据.性格});
   皇子.婚 = 1;
   皇子.婚配 = 取数据.名称;
   皇子.封号 = _loc3_ + "王";
   id('介绍图').style.display = 'none';
}
function 民间美女后宫册封(对象){
    对象.经验 = 对象.经验;
    对象.出身 = 对象.出身;对象.名字=对象.名称;
    对象.爱 = 15 + random(10);
	var _loc1_=0;
	while(_loc1_<_all_family.length){
		if(_all_family[_loc1_].名称 == 对象.名称&&_all_family[_loc1_]._code == 对象._code){
			对象.年龄=_all_family[_loc1_].年龄;
			_all_family.splice(_loc1_,1);
		}
		_loc1_+=1;
	}
   收入储秀阁(对象);
   出圣旨(对象.名称 + "娴良淑德，朕很满意。因常在行宫，实属不便，即迁入储秀阁。",2);
}
function 判定城里的刺客(城市){
   var _loc2_ = [];
   var _loc3_ = 0;
   while(_loc3_ < 所有敌将.length)
   {
      if(所有敌将[_loc3_].用过 == undefined&&所有敌将[_loc3_].文化 == 城市.文化&&所有敌将[_loc3_]._code < 6000&&所有敌将[_loc3_].id !== 110&&所有敌将[_loc3_].id !== 108&&所有敌将[_loc3_].id !== 109&&所有敌将[_loc3_].id !== 107)
      {
         _loc2_.push(所有敌将[_loc3_]);
      }
      _loc3_ += 1;
   }
   if(_loc2_.length > 0)
   {
      var _loc4_ = random(_loc2_.length);
      var _loc5_ = _loc2_[_loc4_].id;
	  出现刺客(_loc5_,城市);
   }
   if(_loc2_.length == 1)
   {
      城市.刺客开关 = 1;
   }
}
function 出现刺客(对象,城市){
   var 刺客 = 所有敌将[对象];
   var 计算头像 = 刺客.跳;
   id('剧情背景').src =LJ +  'a0aPic_BG/Tu_438005.webp';
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情头像,42,"特殊");
   对话打字效果("太监：不好了~！有刺客~！快护驾！护驾！啊！！！！（太监被刺客一刀杀了）");
   剧情对话板.onclick = function()
   {
      新后宫图形读取程序(剧情头像,计算头像,"敌将");
      对话打字效果("（刺客武艺高强，一面斩杀护卫，一面向皇上的銮驾逼近）");
      剧情对话板.onclick = function()
      {
         对话打字效果("刺客：侵略者！这里是我们的家园，不属于你！我要为在战场上牺牲的将士们报仇！");
         剧情对话板.onclick = function()
         {
            var _loc2_ = 10;
            if(_loc2_ == 0&&属性.武力 <= 500)
            {
               对话打字效果("（突然，刺客闯入銮驾，一刀刺中要害，皇上当场死亡。御医赶来已经回天无力了。）");
               剧情对话板.onclick = function()
               {
                  记录大事件的程序("皇上迅游" + 城市.名称 + "，途中遇刺，刺客一刀刺中要害，皇上当场死亡。");
                  死亡判定(3);
                  缓动黑幕();
               };
            }
            else if(_loc2_ == 0&&属性.武力 > 500)
            {
               对话打字效果("（突然，皇上冲出銮驾，手持扇子，以一对五。将刺客全部拿下。）");
               剧情对话板.onclick = function()
               {
                  记录大事件的程序("皇上迅游" + 城市.名称 + "，途中遇刺，皇上手持扇子，以一对五。将刺客全部拿下。");
                  处置刺客(刺客,城市);
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            }
            else if(_loc2_ > 3)
            {
               新后宫图形读取程序(剧情头像,6,"特殊");
               对话打字效果("红星寿：大胆狂徒！竟敢行刺皇上！（红星寿率领禁卫军神枢营迅速赶来护驾，并且捉住了刺客。）");
               剧情对话板.onclick = function()
               {
                  记录大事件的程序("皇上迅游" + 城市.名称 + "，途中遇刺。御林军及时护驾，虚惊一场。");
                  处置刺客(刺客,城市);
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            }
            else
            {
               新后宫图形读取程序(剧情头像,6,"特殊");
               对话打字效果("红星寿：大胆狂徒！竟敢行刺皇上！（红星寿率领禁卫军神枢营迅速赶来护驾。）");
               剧情对话板.onclick = function()
               {
                  对话打字效果("（噼—！刺客砍伤了红星寿）红星寿：小儿！竟敢伤我！给我杀！（禁卫军人数众多，刺客不敌，找到机会迅速逃跑了。）");
                  剧情对话板.onclick = function()
                  {
                     记录大事件的程序("皇上迅游" + 城市.名称 + "，途中遇刺。御林军及时护驾，虚惊一场。");
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                     主角.当前时辰 = 4;
                     时辰推进();
                  };
               };
            }
         };
      };
   };
}
function 处置刺客(刺客,城市){
   id('介绍图').style.display = 'block';
   var _loc3_ = 刺客.跳;
   新后宫图形读取程序(id('介绍图头像'),_loc3_,"敌将");
   id('介绍图名字').innerText = 刺客.名称;
   id('介绍图介绍').innerText = 刺客.介绍;
   id('介绍图an0').innerText = "斩首";
   id('介绍图an1').innerText = "关押";
   id('介绍图an2').innerText = "释放";
   id('介绍图an3').innerText = "充军";
   id('介绍图an0').style.display = 'block';
   id('介绍图an1').style.display = 'block';
   id('介绍图an2').style.display = 'block';
   id('介绍图an3').style.display = 'block';
   id('介绍图an0').onclick = function()
   {
      属性.暴戾 += 15;
      刺客.用过 = 1;
      更新资料();
      主角.当前时辰 = 4;
      时辰推进();
      id('介绍图').style.display = 'none';
   };
   id('介绍图an1').onclick = function()
   {
      刺客.被关押 = 1;
      刺客.用过 = 1;
      主角.当前时辰 = 4;
      时辰推进();
      id('介绍图').style.display = 'none';
   };
   id('介绍图an2').onclick = function()
   {
      属性.道德 += 10;
      刺客.用过 = 1;
      更新资料(属性栏);
      主角.当前时辰 = 4;
      时辰推进();
      id('介绍图').style.display = 'none';
   };
   id('介绍图an3').onclick = function()
   {
      id('介绍图').style.display = 'none';
      刺客.用过 = 1;
      主角.当前时辰 = 4;
      时辰推进();
   };
}
function 外国皇室详情展示(取数据, 参数){
   大臣介绍图 = attachMovie("外域美人图","大臣介绍图",128120,{_x:0,_y:0});
   if(取数据._code !== undefined)
   {
      出现这个人的头像(大臣介绍图.图,取数据);
   }
   大臣介绍图.名字.text = 取数据.名字;
   大臣介绍图.innerText = "文化圈：" + _all_nation[取数据.文化].文化;
   大臣介绍图.innerText = 大臣介绍图.innerText + "\n性格：" + 取数据.性情;
   大臣介绍图.innerText = 大臣介绍图.innerText + "\n年龄：" + 取数据._code;
   大臣介绍图.innerText += "\n介绍：\n    ";
   大臣介绍图.innerText += 取数据.简介;
   大臣介绍图.a0._visible = false;
   大臣介绍图.a1._visible = false;
   大臣介绍图.a3.innerText = "关闭";
   if(参数 == 1||参数 == 2||参数 == 3)
   {
      大臣介绍图.a2.innerText = "确定";
   }
   大臣介绍图.a2.onclick = function()
   {
      if(参数 == 1)
      {
         if(取数据.年龄 >= 16)
         {
            收入储秀阁(取数据);
            i = 0;
            while(i < 外域美人.length)
            {
               if(外域美人[i].名字 == 取数据.名字)
               {
                  if(取数据._code > 6000)
                  {
                     外域美人.splice(i,1);
                  }
                  else
                  {
                     外域美人[i].地位 = undefiend;
                  }
               }
               i++;
            }
            _loc9_ = "我国愿意向贵国进献一名皇室公主。（索要成功）";
            _all_nation[取数据.文化].友好度 -= 50 * (_all_nation[取数据.文化].姿态 + 1);
            记录大事件的程序(_all_nation[取数据.文化].名称 + "向国家进献一名皇室公主【" + 取数据.名字 + "】。");
         }
         else
         {
            _loc9_ = "这个公主还没有成年。（索要失败）";
         }
         交涉应答(_all_nation[取数据.文化],_loc9_);
      }
      if(参数 == 2)
      {
         n = 取数据._code;
         a = [n,l];
      }
      if(参数 == 3)
      {
         l = 取数据._code;
         a = [n,l];
         小提示(a[1]);
      }
      大臣介绍图.removeMovieClip();
      return a;
   };
   大臣介绍图.a3.onclick = function()
   {
      大臣介绍图.removeMovieClip();
   };
   大臣介绍图._alpha = 0;
   大臣介绍图.onEnterFrame = function()
   {
      this._alpha += 10;
      if(this._alpha >= 100)
      {
         delete this.onEnterFrame;
      }
   };
}