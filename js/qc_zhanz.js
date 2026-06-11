我国兵种 = Array("刀兵","枪兵","弩兵","炮兵","刀骑兵","枪骑兵","弩骑兵","炮骑兵");
function 犒赏军队(){
    id('zzcd').style.display = 'block';
    id('zzcdgb').onclick = function(){id('zzcd').style.display = 'none';};
    id('zzcdtext').innerText = "请选择要犒赏的军队。每个士兵5两赏银，可增加10点军队士气。";
    var _loc4_ = 0;
    var i = 0;
    while(i < 20){
        var _loc3_ = className('jdxb')[i];
        _loc3_.属性 = _all_army[_loc4_];
        if(_loc3_.属性 == undefined){
            _loc3_.style.display = 'none';
			className('jdxzq')[i].style.display = 'none';
			className('jdxzl')[i].style.display = 'none';
        }
		else{
			_loc3_.innerText = _all_army[_loc4_].队名;
			_loc3_.style.display = 'block';
			className('jdxzq')[i].序号 = i;
			className('jdxzq')[i].style.display = 'block';
			className('jdxzl')[i].style.display = 'block';
			_all_army[_loc4_].犒赏 = 1;
			className('jdxzq')[i].onclick = function(){
				if(className('jdxzl')[this.序号].style.display == 'none'){
				   className('jdxzl')[this.序号].style.display = 'block';
				   className('jdxb')[this.序号].属性.犒赏 = 1;
				}
				else if(className('jdxzl')[this.序号].style.display == 'block'){
				   className('jdxzl')[this.序号].style.display = 'none';
				   className('jdxb')[this.序号].属性.犒赏 = 0;
				}
			};
		}
         _loc4_ = _loc4_ + 1;
         i++;
      }
    id('zzqueding').onclick = function(){
        var _loc1_ = 0;
        i = 0;
        while(i < _all_army.length){
            if(_all_army[i].犒赏 == 1){
            _all_army[i].训练度 += 10;
            _all_army[i].犒赏 = 0;
            if(_all_army[i].训练度 > 100){
               _all_army[i].训练度 = 100;
            }
            _loc1_ += _all_army[i].兵力 * 5;
         }
         i++;
      }
      国家.金钱 -= _loc1_;
      主角.犒赏军队 = 1;
      出圣旨("为嘉奖各位军士将领，朝廷特批白银" + _loc1_ + "两以犒赏军队，望众将士再接再厉。");
      更新资料();
      id('zzcd').style.display = 'none';
   };
}
function 加强训练函数(){
  id('hukoupucha').style.display = 'block';
  id('huhouTitle').innerText = "训练军队";
  id('huhouText').innerText = "要训练全部军队，加强士气吗？\n带兵将军武力越高训练效果越好。";
  id('hkan0').innerText = '确定';
  id('hkan1').innerText = '取消';
  id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
  id('hkan0').onclick = function(){
      if(国家.训练周期 == 0){
         国家.训练周期 = 1;
         id('hukoupucha').style.display = 'none';
         遵旨函数("已经命令全部军队长期训练。");
         i = 0;
         while(i < _all_army.length){
            _all_army[i].训练度 += Math.round(_all_army[i].将军.武力 / 10);
            if(_all_army[i].训练度 == NaN){
               _all_army[i].训练度 = 80;
            }
            else if(_all_army[i].训练度 > 100){
               _all_army[i].训练度 = 100;
            }
            _all_army[i].将军.功勋 += 5;
            i++;
         }
         大殿体力扣除程序(10);
      }
      else{
         小提示("军队已按原计划正在训练");
      }
   };
}
function 编队程序(){
   var 最大队数 = Math.ceil(属性.统帅 / 50);
   id('neishi2').style.display = 'none';
   id('neishiMB').style.display = 'block';
   id('neishiBG').style.display = 'none';
   id('neishiTitle').innerText = "编辑军队";
   id('neishiText').innerText = "皇上要进行新增、变更、还是解散队伍?\n目前拥有" + _all_army.length + "/" + 最大队数 + "支队伍。\n皇帝统帅越高，可拥有的军队越多。\n将领的统帅、武力、智力分别影响军队的防御力、攻击力和回避率。兵种决定基本战斗力。\n国家军队中的士兵每月工资15，未编辑的散兵每月工资10。";
   id('nsan0').innerText= "新建队伍";
   id('nsan1').innerText= "调整兵力";
   id('nsan2').innerText= "解散队伍";
   id('nsan3').innerText= "取消";
   id('nsan0').onclick = function(){
      if(最大队数 > _all_army.length){
         人才列表显示(19);
         id('neishiMB').style.display = 'none';
      }
      else{
         小提示("目前队伍数量已达到上限");
      }
   };
   id('nsan1').onclick = function(){
      变更队伍(1);
      id('neishiMB').style.display = 'none';
   };
   id('nsan2').onclick = function(){
      变更队伍(2);
      id('neishiMB').style.display = 'none';
   };
   id('nsan3').onclick = function(){
      id('neishiMB').style.display = 'none';
   };
}
function 新建队伍(执行人){
   id('xjdw').style.display = 'block';
   id('zhixingren2').innerText = "本队将军：" + 执行人.名字;
   id('zxrbg2').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(19);};
   var _loc3_ = ["队","营","师","军"];
   id('dwming').value = 主名[random(主名.length)] + 主名[random(主名.length)] + _loc3_[random(_loc3_.length)];
   var _loc4_ = id('dwming').value;
   id('刀兵').onclick = function(){
      var _loc2_ = id('dwming').value;
      新建队伍执行(执行人,_loc2_,0);
     id('xjdw').style.display = 'none';
   };
   id('枪兵').onclick = function(){
      var _loc2_ = id('dwming').value;
      新建队伍执行(执行人,_loc2_,1);
      id('xjdw').style.display = 'none';
   };
   id('弩兵').onclick = function(){
      var _loc2_ = id('dwming').value;
      新建队伍执行(执行人,_loc2_,2);
      id('xjdw').style.display = 'none';
   };
   id('炮兵').onclick = function(){
      var _loc2_ = id('dwming').value;
      新建队伍执行(执行人,_loc2_,3);
      id('xjdw').style.display = 'none';
   };
   id('刀骑兵').onclick = function(){
      var _loc2_ = id('dwming').value;
      新建队伍执行(执行人,_loc2_,4);
      id('xjdw').style.display = 'none';
   };
   id('枪骑兵').onclick = function(){
      var _loc2_ = id('dwming').value;
      新建队伍执行(执行人,_loc2_,5);
      id('xjdw').style.display = 'none';
   };
   id('弩骑兵').onclick = function(){
      var _loc2_ = id('dwming').value;
      新建队伍执行(执行人,_loc2_,6);
      id('xjdw').style.display = 'none';
   };
   id('炮骑兵').onclick = function(){
      var _loc2_ = id('dwming').value;
      新建队伍执行(执行人,_loc2_,7);
      id('xjdw').style.display = 'none';
   };
}
function 新建队伍执行(执行人, 新建队伍名称, 参数){
   执行人.任务中 = 3;
   执行人.官职="将军";
   var _loc6_ = 计算单兵战力(参数);
   var _loc2_ = {id:_all_army.length,队名:新建队伍名称,将军:执行人,兵种:参数,兵力:0,兵力上限:0,训练度:0,出战中:0,单兵战力:_loc6_,斩杀:0,损失:0};
   _loc2_.兵力上限 = _loc2_.将军.带兵上限;
   _all_army.push(_loc2_);
   出圣旨("即刻任命" + 执行人.名字 + "为" + 新建队伍名称 + "将军，负责该军队所有事宜。");
   队伍详情界面(_all_army[_all_army.length - 1]);
}
function 队伍详情界面(队伍){
   id('数值拉动面板').style.display = 'block';
   id('zhixingren').innerText = "【" + 队伍.队名 + "】将军：" + 队伍.将军.名字;
   id('zxrbg').style.display = 'none';
   var 记录训练度 = 队伍.训练度;
   console.log(队伍.训练度);
   console.log(队伍.兵力);
   var 乘积 = 队伍.训练度 * 队伍.兵力;
   console.log(乘积);
   if(队伍.兵种 == 0){国家.朴刀 += 队伍.兵力;}
   else if(队伍.兵种 == 1){国家.长枪 += 队伍.兵力;}
   else if(队伍.兵种 == 2){国家.弓弩 += 队伍.兵力;}
   else if(队伍.兵种 == 3){国家.铁炮 += 队伍.兵力;}
   else if(队伍.兵种 == 4){国家.朴刀 += 队伍.兵力;国家.战马 += 队伍.兵力;}
   else if(队伍.兵种 == 5){国家.长枪 += 队伍.兵力;国家.战马 += 队伍.兵力;}
   else if(队伍.兵种 == 6){国家.弓弩 += 队伍.兵力;国家.战马 += 队伍.兵力;}
   else if(队伍.兵种 == 7){国家.铁炮 += 队伍.兵力;国家.战马 += 队伍.兵力;}
   国家.士兵 += 队伍.兵力;
   队伍.兵力 = 0;
   var _loc4_ = 计算兵力上限是多少(队伍);
   id('range').max = _loc4_;
   id('rangeText').innerText  = "兵种：" + 计算是哪种兵种(队伍.兵种) + "。兵器或散兵不足时，队伍将无法达到满员。";
   id('rangeText').innerText += "需要配置多少兵力。";
   console.log(_loc4_);
   id('range').value = 0;
   change();
   id('rangeText').innerText  += "\n国家散兵：" + 国家.士兵 + "，朴刀库存：" + 国家.朴刀 + "，\n长枪库存：" + 国家.长枪 + "，弓弩库存：" + 国家.弓弩 + "，\n铁炮库存：" + 国家.铁炮 + "，军马库存:" + 国家.战马 + "。";
   id('rqueding').onclick = function(){
      if(id('range').value == undefined){小提示("请拉动红条操作");}
      else{
         var _loc3_ = 队伍.兵力 - Number(id('range').value);
         大殿体力扣除程序(10);
         队伍.兵力 = Number(id('range').value);
         if(队伍.兵力 == 0){
            队伍.训练度 = 0;
         }
         else{
            队伍.训练度 = Math.round(乘积 / 队伍.兵力);
         }
         console.log("兵力" + 队伍.兵力);
         console.log("训练度" + 队伍.训练度);
         if(队伍.训练度 > 记录训练度){队伍.训练度 = 记录训练度;}
         if(队伍.兵种 == 0){国家.朴刀 += _loc3_;}
         else if(队伍.兵种 == 1){国家.长枪 += _loc3_;}
         else if(队伍.兵种 == 2){国家.弓弩 += _loc3_;}
         else if(队伍.兵种 == 3){国家.铁炮 += _loc3_;}
         else if(队伍.兵种 == 4){国家.朴刀 += _loc3_;国家.战马 += _loc3_;}
         else if(队伍.兵种 == 5){国家.长枪 += _loc3_;国家.战马 += _loc3_;}
         else if(队伍.兵种 == 6){国家.弓弩 += _loc3_;国家.战马 += _loc3_;}
         else if(队伍.兵种 == 7){国家.铁炮 += _loc3_;国家.战马 += _loc3_;}
         国家.士兵 += _loc3_;
         更新资料();
         遵旨函数("已调整【" + 队伍.队名 + "】兵力为" + 队伍.兵力 + "。");
         id('数值拉动面板').style.display = 'none';
		 id('xjdw').style.display = 'none';
         id('zxrbg').style.display = 'block';
         变更队伍(1);
      }
   };
}
function 变更队伍(参数){
   id('junshibiao').style.display = 'block';
   id('jssm').style.display = 'none';
   id('jssmline').style.display = 'none';
   id('js3').style.display = 'none';
   id('js1').innerText = "队名";
   id('js2').innerText = "将军";
   id('js4').innerText = "兵力";
   id('js5').innerText = "统帅";
   id('js6').innerText = "武力";
   id('js7').innerText = "品阶";
   id('js8').innerText = "兵种";
   id('js9').innerText = "士气";
   id('jsTittle').innerText = "军队列表";
    var 临时队伍列表 = [];
    var _loc5_ = 0;
    while(_loc5_ < _all_army.length){
      if(_all_army[_loc5_].出战中 == 0){
         临时队伍列表.push(_all_army[_loc5_]);
      }
        _loc5_ += 1;
    }
   序列 = 0;
   更新队伍信息(参数,临时队伍列表,序列);
   id('junshiqian').onclick = function(){
      if(序列 > 0){
         序列 -= 1;
         更新队伍信息(参数,临时队伍列表,序列);;
      }
   };
   id('junshihou').onclick = function(){
      if(序列 < Math.round(临时队伍列表.length / 7)){
         序列 += 1;
         更新队伍信息(参数,临时队伍列表,序列);;
      }
   };
}
function 更新队伍信息(参数,临时队伍列表,序列){
   var i = 0;
   while(i < 10){
      var _loc3_ = 临时队伍列表[序列 * 10 + i];
      var _loc2_ = className('junshilbx')[i];
      if(_loc3_ == undefined){_loc2_.style.display = 'none';}
      else{
		_loc2_.style.display = 'block';
		className('j1')[i].style.color="#ffffff"
        className('j1')[i].innerText = _loc3_.队名;
        className('j2')[i].innerText = _loc3_.将军.名字;
        className('j3')[i].innerText = "";
        className('j4')[i].innerText = _loc3_.兵力 + "/" + _loc3_.将军.带兵上限;
		className('j5')[i].innerText = _loc3_.将军.统帅;
        className('j6')[i].innerText = _loc3_.将军.武力;
        className('j7')[i].innerText = _loc3_.将军.品阶;
		className('j8')[i].innerText = 计算是哪种兵种(_loc3_.兵种);
        className('j9')[i].innerText = _loc3_.训练度;
        _loc2_.取 = _loc3_;
        _loc2_.onclick = function(){
            if(参数 == 1){
               队伍详情界面(this.取);
            }
            else if(参数 == 2){
               i = 0;
               while(i < _all_rencai.length){
                  if(_all_rencai[i].名字 == this.取.将军.名字){
                     _all_rencai[i].任务中 = 0;
                  }
                  i++;
               }
               国家.士兵 += this.取.兵力;
               if(this.取.兵种 == 0){
                  国家.朴刀 += this.取.兵力;
               }
               else if(this.取.兵种 == 1){
                  国家.长枪 += this.取.兵力;
               }
               else if(this.取.兵种 == 2){
                  国家.弓弩 += this.取.兵力;
               }
               else if(this.取.兵种 == 3){
                  国家.铁炮 += this.取.兵力;
               }
               else if(this.取.兵种 == 4){
                  国家.朴刀 += this.取.兵力;
                  国家.战马 += this.取.兵力;
               }
               else if(this.取.兵种 == 5){
                  国家.长枪 += this.取.兵力;
                  国家.战马 += this.取.兵力;
               }
               else if(this.取.兵种 == 6){
                  国家.弓弩 += this.取.兵力;
                  国家.战马 += this.取.兵力;
               }
               else if(this.取.兵种 == 7){
                  国家.铁炮 += this.取.兵力;
                  国家.战马 += this.取.兵力;
               }
               var i = 0;
               while(i < _all_army.length){
                  if(_all_army[i].将军.名字 == this.取.将军.名字 && _all_army[i].队名 == this.取.队名){
                     _all_army[i].将军.官职=undefined;
                     _all_army[i].将军.任务中=0;
					 _all_army.splice(i,1);
                  }
                  i++;
               }
               this.parentNode.style.display = 'none';
			   变更队伍(2);
            }
         };
      }
      i++;
   }
}
function 计算单兵战力(参数){
   var _loc2_ = 0;
   if(参数 == 0){
      _loc2_ = 1 + 所有技术[12].开启 * 所有技术[12].效果;
   }
   else if(参数 == 1){
      _loc2_ = 1.3 + 所有技术[17].开启 * 所有技术[17].效果;
   }
   else if(参数 == 2){
      _loc2_ = 1.5 + 所有技术[16].开启 * 所有技术[16].效果;
   }
   else if(参数 == 3){
      _loc2_ = 1.8 + 所有技术[15].开启 * 所有技术[15].效果;
   }
   else if(参数 == 4){
      _loc2_ = 2 + 所有技术[12].开启 * 所有技术[12].效果 + 所有技术[14].开启 * 所有技术[14].效果;
   }
   else if(参数 == 5){
      _loc2_ = 2.3 + 所有技术[17].开启 * 所有技术[17].效果 + 所有技术[14].开启 * 所有技术[14].效果;
   }
   else if(参数 == 6){
      _loc2_ = 2.5 + 所有技术[16].开启 * 所有技术[16].效果 + 所有技术[14].开启 * 所有技术[14].效果;
   }
   else if(参数 == 7){
      _loc2_ = 2.8 + 所有技术[15].开启 * 所有技术[15].效果 + 所有技术[14].开启 * 所有技术[14].效果;
   }
   return _loc2_;
}
function 计算是哪种兵种(参数){
   var _loc2_ = "啥啥啥";
   if(参数 == 0){
      _loc2_ = "刀兵";
   }
   else if(参数 == 1){
      _loc2_ = "枪兵";
   }
   else if(参数 == 2){
      _loc2_ = "弩兵";
   }
   else if(参数 == 3){
      _loc2_ = "炮兵";
   }
   else if(参数 == 4){
      _loc2_ = "刀骑兵";
   }
   else if(参数 == 5){
      _loc2_ = "枪骑兵";
   }
   else if(参数 == 6){
      _loc2_ = "弩骑兵";
   }
   else if(参数 == 7){
      _loc2_ = "炮骑兵";
   }
   return _loc2_;
}
function 计算兵力上限是多少(队伍){
   var _loc2_ = 队伍.将军.带兵上限;
   var _loc3_ = 国家.士兵;
   var _loc8_ = 国家.朴刀;
   var _loc6_ = 国家.长枪;
   var _loc9_ = 国家.弓弩;
   var _loc7_ = 国家.铁炮;
   var _loc5_ = 国家.战马;
   var _loc1_ = [];
   if(队伍.兵种 == 0){
      _loc1_.push(_loc3_);
      _loc1_.push(_loc2_);
      _loc1_.push(_loc8_);
      _loc1_.sort(function(a,b){return a-b;});
   }
   else if(队伍.兵种 == 1){
      _loc1_.push(_loc3_);
      _loc1_.push(_loc2_);
      _loc1_.push(_loc6_);
      _loc1_.sort(function(a,b){return a-b;});
   }
   else if(队伍.兵种 == 2){
      _loc1_.push(_loc3_);
      _loc1_.push(_loc2_);
      _loc1_.push(_loc9_);
      _loc1_.sort(function(a,b){return a-b;});
   }
   else if(队伍.兵种 == 3){
      _loc1_.push(_loc3_);
      _loc1_.push(_loc2_);
      _loc1_.push(_loc7_);
      _loc1_.sort(function(a,b){return a-b;});
   }
   else if(队伍.兵种 == 4){
      _loc1_.push(_loc3_);
      _loc1_.push(_loc2_);
      _loc1_.push(_loc8_);
      _loc1_.push(_loc5_);
      _loc1_.sort(function(a,b){return a-b;});
   }
   else if(队伍.兵种 == 5){
      _loc1_.push(_loc3_);
      _loc1_.push(_loc2_);
      _loc1_.push(_loc6_);
      _loc1_.push(_loc5_);
      _loc1_.sort(function(a,b){return a-b;});
   }
   else if(队伍.兵种 == 6){
      _loc1_.push(_loc3_);
      _loc1_.push(_loc2_);
      _loc1_.push(_loc9_);
      _loc1_.push(_loc5_);
      _loc1_.sort(function(a,b){return a-b;});
   }
   else if(队伍.兵种 == 7){
      _loc1_.push(_loc3_);
      _loc1_.push(_loc2_);
      _loc1_.push(_loc7_);
      _loc1_.push(_loc5_);
      _loc1_.sort(function(a,b){return a-b;});
   }
   return _loc1_[0];
}
function 战争程序(){
   if(主角.出战 == 1){小提示("军队正在备战");}
   else{
	  id('sy').style.display = 'block';
	  id('syb').style.display = 'none';
	  id('syb2').style.display = 'block';
	  id('syTitle').innerText = '发动战争';
	  id('sysm').innerText = "启禀皇上，我们要对哪个州府发动战争？";
	  id('qxsy').onclick = function(){id('syb').style.display = 'block';
	  id('syb2').style.display = 'none';id('sy').style.display = 'none';}
      var _loc2_ = [];
      var _loc3_ = 0;
      while(_loc3_ < _all_city.length){
         if(_all_city[_loc3_].归属 == 8 || _all_city[_loc3_].归属 == 23 || _all_nation[_all_city[_loc3_].归属].外交 >= 3){
            _loc2_.push(_all_city[_loc3_]);
         }
         _loc3_ += 1;
      }
      var _loc4_ = [];
      _loc3_ = 0;
      while(_loc3_ < _loc2_.length){
         var _loc5_ = 0;
         while(_loc5_ < _loc2_[_loc3_].邻居.length){
            var _loc6_ = _loc2_[_loc3_].邻居[_loc5_];
            加入邻居程序(_loc4_,_all_city[_loc6_]);
            _loc5_ += 1;
         }
         _loc3_ += 1;
      }
      _loc3_ = 0;
      while(_loc3_ < 32){
         if(_loc4_[_loc3_] !== undefined){
           className('sydb2')[_loc3_].innerText = _loc4_[_loc3_].名称;
           className('sydb2')[_loc3_].style.display = 'block';
		   className('sydb2')[_loc3_].属性 = _loc4_[_loc3_];
		   className('sydb2')[_loc3_].onclick = function()
		   {
		      if(_all_nation[this.属性.归属].外交 == 2)
		      {
		         小提示("这是同盟国的领地，不可进攻");
		      }
		      else if(_all_nation[this.属性.归属].外交 == 3)
		      {
		         小提示("这是属国的领地，不可进攻");
		      }
		      else
		      {
		         皇室出征选择(this.属性);
		         id('syb').style.display = 'block';
		         id('syb2').style.display = 'none';id('sy').style.display = 'none';
		      }
		   };
         }
         else{
            className('sydb2')[_loc3_].style.display = 'none';
         }
         _loc3_ += 1;
      }
   }
}
function 皇室出征选择(目标){
   console.log(目标.名称 + 目标.士兵);
   var 皇室加成 = 0;
   id('neishi2').style.display = 'none';
   id('neishiMB').style.display = 'block';
   id('neishiBG').style.display = 'none';
   id('neishiTitle').innerText = "发动战争";
   id('neishiText').innerText = "皇上是否要御驾亲征或派哪位皇室成员出征？";
   id('nsan0').innerText= "御驾亲征";
   id('nsan1').innerText= "皇子出征";
   id('nsan2').innerText= "王爷出征";
   id('nsan3').innerText= "暂不安排";
   id('nsan0').onclick = function(){小提示("-_-。sorry！这个功能还没有实现");};
   id('nsan1').onclick = function(){
      var _loc1_ = [];
      var _loc2_ = 0;
      while(_loc2_ < _all_child.length){
         if(_all_child[_loc2_].状态 == 0 && _all_child[_loc2_].性别 == 0 && _all_child[_loc2_].年龄 >= 16 && _all_child[_loc2_].病 == 0){
            _loc1_.push(_all_child[_loc2_]);
         }
         _loc2_ += 1;
      }
      if(_loc1_.length == 0){小提示("没有可以出征的成年皇子");}
      else{子女一览程序(9,目标);id('neishiMB').style.display = 'none';}
   };
   id('nsan2').onclick = function(){
      if(年 < 6){小提示("小王爷尚且年幼，无法出征");}
      else if(主角.小王爷 == 3){小提示("小王爷已经不在这里了");}
      else if(主角.小王爷 == 10){小提示("小王爷已经不在这里了");}
      else if(主角.小王爷 == 9){小提示("小王爷已经不在这里了");}
      else{
         皇室加成 += 0.15 + 主角._relation_chenwangyan * 0.0005;
         id('neishiMB').style.display = 'none';
         战争出动(目标,皇室加成,0,undefined,undefined);
      }
   };
   id('nsan3').onclick = function(){
      console.log("皇室加成" + 皇室加成);
	  if(皇室加成==undefined){
		皇室加成=0;
	  }
      战争出动(目标,皇室加成,0,undefined,undefined);
      id('neishiMB').style.display = 'none';
   };
}
function 派皇子攻打(目标,皇子){
   console.log("武力" + 皇子.武力);
   皇室加成 = Math.round(皇子.统帅) * 0.04 + 皇子.关系 * 0.03;
   国家.目前出征的皇子 = 皇子;
   战争出动(目标,皇室加成,0,undefined,undefined);
}
function 战争出动(目标,皇室加成,攻防参数,我城,敌城){
   id('zzcd').style.display = 'block';
   id('zzcdtext').innerText = '请选择出征的军队';
   id('zzcdgb').onclick = function(){
      id('zzcd').style.display = 'none';
      i = 0;
      while(i < _all_army.length){
         _all_army[i].出战中 = 0;
         i++;
      }
   };
   console.log("皇室加成：" + 皇室加成);
   if(攻防参数 == 1){
      id('zzcdtext').innerText = "急报!" + _all_nation[敌城.归属].名称 + "的" + Math.round(敌城.士兵 / 10000) + "万大军正在靠近我国的" + 我城.名称 + "，请求支援。";
      id('zzcdgb').style.display = 'none';
   }
   else if(攻防参数 == 0){
	   id('zzcdgb').style.display = 'block';
      id('zzcdtext').innerText = "请选择出征的军队。";
   }
   var _loc2_ = 0;
    var i = 0;
    while(i < 20){
        var _loc4_ = className('jdxb')[i];
		_loc4_.属性 = _all_army[_loc2_];
		if(_loc4_.属性 == undefined){
		    _loc4_.style.display = 'none';
		    className('jdxzl')[i].style.display = 'none';
			className('jdxzq')[i].style.display = 'none';
		 }
		 else{
         _loc4_.innerText = _all_army[_loc2_].队名;
		 _loc4_.style.display = 'block';
		 className('jdxzq')[i].序号 = i;
		 className('jdxzq')[i].style.display = 'block';
		 className('jdxzl')[i].style.display = 'block';
         _loc4_.属性.出战中 = 1;
         className('jdxzq')[i].onclick = function(){
            if(className('jdxzl')[this.序号].style.display == 'none'){
               className('jdxzl')[this.序号].style.display = 'block';
               className('jdxb')[this.序号].属性.出战中 = 1;
            }
            else if(className('jdxzl')[this.序号].style.display == 'block'){
               className('jdxzl')[this.序号].style.display = 'none';
               className('jdxb')[this.序号].属性.出战中 = 0;
            }
         };
		 }
         _loc2_ += 1;
         i++;
      }
   id('zzqueding').onclick = function(){
      var _loc2_ = 0;
      var _loc3_ = 0;
      var _loc4_ = [];
      i = 0;
      while(i < _all_army.length){
         if(_all_army[i].出战中 == 1){
            _loc4_.push(_all_army[i]);
            _loc2_ += _all_army[i].兵力 * 10;
            _loc3_ += _all_army[i].兵力 * 40;
         }
         i++;
      }
      console.log("皇室：" + 皇室加成);
      if(攻防参数 == 1){
         if(国家.嘉宁出征 == 1){
            嘉宁出征();
            var _loc5_ = 10;
         }else{_loc5_=0;}
         新版计算战斗结果(目标,_loc5_,攻防参数,我城,敌城,_loc4_);
         id('zzcdb').style.display = 'none';id('zzcd').style.display = 'none';
      }
      else if(攻防参数 == 0){
         if(_loc4_.length == 0){
            小提示("请选择出征队伍");
         }
         else{
            主角.出战 = 1;
			if(皇室加成 == undefined){
			   _loc5_=0
			}else{_loc5_=皇室加成;}
            console.log("皇室加成" + _loc5_);
            记录战争要素(目标,_loc5_,攻防参数,我城,敌城,_loc4_);
            遵旨函数("即刻整备军队，进行" + 目标.名称 + "之战。");
            出圣旨("即刻整备军队，进行" + 目标.名称 + "之战。");
            _all_nation[目标.归属].外交 = 0;
            _all_nation[目标.归属].友好度 = 0;
            _all_nation[目标.归属].贸易年数 = 0;
            _all_nation[目标.归属].贸易额 = 0;
            id('zzcd').style.display = 'none';
         }
      }
      console.log("军队数量" + _loc4_.length);
      国家.金钱 -= _loc2_;
      国家.粮食 -= _loc3_;
      更新资料();
   };
}
function 记录战争要素(目标, 皇室加成, 攻防参数, 我城, 敌城, 出征的军队){
   国家.临时的战争要素 = [目标,皇室加成,攻防参数,我城,敌城,出征的军队];
}
function 新版计算战斗结果(目标,皇室加成,攻防参数,我城,敌城,出征的军队){
   战争结局 = {};
   console.log("皇室加成" + 皇室加成);
   var _loc8_ = 所有技术[13].开启 * 所有技术[13].效果;
   if(攻防参数 == 0){
      var _loc9_ = 0;
      var _loc10_ = 0;
      n = 0;
      while(n < 出征的军队.length){
         _loc9_ +=  Number(出征的军队[n].兵力);
         出征的军队[n].斩杀 = 0;
         出征的军队[n].损失 = 0;
         出征的军队[n].原兵力 = 出征的军队[n].兵力;
         n++;
      }
      var _loc11_ = _all_nation[目标.归属].战力 * 目标.士兵;
      console.log(目标.士兵);
      战争结局.我方军队有几支 = 出征的军队.length;
      战争结局.我方总士兵 =  Number(_loc9_);
      战争结局.敌人总士兵 = 目标.士兵;
      战争结局.目标 = 目标;
      战争结局.对方兵种 = _all_nation[目标.归属].兵种;
      战争结局.战报 = "我方在" + 目标.名称 + "与地方的战报如下：";
      战争结局.战报 += "\n我方共派出" + 战争结局.我方军队有几支 + "支军队，我方总兵力：" + 战争结局.我方总士兵 + "，敌方总兵力：" + 战争结局.敌人总士兵 + "，兵种：" + 战争结局.对方兵种 + "。";
      战争结局.出征的军队 = 出征的军队;
      i = 0;
      while(i < 100){
         var _loc12_ = 目标.士兵;
         console.log(i + "回合" + "目标.士兵剩余" + 目标.士兵);
         n = 0;
         while(n < 出征的军队.length){
            console.log(出征的军队[n].队名 + "单兵战力" + 出征的军队[n].单兵战力 + "兵力" + 出征的军队[n].兵力 + "出征的军队[n].训练度" + 出征的军队[n].训练度 + "将军武力" + 出征的军队[n].将军.武力 + "皇室加成" + 皇室加成);
            var _loc13_ = 目标.士兵;
            if(目标.士兵 > 0){
				if(皇室加成 == undefined){var 皇室加成啊 = 0;}else{var 皇室加成啊 = 皇室加成;}
               var _loc14_ = Math.round(出征的军队[n].单兵战力 * 出征的军队[n].兵力 * (出征的军队[n].训练度 / 100 * 出征的军队[n].将军.武力 / 100 + 皇室加成啊) / 100);
               目标.士兵 -= _loc14_;
               if(目标.士兵 < 0){
                  目标.士兵 = 0;
                  战争结局.出征的军队[n].斩杀 += _loc13_;
               }
               else{
                  战争结局.出征的军队[n].斩杀 += _loc14_;
               }
               console.log(战争结局.出征的军队[n].队名 + "斩杀" + 战争结局.出征的军队[n].斩杀);
            }
            n++;
         }
         var _loc15_ = Math.round(_all_nation[目标.归属].战力 * _loc12_ / 100);
         var _loc16_ = 0;
         n = 0;
         while(n < 出征的军队.length){
            if(出征的军队[n].兵力 > 0){
               _loc16_ += 1;
            }
            n++;
         }
         n = 0;
         while(n < 出征的军队.length){
            if(出征的军队[n].兵力 > 0){
               var _loc17_ = 102 - Math.round(出征的军队[n].将军.智力 * 出征的军队[n].将军.智力 / 100);
               if(random(_loc17_) == 0){
                  console.log(战争结局.出征的军队[n].队名 + "回避成功");
               }
               else{
                  var _loc18_ = Math.round(_loc15_ / _loc16_ * (2 - 出征的军队[n].将军.统帅 / 100 - _loc8_));
                  console.log(战争结局.出征的军队[n].队名 + "本次损失" + _loc18_);
                  出征的军队[n].兵力 -= _loc18_;
                  if(出征的军队[n].兵力 < 0){
                     出征的军队[n].兵力 = 0;
                     战争结局.出征的军队[n].损失 = 出征的军队[n].原兵力;
                  }
                  else{
                     战争结局.出征的军队[n].损失 += _loc18_;
                  }
               }
            }
            console.log(战争结局.出征的军队[n].队名 + "损失" + 战争结局.出征的军队[n].损失);
            n++;
         }
         i++;
      }
      n = 0;
      while(n < 出征的军队.length){
         战争结局.战报 += "\n【" + 战争结局.出征的军队[n].队名 + "】主将：" + 战争结局.出征的军队[n].将军.名字 + "（统帅" + 战争结局.出征的军队[n].将军.统帅 + "/武力" + 战争结局.出征的军队[n].将军.武力 + "/智力" + 战争结局.出征的军队[n].将军.智力 + "），士气:" + 战争结局.出征的军队[n].训练度;
         战争结局.战报 += "\n杀敌" + 战争结局.出征的军队[n].斩杀 + "人，损失" + 战争结局.出征的军队[n].损失 + "人。";
         n++;
      }
      if(目标.士兵 <= 0){
         主角.战斗队伍.胜负 = 1;
         战争结局.胜负 = 1;
         战争结局.战报 += "战争结束，我方胜利。";
      }
      else{
         var _loc19_ = 0;
         var _loc20_ = 0;
         n = 0;
         while(n < 出征的军队.length){
            _loc19_ += 出征的军队[n].兵力;
            n++;
         }
         if(_loc19_ <= 0){
            主角.战斗队伍.胜负 = 0;
            战争结局.胜负 = 0;
            战争结局.战报 += "战争结束，我方战败。";
         }
         else{
            主角.战斗队伍.胜负 = 2;
            战争结局.胜负 = 2;
            战争结局.战报 += "\n\n战争结束，双方平手。";
         }
      }
      console.log(战争结局.战报);
   }
   else if(攻防参数 == 1){
      _loc9_ = 0;
      _loc10_ = 0;
      _loc11_ = _all_nation[敌城.归属].战力 * 敌城.士兵;
      console.log(敌城.士兵);
      if(出征的军队.length != 0){
         n = 0;
         while(n < 出征的军队.length){
            _loc9_ += 出征的军队[n].兵力;
            出征的军队[n].斩杀 = 0;
            出征的军队[n].损失 = 0;
            出征的军队[n].原兵力 = 出征的军队[n].兵力;
            n++;
         }
      }
      战争结局.我方军队有几支 = 出征的军队.length;
      战争结局.我方总士兵 = Number(_loc9_);
      战争结局.敌人总士兵 = 敌城.士兵;
      战争结局.目标 = 我城;
      战争结局.袭击方 = 敌城;
      战争结局.对方兵种 = _all_nation[敌城.归属].兵种;
      战争结局.战报 = "我方在与" + _all_nation[敌城.归属].名称 + "的防守战战报如下：";
      战争结局.战报 += "\n我方共派出" + 战争结局.我方军队有几支 + "支军队，我方总兵力：" + 战争结局.我方总士兵 + "，敌方总兵力：" + 战争结局.敌人总士兵 + "，兵种：" + 战争结局.对方兵种 + "。";
      战争结局.出征的军队 = 出征的军队;
      if(出征的军队.length == 0){
         战争结局.战报 += "我军无人抵抗，敌军兵不血刃，将【" + 我城.名称 + "】占领。";
         我城.归属 = 敌城.归属;
      }
      else{
         i = 0;
         while(i < 100){
            _loc12_ = 敌城.士兵;
            console.log(i + "回合" + "目标.士兵剩余" + 敌城.士兵);
            n = 0;
            while(n < 出征的军队.length){
               console.log(出征的军队[n].队名 + "单兵战力" + 出征的军队[n].单兵战力 + "兵力" + 出征的军队[n].兵力 + "出征的军队[n].训练度" + 出征的军队[n].训练度 + "将军武力" + 出征的军队[n].将军.武力 + "皇室加成" + 皇室加成);
               _loc13_ = 敌城.士兵;
               if(敌城.士兵 > 0){
                  _loc14_ = Math.round(出征的军队[n].单兵战力 * 出征的军队[n].兵力 * (出征的军队[n].训练度 / 100 * 出征的军队[n].将军.武力 / 100 + 皇室加成) / 100);
                  敌城.士兵 -= _loc14_;
                  if(敌城.士兵 < 0){
                     敌城.士兵 = 0;
                     战争结局.出征的军队[n].斩杀 += _loc13_;
                  }
                  else{
                     战争结局.出征的军队[n].斩杀 += _loc14_;
                  }
                  console.log(战争结局.出征的军队[n].队名 + "斩杀" + 战争结局.出征的军队[n].斩杀);
               }
               n++;
            }
            _loc15_ = Math.round(_all_nation[敌城.归属].战力 * _loc12_ / 100);
            _loc16_ = 0;
            n = 0;
            while(n < 出征的军队.length){
               if(出征的军队[n].兵力 > 0){
                  _loc16_ += 1;
               }
               n++;
            }
            n = 0;
            while(n < 出征的军队.length){
               if(出征的军队[n].兵力 > 0){
                  _loc17_ = 102 - Math.round(出征的军队[n].将军.智力 * 出征的军队[n].将军.智力 / 100);
                  if(random(_loc17_) == 0){
                     console.log(战争结局.出征的军队[n].队名 + "回避成功");
                  }
                  else{
                     _loc18_ = Math.round(_loc15_ / _loc16_ * (2 - 出征的军队[n].将军.统帅 / 100 - _loc8_));
                     console.log(战争结局.出征的军队[n].队名 + "本次损失" + _loc18_);
                     出征的军队[n].兵力 -= _loc18_;
                     if(出征的军队[n].兵力 < 0)
                     {
                        出征的军队[n].兵力 = 0;
                        战争结局.出征的军队[n].损失 = 出征的军队[n].原兵力;
                     }
                     else
                     {
                        战争结局.出征的军队[n].损失 += _loc18_;
                     }
                  }
               }
               console.log(战争结局.出征的军队[n].队名 + "损失" + 战争结局.出征的军队[n].损失);
               n++;
            }
            i++;
         }
         n = 0;
         while(n < 出征的军队.length){
            战争结局.战报 += "\n【" + 战争结局.出征的军队[n].队名 + "】主将：" + 战争结局.出征的军队[n].将军.名字 + "（统帅" + 战争结局.出征的军队[n].将军.统帅 + "/武力" + 战争结局.出征的军队[n].将军.武力 + "/智力" + 战争结局.出征的军队[n].将军.智力 + "），士气:" + 战争结局.出征的军队[n].训练度;
            战争结局.战报 += "\n杀敌" + 战争结局.出征的军队[n].斩杀 + "人，损失" + 战争结局.出征的军队[n].损失 + "人。";
            n++;
         }
      }
      if(敌城.士兵 <= 0){
         主角.战斗队伍.胜负 = 1;
         战争结局.胜负 = 1;
         战争结局.战报 += "\n\n战争结束，我方胜利，敌军被击退。";
      }
      else{
         _loc19_ = 0;
         _loc20_ = 0;
         n = 0;
         while(n < 出征的军队.length){
            _loc19_ += 出征的军队[n].兵力;
            n++;
         }
         if(_loc19_ <= 0){
            主角.战斗队伍.胜负 = 0;
            战争结局.胜负 = 0;
            战争结局.战报 += "\n\n战争结束，我方战败，【" + 我城.名称 + "】失守。";
            我城.归属 = 敌城.归属;
         }
         else{
            主角.战斗队伍.胜负 = 2;
            战争结局.胜负 = 2;
            战争结局.战报 += "\n\n战争结束，双方平手。";
         }
      }
      防守战发战报();
      console.log(战争结局.战报);
   }
}
function 防守战发战报(){
   var _loc2_ = 战争例行消耗(战争结局);
   缓动黑幕();
   id('szb').style.display = 'block';
   id('szbTittle').innerText = '战报';
   id('szbText').innerText = 战争结局.战报;
   id('szbText').innerText += "\n\n本次战争我军伤亡将士" + _loc2_.死伤多少人 + "名，国库需支出抚恤金" + _loc2_.需要多少抚恤金 + "两。";
   id('szbgb').onclick = function(){
     this.parentNode.style.display = 'none';
     };
   if(战争结局.胜负 == 0){
      记录大事件的程序(颜色代码(战争结局.目标.名称 + "失守，被" + _all_nation[战争结局.袭击方.归属].名称 + "占领。","ff0000"));
      刷新每个国家几城的程序();
      属性.快乐 -= 20;
      属性.威望 -= 20;
   }
   else if(战争结局.胜负 == 1){
      记录大事件的程序(颜色代码(战争结局.目标.名称 + "防守战战胜，" + _all_nation[战争结局.袭击方.归属].名称 + "的军队被击退。","ff0000"));
	  属性.快乐 += 20;
	  属性.威望 += 50;
	  战争结局.出征的军队.sort(compare('斩杀'));
	  console.log(战争结局.出征的军队[0].将军.名字);
	  var i = 0;
		 while(i < 战争结局.出征的军队.length){
			战争结局.出征的军队[i].将军.功勋 += 100 + 50*i + random(10);
			i++;
		 }
   }
   else if(战争结局.胜负 == 2){
      记录大事件的程序(颜色代码(战争结局.目标.名称 + "之战异常激烈，将士也是拼命杀敌。\n战争难解难分，暂时陷入停战状态。","ff0000"));
   }
   更新资料();
}
function 处理战争面板条的程序(战争面板面板, 参数, 跳){
   var _loc4_ = 出征拉动条[参数];
   _loc4_._parent["图" + 跳].gotoAndStop(跳);
   _loc4_.长度 = 国家[参数];
   _loc4_.值 = 0;
   _loc4_.数值.text = _loc4_.值;
   _loc4_.条._xscale = 0;
   战争NewDrag(_loc4_.r.a);
}
function 战争NewDrag(Mc){
   Mc._x = 0;
   Mc._y = 0;
   Mc.onclick = function(){
      var tiao_max = 397;
      startDrag(this,0,0,0,tiao_max,0);
      this._parent.onEnterFrame = function(){
         this._parent.条._xscale = this.a._x / tiao_max * 100;
         this._parent.值 = Math.round(this._parent.长度 * (this.a._x / tiao_max));
         this._parent.数值.text = this._parent.值;
      };
   };
   Mc.onclick = function(){
      stopDrag();
      delete this.onEnterFrame;
   };
   Mc.onclickOutside = function(){
      stopDrag();
   };
}
function 加入邻居程序(数据,城市){
   var _loc3_ = 0;
   var _loc7_ = 0;
   while(_loc7_ < 数据.length){
      if(数据[_loc7_].id == 城市.id){
         _loc3_ = 1;
      }
      _loc7_ += 1;
   }
   if(_loc3_ == 0){
      if(城市.归属 !== 8 && 城市.归属 !== 23){
         if(_all_nation[城市.归属].外交 !== 7){
            数据.push(城市);
         }
      }
   }
}
function 战争例行消耗(战争结局, 参数){
   var _loc3_ = 0;
   var _loc4_ = 0;
   i = 0;
   while(i < 战争结局.出征的军队.length){
      _loc4_ += 战争结局.出征的军队[i].兵力;
      i++;
   }
   _loc3_ = 战争结局.我方总士兵 -  Number(_loc4_);
   if(参数 == 1){
      var _loc5_ = _loc3_ * 3;
   }
   else{
      _loc5_ = _loc3_ * 6;
   }
   i = 0;
   while(i < _all_army.length){
      _all_army[i].出战中 = 0;
      i++;
   }
   国家.金钱 -= _loc5_;
   console.log('战争例行消耗' + _loc5_);
   更新资料();
   var _loc6_ = {};
   _loc6_.死伤多少人 = _loc3_;
   _loc6_.需要多少抚恤金 = _loc5_;
   return _loc6_;
}
function 战争战报事件(){
   console.log(战争结局.战报);
   主角.战报 = 战争结局.战报;
   var 反馈数值 = 战争例行消耗(战争结局);
   缓动黑幕();战争结局.胜负 =1;
   id('taijianBg').style.top = '0px';
   id('taijianBg').style.display = 'block';
   id('taijiantu').style.display = 'none';
   id('taijian2').style.backgroundPositionX = '-224px';
   id('taijian2').style.width = '159px';	
   id('taijianbgText').innerText = "皇上，" + 战争结局.目标.名称 + "之战的战报已经送到。\n(详细战报可参见军事奏折)";
   id('tjBgCon').onclick = function(){
       id('szb').style.display = 'block';
	   id('szbTittle').innerText = '战报';
       id('szbText').innerText = 战争结局.战报;
	   每月的军事奏折 = 战争结局.战报;
       id('szbgb').onclick = function(){
         this.parentNode.style.display = 'none';
         };
      if(战争结局.胜负 == 0){
         id('taijianbgText').innerText = "战争异常激烈，我军全军覆没。";
         记录大事件的程序(颜色代码(战争结局.目标.名称 + "之战异常激烈，我军全军覆没。","ff0000"));
         id('taijian2').style.backgroundPositionX = '-687px';
         id('taijian2').style.width = '214px';	
         var _loc3_ = random(100);
         if(国家.目前出征的皇子 !== undefined){
            if(国家.目前出征的皇子.统帅 < _loc3_){
               id('taijianbgText').innerText  += "出征的皇子" + 国家.目前出征的皇子.名称 + "不幸战死。";
               判定这个子女死亡(国家.目前出征的皇子);
            }
            else{
               id('taijianbgText').innerText  += "出征的皇子" + 国家.目前出征的皇子.名称 + "不幸负伤，现已回京调养，请皇上有空去看看。";
               国家.目前出征的皇子.病 = 8;
            }
         }
         国家.目前出征的皇子 = undefined;
      }
      else if(战争结局.胜负 == 1){
         id('taijianbgText').innerText  = "全军将士英勇杀敌，我军获胜。出征的将领都获得了功勋。";
         记录大事件的程序(颜色代码(战争结局.目标.名称 + "之战全军将士英勇杀敌，我军获胜。","ff0000"));
         id('taijian2').style.backgroundPositionX = '-901px';
         id('taijian2').style.width = '183px';	
         if(国家.目前出征的皇子 !== undefined){
            id('taijianbgText').innerText  += "出征的皇子" + 国家.目前出征的皇子.名称 + ",可算是立了大功。";
            国家.目前出征的皇子.武力 += 2;
            if(国家.目前出征的皇子.武力 > 100){
               国家.目前出征的皇子.武力 = 100;
            }
            国家.目前出征的皇子.统帅 += 2;
            if(国家.目前出征的皇子.统帅 > 100){
               国家.目前出征的皇子.统帅 = 100;
            }
         }
         国家.目前出征的皇子 = undefined;
         战争结局.目标.归属 = 8;
         战争结局.出征的军队.sort(compare('斩杀'));
         console.log(战争结局.出征的军队[0].将军.名字);
         i = 0;
         while(i < 战争结局.出征的军队.length){
            战争结局.出征的军队[i].将军.功勋 += 100 + 50*i + random(10);
            i++;
         }
         刷新每个国家几城的程序();
      }
      else if(战争结局.胜负 == 2){
         id('taijianbgText').innerText  = "战争异常激烈，将士也是拼命杀敌。\n战争难解难分，暂时陷入停战状态。";
         记录大事件的程序(颜色代码(战争结局.目标.名称 + "之战异常激烈，将士也是拼命杀敌。\n战争难解难分，暂时陷入停战状态。","ff0000"));
         id('taijian2').style.backgroundPositionX = '0px';
         id('taijian2').style.width = '112px';	
         if(国家.目前出征的皇子 !== undefined && random(Math.round(国家.目前出征的皇子.统帅)) <= 60){
            id('taijianbgText').innerText  += "出征的皇子" + 国家.目前出征的皇子.名称 + "不幸负伤，现已回京调养，请皇上有空去看看。";
            国家.目前出征的皇子.病 = 8;
         }
         国家.目前出征的皇子 = undefined;
      }
      id('tjBgCon').onclick = function(){
         加载进步动画条的说("金钱");
         if(战争结局.胜负 == 0){
            属性.快乐 -= 20;
            属性.威望 -= 2;
            记录大事件的程序(颜色代码(战争结局.目标.名称 + "之战失败。","5f5ffc"));
         }
         else if(战争结局.胜负 == 1){
            加载进步动画条的说("快乐");
            加载进步动画条的说("威望");
            属性.快乐 += 20;
            属性.威望 += 50;
            记录大事件的程序(颜色代码(战争结局.目标.名称 + "之战胜利。","5f5ffc"));
         }
         else if(战争结局.胜负 == 2){
            记录大事件的程序(颜色代码(战争结局.目标.名称 + "之战不分胜负。","5f5ffc"));
         }
         更新资料();
         id('taijianbgText').innerText  = "本次战争我军伤亡将士" + 反馈数值.死伤多少人 + "名，国库需支出抚恤金" + 反馈数值.需要多少抚恤金 + "两。";
         id('taijian2').style.backgroundPositionX = '-224px';
	     id('taijian2').style.width = '159px';	
         id('tjBgCon').onclick = function(){
            if(战争结局.胜负 == 1){
               id('tjBgCon').onclick = function(){
               };
               id('taijianbgText').innerText  = "";
               缓动黑幕();
               id('fulu').style.display = 'block';
               var 俘虏数量 = Math.round(Number(战争结局.敌人总士兵) * 0.01);
               id('fuluText').innerText = "本次战役共俘获" + 战争结局.目标.名称 + "兵" + 俘虏数量 + "名。";
               var _loc2_ = 战争结局.目标.人口 * 60;
               id('fuluText').innerText += "获得敌方城市府库银两" + _loc2_ + "两。";
               国家.金钱 += _loc2_;
               if(random(3) == 1){
                  var _loc3_ = 来一个宝贝();
                  id('fuluText').innerText += "\n并获得一件珍宝“" + _loc3_ + "”。";
               }
               id('fuluText').innerText += "战斗中抓获的俘虏，皇上想如何处置。";
			   id('fuluan').style.display = 'block';
			   id('fuluan1').style.display = 'block';
			   id('fuluan2').style.display = 'block';
			   id('fuluan3').style.display = 'block';
			   id('fuluan1').innerText = "遣返家园";
			   id('fuluan2').innerText = "午门斩首";
			   id('fuluan3').innerText = '教化为民';
			   id('fulutu').src = 'images/1975.webp';
			   id('fulukuang').onclick = function(){}
               id('fuluan1').onclick = function(){
                  属性.道德 += 15;
                  战争结局.目标.人口 += 俘虏数量;
                  id('fuluan1').style.display = 'none';
                  id('fuluan2').style.display = 'none';
                  id('fuluan3').innerText = '关闭';
                  id('fulutu').src = 'images/1980.webp';
                  id('fuluText').innerText = "立即将俘虏送回" + 战争结局.目标.名称 + "。";
                  id('fuluan3').onclick = function(){
                     俘虏消失程序(战争结局.目标);
                  };
               };
               id('fuluan3').onclick = function(){
                 id('fuluan1').style.display = 'none';
                 id('fuluan2').style.display = 'none';
                 id('fuluan3').innerText = '关闭';
                  id('fulutu').src = 'images/1978.webp';
                  id('fuluText').innerText = "即刻令知府前来领这些" + 战争结局.目标.名称 + "俘虏。";
                  id('fuluan3').onclick = function(){
                     俘虏消失程序(战争结局.目标);
                  };
               };
               id('fuluan2').onclick = function(){
                  属性.暴戾 += 15;
                  id('fuluan1').style.display = 'none';
                  id('fuluan2').style.display = 'none';
                  id('fuluan3').innerText = '关闭';
                  id('fuluan3').src = 'images/1982.webp';
                  id('fuluText').innerText = "这么多俘虏兵，估计要杀上好几天。";
                  id('fuluan3').onclick = function(){
                     俘虏消失程序(战争结局.目标);
                  };
               };
            }
            else{
               结束固定事件程序();
            }
         };
      };
   };
}
function 俘虏消失程序(战斗地点){
   属性.快乐 += 40;
   更新资料();
   结束固定事件程序();
   判定城里是否有敌将(战斗地点);
   黑色幕布();
   id('fulu').style.display = 'none';
}
function 判定城里是否有敌将(战斗城市){
   if(战斗城市.敌将开关 == 0) {
      var _loc2_ = 战斗城市.文化;
      var _loc3_ = [];
      var _loc4_ = 0;
      var _loc5_ = [];
      while(_loc4_ < 所有敌将.length)
      {
         if(所有敌将[_loc4_].文化 == _loc2_&&所有敌将[_loc4_]._code < 5000)
         {
            if(所有敌将[_loc4_].地位 !== undefined)
            {
               _loc3_.push(_loc4_);
            }
         }
         _loc4_ += 1;
      }
      _loc8_ = _all_nation[_loc2_].城.length;
      if(_loc3_.length > _loc8_)
      {
         _loc7_ = _loc3_[_loc8_];
         if(所有敌将[_loc3_[_loc8_]].地位 == 1)
         {
            _all_nation[_loc2_].皇帝.太子 = "无";
         }
         出现敌将(_loc7_,战斗城市);
      }
      else
      {
         判定城里是否有美女(战斗城市);
      }
   }
   else
   {
      判定城里是否有美女(战斗城市);
   }
}
function 出现敌将(对象,战斗城市){
   战斗城市.敌将开关 = 1;
   var 取数据 = 所有敌将[对象];
   id('介绍图').style.display = 'block';
   var _loc3_ = 取数据.跳;
   新后宫图形读取程序(id('介绍图头像'),_loc3_,"敌将");
   id('介绍图名字').innerText = 取数据.名称;   
   id('介绍图介绍').innerText = "    " + 取数据.介绍;
   id('介绍图an0').style.display = 'block';id('介绍图an0').innerText = "斩首";
   id('介绍图an1').style.display = 'block';id('介绍图an1').innerText = "关押";
   id('介绍图an2').style.display = 'block';id('介绍图an2').innerText = "释放";
   id('介绍图an3').style.display = 'block';id('介绍图an3').innerText = "招降";
   id('介绍图an0').onclick = function(){
      出圣旨("即刻将" + 取数据.名称 + "推出午门斩首，扬我天朝国威。");
      属性.暴戾 += 15;
      所有敌将[对象].用过 = 1;
      所有敌将[对象].地位 = undefined;
      判定城里是否有美女(战斗城市);
	  var _loc1_=0;
	  while(_loc1_<_all_family.length){
	  	if(_all_family[_loc1_].名称 == 取数据.名称&&_all_family[_loc1_]._code == 取数据._code){
	  		_all_family.splice(_loc1_,1);
	  	}
	  	_loc1_+=1;
	  }
      id('介绍图').style.display = 'none';
      更新资料();
   };
   id('介绍图an1').onclick = function()
   {
      出圣旨("即刻将" + 取数据.名称 + "关押至粘干处，听候发落。");
      取数据.被关押 = 1;
      所有敌将[对象].用过 = 1;
      所有敌将[对象].地位 = undefined;
	  var _loc1_=0;
	  while(_loc1_<_all_family.length){
	  	if(_all_family[_loc1_].名称 == 取数据.名称&&_all_family[_loc1_]._code == 取数据._code){
	  		_all_family[_loc1_].婚配序号=undefined;_all_family[_loc1_].脉系=undefined;
	  	}
	  	_loc1_+=1;
	  }
      判定城里是否有美女(战斗城市);
   };
   id('介绍图an2').onclick = function()
   {
      出圣旨("虽曾是敌国将领，但已无实力与天朝对抗。为显天朝宽容之道，特赦" + 取数据.名称 + "恢复自由。");
      属性.道德 += 10;
      所有敌将[对象].用过 = 1;
      判定城里是否有美女(战斗城市);
      id('介绍图').style.display = 'none';
	  var _loc1_=0;
	  while(_loc1_<_all_family.length){
	  	if(_all_family[_loc1_].名称 == 取数据.名称&&_all_family[_loc1_]._code == 取数据._code){
	  		_all_family.splice(_loc1_,1);
	  	}
	  	_loc1_+=1;
	  }
      更新资料();
   };
   id('介绍图an3').onclick = function()
   {
      所有敌将[对象].用过 = 1;
      所有敌将[对象].地位 = undefined;
      小提示("敌将宁死不屈");
   };
}
function 判定城里是否有美女(战斗城市){
   if(战斗城市.妃子开关 == 0){
      var _loc2_ = 战斗城市.文化;
      var _loc3_ = [];
      var _loc4_ = 0;
      var _loc5_ = [];
	  if(_loc2_== 2){_loc3_.push(2);}
	  if(_loc2_== 6){_loc3_.push(10);}
	  if(_loc2_== 10){_loc3_.push(18);}if(_loc2_== 19){_loc3_.push(30);}
      while(_loc4_ < 外域美人.length){
         if(外域美人[_loc4_].文化 == _loc2_&&外域美人[_loc4_]._code <= 6000){
            if(_loc4_!==2&&_loc4_!==10&&_loc4_!==18&&30&&外域美人[_loc4_].地位 !== undefined&&外域美人[_loc4_].地位 !== 1&&外域美人[_loc4_].地位 !== 2)
            {
               _loc3_.push(_loc4_);
            }
            if(外域美人[_loc4_].地位 == undefined&&外域美人[_loc4_].用过 == undefined)
            {
               _loc5_.push(_loc4_);
            }
         }
         _loc4_ += 1;
      }
	  console.log(_loc3_);
      _loc8_ = _all_nation[_loc2_].城.length;
      if(_loc3_.length > _loc8_){
         _loc7_ = _loc3_[_loc8_];
         if(外域美人[_loc3_[_loc8_]].地位 == 1)
         {
            _all_nation[_loc2_].皇帝.太子 = "无";
         }
         出现外域美人(_loc7_,战斗城市);
      }
      else if(_loc5_.length > 0)
      {
         _loc7_ = _loc5_[random(_loc5_.length)];
         出现外域美人(_loc7_,战斗城市);
      }
   }
   var _loc1_=战斗城市.文化;
   if(_all_nation[_loc1_].城.length == 0 &&_all_nation[_loc1_].皇帝!==undefined){
      _loc2_ = 0;
      while(_loc2_ < 所有敌将.length){
         if(所有敌将[_loc2_].文化 == _all_nation[_loc1_].id && 所有敌将[_loc2_].地位 !== undefined){
            所有敌将[_loc2_].用过 = undefined;
         }
         _loc2_ += 1;
      }
      _loc2_ = 0;
      while(_loc2_ < 外域美人.length){
         if(外域美人[_loc2_].文化 == _all_nation[_loc1_].id && 外域美人[_loc2_].地位 !== undefined){
            外域美人[_loc2_].用过 = undefined;
         }
         _loc2_ += 1;
      }
   		 _loc2_ = 0;
   		 while(_loc2_ < _all_family.length){
   		    if(_all_family[_loc2_].婚配序号 == _all_nation[_loc1_].皇帝._code||_all_family[_loc2_].脉系 == _all_nation[_loc1_].皇帝._code){
   		       _all_family.splice(_loc2_,1);
   		    }
   		    _loc2_ += 1;
   		 }
   }
}
function 出现外域美人(对象,战斗城市){
   战斗城市.妃子开关 = 1;
   var 取数据 = 外域美人[对象];
   var _loc1_=0;
   while(_loc1_<_all_family.length){
   	if(_all_family[_loc1_].名称 == 取数据.名称&&_all_family[_loc1_]._code == 取数据._code){
   		取数据.年龄=_all_family[_loc1_].年龄;console.log(_all_family[_loc1_])
		_all_family.splice(_loc1_,1);
   	}
   	_loc1_+=1;
   }
   id('介绍图').style.display = 'block';
   var _loc3_ = 取数据.跳;
   新后宫图形读取程序(id('介绍图头像'),_loc3_,"外域");
   id('介绍图名字').innerText = 取数据.名称;
   id('介绍图介绍').innerText = "外貌：" + 取数据.魅力;
   id('介绍图介绍').innerText += "\n\n";
   id('介绍图介绍').innerText += "    " + 取数据.介绍;
   id('介绍图an0').style.display = 'block';id('介绍图an0').innerText = "充为宫婢";
   id('介绍图an1').style.display = 'block';id('介绍图an1').innerText = "遣返家乡";
   id('介绍图an2').style.display = 'block';id('介绍图an2').innerText = "直接处死";
   id('介绍图an3').style.display = 'block';id('介绍图an3').innerText = "入储秀阁";
   id('介绍图an0').onclick = function(){
      外域美人[对象].用过 = 1;
      外域美人[对象].地位 = undefined;
      出圣旨(取数据.名称 + "敌国之妃。择日将" + 取数据.名称 + "送入掖庭悉心调教，充为宫廷女婢，侍奉皇家内宫。");
      属性.暴戾 += 5;
      _all_gongnv.push({id:_all_gongnv.length,俸禄:100,名称:取数据.名称,主子:undefined,职务:1,能力:3});
      更新资料();
      id('介绍图').style.display = 'none';
   };
   id('介绍图an1').onclick = function()
   {
      外域美人[对象].用过 = 1;
      出圣旨("虽是敌国之妃，但总是战争无辜之人。命御林军选一头领，送" + 取数据.名称 + "返回故乡。");
      属性.道德 += 10;
      更新资料();
      id('介绍图').style.display = 'none';
   };
   id('介绍图an2').onclick = function()
   {
      外域美人[对象].用过 = 1;
      外域美人[对象].地位 = undefined;
      出圣旨(取数据.名称 + "敌国之妃。即刻将" + 取数据.名称 + "送至午门斩首，扬我天朝国威。");
      属性.暴戾 += 10;
      更新资料();
      id('介绍图').style.display = 'none';
   };
   id('介绍图an3').onclick = function()
   {
      外域美人后宫册封(取数据);
      外域美人[对象].用过 = 1;
      外域美人[对象].地位 = undefined;
      更新资料();
      id('介绍图').style.display = 'none';
   };
}
function 外域美人后宫册封(对象){
   对象.出身 = _all_nation[对象.文化].名称 + "战俘";
   对象.经验 = random(100);
   对象.爱 = 15 + random(10);
   对象.称呼="战俘";
   对象.名字=对象.名称;
   if(对象.年龄 == undefined)
   {
	  对象.经验 = 0; 
      对象.年龄 = 15 + random(4);
   }
   收入储秀阁(对象);
   出圣旨(对象.名称 + "虽是敌国之妃。但朕念之可怜，特将" + 对象.名称 + "收入后宫。");
}
function 国王称呼计算(取数据){
   if(取数据 == 1){
      _loc3_ = "天皇";
   }
   else if(取数据 == 6){
      _loc3_ = "赞普";
   }
   else if(取数据 == 12){
      _loc3_ = "法老";
   }
   else if(取数据 == 13){
      _loc3_ = "大公";
   }
   else if(取数据 == 3|| 取数据 == 5|| 取数据 == 7|| 取数据 == 11|| 取数据 == 17|| 取数据 == 20|| 取数据 == 21|| 取数据 == 22){
      _loc3_ = "皇帝";
   }
   else if(取数据 == 0|| 取数据 == 9|| 取数据 == 14|| 取数据 == 14){
      _loc3_ = "国王";
   }
   else{
      _loc3_ = "可汗";
   }
   return _loc3_;
}
function 外国皇室(){
   var _loc2_ = 0;
   while(_loc2_ < 所有敌将.length){
      if(所有敌将[_loc2_].地位 !== undefined){
         _loc6_ = 所有敌将[_loc2_].文化;
         所有敌将[_loc2_].用过 = 1;
         if(所有敌将[_loc2_].地位 == 0){
            所有敌将[_loc2_].身份 = 国王称呼计算(_loc6_);
            _all_nation[_loc6_].皇帝 = new Object;
            _all_nation[_loc6_].皇帝._code = 所有敌将[_loc2_]._code;
            _all_nation[_loc6_].皇帝.名称 = 所有敌将[_loc2_].名称;
            _all_nation[_loc6_].皇帝.家族 = 所有敌将[_loc2_].家族;
            _all_nation[_loc6_].皇帝.文化 = _loc6_;
			_all_nation[_loc6_].皇帝.性别=0;
            _all_nation[_loc6_].皇帝.头像 = 所有敌将[_loc2_].跳;
            _all_nation[_loc6_].皇帝.年龄 = 28 + random(5);
			_all_nation[_loc6_].i=0;
         }
         else{
			var _loc1_=new Object;
			_loc1_.地位=所有敌将[_loc2_].地位;
			_loc1_.家族=所有敌将[_loc2_].家族;
			_loc1_.名称=所有敌将[_loc2_].名称;
			_loc1_.文化 = 所有敌将[_loc2_].文化;
			_loc1_.头像=所有敌将[_loc2_].跳;
			_loc1_.脉系 = _all_nation[_loc6_].皇帝._code;
			_loc1_._code = 所有敌将[_loc2_]._code;
            _loc1_.年龄 = _all_nation[_loc6_].皇帝.年龄 - 16 - _loc1_.地位*2 - random(2);
            _loc1_.身份 = 外国皇子称呼计算(_all_nation[_loc6_].id,所有敌将[_loc2_].地位);
			_loc1_.婚配序号 = undefined;_loc1_.儿女=0;
            _all_family.push(_loc1_);
			if(所有敌将[_loc2_].地位 == 1){
               _all_nation[_loc6_].皇帝.太子 = 所有敌将[_loc2_].名称;
			   _all_nation[_loc6_].皇帝.太子性别 = 0;
			   _all_nation[_loc6_].皇帝.太子身份 = _loc1_.身份;
            }
         }
      }
      _loc2_ = _loc2_ + 1;
   }
   _all_nation[1].皇帝.家族 = 0;
   var _loc4_ = 0;
   while(_loc4_ < 外域美人.length){
      if(外域美人[_loc4_].地位 !== undefined){
		  if(外域美人[_loc4_].名称=="杨奕承"){
		  	_loc6_ = 2;
		  }
		  else if(外域美人[_loc4_].名称=="李雪雁"){
			_loc6_ = 6;
		  }
		  else if(外域美人[_loc4_].名称=="李嵬名"){
		  	_loc6_ = 10;
		  }
		  else if(外域美人[_loc4_].名称=="李婼"){
		  	_loc6_ = 19;
		  }
		  else{
			_loc6_ = 外域美人[_loc4_].文化;  
		  }
          _loc8_ = 外域美人[_loc4_].地位;
         外域美人[_loc4_].用过 = 1;
         if(_loc8_ == 1 || _loc8_ == 2){
			var _loc1_=new Object;
			_loc1_.地位=外域美人[_loc4_].地位;
			_loc1_.家族=外域美人[_loc4_].家族;
			_loc1_.名称=外域美人[_loc4_].名称;
			_loc1_.文化 = 外域美人[_loc4_].文化;
			_loc1_._code = 外域美人[_loc4_]._code;
			_loc1_.头像=外域美人[_loc4_].跳;
			_loc1_.婚配序号 = undefined;_loc1_.儿女=1;
			_loc1_.身份 = 外国后宫称呼计算(_loc6_,_loc8_)[0];_all_nation[_loc6_].i+=1;
			_loc1_.年龄=_all_nation[_loc6_].皇帝.年龄 - 16 - _all_nation[_loc6_].i*2 - random(2);
			if(_loc1_.年龄<=0){
				_loc1_.年龄=1;
			}
			_loc1_.脉系=_all_nation[_loc6_].皇帝._code;
			if(外域美人[_loc4_].地位 == 1){
			  _all_nation[_loc6_].皇帝.太子 = 外域美人[_loc4_].名称;
			  _all_nation[_loc6_].皇帝.太子性别 = 1;
			  _all_nation[_loc6_].皇帝.太子身份 = _loc1_.身份;
			}
			_all_family.push(_loc1_);
         }
         else{
			 var _loc1_=new Object;
			 _loc1_.地位=外域美人[_loc4_].地位;
			 _loc1_.家族=外域美人[_loc4_].家族;
			 _loc1_.名称=外域美人[_loc4_].名称;
			 _loc1_.头像=外域美人[_loc4_].跳;
			 _loc1_.文化 = 外域美人[_loc4_].文化;
			 _loc1_._code = 外域美人[_loc4_]._code;
			_loc1_.身份 = 外国后宫称呼计算(_loc6_,_loc8_)[0];
			_loc1_.年龄=_all_nation[_loc6_].皇帝.年龄 - random(10);
			_loc1_.婚配序号=_all_nation[_loc6_].皇帝._code;
			 _loc1_.脉系 = undefined;
			  _all_family.push(_loc1_);
			  if(_loc1_.地位==0){
				  _all_nation[_loc6_].皇帝.皇后 = 外域美人[_loc4_].名称;
			  }
            }
         }
	 _loc4_+=1;
   }
   var _loc6_ = 0;
   while(_loc6_ < _all_nation.length){
	   if(_all_nation[_loc6_].皇帝!== undefined){
	   var _loc1_=0;
	   var _loc2_=0;
	   var _loc3_=0;
	   var _loc4_=0;
	   while(_loc1_<_all_family.length){
	   	   if(_all_family[_loc1_].婚配序号 == _all_nation[_loc6_].皇帝._code){
	   		   _loc2_+=1;
	   	   }
	   	   if(_all_family[_loc1_].脉系 == _all_nation[_loc6_].皇帝._code&&_all_family[_loc1_].儿女==0){
	   	   		_loc3_+=1;
	   	   }
	   	   if(_all_family[_loc1_].脉系 == _all_nation[_loc6_].皇帝._code&&_all_family[_loc1_].儿女==1){
	   	   		_loc4_+=1;
	   	   }
	   	   _loc1_+=1;
	   }
      if(_all_nation[_loc6_].皇帝.皇后 == undefined&& _all_nation[_loc6_].皇帝.名称 !== "孟昶"&& _all_nation[_loc6_].id !== 8&& _all_nation[_loc6_].id !== 23){
         _loc17_ = 生成外国女子(_all_nation[_loc6_]);
         _loc17_._code = 16000;
         _loc17_.地位 = 0;
         _loc17_.身份 = 外国后宫称呼计算(_loc6_,0)[0];
         _loc17_.介绍 = _all_nation[_loc6_].名称 + _loc17_.身份 + "，" + 国王称呼计算(_loc6_) + _all_nation[_loc6_].皇帝.名称 + "的正妻。";
         _loc17_.婚配序号 = _all_nation[_loc6_].皇帝._code;
         _loc17_.脉系 = undefined;
         _loc17_.年龄 = _all_nation[_loc6_].皇帝.年龄 - random(5);
         _loc17_.头像 = 计算外域头像(_loc17_);
         if(_all_nation[_loc6_].皇帝.名称 == "君士坦丁"){
            _loc17_.名称 = "海伦娜";
         }
         _all_family.push(_loc17_);
         _all_nation[_loc6_].皇帝.皇后 = _loc17_.名称;
      }
      if(_loc2_ <= 2&& _all_nation[_loc6_].id !== 7&& _all_nation[_loc6_].id !== 13&& _all_nation[_loc6_].id !== 8&& _all_nation[_loc6_].id !== 23){
         _loc17_ = 生成外国女子(_all_nation[_loc6_]);
         _loc17_._code = 16000;
		 _loc17_.婚配序号=_all_nation[_loc6_].皇帝._code;
		 _loc17_.脉系 = undefined;
         _loc18_ = 外国后宫称呼计算(_loc6_,undefined);
         _loc17_.身份 = _loc18_[0];
         _loc17_.地位 = _loc18_[1];
         _loc17_.介绍 = _all_nation[_loc6_].名称 + 国王称呼计算(_loc6_) + _all_nation[_loc6_].皇帝.名称 + "的妃子。";
         _loc17_.年龄 = _all_nation[_loc6_].皇帝.年龄 - random(8);
         _loc17_.头像 = 计算外域头像(_loc17_);
         _all_family.push(_loc17_);
      }
      if(_loc4_ <= 1&& _all_nation[_loc6_].id !== 8&& _all_nation[_loc6_].id !== 23){
         _loc19_ = 生成外国女子(_all_nation[_loc6_],_all_nation[_loc6_].皇帝.家族);
         _loc19_._code = 16000;
         _loc19_.地位 = 2;_loc19_.脉系 = _all_nation[_loc6_].皇帝._code;	_loc19_.婚配序号 = undefined;
         _loc19_.家族 = _all_nation[_loc6_].皇帝.家族;
         _loc19_.身份 = 外国后宫称呼计算(_loc6_,2)[0];_loc19_.儿女=1;
         _loc19_.介绍 = _all_nation[_loc6_].名称 + _loc19_.身份 + "，"+ 国王称呼计算(_loc6_) + _all_nation[_loc6_].皇帝.名称 + "之女。";
         _loc19_.年龄 = _all_nation[_loc6_].皇帝.年龄 - 16 - _loc4_*2 - random(2);
         _loc19_.头像 = 计算外域头像(_loc19_);
         if(_all_nation[_loc6_].皇帝.名称 == "李旵"){
            _loc19_.名称 = "李莹";
            _loc19_.年龄 = _all_nation[_loc6_].皇帝.年龄 - 16 + _loc4_*2 + random(2);
            _loc19_.介绍 = "顺天公主李莹，" + _all_nation[_loc6_].名称 + _loc19_.身份 + "，" + 国王称呼计算(_loc6_)+ _all_nation[_loc6_].皇帝.名称 + "之女。";
         }
         if(_loc19_.年龄 <= 9){
            _loc19_.幼年 = _loc19_.文化 * 10 + random(10);
            if(_loc19_.文化 == 20 || _loc19_.文化 == 21 || _loc19_.文化 == 22){
               _loc19_.幼年 = 8 * 10 + random(10);
            }
         }
         _all_family.push(_loc19_);
      }
      if(_all_nation[_loc6_].皇帝.太子 == undefined&& _all_nation[_loc6_].id !== 8&& _all_nation[_loc6_].id !== 23){
         _loc21_ = 生成外国男子(_all_nation[_loc6_],_all_nation[_loc6_].皇帝.家族);
         _loc21_._code = 15000;_loc21_.婚配序号 = undefined;
         _loc21_.地位 = 1;_loc21_.脉系 = _all_nation[_loc6_].皇帝._code;
         _loc21_.身份 = 外国皇子称呼计算(_loc6_,1);
		 _loc21_.儿女=0;
         _loc21_.介绍 = _all_nation[_loc6_].名称 + _loc21_.身份 + "，"+ 国王称呼计算(_loc6_) + _all_nation[_loc6_].皇帝.名称 + "之子。";
         _loc21_.年龄 = _all_nation[_loc6_].皇帝.年龄 - 16 - _loc3_ - random(2);
         _loc21_.头像 = 计算外域头像(_loc21_);
         if(_all_nation[_loc6_].皇帝.名称 == "成明"){
            _loc21_.名称 = "宪平";
            _loc21_.介绍 = "冷泉天皇宪平，" + _all_nation[_loc6_].名称 + _loc21_.身份 + "，"+ 国王称呼计算(_loc6_) + _all_nation[_loc6_].皇帝.名称 + "之子。";
         }
         if(_loc21_.年龄 <= 9){
            _loc21_.幼年 = _loc21_.文化 * 10 + random(10);
            if(_loc21_.文化 == 20 || _loc21_.文化 == 21 || _loc21_.文化 == 22){
               _loc21_.幼年 = 8 * 10 + random(10);
            }
         }
         _all_family.push(_loc21_);
         _all_nation[_loc6_].皇帝.太子 = _loc21_.名称;
         _all_nation[_loc6_].皇帝.太子身份 = _loc21_.身份;
         _all_nation[_loc6_].皇帝.太子性别 = 1;
      }
      if(_loc3_ <= 1&& _all_nation[_loc6_].太子性别 !== 1&& _all_nation[_loc6_].id !== 8&& _all_nation[_loc6_].id !== 23){
         _loc22_ = 生成外国男子(_all_nation[_loc6_],_all_nation[_loc6_].皇帝.家族);
         _loc22_._code = 15000;_loc22_.婚配序号 = undefined;
         _loc22_.地位 = 2;_loc22_.脉系 = _all_nation[_loc6_].皇帝._code;
         _loc22_.身份 = 外国皇子称呼计算(_loc6_,2);_loc22_.儿女=0;
         _loc22_.介绍 = _all_nation[_loc6_].名称 + _loc22_.身份 + "，"+ 国王称呼计算(_loc6_) + _all_nation[_loc6_].皇帝.名称 + "之子。";
         _loc22_.年龄 = _all_nation[_loc6_].皇帝.年龄 - 16 - _loc3_*2 - random(2);
         _loc22_.头像 = 计算外域头像(_loc22_);
         if(_all_nation[_loc6_].皇帝.名称 == "成明"){
            _loc22_.名称 = "守平";
            _loc22_.介绍 = "圆融天皇守平，" + _all_nation[_loc6_].名称 + _loc22_.身份 + "，"+ 国王称呼计算(_loc6_) + _all_nation[_loc6_].皇帝.名称 + "之子。";
         }
         if(_loc22_.年龄 <= 9){
            _loc22_.幼年 = _loc22_.文化 * 10 + random(10);
            if(_loc22_.文化 == 20 || _loc22_.文化 == 21 || _loc22_.文化 == 22){
               _loc22_.幼年 = 8 * 10 + random(10);
            }
         }
         _all_family.push(_loc22_);
      }
	 }
      _loc6_ = _loc6_ + 1;
   }
   if(_all_nation[20].皇帝.名称 == "孟昶"){
      _all_nation[20].皇帝.皇后 = "无";
   }
}
function 进行外交确定(阵营数据){
	id('waijiaoyilan').style.display = 'none';
    id("礼明殿面板").style.display = 'block';
	var i =阵营数据.跳*2 +1488;
	var m =阵营数据.跳*2 +1503;
    id("shizhe1").src = "./images/"+i+".webp";
    id("shizhe0").src = "./images/"+m+".webp";
    if(阵营数据.贸易年数 == 0){
	    id("lmdan0").style.display = 'none';
	    id("lmdan1").style.display = 'none';
	    id("lmdgb").style.display = 'block';
        if(阵营数据.外交 == 0){
        id("lmddh").innerText = "贸易什么的不可能了。\n来打仗吧。";
        id("lmdgb").onclick = function(){
            遵旨函数("与" + 阵营数据.名称 + "贸易失败。");
            id("礼明殿面板").style.display = 'none';
         };
      }
      else if(阵营数据.外交 > 0 && 阵营数据.友好度 < 200){
        id("lmddh").innerText = "我国什么都不缺，暂时不想进行贸易。";
        id("lmdgb").onclick = function(){
            遵旨函数("与" + 阵营数据.名称 + "贸易失败。");
            id("礼明殿面板").style.display = 'none';
         };
      }
      else if(阵营数据.外交 > 0 && 阵营数据.友好度 >= 200){
            id("lmddh").innerText = "我们相信，和贵国的贸易往来是一件互利互惠的事情。";
            id("lmdgb").onclick = function(){
            遵旨函数("与" + 阵营数据.名称 + "贸易成功。");
            阵营数据.贸易年数 += 1;
            贸易额计算程序(阵营数据);
            大殿体力扣除程序(30);
            id("礼明殿面板").style.display = 'none';
        };
      }
   }
   else{
	   id("lmdan0").style.display = 'block';
	   id("lmdan1").style.display = 'block';
	   id("lmdgb").style.display = 'none';
	   id("lmdan0").innerText = "断绝贸易";
	   id("lmdan1").innerText = "取消";
       id("lmddh").innerText = "我国与贵国的贸易往来一向很有诚意，陛下如若毁约闭关，我国即从此断绝与贵国的贸易关系。";
       id("lmdan0").onclick = function(){
         遵旨函数("与" + 阵营数据.名称 + "断绝贸易。");
         阵营数据.外交 = 0;
         阵营数据.友好度 = 0;
         阵营数据.贸易额 = 0;
         阵营数据.贸易年数 = 0;
         大殿体力扣除程序(30);
         id("礼明殿面板").style.display = 'none';
      };
      id("lmdan1").onclick = function(){
         id("礼明殿面板").style.display = 'none';
      };
   }
}
function 贸易额计算程序(阵营){
   var _loc3_ = 0;
   var _loc4_ = 0;
   var _loc5_ = 0;
   while(_loc5_ < _all_city.length){
      if(_all_city[_loc5_].归属 == 8){
         _loc4_ += _all_city[_loc5_].人口;
      }
      else if(_all_city[_loc5_].归属 == 阵营.id){
         _loc3_ += _all_city[_loc5_].人口;
      }
      _loc5_ += 1;
   }
   阵营.贸易额 = Math.round((_loc4_ - _loc3_) * 阵营.友好度 * 0.01 + 阵营.贸易年数 * 20000 * (属性.智力 / 2000 + 属性.政治 / 2000) - 200000);
   if(阵营.贸易额 > 1000000){
      阵营.贸易额 = 1000000;
   }
}
function 礼明殿程序(){
   var _loc1_ = _all_nation[主角.有客人[1]];
   展示外国信息(1,_loc1_);
}
function 交涉应答(阵营数据,文本){
   id('waiguoxx').style.display = 'none';
   id("礼明殿面板").style.display = 'block';
   id("lmdan0").style.display = 'none';
   id("lmdan1").style.display = 'none';
   id("lmdgb").style.display = 'block';
   var i =阵营数据.跳*2 +1488;
   var m =阵营数据.跳*2 +1503;
   id("shizhe1").src = "./images/"+i+".webp";
   id("shizhe0").src = "./images/"+m+".webp";
   id("lmdgb").onclick = function(){
      id("礼明殿面板").style.display = 'none';
	  展示外国信息(1,阵营数据);
   };
   id("lmddh").innerText = 文本;
}
function 外交送礼程序(阵营数据){
   if(主角.送钱示好 == 1){
      小提示("本月已经进行过了");
   }
   else if(阵营数据.外交 == 0){
      var _loc2_ = "两国还在开战中，要是想停战还是签订正式的停战协议吧。";
      交涉应答(阵营数据,_loc2_);
   }
   else{
      id('zhixingren').innerText = "";
      id('zxrbg').onclick = function(){};
      id('数值拉动面板').style.display = 'block';
      id('range').value = 0;
      id('range').max = 国家.金钱;
      change();
      id('rangeText').innerText ="送礼的钱数多少会影响本次示好的外交效果。";
      id('rangeText').innerText +="\n\n要给对方多少钱";
      id('rqueding').onclick = function(){
         var _loc2_ = "我们已经收到来自贵国的财物。（友好度提升）";
         交涉应答(阵营数据,_loc2_);
         国家.金钱 -= Number(id('range').value);
         主角.送钱示好 = 1;
         阵营数据.友好度 += Math.round(Number(id('range').value) / 400000 * (3 - 阵营数据.姿态));
         if(阵营数据.友好度 > 999){
            阵营数据.友好度 = 999;
         }
         记录大事件的程序("国家向" + 阵营数据.名称 + "送礼示好。");
         id('数值拉动面板').style.display = 'none';
         更新资料();
      };
   }
}
function 外交索要程序(阵营数据){
   if(主角.索要金钱 == 1){
      小提示("本月已经进行过了");
   }
   else{
      var _loc2_ = 计算军事实力();
      var _loc3_ = 计算别国实力(阵营数据);
      var _loc4_ = _loc2_ - _loc3_;
      if(阵营数据.外交 == 0){
         var _loc5_ = "皇帝是不是忘记两国已经是水火不容的地步了。（索要失败）";
         交涉应答(阵营数据,_loc5_);
      }
      else if(阵营数据.外交 >= 1 && 阵营数据.友好度 > 400){
         外交索要成功程序(阵营数据,0);
      }
      else if(_loc4_ > 300 && 阵营数据.友好度 > 200){
         外交索要成功程序(阵营数据,1);
      }
      else{
         _loc5_ = "我国无法答应贵国的这种要求。（索要失败）";
         交涉应答(阵营数据,_loc5_);
      }
   }
}
function 外交索要成功程序(阵营数据,参数){
   id('gzhjxz').style.display = 'block';
   id('gzhjTittle').innerText = "索要";
   id('gzhjText').innerText = "皇上想让对方进贡什么？";
   id('gzhjan0').innerText  = "金钱";
   id('gzhjan1').innerText  = "美女";
   id('gzhjan2').onclick = function(){id('gzhjxz').style.display = 'none';};
   id('gzhjan0').onclick = function(){
	  id('gzhjxz').style.display = 'none';
      if(参数 == 0){
         _loc7_ = "我国愿意提供300万金钱以支援贵国的发展建设。（索要成功）";
         阵营数据.友好度 -= 50 * (阵营数据.姿态 + 1);
         国家.金钱 += 3000000;
         更新资料();
         记录大事件的程序("国家向" + 阵营数据.名称 + "索要300万金钱。");
      }
      else if(参数 == 1){
         _loc7_ = "我们很愿意向贵国进贡500万金钱以支援贵国的发展建设。（索要成功）";
         阵营数据.友好度 -= 80 * (阵营数据.姿态 + 1);
         国家.金钱 += 5000000;
         更新资料();
         记录大事件的程序("国家向" + 阵营数据.名称 + "索要500万金钱。");
      }
      交涉应答(阵营数据,_loc7_);
   };
   id('gzhjan1').onclick = function(){
	   id('waiguoxx').style.display = 'none';
	   id('gzhjxz').style.display = 'none';
      _loc3_ = 计算军事实力();
      _loc4_ = 计算别国实力(阵营数据);
      _loc5_ = _loc4_ - _loc3_;
	  id('neishiMB').style.display = 'block';
	  id('neishi2').style.display = 'none';
	  id('neishiBG').style.display = 'block';
	  id('neishiBG').src =LJ +  'a0aPic_BG/Tu_777543.webp';
	  id('neishiTitle').innerText = '索要美女';
      id('neishiText').innerText  = "皇上需要对方进贡什么样的美女？";
      _loc8_ = 国王称呼计算(阵营数据);
      id('nsan0').innerText = "贵族美女";
      id('nsan1').innerText = "宗室美女";
      id('nsan2').innerText = "嫡亲公主";
      id('nsan3').innerText = _loc8_ + "嫔妃";
	  id('nsan4').style.display = 'none';id('nsan5').style.display = 'none';id('nsan6').style.display = 'none';id('nsan7').style.display = 'none';
      id('nsan0').onclick = function(){
		  id('neishiMB').style.display = 'none';
         if(阵营数据.外交 >= 1 && 阵营数据.友好度 > 600){
            _loc16_ = "我国愿意向贵国进献一名贵族美女。（索要成功）";
            _loc17_ = 生成外国女子(阵营数据);
            _loc17_.出身 = _all_nation[阵营数据.id].名称 + "贡女";
            _loc17_.介绍 = "一名经" + 阵营数据.名称 + "大臣在贵族间千挑万选，进献中原的美女。";
            _loc17_.年龄 = 15 + random(4);
            _loc17_.生育 = 0;
            _loc17_.魅力 = 60 + random(30);
            _loc17_._code = 16001;
            _loc17_.头像 = 计算外域头像(_loc17_);
            收入储秀阁(_loc17_);
            阵营数据.友好度 -= 30 * (阵营数据.姿态 + 1);
            记录大事件的程序(阵营数据.名称 + "向国家进献一名贵族美女" + 颜色代码(_loc17_.名称,"ff0000") + "。");
         }
         else{
            _loc16_ = "我国无法答应贵国的这种要求。（索要失败）";
         }
         交涉应答(阵营数据,_loc16_);
      };
      id('nsan1').onclick = function(){
		  id('neishiMB').style.display = 'none';
         if(阵营数据.外交 >= 1 && 阵营数据.友好度 > 600){
            _loc16_ = "我国愿意向贵国进献一名宗室美女。（索要成功）";
            _loc17_ = 生成外国女子(阵营数据);
            _loc17_.出身 = _all_nation[阵营数据.id].名称 + "贡女";
            _loc17_.介绍 = "一名经" + 阵营数据.名称 + 国王称呼计算(阵营数据.id) + "在宗室间精挑细选，进献中原的贵女。";
            _loc17_.年龄 = 15 + random(4);
            _loc17_.生育 = 0;
            _loc17_.魅力 = 70 + random(30);
            _loc17_.头像 = 计算外域头像(_loc17_);
            _loc17_._code = 16001;
            收入储秀阁(_loc17_);
            阵营数据.友好度 -= 30 * (阵营数据.姿态 + 1);
            记录大事件的程序(阵营数据.名称 + "向国家进献一名宗室贵女" + 颜色代码(_loc17_.名称,"ff0000") + "。");
         }
         else{
            _loc16_ = "我国无法答应贵国的这种要求。（索要失败）";
         }
         交涉应答(阵营数据,_loc16_);
      };
      id('nsan2').onclick = function(){
         if(阵营数据.外交 >= 3 && 阵营数据.友好度 > 400){
            外国皇室一览表(4,阵营数据.id);
         }
         else{
            _loc9_ = "我国无法答应贵国的这种要求。（索要失败）";
            交涉应答(阵营数据,_loc9_);
         }
      };
      id('nsan3').onclick = function(){
         if(阵营数据.外交 >= 3 && _loc5_ > 300 && 阵营数据.友好度 > 200){
            外国皇室一览表(3,阵营数据.id);
         }
         else{
            _loc9_ = "我国无法答应贵国的这种要求。（索要失败）";
            交涉应答(阵营数据,_loc9_);
         }
      };
   };
}
function 外交解盟程序(阵营数据){
   id('hukoupucha').style.display = 'block';
   id('huhouTitle').innerText = '解盟';
   id('huhouText').innerText = "解除同盟属于毁约，其对外交的影响十分恶劣，国家可能会在世界范围内被判为背信弃义，很难再找到盟友。确定要解除同盟吗？";
   id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
   id('hkan0').onclick = function(){
      id('hukoupucha').style.display = 'none';
      var _loc2_ = "那我们以后可就是敌人了。（同盟解除）";
      交涉应答(阵营数据,_loc2_);
      阵营数据.外交 = 1;
      记录大事件的程序("国家与" + 阵营数据.名称 + "解除同盟。");
   };
}
function 外交同盟程序(阵营数据){
   if(阵营数据.外交 == 0){
      var _loc2_ = "皇帝是不是忘记两国已经是水火不容的地步了。（结盟失败）";
   }
   else if(阵营数据.外交 == 1 && 阵营数据.友好度 > 800){
      _loc2_ = "我们很愿意有贵国这样一个盟友。（结盟成功）";
      阵营数据.外交 = 2;
      记录大事件的程序("国家与" + 阵营数据.名称 + "结成同盟。");
   }
   else{
      _loc2_ = "我国和贵国关系平平，暂时还不想和贵国结盟。（结盟失败）";
   }
   交涉应答(阵营数据,_loc2_);
}
function 外交议和程序(阵营数据){
   var _loc2_ = 计算军事实力();
   var _loc3_ = 计算别国实力(阵营数据);
   var _loc4_ = _loc3_ - _loc2_;
   if(_loc4_ > 400){
      var _loc5_ = "没什么好谈的，我国不同意停战。（议和失败）";
      交涉应答(阵营数据,_loc5_);
   }
   else if(_loc4_ <= 0){
      _loc5_ = "既然皇帝这么有诚意，我国同意各退其兵，和解停战。（议和成功）";
      交涉应答(阵营数据,_loc5_);
      阵营数据.友好度 = 110;
      阵营数据.外交 = 1;
      记录大事件的程序("国家与" + 阵营数据.名称 + "达成停战协议。");
   }
   else{
      if(_loc4_ > 300){
         var _loc6_ = 4;
      }
      else if(_loc4_ > 200){
         _loc6_ = 3;
      }
      else if(_loc4_ > 100){
         _loc6_ = 2;
      }
      else{
         _loc6_ = 1;
      }
      var 内容 = 计算停战协议(_loc6_);
      id("tingzhan").style.display = 'block';
      if(内容.赔款 == undefined){
         id("tztext1").innerText = "";
      }
      else{
         id("tztext1").innerText = "赔款：\n  " + 内容.赔款 + "两";
      }
      if(内容.珍宝 == undefined){
         id("tztext1").innerText += "";
      }
      else{
         id("tztext1").innerText += "珍宝：\n  ";
         d = 0;
         while(d < 内容.珍宝.length){
            停战协议界面.文本3.text += "" + 所有物品[内容.珍宝[d]].名称 + "  ";
            d++;
         }
      }
      if(内容.美女 == undefined){
         id("tztext1").innerText += "";
      }
      else{
         id("tztext1").innerText += "公主：\n  " + 内容.美女.名称 + "公主出嫁" + 阵营数据.名称;
      }
      if(内容.质子 == undefined){
         id("tztext1").innerText += "";
      }
      else{
         id("tztext1").innerText += "质子：\n  " + 内容.质子.名称 + "皇子做人质";
      }
      id("tztext0").innerText = "【" + 阵营数据.名称 + "】提出以下条款，签订后方可停战：";
      id("tzan1").onclick = function(){
         id("tingzhan").style.display = 'none';
         var _loc1_ = "那就没什么好谈的，我国不同意停战。（议和失败）";
         交涉应答(阵营数据,_loc1_);
      };
      id("tzan0").onclick = function(){
         执行停战协议内容(阵营数据,内容);
         id("tingzhan").style.display = 'block';
         var _loc1_ = "既然皇帝这么有诚意，我国同意各退其兵，和解停战。（议和成功）";
         交涉应答(阵营数据,_loc1_);
         阵营数据.友好度 = 110;
         阵营数据.外交 = 1;
         记录大事件的程序("国家与" + 阵营数据.名称 + "签订条约，达成停战协议。");
         更新资料();
      };
   }
}
function 执行停战协议内容(阵营数据,内容){
   国家.金钱 -= 内容.赔款;
   d = 0;
   while(d < 内容.珍宝.length){
      所有物品[内容.珍宝[d]].数量 -= 1;
      d++;
   }
   内容.美女.婚 = 1;
   内容.美女.状态 = 3;
   内容.美女.封号 = "远嫁" + 阵营数据;
   内容.美女.婚配 = 阵营数据 + "人";
   _all_family.push({id:_all_family.length,名称:阵营数据 + "人",年龄:random(5) + 25,婚配:内容.美女.名称,婚配序号:内容.美女.id,身份:"夫君",儿女:0});
   var _loc4_ = 30;
   远嫁公主.push({id:内容.美女.id,寿命:_loc4_});
   内容.质子.状态 = 4;
   内容.质子.封号 = "质押" + 阵营数据.名称;
}
function 计算停战协议(参数){
   var _loc2_ = {赔款:undefined,珍宝:undefined,美女:undefined,质子:undefined};
   if(国家.金钱 > 0){
      var _loc3_ = Math.round(国家.金钱 * 0.1 * (2 * 参数) + 1000000);
   }
   else{
      _loc3_ = 1000000;
   }
   _loc2_.赔款 = _loc3_;
   var _loc4_ = [];
   i = 0;
   while(i < 所有物品.length){
      if(所有物品[i].等级 < 6 && 所有物品[i].等级 > 2 && 所有物品[i].数量 > 1){
         _loc4_.push(所有物品[i]);
      }
      i++;
   }
   _loc4_.sort(compare("等级"));
   if(_loc4_.length > 参数){
      var _loc5_ = 参数;
   }
   else{
      _loc5_ = _loc4_.length;
   }
   var _loc6_ = [];
   i = 0;
   while(i < _loc5_){
      _loc6_.push(_loc4_[i].id);
      i++;
   }
   _loc2_.珍宝 = _loc6_;
   var _loc7_ = [];
   var _loc8_ = [];
   i = 0;
   while(i < _all_child.length){
      if(_all_child[i].性别 == 1 && _all_child[i].年龄 > 16 && _all_child[i]._code !== 9900 && _all_child[i].状态 == 0){
         _loc7_.push(_all_child[i]);
      }
      if(_all_child[i].性别 == 0 && _all_child[i].状态 == 0 && _all_child[i]._code !== 8900){
         _loc8_.push(_all_child[i]);
      }
      i++;
   }
   _loc7_.sort(compare("魅力"));
   _loc8_.sort(compare("关系"));
   if(参数 >= 3 && _loc7_.length !== 0){
	   var _loc9_ = _loc7_[0];
      _loc2_.美女 = _loc9_;
   }
   if(参数 >= 4 && _loc8_.length !== 0){
	   var _loc10_ = _loc8_[0];
      _loc2_.质子 = _loc10_;
   }
   return _loc2_;
}
function 敌国求和事件(取数据){
   阵营数据 = _all_nation[取数据.归属];
  id("礼明殿面板").style.display = 'block';
  var i =阵营数据.跳*2 +1488;
  var m =阵营数据.跳*2 +1503;
  id("shizhe1").src = "./images/"+i+".webp";
  id("shizhe0").src = "./images/"+m+".webp";
   刷新每个国家几城的程序();
   if(_all_nation[取数据.归属].城.length >= 3){
      i = 0;
      while(i < _all_city.length){
         if(_all_city[i].归属 == 取数据.归属&&i !== 取数据.id){
            _loc22_ = _all_city[i];
         }
         i++;
      }
      id("lmddh").innerText = "参见陛下。\n我们深知以自己蝼蚁之力抵挡贵国神兵是以卵击石。\n望陛下看在黎民苍生免遭涂炭的份上撤兵言和。\n我国愿意做天朝属国，并将" + _loc22_.名称 + "割让。";
   }
   else
   {
      id("lmddh").innerText = "参见陛下。\n我们深知以自己蝼蚁之力抵挡贵国神兵是以卵击石。\n望陛下看在黎民苍生免遭涂炭的份上撤兵言和。\n我国愿意做天朝属国。";
   }
   id("lmdan0").style.display = 'block';
   id("lmdan1").style.display = 'block';
   id("lmdgb").style.display = 'none';
   id("lmdan0").innerText = "谈谈条件";
   id("lmdan0").onclick = function(){
      id("lmdan0").style.display = 'none';
      id("lmdan1").style.display = 'none';
      id("lmdgb").style.display = 'block';
      谈判条件(阵营数据);
   };
   id("lmdan1").innerText = "拒绝";
   id("lmdan1").onclick = function(){
      _all_city[取数据.id].归属 = 8;
      _loc2_.removeMovieClip();
   };
}
function 谈判条件(阵营数据){
  id('neishiMB').style.display = 'block';
  id('neishi2').style.display = 'none';
  id('neishiBG').style.display = 'none';
  id('neishiTitle').innerText = '谈判条件';
  id('neishiText').innerText  = "皇上需要让对方进贡什么？";
  id('nsan0').innerText = "珍宝";
  id('nsan1').innerText = "岁币";
  id('nsan2').innerText = "美女";
  id('nsan3').innerText = "质子";
  var 面板 = new Object;
  面板.珍宝 = 0;
  面板.美女 = 0;
  面板.公主 = 0;
  面板.岁币 = 0;
  面板.质子 = 0;
  面板.皇子 = 0;
  面板.太子 = 0;
  id('nsan0').onclick = function(){
      谈判条件选项(面板,0);
   };
   id('nsan1').onclick = function(){
      谈判条件选项(面板,1);
   };
   id('nsan2').onclick = function(){
      谈判条件选项(面板,2,阵营数据);
   };
   id('nsan3').onclick = function(){
      谈判条件选项(面板,3,阵营数据);
   };
   谈判条件.attachMovie("二级按钮-红色","确定",600,{_x:350,_y:350});
   谈判条件.确定.文本.text = "确定";
   谈判条件.确定.onclick = function()
   {
      trace(面板.珍宝);
      trace(面板.美女);
      trace(面板.公主);
      trace(面板.岁币);
      trace(面板.质子);
      trace(面板.皇子);
      trace(面板.太子);
      判断对方是否会接受(面板,阵营数据);
      id('neishiMB').style.display = 'none';
   };
}
function 谈判条件选项(面板, 参数, 阵营数据){
   var 谈判条件选项 = _root.attachMovie("内侍面板","内侍面板",90650,{_x:0,_y:0});
   if(参数 == 0)
   {
	   id('neishiTitle').innerText = '珍宝';
	   id('neishiText').innerText  = "皇上要让对方进献几件珍宝？";
	   id('nsan0').innerText = "无";
	   id('nsan1').innerText = "一件";
	   id('nsan2').innerText = "两件";
	   id('nsan3').innerText = "三件";
      id('nsan0').onclick= function()
      {
         面板.珍宝 = 0;
         面板.文本0 = "无";
         谈判条件选项.removeMovieClip();
      };
      id('nsan1').onclick= function()
      {
         面板.珍宝 = 1;
         面板.文本1 = "一件珍宝";
         谈判条件选项.removeMovieClip();
      };
      id('nsan2').onclick= function()
      {
         面板.珍宝 = 2;
         面板.文本2 = "两件珍宝";
         谈判条件选项.removeMovieClip();
      };
      id('nsan3').onclick= function()
      {
         面板.珍宝 = 3;
         谈判条件选项.removeMovieClip();
      };
   }
   else if(参数 == 2)
   {
      谈判条件选项.文本.text = "皇上要让对方进献一名什么样的女子？";
      谈判条件选项.文0.text = "无";
      谈判条件选项.文1.text = "贵族美女";
      谈判条件选项.文2.text = "宗室美女";
      谈判条件选项.文3.text = "皇室公主";
      id('nsan0').onclick= function()
      {
         面板.美女 = 0;
         面板.文本0 = "无";
         谈判条件选项.removeMovieClip();
      };
      id('nsan1').onclick= function()
      {
         面板.美女 += 1;
         面板.文本1 = "贵族美女一名";
         谈判条件选项.removeMovieClip();
      };
      id('nsan2').onclick= function()
      {
         面板.美女 += 2;
         面板.文本2 = "宗室美女一名";
         谈判条件选项.removeMovieClip();
      };
      id('nsan3').onclick= function()
      {
         面板.公主 = 3;
         面板.文本3 = "皇室公主一名";
         外国家眷一览表(8,阵营数据);
         谈判条件选项.removeMovieClip();
      };
   }
   else if(参数 == 1)
   {
      谈判条件选项.文本.text = "皇上要让对方每年进贡多少岁币？";
      谈判条件选项.文0.text = "无";
      谈判条件选项.文1.text = "三百万两";
      谈判条件选项.文2.text = "五百万两";
      谈判条件选项.文3.text = "八百万两";
      id('nsan0').onclick= function()
      {
         面板.岁币 = 0;
         谈判条件.文本0 = "无";
         谈判条件选项.removeMovieClip();
      };
      id('nsan1').onclick= function()
      {
         面板.岁币 = 1;
         面板.文本1 = "三百万两";
         谈判条件选项.removeMovieClip();
      };
      id('nsan2').onclick= function()
      {
         面板.岁币 = 2;
         面板.文本2 = "五百万两";
         谈判条件选项.removeMovieClip();
      };
      id('nsan3').onclick= function()
      {
         面板.岁币 = 3;
         面板.文本3 = "八百万两";
         谈判条件选项.removeMovieClip();
      };
   }
   else if(参数 == 3)
   {
      谈判条件选项.文本.text = "皇上要让对方交出哪个皇子做质子？";
      谈判条件选项.文0.text = "无";
      谈判条件选项.文1.text = "世子";
      谈判条件选项.文2.text = "皇子";
      谈判条件选项.文3.text = "太子";
      id('nsan0').onclick= function()
      {
         面板.质子 = 0;
         面板.文本0 = "无";
         谈判条件选项.removeMovieClip();
      };
      id('nsan1').onclick= function()
      {
         面板.质子 = 1;
         面板.文本1 = "交出一名世子做质子";
         谈判条件选项.removeMovieClip();
      };
      id('nsan2').onclick= function()
      {
         面板.皇子 = 2;
         面板.文本2 = "交出一名皇子做质子";
         外国家眷一览表(7,阵营数据);
         谈判条件选项.removeMovieClip();
      };
      id('nsan3').onclick= function()
      {
         面板.太子 = 3;
         面板.文本3 = "交出太子做质子";
         谈判条件选项.removeMovieClip();
      };
   }
}
function 判断对方是否会接受(面板, 阵营数据){
   总要求 = 面板.珍宝 + 面板.美女 + 面板.公主 + 面板.岁币 + 面板.质子 + 面板.皇子 + 面板.太子;
   if(总要求 <= 8)
   {
      _loc3_.文本.text = "我国很愿意进贡这些，望今后与贵国能永结同好。";
      _loc5_ = 0;
      while(_loc5_ < 面板.珍宝)
      {
         来一个宝贝();
         _loc5_ += 1;
      }
      if(面板.岁币 == 1)
      {
         阵营数据.岁币 = 3000000;
      }
      if(面板.岁币 == 2)
      {
         阵营数据.岁币 = 5000000;
      }
      if(面板.岁币 == 3)
      {
         阵营数据.岁币 = 8000000;
      }
      _loc6_ = 生成外国女子(阵营数据);
      _loc6_.出身 = _all_nation[阵营数据.id].名称 + "贡女";
      _loc6_.简介 = "一名经" + 阵营数据.名称 + "大臣在贵族间精挑细选，进献中原的美女。";
      _loc6_.年龄 = 15 + random(4);
      _loc6_.生育 = 0;
      _loc6_.魅力 = 60 + random(30);
      _loc6_._code = 9700 + random(300);
      _loc6_.头像 = 计算外域头像(_loc6_);
      if(面板.美女 == 1)
      {
         收入储秀阁(_loc6_);
      }
      if(面板.美女 == 2)
      {
         _loc7_ = 生成外国女子(阵营数据);
         _loc7_.出身 = 阵营数据.名称 + "贡女";
         _loc7_.简介 = "一名经" + 阵营数据.名称 + 国王称呼计算(阵营数据.id) + "在宗室间精挑细选，进献中原的美女。";
         _loc7_.年龄 = 15 + random(4);
         _loc7_.生育 = 0;
         _loc7_.魅力 = 60 + random(30);
         _loc7_._code = 9700 + random(300);
         _loc7_.头像 = 计算外域头像(_loc7_);
         收入储秀阁(_loc7_);
      }
      if(面板.美女 == 3)
      {
         收入储秀阁(_loc6_);
         _loc7_ = 生成外国女子(阵营数据);
         _loc7_.出身 = 阵营数据.名称 + "贡女";
         _loc7_.简介 = "一名经" + 阵营数据.名称 + 国王称呼计算(阵营数据.id) + "在宗室间精挑细选，进献中原的美女。";
         _loc7_.年龄 = 15 + random(4);
         _loc7_.生育 = 0;
         _loc7_.魅力 = 60 + random(30);
         _loc7_._code = 9700 + random(300);
         _loc7_.头像 = 计算外域头像(_loc7_);
         收入储秀阁(_loc7_);
      }
      _loc13_ = 0;
      while(_loc13_ < 所有敌将.length)
      {
         if(所有敌将[_loc13_]._code == a[0])
         {
            break;
         }
         _loc13_ += 1;
      }
      _loc14_ = 0;
      while(_loc14_ < 外域美人.length)
      {
         if(外域美人[_loc14_]._code == a[1])
         {
            break;
         }
         _loc14_ += 1;
      }
      if(面板.公主 == 3)
      {
         收入储秀阁(外域美人[_loc14_]);
         阵营数据.皇帝.公主 -= 1;
         外域美人[_loc14_].地位 = undefined;
         if(外域美人[_loc14_]._code > 6000)
         {
            外域美人.splice(_loc14_,1);
         }
      }
      if(面板.质子 == 1)
      {
         _loc8_ = 生成外国男子(阵营数据);
         _loc8_.出身 = 阵营数据.名称 + "世子";
         _loc8_.简介 = "一名经" + 阵营数据.名称 + 国王称呼计算(阵营数据.id) + "在宗室间精挑细选，进献中原的美女。";
         _loc8_.年龄 = 15 + random(4);
         _loc8_.生育 = 0;
         _loc8_.魅力 = 60 + random(30);
         _loc8_._code = 8700 + random(300);
         _loc8_.头像 = 计算外域头像(_loc8_);
         _loc8_.跳 = _loc8_.头像;
         _loc8_.被关押 = 1;
         _loc8_.抗拒 = 50 + random(50);
         所有敌将.push(_loc8_);
      }
      if(面板.皇子 == 2)
      {
         所有敌将[_loc13_].被关押 = 1;
         阵营数据.皇帝.皇子 -= 1;
         所有敌将[_loc13_].地位 = undefined;
         if(所有敌将[_loc13_]._code > 6000)
         {
            所有敌将[_loc13_].抗拒 = 100 + random(50);
         }
      }
      if(面板.太子 == 3)
      {
         _loc12_ = 0;
         while(_loc12_ < 所有敌将.length)
         {
            if(所有敌将[_loc12_].地位 == 1&&所有敌将[_loc12_].文化 == 阵营数据.id)
            {
               阵营数据.皇帝.皇子 -= 1;
               所有敌将[_loc12_].被关押 = 1;
               所有敌将[_loc12_].地位 = undefined;
               阵营数据.太子.名字 = "无";
            }
            _loc12_ += 1;
         }
         _loc12_ = 0;
         while(_loc12_ < 外域美人.length)
         {
            if(外域美人[_loc12_].地位 == 1&&外域美人[_loc12_].文化 == 阵营数据.id)
            {
               收入储秀阁(外域美人[_loc12_]);
               阵营数据.皇帝.公主 -= 1;
               外域美人[_loc12_].地位 = undefined;
               阵营数据.太子.名字 = "无";
            }
            _loc12_ += 1;
         }
      }
      _all_nation[阵营数据.id].外交 = 3;
      _all_nation[阵营数据.id].友好度 = 800;
      if(阵营数据.城.length >= 3)
      {
         _all_city[_loc22_.id].归属 = 8;
         var _loc3_ = 0;
         while(_loc3_ < _all_city.length)
         {
            if(_all_city[_loc3_].归属 == 阵营数据.id&&阵营数据.id == _all_nation[阵营数据.id].都城)
            {
               _all_nation[阵营数据.id].都城 = _all_city[_loc3_].id;
            }
            _loc3_ += 1;
         }
      }
      记录大事件的程序(颜色代码(取数据.名称 + "之战胜利，并接受了" + _all_nation[阵营数据.id].名称 + "的求和请求。","5f5ffc"));
   }
   else
   {
      _loc3_.文本.text = "以我国的国力还不能提供这些，望陛下重新考虑。";
      面板.珍宝 = 0;
      面板.美女 = 0;
      面板.公主 = 0;
      面板.岁币 = 0;
      面板.质子 = 0;
      面板.皇子 = 0;
      面板.太子 = 0;
   }
}