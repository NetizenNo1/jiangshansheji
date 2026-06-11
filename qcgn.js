function 大殿体力扣除程序(参数){
   if(!isNaN(参数) && 参数 !== undefined){
      加载进步动画条的说("体力");
      属性.体力 -= 参数;
      if(属性.体力 < 5){
         id('出圣旨吧').style.display = 'none'
         宣政殿内.style.display = 'none';
         生病出图程序();
      }
      if(属性.体力 < 0){
         属性.体力 = 10;
      }
      更新资料(属性栏);
   }
   else{
      小提示("传递参数异常");
   }
}
function 遵旨函数(文本){
	id('zunzhi').style.display = 'block';
	id('zunzhitext').innerText = 文本;
	setTimeout(function() {id('zunzhi').style.display = 'none';}, 3900);
}
function 开科考试函数(){
	if(主角.开科考试 == 0){
		id('hukoupucha').style.display = 'block';
		id('huhouTitle').innerText = "开科考试";
		id('huhouText').innerText = "由皇上亲自制举，可招揽人才为朝廷效力。\n皇帝魅力和主考官魅力决定名臣出现率，皇帝的属性值决定随机人才相应属性的高低。\n要举行开科考试吗？";
		id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
		id('hkan0').onclick = function(){
		i = 0;
         while(i < _all_rencai.length){
            if(_all_rencai[i].官职 == "吏部尚书"){
               科举执行(_all_rencai[i]);
            }
            i++;
         }
		 id('hukoupucha').style.display = 'none';
		}
	}
	else{
	    小提示("开科考试已在准备，午后进行。");
	}
}
function 科举处理(){
  id('taijianSh').style.display = 'block';
  id('taijian').style.backgroundPositionX = '-224px';
  id('taijian').style.width = '159px';	
  id('taijianText').innerText = "考生已到达考场，请移驾考场。";
  id('taijianCon').onclick = function(){
      开始科考咯();
      id('taijianSh').style.display = 'none';
   };
}
function 科举执行(人才){
   人才.任务中 = 1;
   人才.功勋 += 10;
   主考官魅力 = 人才.魅力;
   出圣旨("命" + 人才.名字 + "主持科举考试，选拔优秀人才为朝廷效力。");
   遵旨函数("已派【" + 人才.名字 + "】执行科举。");
   主角.开科考试 = 1;
}
function 开始科考咯(){
	id('kaikekaoshi').style.display = 'block';
	var _loc2_ = 0;
	var 按钮数据 = [];
	var liebiaoxiang = id('kaoshilbx');
	var _loc3_ = 1;
	while(_loc3_ < 13){
		if(className('kaoshilbx').length < 13){
		var lbx = liebiaoxiang.cloneNode(true);
		lbx.setAttribute('id','div-' + _loc3_); 
		liebiaoxiang.parentNode.appendChild(lbx);	
		}
	   _loc2_ += 1;
	   _loc3_ += 1;
	}
	var lbxx = className('kaoshilbx');
	var i = 0;
	while(i < 13)
	{
		var xuanzhongle = className('xuanzhongle');
		xuanzhongle[i].onclick = function(){
			if(this.style.opacity == '0'){
			this.style.opacity = '1';}
			else{this.style.opacity = '0';}
			}
		 lbxx[i].style.top = i * 25 + 95 + 'px'; 
	   i ++;
	}
	var 临时科举 = [];
	   var _loc2_ = 0;
	   while(_loc2_ < 13)
	   {
	     var _loc3_ = Math.round(15 * 主考官魅力 / 100) + Math.round(85 * 属性.魅力 / 1000);
	      var _loc4_ = random(400);
	      var _loc5_ = [];
	      var _loc6_ = 0;
	      while(_loc6_ < 所有历史名人.length)
	      {
	         if(所有历史名人[_loc6_].用过 == undefined)
	         {
	            _loc5_.push(所有历史名人[_loc6_]);
	         }
	         _loc6_ += 1;
	      }
	      if(_loc4_ <= _loc3_ && _loc5_.length > 0)
	      {
	         var _loc7_ = 创建科举人才();
	         让这个人才变成名人(_loc7_);
	         临时科举.push(_loc7_);
	      }
	      else
	      {
	         _loc7_ = 创建科举人才();
	         _loc7_.智力 = random(75 - Math.round(属性.智力 / 20)) + Math.round(属性.智力 / 30);
	         _loc7_.统帅 = random(75 - Math.round(属性.统帅 / 20)) + Math.round(属性.统帅 / 30);
	         _loc7_.武力 = random(75 - Math.round(属性.武力 / 20)) + Math.round(属性.武力 / 30);
	         _loc7_.政治 = random(75 - Math.round(属性.政治 / 20)) + Math.round(属性.政治 / 30);
			 if(属性.道德 > 100)
	         {
	            _loc7_.清廉 += random(Math.round((属性.道德 - 100) / 100 * 4));
	            if(_loc7_.清廉 > 89)
	            {
	               _loc7_.清廉 = 89;
	            }
	         }
	         if(属性.魅力 > 100)
	         {
	            _loc7_.忠诚 += random(Math.round((属性.魅力 - 100) / 100 * 4));
	            if(_loc7_.忠诚 > 89)
	            {
	               _loc7_.忠诚 = 89;
	            }
	         }
	         临时科举.push(_loc7_);
	      }
	      _loc2_ += 1;
	   }
	var _loc3_ = 0;
	   while(_loc3_ < 临时科举.length)
	   {
		   className('k1')[_loc3_].取 = 临时科举[_loc3_];
		   className('k1')[_loc3_].onclick = function(){官员详情展示(this.取);}
	      className('k1')[_loc3_].innerText = 临时科举[_loc3_].名字;
	      className('k2')[_loc3_].innerText = 临时科举[_loc3_].年龄;
	      className('k3')[_loc3_].innerText = 临时科举[_loc3_].智力;
	      className('k4')[_loc3_].innerText = 临时科举[_loc3_].武力;
	      className('k5')[_loc3_].innerText = 临时科举[_loc3_].统帅;
	      className('k6')[_loc3_].innerText = 临时科举[_loc3_].政治;
	      className('k7')[_loc3_].innerText = 临时科举[_loc3_].魅力;
		  if(临时科举[_loc3_]._code <= 7000){className('k1')[_loc3_].style.color = '#55aa00';}else{className('k1')[_loc3_].style.color = '#ffffff';}
		  if(临时科举[_loc3_].智力 >= 80)
		        {
		           className('k3')[_loc3_].style.color = '#55aa00';
		        }
				else{className('k3')[_loc3_].style.color = '#ffffff';}
		        if(临时科举[_loc3_].武力 >= 80)
		        {
		           className('k4')[_loc3_].style.color = '#55aa00';
		        }else{className('k4')[_loc3_].style.color = '#ffffff';}
		        if(临时科举[_loc3_].统帅 >= 80)
		        {
		           className('k5')[_loc3_].style.color = '#55aa00';
		        }else{className('k5')[_loc3_].style.color = '#ffffff';}
		        if(临时科举[_loc3_].政治 >= 80)
		        {
		           className('k6')[_loc3_].style.color = '#55aa00';
		        }else{className('k6')[_loc3_].style.color = '#ffffff';}
		        if(临时科举[_loc3_].魅力 >= 80)
		        {
		           className('k7')[_loc3_].style.color = '#55aa00';
		        }else{className('k7')[_loc3_].style.color = '#ffffff';}
	      _loc3_ += 1;
	   }
	   id('kaoshiguanbi').onclick = function(){决定选择谁金榜题名(xuanzhongle,临时科举);}
}
function 决定选择谁金榜题名(xuanzhongle,临时科举){
	var _loc3_ = [];
	   var _loc4_ = 0;
	   while(_loc4_ < 临时科举.length)
	   {
	      if(xuanzhongle[_loc4_].style.opacity == '1')
	      {
			  
	         _loc3_.push(临时科举[_loc4_].名字);
	         _all_rencai.push(临时科举[_loc4_]);
			 xuanzhongle[_loc4_].style.opacity = '0';
	      }
	      _loc4_ += 1;
	   }
	   if(_loc3_.length == 0){
	      出圣旨("本期考试结束，无人中举。");
	   }
	   else{
	      出圣旨("本期举办的制举考试圆满结束，金榜题名者有：" + _loc3_ + '。');
	   }
	   _loc4_ = 0;
	   while(_loc4_ < _all_rencai.length)
	   {
	      _all_rencai[_loc4_].id = _loc4_;
	      _loc4_ += 1;
	   }
	   id('kaikekaoshi').style.display = 'none';
	   时辰推进();
}
function 给谁封爵(目标){
	id('fengjue').style.display = 'block';
	id('fjan').innerText = '取消';
	id('fjText').innerText = 目标.名字 + "目前的爵位：" + 目标.爵位 + "\n皇上想给他封什么爵呢？";
	id('fjan').onclick = function (){id('fengjue').style.display = 'none';}
	var i = 0;
	while(i < 6){
		className('fengjue')[i].innerText = 爵位名称[i];
		className('fengjue')[i].style.display = 'block';
		className('fengjue')[i].参数 = i;
		className('fengjue')[i].onclick = function (){进行封爵(目标,this.参数);}
		i++;
	}
}
function 进行封爵(目标,参数){
   var 用词 = "";
   var 增加 = 参数 - 目标.爵位;
   if(目标.爵位 == 参数){
      用词 = "相同";
      小提示("与之前的爵位相同");
   }
   else if(参数 == 0){
      封爵(目标,参数,用词,增加,1);
   }
   else if(目标.爵位 > 参数){
      用词 = "降级";
      封爵(目标,参数,用词,增加);
   }
   else if(目标.爵位 < 参数){
      用词 = "升格";
      封爵(目标,参数,用词,增加);
   }
}
function 封爵(目标,参数,用词,增加,是否清空){
   if(是否清空 == 1){
      目标.忠诚 += 增加 * 20;
      if(目标.忠诚 < 20){
         目标.忠诚 = 20;
      }
      出圣旨(目标.名字 + "削爵与士为伍。");
      大殿体力扣除程序(10);
   }
   else{
      目标.忠诚 += 增加 * 10;
      if(目标.忠诚 > 100){
         目标.忠诚 = 100;
      }
      else if(目标.忠诚 < 20){
         目标.忠诚 = 20;
      }
      var _loc7_ = 各种封爵需要的地名[random(各种封爵需要的地名.length)];
      出圣旨(目标.名字 + 用词 + "为" + _loc7_ + 爵位名称[参数] + "，享爵位俸禄。");
      大殿体力扣除程序(5);
   }
   id('fengjue').style.display = 'none';
   目标.爵位 = 参数;
   yilanbiao.style.display = 'none';
   人才列表显示(1);
}
function 换成这个官员(新目标,城市){
   i = 0;
   while(i < _all_rencai.length){
      if(_all_rencai[i].名字 == 城市.名字){
         _loc2_ = _all_rencai[i].官职;
         _loc4_ = _all_rencai[i].品阶;
         _loc5_ = _all_rencai[i].地位;
         _all_rencai[i].官职 = undefined;
         _all_rencai[i].品阶 = 计算人才品阶(_all_rencai[i].功勋);
         _all_rencai[i].地位 = 计算人才地位(_all_rencai[i].功勋);
      }
      i++;
   }
   _loc3_ = 0;
   while(_loc3_ < _all_rencai.length){
      if(_all_rencai[_loc3_].名字 == 新目标.名字){
         _all_rencai[_loc3_].官职 = _loc2_;
         _all_rencai[_loc3_].品阶 = _loc4_;
         _all_rencai[_loc3_].地位 = _loc5_;
      }
      _loc3_ += 1;
   }
   出圣旨("任命" + 新目标.名字 + _loc2_ + "一职，" + 城市.名字 + "留用。");
}
function 外调官员函数(){
	id('hukoupucha').style.display = 'block';
	id('huhouTitle').innerText = '辞退官员';
	id('huhouText').innerText = '官员辞退后，再也不能回中央。\n请皇上详加考虑。';
	id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
	id('hkan0').onclick = function()
	{
	   一个临时放官员名字的地方 = [];
	   id('hukoupucha').style.display = 'none';
	   执行辞退官员();
	};
}
function 执行辞退官员(){
	yilanbiao.style.display = 'block';
	id('citui').style.display = 'block';
	yilanbiao.条件 = 0;id('citui').innerText="确定";
	id('citui').onclick = function(){
	var i = 0;
	while(i<10){className('l1')[i].style.color = '#ffffff';i++;}
	if(yilanbiao.条件 == 1){
	        var _loc2_ = [];
	        n = 0;
	        while(n < _all_rencai.length){
	        if(_all_rencai[n].标记 == 1){
	            一个临时放官员名字的地方.push(_all_rencai[n].名字);
	            删除跟这个人有关的三方相性(_all_rencai[n]);
				console.log(_all_rencai[n].名字)
	            }
	        else if(_all_rencai[n].标记 == undefined){
	            _loc2_.push(_all_rencai[n]);
	            }
	        n++;
	        }
	         _all_rencai = _loc2_;
	         出圣旨("外调" + 一个临时放官员名字的地方.length + "名官员前往地方任职，名单如下：" + 一个临时放官员名字的地方 + "。");
	         大殿体力扣除程序(10);
	         yilanbiao.style.display = 'none';
	         id('citui').style.display = 'none';
			 关联人才();
	      }
	      else{
	        yilanbiao.style.display = 'none';
	        id('citui').style.display = 'none';
	         var _loc3_ = 0;
	         while(_loc3_ < _all_rencai.length)
	         {
	            _all_rencai[_loc3_].标记 = undefined;
	            _loc3_ += 1;
	         }
	      }
	   };
	临时人才列表 = [];
	var _loc6_ = 0;
	while(_loc6_ < _all_rencai.length){
	    if(_all_rencai[_loc6_].任务中 == 0 && (_all_rencai[_loc6_].官职 == undefined || _all_rencai[_loc6_].官职 == "驸马都尉")){
	        临时人才列表.push(_all_rencai[_loc6_]);
			_all_rencai[_loc6_].标记 = undefined;
			console.log(_all_rencai[_loc6_].名字 + _all_rencai[_loc6_].标记)
	    }
	      _loc6_ += 1;
	}
	序列 = 0;
	更新辞退官员信息(临时人才列表,yilanbiao,序列);
	id('yilanbiaoqian').onclick = function(){
		if(序列 > 0){
		    序列 -= 1;
		    更新辞退官员信息(临时人才列表,yilanbiao,序列);
		    }
		};
	id('yilanbiaohou').onclick = function(){
		if(序列 < Math.round(临时人才列表.length / 10)){
		    序列 += 1;
		    更新辞退官员信息(临时人才列表,yilanbiao,序列);
		}
	};
	var 开关 = 0;
	id('gynl').onclick = function(){
	    if(开关 == 0){排序计算程序(临时人才列表,"年龄",0);开关 = 1;}
	    else{排序计算程序(临时人才列表,"年龄",1);开关 = 0;}
		序列 = 0;
	    更新辞退官员信息(临时人才列表,yilanbiao,序列);
	   };
	id('gyts').onclick = function(){
	    if(开关 == 0){排序计算程序(临时人才列表,"统帅",0);开关 = 1;}
	    else{排序计算程序(临时人才列表,"统帅",1);开关 = 0;}
		序列 = 0;
	    更新辞退官员信息(临时人才列表,yilanbiao,序列);
	   };
	id('gywl').onclick = function(){
	    if(开关 == 0){排序计算程序(临时人才列表,"武力",0);开关 = 1;}
	    else{排序计算程序(临时人才列表,"武力",1);开关 = 0;}
		序列 = 0;
	    更新辞退官员信息(临时人才列表,yilanbiao,序列);
	   };
	id('gyzl').onclick = function(){
	     if(开关 == 0){排序计算程序(临时人才列表,"智力",0);开关 = 1;}
	     else{排序计算程序(临时人才列表,"智力",1);开关 = 0;}
	 	序列 = 0;
	     更新辞退官员信息(临时人才列表,yilanbiao,序列);
	    };
	id('gyzz').onclick = function(){
	    if(开关 == 0){排序计算程序(临时人才列表,"政治",0);开关 = 1;}
	    else{排序计算程序(临时人才列表,"政治",1);开关 = 0;}
		序列 = 0;
	    更新辞退官员信息(临时人才列表,yilanbiao,序列);
	   };
	id('gyml').onclick = function(){
	    if(开关 == 0){排序计算程序(临时人才列表,"魅力",0);开关 = 1;}
	    else{排序计算程序(临时人才列表,"魅力",1);开关 = 0;}
		序列 = 0;
	    更新辞退官员信息(临时人才列表,yilanbiao,序列);
	   };
	id('gypj').onclick = function(){
	    if(开关 == 0){排序计算程序(临时人才列表,"地位",0);开关 = 1;}
	    else{排序计算程序(临时人才列表,"地位",1);开关 = 0;}
		序列 = 0;
	    更新辞退官员信息(临时人才列表,yilanbiao,序列);
	   };
	id('gyjw').onclick = function(){
	    if(开关 == 0){排序计算程序(临时人才列表,"爵位",0);开关 = 1;}
	    else{排序计算程序(临时人才列表,"爵位",1);开关 = 0;}
		序列 = 0;
	    更新辞退官员信息(临时人才列表,yilanbiao,序列);
	   };
	 id('gyzc').onclick = function(){
	     if(开关 == 0){排序计算程序(临时人才列表,"忠诚",0);开关 = 1;}
	     else{排序计算程序(临时人才列表,"忠诚",1);开关 = 0;}
	 	序列 = 0;
	     更新辞退官员信息(临时人才列表,yilanbiao,序列);
	    };
}
function 更新辞退官员信息(临时人才列表,yilanbiao,序列){
	var _loc4_ = 0;
	while(_loc4_ < className('liebiaoxiang').length){
	var i = 序列 * 10 + _loc4_;
	var _loc5_ = 临时人才列表[i];
	if(_loc5_ == undefined){className('liebiaoxiang')[_loc4_].style.display = 'none';}
	else{
		className('liebiaoxiang')[_loc4_].style.display = 'block';
		className('l1')[_loc4_].innerText = _loc5_.名字;
		className('l2')[_loc4_].innerText = _loc5_.官职;
		className('l3')[_loc4_].innerText = _loc5_.年龄;
		className('l4')[_loc4_].innerText = _loc5_.统帅;
		className('l5')[_loc4_].innerText = _loc5_.武力;
		className('l6')[_loc4_].innerText = _loc5_.智力;
		className('l7')[_loc4_].innerText = _loc5_.政治;
		className('l8')[_loc4_].innerText = _loc5_.魅力;
		className('l9')[_loc4_].innerText = _loc5_.品阶;
		className('l10')[_loc4_].innerText = 爵位名称[_loc5_.爵位];
		className('l11')[_loc4_].innerText = _loc5_.忠诚;																  
		if(_loc5_.官职 == undefined){className('l2')[_loc4_].innerText = '赋闲';}
		className('liebiaoxiang')[_loc4_].取 =  _loc5_;
		className('liebiaoxiang')[_loc4_].序号 = _loc4_;
		if(className('liebiaoxiang')[_loc4_].取.标记 == undefined){className('l1')[_loc4_].style.color = '#ffffff';}
		else if(className('liebiaoxiang')[_loc4_].取.标记 == 1){className('l1')[_loc4_].style.color = '#ff0000';}
		}
		className('liebiaoxiang')[_loc4_].onmouseover = function(){id('liebiaotx').style.display = 'block';
		if(this.取._code !== undefined){出现这个人的头像(id('liebiaotx'),this.取);
		}
		else{新后宫图形读取程序(id('liebiaotx'),this.取,"特殊");} ;}
		className('liebiaoxiang')[_loc4_].onmouseleave = function(){id('liebiaotx').style.display = 'none';}
		className('liebiaoxiang')[_loc4_].onclick = function(){
			if(this.取.朝廷势力 > 2 && this.取.后宫势力 > 0){
                小提示("众多大臣为此人求情，无法轻易辞退。");}
            else if(this.取.后宫相性 !== "" && this.取.后宫相性 !== undefined){
               var _loc2_ = this.取.家族;
               q = 0;
               while(q < _all_feizi.length){
                  if(_all_feizi[q].名字 == this.取.后宫相性 && _all_feizi[q].孕 !== 0)
                  {
                     var _loc3_ = _all_feizi[q].家族;
                  }
                  q++;
                }
                if(_loc2_ == _loc3_){小提示("为保皇嗣，怀孕嫔妃的亲属不可辞退。");}
                else{
                    yilanbiao.条件 = 1;
                    this.取.标记 = 1;
                    className('l1')[this.序号].style.color = '#ff0000';}
            }
            else{
                yilanbiao.条件 = 1;
				console.log(yilanbiao.条件);
                this.取.标记 = 1;
                className('l1')[this.序号].style.color = '#ff0000';
            }
		}
	_loc4_ += 1;
	}
}
function 关联人才(){
   var _loc4_ = 0;
   while(_loc4_ < _all_city.length){
      var _loc3_ = _all_city[_loc4_];
      var _loc1_ = 0;
      while(_loc1_ < 7){
         var _loc2_ = 0;
         while(_loc2_ < _all_rencai.length){
			 if(_loc3_.委任者[_loc1_] !== undefined){
				 if(_loc3_.委任者[_loc1_].名字 == _all_rencai[_loc2_].名字)
				 {
				    _loc3_.委任者[_loc1_] = _all_rencai[_loc2_];
				 }
			 }
            _loc2_ += 1;
         }
         _loc1_ += 1;
      }
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < _all_army.length){
      _loc2_ = 0;
      while(_loc2_ < _all_rencai.length){
         if(_all_army[_loc4_].将军.名字 == _all_rencai[_loc2_].名字){
            _all_army[_loc4_].将军 = _all_rencai[_loc2_];
         }
         _loc2_ += 1;
      }
      _loc4_ += 1;
   }
}
function 劝诱人才(){
	id('sy').style.display = 'block';
	id('syb').style.display = 'none';
	id('syb2').style.display = 'block';
	id('syTitle').innerText = '劝诱人才';
	id('sysm').innerText = "要请哪位隐士出仕？";
	id('qxsy').onclick = function(){id('syb').style.display = 'block';
	id('syb2').style.display = 'none';id('sy').style.display = 'none';}
	var 临时隐士 = [];
	   _loc6_ = 0;
	   while(_loc6_ < 所有隐士.length)
	   {
	      if(所有隐士[_loc6_].录用 == 0 && _all_city[所有隐士[_loc6_].地区].归属 == 8)
	      {
	         临时隐士.push(所有隐士[_loc6_]);
	      }
	      _loc6_ = _loc6_ + 1;
	   }
	序列 = 0;
	整理隐士展示(临时隐士,序列);
	id('syqian').onclick = function(){
      if(序列 >= 1){
         序列 -= 1;
         整理隐士展示(临时隐士,序列);
      }
   };
   id('syhou').onclick = function(){
      if(序列 < 临时隐士.length / 32){
         序列 += 1;
         整理隐士展示(临时隐士,序列);
      }
   };
}
function 整理隐士展示(临时隐士,序列){
   var _loc3_ = 0;
   while(_loc3_ < 32){
      var _loc4_ = 临时隐士[序列 * 32 + _loc3_];
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
            展示隐士信息(this.取);
         };
      }
      _loc3_ = _loc3_ + 1;
   }
}
function 展示隐士信息(取数据){
    id('介绍图an2').innerText = '劝诱此人';
	id('介绍图an2').style.display = 'block';id('介绍图an0').style.display = 'none';id('介绍图an1').style.display = 'none';
    id('介绍图').style.display = 'block';id('介绍图an3').innerText = "关闭";
    出现这个人的头像(id('介绍图头像'),取数据);
    id('介绍图名字').innerText = 取数据.名称;
    id('介绍图介绍').innerText = '文化圈：' + _all_nation[取数据.文化].文化;
    id('介绍图介绍').innerText += "\n性  格：" + 取数据.性情;
    id('介绍图介绍').innerText += "\n所在地区：" + _all_city[取数据.地区].名称;
    id('介绍图介绍').innerText += "\n介  绍：\n";
    id('介绍图介绍').innerText += 取数据.介绍;
	id('介绍图an2').onclick = function(){人才列表显示(31,取数据);id('介绍图').style.display = 'none';劝诱人才()};
    id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';id('sy').style.display = 'block';}
}
function 开始劝诱(执行人,隐士){
   大殿体力扣除程序(5);
   更新资料(属性栏);
   执行人.任务中 = 1;
   id('剧情对话').style.display = 'block';
   id('剧情背景').src =LJ +  'a0aPic_BG/Tu_133133.webp';
   出现这个人的头像(剧情头像,隐士);
   对话打字效果("（" + 执行人.名字 + "找到了" + 隐士.名称 + "开始说服）");
   var 条件 = 0;
   var 允诺对话 = "能得皇上赏识也是鄙人的荣幸。";
   var 拒绝对话 = "对不起，鄙人还不想出仕。";
   剧情对话板.onclick = function(){
      if(隐士.名称 == "介子推" && 月 == 4){
         条件 = 1;
         允诺对话 = "四月寒食。介某人该以何报答君上呢。";
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
      else if(隐士.名称 == "陶弘景" && 主角.丹药.length >= 8){
         条件 = 1;
         允诺对话 = "圣上炼了那么多丹药，想必对此很有研究吧，鄙人正好略懂医术，有机会还希望能和圣上探讨一二。";
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
      else if(隐士.名称 == "管仲" && 执行人.名字 == "鲍叔牙"){
         条件 = 1;
         允诺对话 = "朋友,我们终于再次重逢了!";
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
      else if(隐士.名称 == "诸葛孔明" && 执行人.名字 == "刘备"){
         条件 = 1;
         允诺对话 = "大梦谁先觉？平生我自知。草堂春睡足，窗外日迟迟。";
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
      else if(隐士.名称 == "诸葛孔明" && 执行人.名字 == "黄月英"){
         条件 = 1;
         允诺对话 = "知我者，月英也。";
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
      else if(隐士.名称 == "颜回" && 执行人.名字 == "孔丘"){
         条件 = 1;
         允诺对话 = "老师都来劝说了，哪有不出山的道理。";
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
      else if((隐士.名称 == "周术" || 隐士.名称 == "东园公" || 隐士.名称 == "绮里季" || 隐士.名称 == "夏黄公") && 执行人.名字 == "张良"){
         条件 = 1;
         允诺对话 = "子房先生好口才，说的鄙人是不得不出山了。";
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
      else if((隐士.名称 == "速不台" || 隐士.名称 == "哲别" || 隐士.名称 == "完颜陈和尚" || 隐士.名称 == "木华黎") && 属性.统帅 > 400 && 属性.武力 > 400){
         条件 = 1;
         允诺对话 = "呵呵呵，听说当今圣上武力高强，用兵如神，鄙人甚是佩服，愿意为其效力。";
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
      else if((隐士.名称 == "苏格拉底" || 隐士.名称 == "柏拉图" || 隐士.名称 == "亚里士多德" || 隐士.名称 == "荷马") && 属性.智力 > 400 && 属性.政治 > 400){
         条件 = 1;
         允诺对话 = "呵呵呵，听说当今圣上精通天文地理，治国有方，鄙人甚是佩服，愿意为其效力。";
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
      else if(隐士.名称 == "阿基米德"){
         允诺对话 = "你很聪明，看来皇帝的智商也不会差。我会辅佐皇帝的。";
         拒绝对话 = "对不起，你答错了，我不会辅佐皇帝的。";
         var _loc7_ = random(20) + 1;
         var _loc6_ = random(20) + 1;
         var _loc10_ = random(20) + 1;
         var _loc8_ = random(10) + 1;
         var _loc13_ = random(10) + 100;
         var _loc11_ = 9.8;
		 var i = _loc7_ * _loc6_ * _loc10_ * _loc8_ * _loc11_ / 1000;
         var 结果 = Math.floor(i*10000)/10000;
         var _loc5_ = 结果;
         var _loc4_ = Math.floor((_loc5_ * (random(4) + 1) + random(111))*10000)/10000;
         var _loc3_ = Math.floor((_loc5_ * 1000 + random(111))*10000)/10000;
         var _loc2_ = Math.floor((_loc5_ + random(300))*10000)/10000;
         var _loc9_ = random(4);
         if(_loc9_ == 0){
            var 出现选项 = [_loc5_,_loc3_,_loc4_,_loc2_];
         }
         else if(_loc9_ == 1){
            var 出现选项 = [_loc4_,_loc3_,_loc5_,_loc2_];
         }
         else if(_loc9_ == 2){
            var 出现选项 = [_loc4_,_loc5_,_loc3_,_loc2_];
         }
         else{
            var 出现选项 = [_loc2_,_loc4_,_loc3_,_loc5_];
         }
		 对话打字效果(隐士.名称 + "：如果你能答对此题，我就去辅佐皇帝。已知：金块长" + _loc7_ + "cm，宽" + _loc6_ + "cm，高" + _loc10_ + "cm，金块密度为" + _loc13_ + "g/cm^3，液体密度为" + _loc8_ + "g/cm^3，重力加速度g为" + _loc11_ + "N/kg。当它全部沉入一个充满液体的容器中后，它受到的浮力为多少N？",出现选项 );
         id('剧情an0').onclick = function(){
            var _loc1_ = 出现选项[0];
            if(_loc1_ == 结果){
               条件 = 1;
            }
            劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
         };
         id('剧情an1').onclick = function(){
            var _loc1_ = 出现选项[1];
            if(_loc1_ == 结果){
               条件 = 1;
            }
            劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
         };
         id('剧情an2').onclick = function(){
            var _loc1_ = 出现选项[2];
            if(_loc1_ == 结果){
               条件 = 1;
            }
            劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
         };
         id('剧情an3').onclick = function(){
            var _loc1_ = 出现选项[3];
            if(_loc1_ == 结果){
               条件 = 1;
            }
            劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
         };
      }
      else if(执行人.统帅 > 隐士.统帅 && 执行人.武力 > 隐士.武力 && 执行人.智力 > 隐士.智力 && 执行人.魅力 > 隐士.魅力){
         条件 = 1;
         允诺对话 = "能得皇上赏识也是鄙人的荣幸。";
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
      else{
         劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话);
      }
   };
}
function 劝诱结果(执行人,隐士,条件,允诺对话,拒绝对话){
   if(条件 == 1){
      对话打字效果(隐士.名称 + "：" + 允诺对话);
      剧情对话板.onclick = function(){
         对话打字效果("（" + 执行人.名字 + "劝诱" + 隐士.名称 + "成功）");
         var _loc2_ = 创建新人才();
         让这个人才变成隐士(_loc2_,隐士);
         _all_rencai.push(_loc2_);
         隐士.录用 = 1;
         剧情对话板.onclick = function(){
            缓动黑幕();
            id('剧情对话').style.display = 'none';
            劝诱人才();
         };
      };
   }
   else{
      对话打字效果(隐士.名称 + "：" + 拒绝对话);
      剧情对话板.onclick = function(){
         对话打字效果("（" + 执行人.名字 + "劝诱" + 隐士.名称 + "失败）");
         剧情对话板.onclick = function(){
            缓动黑幕();
            id('剧情对话').style.display = 'none';
            劝诱人才();
         };
      };
   }
}
function 征收钱粮选择(城市){
	id('sy').style.display = 'none';
	id('gzhjxz').style.display = 'block';
	id('gzhjTittle').innerText = "征收钱粮";
	id('gzhjText').innerText = "请选择征收金钱还是粮食。";
	id('gzhjan0').innerText  = "金钱";
	id('gzhjan1').innerText  = "粮食";
	id('gzhjan2').onclick = function(){id('gzhjxz').style.display = 'none';id('sy').style.display = 'block';};
	id('gzhjan0').onclick = function(){
	   i = 0;
	   while(i < _all_rencai.length)
	   {
	      if(_all_rencai[i].官职 == "户部尚书")
	      {
	         金钱上交拉动条(城市,_all_rencai[i]);
	      }
	      i++;
	   }
	      id('gzhjxz').style.display = 'none';
	};
	id('gzhjan1').onclick = function()
	{
	   i = 0;
	   while(i < _all_rencai.length)
	   {
	      if(_all_rencai[i].官职 == "户部尚书")
	      {
	         粮食上交拉动条(城市,_all_rencai[i]);
	      }
	      i++;
	   }
	   id('gzhjxz').style.display = 'none';
	};
}
function 金钱上交拉动条(城市,执行人){
  id('数值拉动面板').style.display = 'block';
  id('zhixingren').innerText = "执行人：" + 执行人.名字;
  id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(12,城市);};
  id('range').value = 0;
  id('range').max = 城市.金钱;
  change();
  var _loc2_ = 城市.金钱 - 城市.人口 * 城市.工资;
  if(_loc2_ < 0)
  {
     _loc2_ = 0;
  }
  id('rangeText').innerText = "从地方政府手中征收钱粮，执行官员的武力决定钱粮安全，清廉决定贪污程度。\n若地方府库银两不足发放百姓的工资，会降低民心以至于发生暴动；\n建议征收不超过：" + _loc2_ + "两以上。";
  id('rangeText').innerText += "\n\n需要征收多少金钱。";
  id('rqueding').onclick = function()
  {
    if(id('range').value == undefined){小提示("请拉动红条操作");}
    else{
         出圣旨("命" + 执行人.名字 + "立即从" + 城市.名称 + "城府库收取钱款" + id('range').value + "两上交中央。");
         大殿体力扣除程序(10);
         城市.金钱 -= Number(id('range').value);
         国家.金钱 += Math.round(Number(id('range').value) * (0.9 + 0.001 * 执行人.清廉));
         执行人.任务中 = 1;
         执行人.功勋 += 10;
         id('数值拉动面板').style.display = 'none';
		 id('sy').style.display = 'block';
         更新资料(属性栏);
      }
   };
}
function 粮食上交拉动条(城市, 执行人, 参数){
	id('数值拉动面板').style.display = 'block';
	id('zhixingren').innerText = "执行人：" + 执行人.名字;
	id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(13,城市);};
	id('range').value = 0;
	id('range').max = 城市.粮食;
	change();
	var _loc3_ = 城市.粮食 - 城市.人口;
	if(_loc3_ < 0)
	{
	   _loc3_ = 0;
	}
	id('rangeText').innerText = "从地方政府手中征收钱粮，执行官员的武力决定钱粮安全，清廉决定贪污程度。\n若存粮不足，则遭遇灾害时无法赈灾。\n建议收粮不超过：" + _loc3_ + "石。";
	id('rangeText').innerText += "\n\n需要征收多少粮食。";
	id('rqueding').onclick = function()
	{
	  if(id('range').value == undefined){小提示("请拉动红条操作");}
	  else{
	       出圣旨("命" + 执行人.名字 + "立即从" + 城市.名称 + "城府库收取粮食" + id('range').value + "石上交中央。");
	       大殿体力扣除程序(10);
	       城市.粮食 -= Number(id('range').value);
	       国家.粮食 += Math.round(Number(id('range').value) * 执行人.清廉 / 100);
	       执行人.任务中 = 1;
	       执行人.功勋 += 10;
	       id('数值拉动面板').style.display = 'none';
		   id('sy').style.display = 'block';
	       更新资料(属性栏);
	    }
	 };
}
function 百姓迁移到这里(源城市){地方发展界面(5,源城市);}
function 移民拖动(执行人,源城市,新城市){
   id('数值拉动面板').style.display = 'block';
   id('zhixingren').innerText = "执行人：" + 执行人.名字;
   id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';id('sy').style.display = 'none';人才列表显示(30,源城市,新城市);};
   id('range').value = 0;
   id('range').max = Math.round(源城市.人口 / 4 * 执行人.政治 / 100);
   change();
   var 费用 = Math.round(50 + 50 * (1 - 执行人.清廉 / 100));
   id('rangeText').innerText = "移民需要给百姓分发安置费，执行官员的政治决定可移民数量，清廉决定贪污程度。\n移民时最好确认移民地的农业发展度足够人口消耗，或者下发粮食足够百姓生活。\n" + 源城市.名称 + "人口：" + 源城市.人口 + "\n" + 新城市.名称 + "人口：" + 新城市.人口 + "\n安置费：" + 费用 + "两/人。";
   id('rangeText').innerText += "\n\n需要移民多少百姓。";
   id('rqueding').onclick =function(){
	  if(id('range').value == undefined){小提示("请拉动红条操作");}
      else{
         出圣旨(源城市.名称 + "城内老旧小区危房甚多，时刻威胁人民群众的生命财产安全，今皇恩浩荡，特为" + 源城市.名称 + "城内" + id('range').value + "人添置新房，即刻命" + 执行人.名字 + "主持拆迁移民，将百姓妥善安置到" + 新城市.名称 + "城内。");
         大殿体力扣除程序(50);
         源城市.人口 -= Math.round(Number(id('range').value));
         新城市.人口 += Math.round(Number(id('range').value));
         国家.金钱 -= Number(id('range').value) * 费用;
         执行人.任务中 = 1;
         执行人.功勋 += 10;
         id('数值拉动面板').style.display = 'none';
		 id('sy').style.display = 'none';
         更新资料(属性栏);
      }
   };
}
function 粮食交易(){
  id('gzhjxz').style.display = 'block';
  id('gzhjTittle').innerText = "粮食交易";
  id('gzhjText').innerText = "请选择买入或卖出粮食。";
  id('gzhjan0').innerText  = "买入";
  id('gzhjan1').innerText  = "卖出";
  id('gzhjan2').onclick = function(){id('gzhjxz').style.display = 'none';};
  id('gzhjan0').onclick = function(){
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "户部尚书"){
            买入粮食(_all_rencai[i]);
         }
         i++;
      }
      id('gzhjxz').style.display = 'none';
   };
   id('gzhjan1').onclick = function(){
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "户部尚书"){
            卖出粮食(_all_rencai[i]);
         }
         i++;
      }
      id('gzhjxz').style.display = 'none';
   };
}
function 买入粮食(执行人){
   id('数值拉动面板').style.display = 'block';
   id('zhixingren').innerText = "执行人：" + 执行人.名字;
   id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(32);};
   var _loc2_ = Math.round(5000000 * 执行人.政治 / 100 * 执行人.魅力 / 100);
   var _loc3_ = Math.round(国家.粮食 / (国家.金钱 * 100));
   console.log("指数" + _loc3_);
   if(_loc3_ < 1){_loc3_ = 1;}
   if(_loc3_ > 9){_loc3_ = 9;}
   var 临时价格 = Math.round((10 + 5 * (2 - 执行人.智力 / 100)) * (10 - _loc3_));
   id('range').value = 0;
   id('range').max = _loc2_;
   change();
   id('rangeText').innerText = "从外域商人处花钱购买粮食，但是粮食的基础价格会随着市场需求上下浮动。执行官员的智力决定买入价格，政治和魅力决定买入上限，清廉决定贪污程度。";
   id('rangeText').innerText += "\n\n买入价格" + 临时价格 + "两/千石，需要买入多少粮食。";
   id('rqueding').onclick =function(){ 
      if(id('range').value == undefined){
         小提示("请拉动红条操作");
      }
      else{
         出圣旨("命" + 执行人.名字 + "立即买入粮食" + id('range').value + "石。");
         大殿体力扣除程序(10);
         国家.金钱 -= Math.round(Number(id('range').value) * 临时价格 * 0.01) * (2 - 执行人.清廉 / 100);
         国家.粮食 += Number(id('range').value);
         执行人.任务中 = 1;
         执行人.功勋 += 5;
         id('数值拉动面板').style.display = 'none';
         更新资料(属性栏);
      }
   };
}
function 卖出粮食(执行人){
  id('数值拉动面板').style.display = 'block';
  id('zhixingren').innerText = "执行人：" + 执行人.名字;
  id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(33);};
   var _loc2_ = Math.round(5000000 * 执行人.政治 / 100 * 执行人.魅力 / 100);
   if(国家.粮食 <= _loc2_){
      _loc2_ = 国家.粮食;
   }
   var _loc3_ = Math.round(国家.粮食 / (国家.金钱 * 100));
   console.log("指数" + _loc3_);
   if(_loc3_ < 1){_loc3_ = 1;}
   if(_loc3_ > 9){_loc3_ = 9;}
   console.log("指数" + _loc3_);
   var 临时价格 = Math.round(1.4 * (执行人.智力 / 100) * (10 - _loc3_));
   id('range').value = 0;
   id('range').max = _loc2_;
   change();
   id('rangeText').innerText = "向外域商人出售粮食以获得金钱，但是粮食的基础价格会随着市场需求上下浮动。执行官员的智力决定卖出价格，政治和魅力决定卖出上限，清廉决定贪污程度。";
   id('rangeText').innerText += "\n\n卖出价格" + 临时价格 + "两/千石，需要卖出多少粮食。";
   id('rqueding').onclick = function(){
      if(id('range').value == undefined){
         小提示("请拉动红条操作");
      }
      else{
         出圣旨("命" + 执行人.名字 + "立即向外出售粮食" + id('range').value + "石。");
         大殿体力扣除程序(10);
         国家.金钱 += Math.round(Number(id('range').value) * 临时价格 * 0.01 * 执行人.清廉 / 100);
         国家.粮食 -= Number(id('range').value);
         执行人.任务中 = 1;
         执行人.功勋 += 5;
         id('数值拉动面板').style.display = 'none';
         更新资料(属性栏);
      }
   };
}
function 祭祀函数(){
	i = 0;
	while(i < _all_rencai.length)
	{
	   if(_all_rencai[i].官职 == "礼部尚书")
	   {
	      _loc1_ = _all_rencai[i];
		  break;
	   }
	   i++;
	}
   id('hukoupucha').style.display = 'block';
   id('huhouTitle').innerText = '祭祀';
   id('huhouText').innerText = '祭祀能消弥灾难，祈求风调雨顺。要举行吗？\n执行人的智力越高，祭祀效率越高。\n礼部尚书：' +_loc1_.名字 + '。';
   id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
   id('hkan0').onclick = function(){
      if(主角.祭祀活动 == 0){
         _loc1_.任务中 = 1;
         _loc1_.功勋 += 10;
         出圣旨("朕将于午后王天坛祭祀天地，祈求风调雨顺，消灾解难。");
         遵旨函数("已派【" + _loc1_.名字 + "】执行祭祀。");
         国库钱数变动的程序(-100000);
         大殿体力扣除程序(70);
         id('hukoupucha').style.display = 'none';
         祭祀效率 = Math.round(_loc1_.智力 / 10);
         主角.祭祀活动 = 1;
      }
      else{
        小提示("已在操办祭祀事宜。");
      }
   };
}
function 祭祀活动举行(){
   黑色幕布();
   id('taijianSh').style.display = 'block';
   id('taijianText').innerText = "祭祀活动已准备好了，请皇上亲临主祭。";
   id('taijian').style.backgroundPositionX = '-224px';
   id('taijian').style.width = '159px';	
   id('taijianCon').onclick = function (){
      祭祀活动开始咯();
      id('taijianSh').style.display = 'none';
   };
}
function 祭祀活动开始咯(){
   黑色幕布();
   id('youyuan').style.display = 'block';
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_348763.webp";
   id('yyText').innerText = "祈求上苍保佑我国风调雨顺，国泰民安。";
   id('yykuang').onclick = function(){
      id('youyuan').style.display = 'none';
      if(祭祀效率 !== undefined){
         主角.祭祀 += 祭祀效率;
      }
      else{
         主角.祭祀 = 4 + random(4);
      }
   };
}
function 废立皇储的剧情(){
   var 现存的皇子 = [];
   i = 0;
   while(i < _all_child.length){
      if(_all_child[i].性别 == 0 && _all_child[i].状态 == 0){
         现存的皇子.push(_all_child[i]);
      }
      i++;
   }
   现存的皇子.sort(compare(["朝廷势力","后宫势力"]));
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(id('剧情头像'),38,"特殊");
   id('剧情背景').src =LJ +  'a0aPic_BG/Tu_9.webp';
   对话打字效果("大臣甲：皇上可要改立储君吗？废立皇储可是涉及国家根本之事，不可鲁莽啊。");
   剧情对话板.onclick = function(){
      新后宫图形读取程序(id('剧情头像'),37,"特殊");
      对话打字效果("大臣乙：是啊，皇上可要三思，不能随意按照喜好废立，一定要立一位德行兼优的皇子。");
      剧情对话板.onclick = function(){
         新后宫图形读取程序(id('剧情头像'),39,"特殊");
         对话打字效果("大臣丙：皇上，臣等支持" + 现存的皇子[0].名称 + "皇子。");
         剧情对话板.onclick = function(){
            新后宫图形读取程序(id('剧情头像'),36,"特殊");
            对话打字效果("大臣丁：臣支持" + 现存的皇子[random(现存的皇子.length)].名称 + "皇子。");
            剧情对话板.onclick = function(){
               对话打字效果("（大臣们众说纷纭，看来立储之事不能轻易处理）");
               剧情对话板.onclick = function(){
                  对话打字效果("大臣：还是请皇上来定夺吧。");
                  剧情对话板.onclick = function()
                  {
                     id('剧情对话').style.display = 'none';
                     缓动黑幕();
                  };};
            };
         };
      };
   };
}
function 废立皇储(){
   id('sy').style.display = 'block';
   id('syb').style.display = 'none';
   id('syb2').style.display = 'block';
   id('syTitle').innerText = '';
   id('sysm').innerText = "立谁为皇储";
   id('qxsy').onclick = function(){id('syb').style.display = 'block';
   id('syb2').style.display = 'none';id('sy').style.display = 'none';}
   i = 0;
   while(i < _all_child.length){
      if(_all_child[i].id == 国家.皇储id){
         var _loc9_ = _all_child[i];
      }
      i++;
   }
   if(_loc9_.状态 !== 0){
      id('sysm').innerText += "（目前是：无）";
   }
   else{
      id('sysm').innerText += "（目前是：" + _loc9_.名称 + "）";
   }
   活着的皇子列表 = [];
   var i = 0;
   while(i < _all_child.length){
      if(_all_child[i].性别 == 0 && _all_child[i].状态 == 0){
         活着的皇子列表.push(_all_child[i]);
      }
      i++;
   }
   if(活着的皇子列表.length == 0){
      小提示("没有皇子，后继无人");
      id('syb').style.display = 'block';
      id('syb2').style.display = 'none';id('sy').style.display = 'none';
   }
   else{
      废立皇储的剧情();
      序列 = 0;
      更新皇储信息(活着的皇子列表,序列);
      id('syqian').onclick = function(){
         if(序列 > 0){
            序列 -= 1;
            更新皇储信息(活着的皇子列表,序列);
         }
      };
      id('syqian').onclick = function(){
         if(序列 < Math.round(活着的皇子列表.length / 20)){
            序列 += 1;
            更新皇储信息(活着的皇子列表,序列);
         }
      };
   }
}
function 更新皇储信息(活着的皇子列表,序列){
   var i = 0;
   while(i < 32){
      var _loc4_ = 活着的皇子列表[序列 * 20 + i];
      var _loc2_ = className('sydb2')[i];
      if(_loc4_ == undefined){
         _loc2_.style.display="none";
      }
      else{
         _loc2_.style.display="block";
         _loc2_.innerText = _loc4_.名称;
         _loc2_.取 = _loc4_;
         _loc2_.onclick = function(){
            i = 0;
            while(i < _all_child.length){
               if(_all_child[i].id == 国家.皇储id){
                  var _loc2_ = _all_child[i];}
               i++;
            }
            if(this.取.id == _loc2_.id){
               小提示("目前的皇储就是他");
            }
            else if(_loc2_.封号 !== "已死亡" && _loc2_.封号 !== "已除籍" && this.取.朝廷势力 < _loc2_.朝廷势力){
               console.log("想换的皇子的势力" + this.取.朝廷势力);
               console.log("原来的太子的势力" + _loc2_.朝廷势力);
               小提示("大臣们纷纷表示不妥，无法更换皇储");
            }
            else{
               国家.皇储id = this.取.id;
               出圣旨("储贰之重，式固宗祧，一有元良，以贞万国。皇子" + this.取.名称 + "，器质冲远，风猷昭茂，宏图夙著，美业日隆。孝惟德本，周於百行，仁为重任，以安万物。可立为皇太子。所司具礼，以时册命。");
               id('syb').style.display = 'block';
               id('syb2').style.display = 'none';id('sy').style.display = 'none';
               大殿体力扣除程序(10);
            }
         };
      }
      i++;
   }
}
function 外交的总表(参数,任务类型){
	var _loc1_ = 刷新外交();
	刷新每个国家几城的程序();
	id('waijiaoyilan').style.display = 'block';
	var 临时外交列表 = [];
	if(参数 == 1 || 参数 == 2 || 参数 == 3|| 参数 == 4){
	    var _loc5_ = 0;
	    while(_loc5_ < _all_nation.length){
	        if(_all_nation[_loc5_].城.length > 0 && _all_nation[_loc5_].id !== 8 && _all_nation[_loc5_].id !== 9 && _all_nation[_loc5_].id !== 23){
	            临时外交列表.push(_all_nation[_loc5_]);
	        }
	        _loc5_ += 1;
	    }	
	}
	else{
	    var _loc5_ = 0;
	    while(_loc5_ < _loc1_.length){
	        if(!(_loc1_[_loc5_].id == 8 || _loc1_[_loc5_].id == 23 || _loc1_[_loc5_].城.length == 0)){
	            临时外交列表.push(_loc1_[_loc5_]);
	        }
	        _loc5_ += 1;
	    }
	}
	序列 = 0;
	刷新外交信息(临时外交列表,序列,参数,任务类型)
	id('waijiaoqian').onclick = function(){
	if(序列 > 0 ){
	    序列 -= 1;
	    刷新外交信息(临时外交列表,序列,参数,任务类型);
	    }
	};
	id('waijiaohou').onclick = function(){
 	    if(序列 < Math.round(临时外交列表.length / 10)){
 	    序列 += 1;
		刷新外交信息(临时外交列表,序列,参数,任务类型);
 	    }
	};
}
function 刷新外交信息(临时外交列表,序列,参数,任务类型){
   var _loc4_ = 0;
   while(_loc4_ < className('waijiaolbx').length){
      var _loc5_ = 临时外交列表[序列 * 10 + _loc4_];
      var _loc6_ = className('waijiaolbx')[_loc4_];
      if(_loc5_ == undefined){
         className('waijiaolbx')[_loc4_].style.display = 'none';
      }
      else{
        className('waijiaolbx')[_loc4_].style.display = 'block';
        var _loc7_ = 0;
        var _loc8_ = 0;
        f = 0;
        while(f < _loc5_.城.length){
            _loc8_ += _loc5_.城[f].士兵;
            _loc7_ += _loc5_.城[f].人口;
            f++;
        }
        className('w1')[_loc4_].innerText = _loc5_.名称;
        className('w2')[_loc4_].innerText = _loc5_.城.length;
        className('w3')[_loc4_].innerText = Math.round(_loc8_ / 10000) + "万";
        className('w4')[_loc4_].innerText = 外交状态[_loc5_.外交];
        if(_loc5_.外交 == 1){
            var _loc9_ = _loc5_.友好度;
            if(_loc9_ <= 199){
               className('w4')[_loc4_].innerText = "厌恶";
            }
            else if(_loc9_ >= 200 && _loc9_ <= 399){
               className('w4')[_loc4_].innerText = "冷淡";
            }
            else if(_loc9_ >= 400 && _loc9_ <= 699){
               className('w4')[_loc4_].innerText = "一般";
            }
            else if(_loc9_ >= 700 && _loc9_ <= 899){
               className('w4')[_loc4_].innerText = "友善";
            }
            else if(_loc9_ >= 900 && _loc9_ <= 999){
               className('w4')[_loc4_].innerText = "亲密";
            }
        }
        className('w5')[_loc4_].innerText = Math.round(_loc5_.贸易额);
        className('w6')[_loc4_].innerText = Math.round(_loc5_.贸易年数);
        className('w7')[_loc4_].innerText = _loc5_.联姻 + "个月";
        if(_loc5_.联姻 == 0){
            className('w7')[_loc4_].innerText = "--";
        }
		className('w8')[_loc4_].innerText = "--";
        _loc6_.取 = _loc5_;
        _loc6_.onclick = function(){
			if(参数 == 2){
				出圣旨("宣" + this.取.名称 + "使臣午后到礼明殿觐见，商榷两国外交事宜。");
                主角.有客人 = [1,this.取.id];
                属性.体力 -= 50;
				id('waijiaoyilan').style.display = 'none';
			}
			else if(参数 == 3){
			 	进行外交确定(this.取,外交)
			 	id('waijiaoyilan').style.display = 'none';
			}
			else if(参数 == 4){
				选择公主远嫁面板(this.取);
			}
			else if(参数 == 5 ||参数 == 6||参数 == 7){
				查看血滴子详情程序(1,this.取,任务类型);
				id('waijiaoyilan').style.display = 'none';
			}
			else{展示外国信息(0,this.取);}
         };
      }
      _loc4_ += 1;
   }
}
function 展示外国信息(参数,国){
    id('waiguoxx').style.display = 'block';
    var _loc2_ = 0;
    var f = 0;
    while(f < 国.城.length){
        _loc2_ += 国.城[f].士兵;
        _loc2_ += 国.城[f].人口;
        f++;
    }
    if(参数 == 1){
		id('wgxxbg').style.display = 'block';
		新后宫图形读取程序(id('wgxxbg'),777543,"背景");
		id('wgan0').style.display = 'block';
		id('wgan4').style.display = 'none';
		id('wgan0').innerText = "送礼";id('wgan0').onclick = function(){外交送礼程序(国);};
	    id('wgan1').innerText = "索要";id('wgan1').onclick = function(){外交索要程序(国);};
		if(国.外交 == 0){
		    id('wgan3').style.display = 'block';
		    id('wgan3').innerText = "停战议和";
		    id('wgan3').onclick = function(){外交议和程序(国);};
		}
		else{id('wgan3').style.display = 'none';}
		if(国.外交 == 2){
			id('wgan2').innerText = "解除同盟";
			id('wgan2').onclick = function(){外交解盟程序(国);};
		}
		else{
			id('wgan2').innerText = "请求同盟";
			id('wgan2').onclick = function(){外交同盟程序(国);};
		}
    }
    if(参数 == 0){
		id('wgxxbg').style.display = 'none';
		id('wgan0').innerText = 国王称呼计算(国.id);id('wgan0').onclick = function(){出现这个皇室的介绍(国.皇帝);};
		id('wgan1').innerText = "后妃";id('wgan1').onclick = function(){外国皇室一览表(0,国.id);};
		id('wgan2').innerText = "皇子";id('wgan2').onclick = function(){外国皇室一览表(1,国.id);};
		id('wgan3').innerText = "公主";id('wgan3').onclick = function(){外国皇室一览表(2,国.id);};
		id('wgan4').style.display = 'none';id('wgan3').style.display = 'block';
    }
	id('waiguoText').innerText = 国.名称;
    id('wgxingxi').innerText = "州府：" + 国.城.length;
    id('wgxingxi').innerText += "\n人口：" + Math.round(_loc2_ / 10000) + "万";
    id('wgxingxi').innerText += "\n士兵：" + Math.round(_loc2_ / 10000) + "万";
    id('wgxingxi').innerText += "\n兵种：" + 国.兵种;
    if(国.外交 == 1){
        _loc2_ = 国.友好度;
        if(_loc2_ <= 199){id('wgxingxi').innerText += "\n外交关系：厌恶";}
        else if(_loc2_ >= 200 && _loc2_ <= 399){id('wgxingxi').innerText += "\n外交关系：冷淡";}
        else if(_loc2_ >= 400 && _loc2_ <= 699){id('wgxingxi').innerText += "\n外交关系：一般";}
        else if(_loc2_ >= 700 && _loc2_ <= 899){
        id('wgxingxi').innerText += "\n外交关系：友善";}
        else if(_loc2_ >= 900 && _loc2_ <= 999){id('wgxingxi').innerText += "\n外交关系：亲密";}
    }
   else{id('wgxingxi').innerText += "\n外交关系：" + 外交状态[国.外交];}
   id('wgxingxi').innerText += "\n联姻：" + 国.联姻 + "个月";
   id('wgxingxi').innerText += "\n贸易额：" + Math.round(国.贸易额);
   id('wgxingxi').innerText += "\n贸易年数：" + Math.round(国.贸易年数) + "年";
   id('zongshi').innerText = '宗室\n';
   id('guobao').innerText = '国宝';
   var _loc1_=0;
   var _loc2_=0;
   var _loc3_=0;
   var _loc4_=0;
   while(_loc1_<_all_family.length){
	   if(_all_family[_loc1_].婚配序号 == 国.皇帝._code){
		   _loc2_+=1;
	   }
	   if(_all_family[_loc1_].脉系 == 国.皇帝._code&&_all_family[_loc1_].儿女==0){
	   		_loc3_+=1;
	   }
	   if(_all_family[_loc1_].脉系 == 国.皇帝._code&&_all_family[_loc1_].儿女==1){
	   		_loc4_+=1;
	   }
	   _loc1_+=1;
   }
   id('zongshi').innerText+=国王称呼计算(国.id)+"："+国.皇帝.名称;
   id('zongshi').innerText+="\n"+外国后宫称呼计算(国.id,0)[0]+"："+国.皇帝.皇后;
   id('zongshi').innerText+="\n"+国.皇帝.太子身份+"："+国.皇帝.太子;
   id('zongshi').innerText+="\n后妃："+_loc2_+"人\n皇子："+_loc3_+"人\n公主："+_loc4_+"人";
}
function 刷新外交(){
   var _loc1_ = 0;
   while(_loc1_ < _all_nation.length){
      _all_nation[_loc1_].城 = [];
      _loc1_ += 1;
   }
   _loc1_ = 0;
   while(_loc1_ < _all_city.length){
      _all_nation[_all_city[_loc1_].归属].城.push(_all_city[_loc1_]);
      _loc1_ += 1;
   }
   return _all_nation;
}
function 地方发展界面(参数,源城市,子女){
	id('sy').style.display = 'block';
	id('syb').style.display = 'block';
	id('syTitle').innerText = '地方列表';
	id('qxsy').onclick = function (){id('sy').style.display = 'none';}
	var 我方城池 = [];
	   i = 0;
	   while(i < _all_city.length)
	   {
	      if(_all_city[i].归属 == 8)
	      {
	         我方城池.push(_all_city[i]);
	      }
	      i++;
	   }
	  if(参数 == 4){id('sysm').innerText = "让哪个地区的百姓迁出？";}
	  else if(参数 == 5){黑色幕布();id('sysm').innerText = "将这些百姓迁移到哪个地方？";}
	  else if(参数 == 6){id('sysm').innerText = "要将哪个城市分封出去？";}
	  else{id('sysm').innerText = '';}
	 if(我方城池.length == 0){
	      小提示("没有城池");
	      id('sy').style.display = 'none';
	      id('syb').style.display = 'none';
	   }
	else{
	      var 序列 = 0;
	      更新我方城池列表信息(参数,我方城池,序列,源城市,子女);
	      id('syqian').onclick = function()
	      {
	         if(序列 > 0)
	         {
	            序列 -= 1;
	            更新我方城池列表信息(参数,我方城池,序列,源城市,子女);
	         }
	      };
	      id('syhou').onclick = function()
	      {
	         if(序列 < Math.round(我方城池.length / 15))
	         {
	            序列 += 1;
	            更新我方城池列表信息(参数,我方城池,序列,源城市,子女);
	         }
	      };
	   }
}   
function 更新我方城池列表信息(参数,我方城池,序列,源城市,子女){
   var _loc4_ = 0;
   while(_loc4_ < 15){
      var _loc5_ = 我方城池[序列 * 15 + _loc4_];
      if(_loc5_ == undefined){
         className('sydb')[_loc4_].style.display = 'none';
      }
      else{
         className('sydb')[_loc4_].style.display = 'block';
         className('sydb')[_loc4_].innerText = _loc5_.名称;
         className('sydb')[_loc4_].取 = _loc5_;
         className('sydb')[_loc4_].onclick = function(){
            if(参数 == 0){
               征收钱粮选择(this.取);
            }
            else if(参数 == 1){
			   id('sy').style.display = 'none';
               下发补助选择(this.取);
            }
            else if(参数 == 2){
               if(this.取.行宫 == 0){
                  i = 0;
                  while(i < _all_rencai.length)
                  {
                     if(_all_rencai[i].官职 == "工部尚书")
                     {
                        在这里建设行宫(this.取,_all_rencai[i]);
                     }
                     i++;
                  }
                  id('sy').style.display = 'none';
                  id('syb').style.display = 'none';}
               else{
                  小提示("这里已经建设了行宫了");}
            }
            else if(参数 == 3){
               if(this.取.行宫 !== 0){
                  浩荡出巡程序哦(this.取);
                  id('sy').style.display = 'none';
                  id('syb').style.display = 'none';}
               else{
                  小提示("这里还没有建设行宫");}
            }
            else if(参数 == 4){
               百姓迁移到这里(this.取);
            }
            else if(参数 == 5){
               if(this.取.名称 == 源城市.名称){
                  小提示("这个城市是移民源");}
               else{
                  i = 0;
                  while(i < _all_rencai.length)
                  {
                     if(_all_rencai[i].官职 == "户部尚书")
                     {
                        移民拖动(_all_rencai[i],源城市,this.取);
                     }
                     i++;
                  }}
            }
            else if(参数 == 6){
               if(this.取.地方委任 == 1){
                  小提示("这个城市现在委任中，无法分封");}
               else if(this.取.id == 12){
                  小提示("都城无法分封");}
               else{
				  子女封地确认(子女,this.取)
                  id('sy').style.display = 'none';
	              id('syb').style.display = 'none';}
            }
            else{
               展示该城市的信息(this.取);
            }
         };
      }
      _loc4_ += 1;
   }
}
function 展示该城市的信息(城市){
	id('difangfazhan').style.display = 'block';
	id('dfTitle').innerText = 城市.名称;
	id('dfbg').src = LJ+'azcPic_Jyou/' + 城市.id + '.webp';
    id('dftext0').innerText = "【基本信息】\n人口：" + Math.round(城市.人口);
    id('dftext0').innerText += "\n等级：" + 城市.等级;
    id('dftext0').innerText += "\n治安：" + 城市.治安;
    id('dftext0').innerText += "\n工资：" + 城市.工资;
    id('dftext0').innerText += "\n民心：" + 城市.民心;
    id('dftext0').innerText += "\n府库银两：" + Math.round(城市.金钱);
    id('dftext0').innerText += "\n库存粮食：" + Math.round(城市.粮食);
    id('dftext0').innerText += "\n\n【产业】（库存/可征收）\n布匹：" + 城市.布匹 + "/" + 城市.民间布匹;
    id('dftext0').innerText += "\n瓷器：" + 城市.瓷器 + "/" + 城市.民间瓷器;
    id('dftext0').innerText += "\n矿石：" + 城市.矿石 + "/" + 城市.民间矿石;
    id('dftext0').innerText += "\n珠宝：" + 城市.珠宝 + "/" + 城市.民间珠宝;
    id('dftext0').innerText += "\n牲畜：" + 城市.牲畜 + "/" + 城市.民间牲畜;
    id('dftext1').innerText = "【发展度】\n种植业：" + 城市.种植业 + "/" + 城市.种植业上限;
     if(城市.丝织业上限 > 0)
     {
        id('dftext1').innerText += "\n丝织业：" + 城市.丝织业 + "/" + 城市.丝织业上限;
     }
     if(城市.陶瓷业上限 > 0)
     {
        id('dftext1').innerText += "\n陶瓷业：" + 城市.陶瓷业 + "/" + 城市.陶瓷业上限;
     }
     if(城市.采矿业上限 > 0)
     {
        id('dftext1').innerText += "\n采矿业：" + 城市.采矿业 + "/" + 城市.采矿业上限;
     }
     if(城市.珠宝业上限 > 0)
     {
        id('dftext1').innerText += "\n珠宝业：" + 城市.珠宝业 + "/" + 城市.珠宝业上限;
     }
     if(城市.畜牧业上限 > 0)
     {
        id('dftext1').innerText += "\n畜牧业：" + 城市.畜牧业 + "/" + 城市.畜牧业上限;
     }
     id('dftext1').innerText += "\n\n百姓存钱：" + Math.ceil(城市.民间金钱 / 城市.人口) + "/人";
     id('dftext1').innerText += "\n百姓存粮：" + Math.ceil(城市.民间粮食 / 城市.人口) + "/人";
     if(城市.地方委任 == 1)
     {
        id('dftext1').innerText += "\n\n【委任官员】";
        id('dftext1').innerText += "\n" + 城市.委任者[0].名字 + ";";
        id('dftext1').innerText += 城市.委任者[1].名字 + ";";
        id('dftext1').innerText += 城市.委任者[2].名字 + ";";
        id('dftext1').innerText += 城市.委任者[3].名字 + ";";
        id('dftext1').innerText += 城市.委任者[4].名字 + ";";
        id('dftext1').innerText += 城市.委任者[5].名字 + ";";
        id('dftext1').innerText += 城市.委任者[6].名字;
     }
	id('调整工资').onclick = function(){调整工资(城市);};
	id('征缴粮食').onclick = function(){征缴粮食(城市);};
	id('治安巡查').onclick = function(){治安巡查(城市);};
	id('一键建设').onclick = function(){一键建设(城市);};
	id('地方委任').onclick = function(){地方委任(城市);};
}
function 调整工资(城市){
	if(城市.调整工资 == 1){小提示("本月该城已调整过工资");}
	else{
	  id('zhixingren').innerText = "";
	  id('zxrbg').onclick = function(){};
	  id('数值拉动面板').style.display = 'block';
	  id('range').value = 城市.工资;
	  id('range').max = 10;
	  change();
	  id('rangeText').innerText = "调整需谨慎，过低的工资会让百姓不满，减缓人口增长。\n当前该城工资：" + 城市.工资 + "两/人 每月";
	  var 当前工资 = 城市.工资;
	  id('rqueding').onclick = function(){
	     if(id('range').value == undefined)
	     {
	        小提示("请拉动红条操作");
	     }
	     else if(id('range').value == 当前工资)
	        {
	        小提示("没有做任何调整");
	     }
	     else
	     {
	        if(id('range').value > 当前工资)
	        {
	           出圣旨("为加强地方建设，促进社会发展。特将工资由原来的" + 当前工资 + "升为" + id('range').value + "。皇上隆恩披泽，乃国家之福。");
	           大殿体力扣除程序(5);
	        }
	        else
	        {
	           出圣旨("为减轻城市财政负担，需将工资由原来的" + 当前工资 + "下调为" + id('range').value + "，请按期领取。");
	              大殿体力扣除程序(10);
	        }
	        城市.工资 = Number(id('range').value);
	        城市.调整工资 = 1;
			id('数值拉动面板').style.display = 'none';
			id('zxrbg').style.display = 'block';
			id('zhixingren').style.display = 'block';
			更新城市数值展示(城市);
	        更新资料(属性栏);
	         }
	      };
	   }
}
function 征缴粮食(城市){
   if(城市.征缴粮食 == 1){小提示("本季已进行过了");}
   else{
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "户部尚书"){征缴粮食拉动条(城市,_all_rencai[i]);}i++;
      }
   }
}
function 征缴粮食拉动条(城市, 执行人){
    id('zxrbg').onclick = function(){人才列表显示(2,城市);id('数值拉动面板').style.display = 'none';};
    id('zhixingren').innerText = "执行人：" + 执行人.名字;
    id('数值拉动面板').style.display = 'block';
    id('range').value = 0;
    id('range').max = 城市.民间粮食;
    var _loc2_ = 城市.民间粮食 - 城市.人口 * 10;
    change();
    id('rangeText').innerText= "官员武力决定征粮时钱粮安全，清廉决定是否贪污。\n百姓手中的粮食不足以养活人口时，人口下降；\n百姓手中有余粮时，人口上升。\n建议为百姓留下多于人口的粮食数量。\n该城市人口：" + 城市.人口 + "人。建议征粮不超过：" + _loc2_ + "石。";
    id('rangeText').innerText += "\n\n需要征缴多少粮食。";
    id('rqueding').onclick = function(){
        if(id('range').value == undefined){小提示("请拉动红条操作");}
        else{
            出圣旨("命" + 执行人.名字 + "本月在" + 城市.名称 + "城内征缴粮食" + Number(id('range').value) + "石。");
            大殿体力扣除程序(10);
            城市.民间粮食 -= Number(id('range').value);
            城市.粮食 += Math.round(Number(id('range').value) * (0.9 + 0.001 * 执行人.清廉));
            执行人.任务中 = 1;
            执行人.功勋 += 10;
            城市.征缴粮食 = 1;
            id('数值拉动面板').style.display = 'none';
            更新城市数值展示(城市);
            更新资料(属性栏);
      }
   };
}
function 治安巡查(城市){
   if(城市.治安巡查 == 1){小提示("本季已进行过了");}
   else{
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "兵部尚书"){治安巡查界面(城市,_all_rencai[i]);}
         i++;
      }
   }
}
function 治安巡查界面(城市, 执行人){
   id('zxrbg').onclick = function(){人才列表显示(7,城市);id('数值拉动面板').style.display = 'none';};
   id('zhixingren').innerText = "执行人：" + 执行人.名字;
   id('数值拉动面板').style.display = 'block';
   id('rangeText').innerText = "官员武力决定治安力度。治安保证城市生产力。\n该城市现在治安为：" + 城市.治安;
   id('rangeText').innerText += "\n本次治安巡查经费：10000";
   id('rangeText').innerText += "\n\n是否执行本次治安巡查。";
   id('range').style.display = 'none';
   id('rangean').style.display = 'none';id('rangebg').style.display = 'none';
   id('rangeqian').style.display = 'none';
   id('rangezhi').style.display = 'none';
   id('rqueding').onclick = function(){
      城市.金钱 -= 10000;
      城市.治安 += Math.round(20 * 执行人.武力 / 100);
      if(城市.治安 > 100){城市.治安 = 100;}
      出圣旨("命" + 执行人.名字 + "本月在" + 城市.名称 + "城内进行治安巡查。");
      执行人.任务中 = 1;
      执行人.功勋 += 10;
      城市.治安巡查 = 1;
      id('数值拉动面板').style.display = 'none';
	  id('range').style.display = 'block';
	  id('rangean').style.display = 'block';
	  id('rangeqian').style.display = 'block';
	  id('rangebg').style.display = 'block';
	  id('rangezhi').style.display = 'block';
      更新资料(属性栏);
   };
}
function 一键建设(城市){
   if(城市.一键建设 == 1){小提示("本季已进行过了");}
   else{
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "户部尚书"){var _loc1_ = _all_rencai[i];}
		 if(_all_rencai[i].官职 == "工部尚书"){var _loc2_ = _all_rencai[i];}
		 i++;
      }
	  一键建设执行(城市,_loc1_,_loc2_);
   }
}
function 一键建设执行(城市,执行人一,执行人二){
	var _loc6_ = 0;
	var i = 0;
	while(i<_all_city.length){
		if(_all_city[i].归属 == 8 || _all_city[i].归属 == 23){_loc6_++;}
		i++;
	}
	var _loc11_ = Math.round(城市.人口 * 城市.工资 * (1.3 - 0.3 * 执行人一.清廉 / 100));
    var _loc27_ = 0.8;
    var _loc28_ = 1 + 0.01 * _loc6_;
    var _loc29_ = _loc28_ * _loc27_ * 0.25 * (执行人一.智力 / 100 + 执行人一.清廉 / 100 + 执行人一.清廉 / 100 + 执行人一.智力 / 100);
    var _loc30_ = 城市.民间布匹 * (所有卖出价[0] - 所有收购价[0]);
    var _loc31_ = Math.floor(_loc30_ * _loc29_ * Math.pow(城市.丝织业,0.058823529411764705));
    var _loc32_ = 城市.民间瓷器 * (所有卖出价[1] - 所有收购价[1]);
    var _loc33_ = Math.floor(_loc32_ * _loc29_ * Math.pow(城市.陶瓷业,0.058823529411764705));
    var _loc34_ = 城市.民间矿石 * (所有卖出价[2] - 所有收购价[2]);
    var _loc35_ = Math.floor(_loc34_ * _loc29_ * Math.pow(城市.采矿业,0.058823529411764705));
    var _loc36_ = 城市.民间珠宝 * (所有卖出价[3] - 所有收购价[3]);
    var _loc37_ = Math.floor(_loc36_ * _loc29_ * Math.pow(城市.珠宝业,0.058823529411764705));
    var _loc38_ = 城市.民间牲畜 * (所有卖出价[5] - 所有收购价[5]);
    var _loc39_ = Math.floor(_loc38_ * _loc29_ * Math.pow(城市.畜牧业,0.058823529411764705));
    城市.民间布匹 = 0;
    城市.民间瓷器 = 0;
    城市.民间矿石 = 0;
    城市.民间珠宝 = 0;
    城市.民间牲畜 = 0;
    var _loc40_ = Math.round(_loc31_ + _loc33_ + _loc35_ + _loc37_ + _loc39_);
    var _loc41_ = Math.floor(_loc40_ * 0.2 * (1.5 - 执行人二.清廉 / 100));
    var _loc42_ = Math.floor(_loc40_ * 0.3 * (1.5 - 执行人二.清廉 / 100));
    var _loc43_ = Math.floor(城市.人口 * 0.05);
    var _loc44_ = Math.round(_loc40_ - _loc11_ - _loc41_ - _loc43_ - _loc42_);
    if(_loc44_ < 0){城市.负债 = 1;}
    else{城市.负债 = undefined;}
    城市.金钱 += _loc44_;
    城市.金钱 = Math.round(城市.金钱);
    城市.粮食 = Math.round(城市.粮食);
	城市.种植业 += Math.round(执行人二.政治 * 4);
    if(城市.种植业 - 城市.种植业上限 >= 0){
       城市.种植业 = 城市.种植业上限;
    }
    城市.丝织业 += Math.round(执行人二.政治 * 0.04);
    if(城市.丝织业 - 城市.丝织业上限 >= 0){
       城市.丝织业 = 城市.丝织业上限;
    }
    城市.陶瓷业 += Math.round(执行人二.政治 * 0.04);
    if(城市.陶瓷业 - 城市.陶瓷业上限 >= 0){
       城市.陶瓷业 = 城市.陶瓷业上限;
    }
    城市.采矿业 += Math.round(执行人二.政治 * 0.04);
    if(城市.采矿业 - 城市.采矿业上限 >= 0){
       城市.采矿业 = 城市.采矿业上限;
    }
    城市.珠宝业 += Math.round(执行人二.政治 * 0.04);
    if(城市.珠宝业 - 城市.珠宝业上限 >= 0){
       城市.珠宝业 = 城市.珠宝业上限;
    }
    城市.畜牧业 += Math.round(执行人二.政治 * 0.04);
    if(城市.畜牧业 - 城市.畜牧业上限 >= 0){
       城市.畜牧业 = 城市.畜牧业上限;
    }
    城市.种植业上限 += Math.round(666 * 执行人二.武力 / 100);
    城市.丝织业上限 += Math.round(3 * 执行人二.智力 / 100);
    城市.陶瓷业上限 += Math.round(3 * 执行人二.智力 / 100);
    城市.采矿业上限 += Math.round(3 * 执行人二.统帅 / 100);
    城市.珠宝业上限 += Math.round(3 * 执行人二.政治 / 100);
    城市.畜牧业上限 += Math.round(3 * 执行人二.统帅 / 100);
    if(城市.种植业上限 > 500000){
       城市.种植业上限 = 500000;
    }
    if(城市.丝织业上限 > 1200){
       城市.丝织业上限 = 1200;
    }
    if(城市.陶瓷业上限 > 1200){
       城市.陶瓷业上限 = 1200;
    }
    if(城市.采矿业上限 > 1200){
       城市.采矿业上限 = 1200;
    }
    if(城市.珠宝业上限 > 1200){
       城市.珠宝业上限 = 1200;
    }
    if(城市.畜牧业上限 > 1200){
       城市.畜牧业上限 = 1200;
    }
	执行人一.任务中 = 1;
	执行人一.功勋 += 10;
	执行人二.任务中 = 1;
	执行人二.功勋 += 10;
	小提示('一键建设完毕');
	城市.一键建设 = 1;
	更新城市数值展示(城市);
}
function 地方委任(城市){
   id('dfwr').style.display = 'block';
   if(城市.地方委任 == 1){id('wrjc').style.display = 'block';id('wrqueding').style.display = 'none';}else{id('wrjc').style.display = 'none';id('wrqueding').style.display = 'block';}
   id('wrjc').onclick = function(){
      出圣旨("解除委任" + 城市.委任者[0].名字 + "等人在" + 城市.名称 + "城内的独立发展。");
      i = 0;
      while(i < _all_rencai.length){
         d = 0;
         while(d < 7){
            if(_all_rencai[i].名字 == 城市.委任者[d].名字){
               _all_rencai[i].任务中 = 0;
               _all_rencai[i].委任城市 = undefined;
            }
            d++;
         }
         i++;
      }
      城市.地方委任 = 0;
      城市.委任者 = [];
      更新资料();
	  更新城市数值展示(城市);
      id('dfwr').style.display = 'none';
   };
   if(城市.委任者[0] == undefined){
      id('wr0').innerText = "刺史（上缴府库/清）：";
   }
   else{
      id('wr0').innerText = "刺史（上缴府库/清）：" + 城市.委任者[0].名字;
   }
   id('wrbg0').onclick = function(){
      人才列表显示(80,城市);
   };
   if(城市.委任者[1] == undefined){
      id('wr1').innerText = "征缴粮食（武/清）：";
   }
   else{
      id('wr1').innerText = "征缴粮食（武/清）：" + 城市.委任者[1].名字;
   }
   id('wrbg1').onclick = function(){
      人才列表显示(81,城市);
   };
   if(城市.委任者[2] == undefined){
      id('wr2').innerText = "收购物资（智/清）：";
   }
   else{
      id('wr2').innerText = "收购物资（智/清）：" + 城市.委任者[2].名字;
   }
   id('wrbg2').onclick = function(){
      人才列表显示(82,城市);
   };
   if(城市.委任者[3] == undefined){
      id('wr3').innerText = "商馆交易（智/清）：";
   }
   else{
      id('wr3').innerText = "商馆交易（智/清）：" + 城市.委任者[3].名字;
   }
   id('wrbg3').onclick = function(){
      人才列表显示(83,城市);
   };
   if(城市.委任者[4] == undefined){
      id('wr4').innerText = "发展建设（政）：";
   }
   else{
      id('wr4').innerText = "发展建设（政）：" + 城市.委任者[4].名字;
   }
   id('wrbg4').onclick = function(){
      人才列表显示(84,城市);
   };
   if(城市.委任者[5] == undefined){
      id('wr5').innerText = "城市扩张（政/武/统）：";
   }
   else{
      id('wr5').innerText = "城市扩张（政/武/统）：" + 城市.委任者[5].名字;
   }
   id('wrbg5').onclick = function(){
      人才列表显示(85,城市);
   };
   if(城市.委任者[6] == undefined){
      id('wr6').innerText = "治安巡查（武）：";
   }
   else{
      id('wr6').innerText = "治安巡查（武）：" + 城市.委任者[6].名字;
   }
   id('wrbg6').onclick = function(){
      人才列表显示(86,城市);
   };
   id('qxwr').onclick = function(){
      if(城市.地方委任 == 1){
         id('dfwr').style.display = 'none';
      }
      else{
         id('dfwr').style.display = 'none';
         i = 0;
         while(i < 7){
			if(城市.委任者[i] !== undefined){城市.委任者[i].任务中 = 0;
            城市.委任者[i].委任城市 = undefined;
            城市.委任者[i] = undefined;城市.委任者 = [];}
            i++;
         }
      }
   };
   id('wrText').innerText = 城市.名称 + "地方委任名单";
   id('wrqueding').onclick = function(){
      var _loc2_ = 0;
      i = 0;
      while(i < 7){
         if(城市.委任者[i] != undefined){
            _loc2_ += 1;
         }
         i++;
      }
      if(_loc2_ == 7){
         出圣旨("委任" + 城市.委任者[0].名字 + "等人在" + 城市.名称 + "城内进行独立发展，治理一方。");
         i = 0;
         while(i < 7){
            城市.委任者[i].任务中 = 2;
            城市.委任者[i].委任城市 = 城市.id;
            i++;
         }
         城市.地方委任 = 1;
         id('dfwr').style.display = 'none';
         更新城市数值展示(城市);
         更新资料();
      }
      else{
         小提示("委任者名单有空缺，无法委任");
      }
   };
}
function 更新城市数值展示(城市){
   id('dftext0').innerText = "【基本信息】\n人口：" + Math.round(城市.人口);
   id('dftext0').innerText += "\n等级：" + 城市.等级;
   id('dftext0').innerText += "\n治安：" + 城市.治安;
   id('dftext0').innerText += "\n工资：" + 城市.工资;
   id('dftext0').innerText += "\n民心：" + 城市.民心;
   id('dftext0').innerText += "\n府库银两：" + Math.round(城市.金钱);
   id('dftext0').innerText += "\n库存粮食：" + Math.round(城市.粮食);
   id('dftext0').innerText += "\n\n【产业】（库存/可征收）\n布匹：" + 城市.布匹 + "/" + 城市.民间布匹;
   id('dftext0').innerText += "\n瓷器：" + 城市.瓷器 + "/" + 城市.民间瓷器;
   id('dftext0').innerText += "\n矿石：" + 城市.矿石 + "/" + 城市.民间矿石;
   id('dftext0').innerText += "\n珠宝：" + 城市.珠宝 + "/" + 城市.民间珠宝;
   id('dftext0').innerText += "\n牲畜：" + 城市.牲畜 + "/" + 城市.民间牲畜;
   id('dftext1').innerText = "【发展度】\n种植业：" + 城市.种植业 + "/" + 城市.种植业上限;
   if(城市.丝织业上限 > 0){
      id('dftext1').innerText += "\n丝织业：" + 城市.丝织业 + "/" + 城市.丝织业上限;
   }
   if(城市.陶瓷业上限 > 0){
      id('dftext1').innerText += "\n陶瓷业：" + 城市.陶瓷业 + "/" + 城市.陶瓷业上限;
   }
   if(城市.采矿业上限 > 0){
      id('dftext1').innerText += "\n采矿业：" + 城市.采矿业 + "/" + 城市.采矿业上限;
   }
   if(城市.珠宝业上限 > 0){
      id('dftext1').innerText += "\n珠宝业：" + 城市.珠宝业 + "/" + 城市.珠宝业上限;
   }
   if(城市.畜牧业上限 > 0){
      id('dftext1').innerText += "\n畜牧业：" + 城市.畜牧业 + "/" + 城市.畜牧业上限;
   }
   id('dftext1').innerText += "\n\n百姓存钱：" + Math.ceil(城市.民间金钱 / 城市.人口) + "/人";
   id('dftext1').innerText += "\n百姓存粮：" + Math.ceil(城市.民间粮食 / 城市.人口) + "/人";
   if(城市.地方委任 == 1){
      id('dftext1').innerText += "\n\n【委任官员】";
      id('dftext1').innerText += "\n" + 城市.委任者[0].名字 + ";";
      id('dftext1').innerText += 城市.委任者[1].名字 + ";";
      id('dftext1').innerText += 城市.委任者[2].名字 + ";";
      id('dftext1').innerText += 城市.委任者[3].名字 + ";";
      id('dftext1').innerText += 城市.委任者[4].名字 + ";";
      id('dftext1').innerText += 城市.委任者[5].名字 + ";";
      id('dftext1').innerText += 城市.委任者[6].名字;
   }
}
function change(){
	id('range').style.display = 'block';
	id('rangean').style.display = 'block';
	id('rangeqian').style.display = 'block';
	id('rangebg').style.display = 'block';
	id('rangezhi').style.display = 'block';
	var value = id('range').value;
	var max = id('range').max;
	id('rangezhi').innerHTML = value;
	var i = Math.ceil(value/max * 399) + 'px';
	id('rangeqian').style.width = i;
	id('range').onmouseover = function(){id('rangean').style.backgroundPositionX = '-39px';}
	id('range').onmouseleave = function(){id('rangean').style.backgroundPositionX = '0px';}
	id('rangean').style.transform = 'translateX(' + i + ')';
}
function 下发补助选择(城市){
   id('gzhjxz').style.display = 'block';
   id('gzhjTittle').innerText = "下发补助";
   id('gzhjText').innerText = "请选择下发金钱还是粮食。";
   id('gzhjan0').innerText  = "金钱";
   id('gzhjan1').innerText  = "粮食";
   id('gzhjan2').onclick = function(){id('gzhjxz').style.display = 'none';};
   id('gzhjan0').onclick = function(){
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "户部尚书"){
            金钱下发拉动条(城市,_all_rencai[i]);
         }
         i++;
      }
         id('gzhjxz').style.display = 'none';
   };
   id('gzhjan1').onclick = function(){
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "户部尚书"){
            粮食下发拉动条(城市,_all_rencai[i]);
         }
         i++;
      }
         id('gzhjxz').style.display = 'none';
   };
}
function 金钱下发拉动条(城市, 执行人){
   id('数值拉动面板').style.display = 'block';
   id('zhixingren').innerText = "执行人：" + 执行人.名字;
   id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(14,城市);};
   id('range').value = 0;
   id('range').max = 国家.金钱;
   change();
   var _loc2_ = 城市.人口 * 城市.工资 - 城市.金钱;if(_loc2_ < 0){_loc2_ = 0;}
   id('rangeText').innerText = "向地方政府下发钱粮补助，执行官员的武力决定钱粮安全，清廉决定贪污程度。\n若地方府库银两不足发放百姓的工资，会降低民心以至于发生暴动；\n建议发放：" + _loc2_ + "两以上。";
   id('rqueding').onclick = function(){
      if(id('range').value == undefined){小提示("请拉动红条操作");}
      else{
         出圣旨("命" + 执行人.名字 + "立即到" + 城市.名称 + "城内下发中央补助钱款" + Number(id('range').value) + "两。");
         大殿体力扣除程序(10);
         城市.金钱 += Math.round(Number(id('range').value) * 执行人.清廉 / 100);
         国家.金钱 -= Number(id('range').value);
         执行人.任务中 = 1;
         执行人.功勋 += 10;
         id('数值拉动面板').style.display = 'none';
		 id('sy').style.display = 'block';
         更新资料(属性栏);
      }
   };
}
function 粮食下发拉动条(城市,执行人,参数){
  id('数值拉动面板').style.display = 'block';
  id('zhixingren').innerText = "执行人：" + 执行人.名字;
  id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(15,城市);};
   id('range').value = 0;
   id('range').max = 国家.粮食;
   change();
   var _loc3_ = 城市.人口 * 10 - 城市.粮食;if(_loc3_ < 0){_loc3_ = 0;}
   id('rangeText').innerText = "向地方政府下发钱粮补助，执行官员的武力决定钱粮安全，清廉决定贪污程度。\n若存粮不足，则遭遇灾害时无法赈灾。\n建议下发：" + _loc3_ + "石以上。";
   id('rqueding').onclick = function(){
      if(id('range').value == undefined){小提示("请拉动红条操作");}
      else{
         出圣旨("命" + 执行人.名字 + "立即向" + 城市.名称 + "城内下发中央补助粮食" + id('range').value + "石。");
         大殿体力扣除程序(10);
         城市.粮食 += Math.round(Number(id('range').value) * 执行人.清廉 / 100);
         国家.粮食 -= Number(id('range').value);
         执行人.任务中 = 1;
         执行人.功勋 += 10;
         id('数值拉动面板').style.display = 'none';
		 id('sy').style.display = 'block';
         更新资料(属性栏);
      }
   };
}
function 购买武器函数(){
   i = 0;
   while(i < _all_rencai.length){
      if(_all_rencai[i].官职 == "户部尚书"){
         购买武器选择(_all_rencai[i]);
      }
      i++;
   }
}
武器名称 = Array("朴刀","长枪","战马","弓弩");
function 购买武器选择(执行人){
   id('fengjue').style.display = 'block';
   id('fjan').innerText = '取消';
   id('fjText').innerText = "皇上，想在各地征购什么装备。执行人的政治决定购买数量上限，清廉决定价格。";
   id('fjan').onclick = function (){id('fengjue').style.display = 'none';}
   var i = 0;
   while(i < 6){
	if(i<4){
	className('fengjue')[i].innerText = 武器名称[i];
	className('fengjue')[i].style.display = 'block';
	className('fengjue')[i].参数 = i;
	className('fengjue')[i].onclick = function (){具体武器购买(执行人,武器名称[this.参数],this.参数);id('fengjue').style.display = 'none';}	
	}
   else{className('fengjue')[i].style.display = 'none';}
   	i++;}
}
function 具体武器购买(执行人,武器买什么,参数){
   if(国家.金钱 < 0){小提示("国库已无银两");}
   else{
      id('数值拉动面板').style.display = 'block';
      id('zhixingren').innerText = "执行人：" + 执行人.名字;
      id('zxrbg').onclick = function(){人才列表显示(16);};
	  id('range').value = 0;
      if(武器买什么 == "朴刀"){
         id('range').max = Math.round(100000 * 执行人.政治 / 100);
		 _loc1_ = Math.round(国家.朴刀 / 10000)
      }
      else if(武器买什么 == "长枪"){
         id('range').max = Math.round(80000 * 执行人.政治 / 100);
		 _loc1_ = Math.round(国家.长枪 / 10000)
      }
      else if(武器买什么 == "战马"){
         id('range').max = Math.round(30000 * 执行人.政治 / 100);
		 _loc1_ = Math.round(国家.战马 / 10000)
      }
      else if(武器买什么 == "弓弩"){
         id('range').max = Math.round(50000 * 执行人.政治 / 100);
		 _loc1_ = Math.round(国家.弓弩 / 10000)
      }
	  change();
	   _loc2_ = id('range').max;
      var _loc3_ = 4;
      if(参数 == 1){
         _loc3_ = Math.round(4 * (3 - 执行人.智力 / 100 - 执行人.清廉 / 100));
      }
      else if(参数 == 2){
         _loc3_ = Math.round(8 * (3 - 执行人.智力 / 100 - 执行人.清廉 / 100));
      }
      else if(参数 == 3){
         _loc3_ = Math.round(18 * (3 - 执行人.智力 / 100 - 执行人.清廉 / 100));
      }
      else if(参数 == 4){
         _loc3_ = Math.round(12 * (3 - 执行人.智力 / 100 - 执行人.清廉 / 100));
      }
      id('rangeText').innerText = "士兵配备武装能发挥更强的战斗力。\n执行官员政治决定购买数量，智力和清廉决定价格。\n目前国库有" + 武器买什么 + "：" + _loc1_ + "万，\n全国可以征购的" + 武器买什么 + "：" + _loc2_ + "。";
      id('rangeText').innerText += "\n\n需要征购多少" + 武器买什么 + "，单价：" + _loc3_ + "两。";
      id('rqueding').onclick = function(){
         if(id('range').value == undefined){
            小提示("请拉动红条操作");
         }
         else if(Number(id('range').value) > 0){
			var 数量 =  Number(id('range').value);
            好的武器成交(数量 ,执行人,武器买什么,参数);
         }
      };
   }
}
function 好的武器成交(数量,执行人,项目,参数){
   var _loc6_ = 4;
   if(参数 == 1){
      _loc6_ = Math.round(4 * (3 - 执行人.智力 / 100 - 执行人.清廉 / 100));
   }
   else if(参数 == 2){
      _loc6_ = Math.round(8 * (3 - 执行人.智力 / 100 - 执行人.清廉 / 100));
   }
   else if(参数 == 3){
      _loc6_ = Math.round(18 * (3 - 执行人.智力 / 100 - 执行人.清廉 / 100));
   }
   else if(参数 == 4){
      _loc6_ = Math.round(12 * (3 - 执行人.智力 / 100 - 执行人.清廉 / 100));
   }
   var _loc7_ = _loc6_ * 数量;
   if(国家.金钱 < _loc7_){
      小提示("国库银两不够");
   }
   else{
      主角.武器购买 = 1;
      执行人.任务中 = 1;
      执行人.功勋 += 10;
     if(项目 == '朴刀'){
        国家.朴刀 += 数量;
     }
     else if(项目 == '长枪')
     {
        国家.长枪 += 数量;
     }
     else if(项目 == '战马')
     {
        国家.战马 += 数量;
     }
     else if(项目 == '弓弩')
     {
        国家.弓弩 = 国家.弓弩 + 数量;
     }
      国库钱数变动的程序(_loc7_ * -1);
      出圣旨("中央军队增加武装" + 项目 + ":" + 数量 + "。单价：" + _loc6_ + "两，购买经费：" + _loc7_ + "两。");
      大殿体力扣除程序(10);
	  id('数值拉动面板').style.display = 'none';
      id('fengjue').style.display = 'none';
      更新资料(属性栏);
   }
}
function 招募士兵面板(){
   if(主角.招募士兵 == 1){小提示("本季已进行过招募士兵");}
   else{
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "兵部尚书"){
            招募士兵拉动条(_all_rencai[i]);
			break;
         }
         i++;
      }
   }
}
function 招募士兵拉动条(执行人){
  id('数值拉动面板').style.display = 'block';
  id('zhixingren').innerText = "执行人：" + 执行人.名字;
  id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(17);};
  执行数值拉动(2,undefined,执行人);
}
function 解甲归田面板(){
   if(主角.卸甲归田 == 1){小提示("本季已进行过了");}
   else{
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "兵部尚书"){
            解甲归田拉动条(_all_rencai[i]);
			break;
         }
         i++;
      }
   }
}
function 解甲归田拉动条(执行人){
   id('数值拉动面板').style.display = 'block';
   id('zhixingren').innerText = "执行人：" + 执行人.名字;
   id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(18);};
   执行数值拉动(3,undefined,执行人);
}
function 招揽民夫面板(){
   if(主角.招募民夫 == 1){
      小提示("本季已进行过招募民夫");
   }
   else{
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "工部尚书"){招揽民夫拉动条(_all_rencai[i]);}
         i++;
      }
   }
}
function 招揽民夫拉动条(执行人){
   id('数值拉动面板').style.display = 'block';
   id('zhixingren').innerText = "执行人：" + 执行人.名字;
   id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(22);};
   执行数值拉动(1,undefined,执行人);
}
function 解雇民夫面板(){
   if(主角.解雇民夫 == 1){小提示("本季已进行过了");}
   else{
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].官职 == "工部尚书"){解雇民夫拉动条(_all_rencai[i]);}
         i++;
      }
   }
}
function 解雇民夫拉动条(执行人){
   id('数值拉动面板').style.display = 'block';
   id('zhixingren').innerText = "执行人：" + 执行人.名字;
   id('zxrbg').onclick = function(){id('数值拉动面板').style.display = 'none';人才列表显示(23);};
   执行数值拉动(4,undefined,执行人);
}
function 执行数值拉动(参数,城市,执行人){
   id('range').value = 0;
   if(参数 == 1){
      var _loc5_ = 0;
      var _loc4_ = 0;
      var _loc3_ = 0;
      while(_loc3_ < _all_city.length){
         if(_all_city[_loc3_].归属 == 8){
            _loc5_ += Math.round(_all_city[_loc3_].人口 / 10 * 执行人.魅力 / 100);
            _loc4_ += 1;
         }
         _loc3_ = _loc3_ + 1;
      }
      var _loc8_ = Math.floor(_loc5_ * 0.2);
      if(_loc8_ * 4 > 国家.金钱){
         _loc8_ = Math.round(国家.金钱 / 4);
      }
      id('range').max = _loc8_;
      change();
      id('rangeText').innerText = "回禀皇上：\n当前国家共有民夫：" + 国家.民夫 + "名。\n当前可以征召民夫：" + id('range').max + "名。\n执行大臣魅力决定招募数量，清廉决定是否贪污。";
      if(id('range').max < 8000){
         id('rangeText').innerText += "\n各州府壮丁数量很少，恐怕很难招募。";
      }
	  id('rangeText').innerText += "\n\n从各地的壮丁中征召民夫。";
      id('rqueding').onclick = function(){
         if(id('range').value == 0){
            小提示("请拉动红条操作");
         }
         else if(id('range').value > 0){
            var _loc3_ = Number(id('range').value);
            var _loc4_ = "朝廷招揽全国有意从事建设工作的民夫" + _loc3_ + "名，报到者每人赏二两奖金，劳作期每月薪俸二两。";
            国家减少壮丁(_loc3_);
            var _loc5_ = Math.round(_loc3_ * -2 * (2 - 执行人.清廉 / 100));
            国库钱数变动的程序(_loc5_);
            国家.民夫 += _loc3_;
            主角.招募民夫 = 1;
            执行人.任务中 = 1;
            执行人.功勋 += 10;
            出圣旨(_loc4_);
            大殿体力扣除程序(10);
            id('数值拉动面板').style.display = 'none';
            更新资料(属性栏);
         }
      };
   }
   else if(参数 == 2){
      _loc5_ = 0;
      _loc4_ = 0;
      _loc3_ = 0;
      while(_loc3_ < _all_city.length){
         if(_all_city[_loc3_].归属 == 8){
            _loc5_ += Math.round(_all_city[_loc3_].人口 / 10 * 执行人.魅力 / 100);
            _loc4_ += 1;
         }
         _loc3_ = _loc3_ + 1;
      }
      _loc8_ = Math.floor(_loc5_ * 0.5);
      if(_loc8_ * 4 > 国家.金钱){
         _loc8_ = Math.round(国家.金钱 / 4);
      }
      id('range').max = _loc8_;
      change();
      id('rangeText').innerText = "回禀皇上：\n当前国家共有未编士兵：" + 国家.士兵 + "名。\n当前可以征召新兵：" + id('range').max + "名。\n执行大臣魅力决定招募数量，清廉决定是否贪污。";
      if(id('range').max < 8000){
         id('rangeText').innerText += "\n各州府壮丁数量很少，恐怕很难招募。";
      }
      id('rangeText').innerText += "\n\n从各地的壮丁中征召士兵。";
      id('rqueding').onclick = function(){
         if(id('range').value == 0){
            小提示("请拉动红条操作");
         }
         else if(id('range').value > 0){
            var _loc3_ = Number(id('range').value);
            var _loc4_ = "中央招募全国有意从军效国之士兵" + _loc3_ + "名，新兵奖励每人三两，薪俸十两，精兵月俸十五两。";
            国家减少壮丁(_loc3_);
            var _loc5_ = Math.round(_loc3_ * -3 * (2 - 执行人.清廉 / 100));
            国库钱数变动的程序(_loc5_);
            国家.士兵 += _loc3_;
            主角.招募士兵 = 1;
            执行人.任务中 = 1;
            执行人.功勋 += 10;
            出圣旨(_loc4_);
            大殿体力扣除程序(10);
            id('数值拉动面板').style.display = 'none';
            更新资料(属性栏);
         }
      };
   }
   else if(参数 == 3){
      id('range').max = Math.floor(国家.士兵 / 2);
      change();
      id('rangeText').innerText = "回禀皇上：\n当前国家共有士兵：" + 国家.士兵 + "名。\n当前可以进行卸甲归田的士兵：" + id('range').max + "名。\n应维持适量的士兵，以保卫国家。\n执行大臣清廉决定是否贪污。";
      if(id('range').max < 8000){
         id('rangeText').innerText += "\n国家不可无兵，请皇上慎重。";
      }
      id('rangeText').innerText += "\n\n将士兵送回各地归农。";
      id('rqueding').onclick = function(){
         if(id('range').value == 0){
            小提示("请拉动红条操作");
         }
         else if(id('range').value > 0){
            var _loc6_ = Number(id('range').value);
            var _loc7_ = "令兵部尚书解雇士兵" + _loc6_ + "名，每人给三两银子，还乡归民。";
            var _loc8_ = Math.round(_loc6_ * -3 * (2 - 执行人.清廉 / 100));
            国库钱数变动的程序(_loc8_);
            国家.士兵 -= _loc6_;
            主角.卸甲归田 = 1;
            执行人.任务中 = 1;
            执行人.功勋 += 10;
            var _loc5_ = 0;
            var _loc4_ = 0;
            var _loc3_ = 0;
            while(_loc3_ < _all_city.length){
               if(_all_city[_loc3_].归属 == 8){
                  _loc4_ += 1;}
               _loc3_ = _loc3_ + 1;
            }
            _loc5_ = Math.round(_loc6_ / _loc4_);
            _loc3_ = 0;
            while(_loc3_ < _all_city.length){
               if(_all_city[_loc3_].归属 == 8){_all_city[_loc3_].人口 += _loc5_;}
               _loc3_ = _loc3_ + 1;
            }
            出圣旨(_loc7_);
            大殿体力扣除程序(10);
            id('数值拉动面板').style.display = 'none';
            更新资料(属性栏);
         }
      };
   }
   else if(参数 == 4){
      id('range').max = Math.floor(国家.可用民夫 / 2);
      change();
      id('rangeText').innerText = "回禀皇上：\n当前国家共有民夫：" + 国家.民夫 + "名。\n当前可以进行解雇的民夫：" + id('range').max + "名。\n应维持一定数量的民夫，以保证国家建设。\n执行大臣清廉决定是否贪污。";
      if(id('range').max < 10000){
         id('rangeText').innerText += "\n民夫数量已经很少，请皇上慎重。";
      }
      id('rangeText').innerText += "\n\n将民夫送回各地归农。";
      id('rqueding').onclick = function(){
         if(id('range').value == 0){
            小提示("请拉动红条操作");
         }
         else if(id('range').value > 0){
            var _loc6_ = Number(id('range').value);
            var _loc7_ = "令工部尚书解雇民夫" + _loc6_ + "名，每人给二两银子，还乡归民。";
            var _loc8_ = Math.round(_loc6_ * -2 * (2 - 执行人.清廉 / 100));
            国库钱数变动的程序(_loc8_);
            国家.民夫 -= _loc6_;
            国家.可用民夫 -= _loc6_;
            主角.解雇民夫 = 1;
            执行人.任务中 = 1;
            执行人.功勋 += 10;
            var _loc5_ = 0;
            var _loc4_ = 0;
            var _loc3_ = 0;
            while(_loc3_ < _all_city.length){
               if(_all_city[_loc3_].归属 == 8){
                  _loc4_ += 1;}
               _loc3_ = _loc3_ + 1;
            }
            _loc5_ = Math.round(_loc6_ / _loc4_);
            _loc3_ = 0;
            while(_loc3_ < _all_city.length){
               if(_all_city[_loc3_].归属 == 8){_all_city[_loc3_].人口 += _loc5_;}
               _loc3_ = _loc3_ + 1;
            }
            出圣旨(_loc7_);
            大殿体力扣除程序(10);
            id('数值拉动面板').style.display = 'none';
            更新资料(属性栏);
         }
      };
   }
   else if(参数 == 5){
      if(国家.金钱 > 500000){
         id('range').max = 500000;
      }
      else{
         id('range').max = Math.floor(国家.金钱 / 10);
      }
      change();
      id('rangeText').innerText = "回禀皇上：\n当前投入的调查经费" + 国家.调查经费 + "两。\n拨的银子，将持续有效。";
      id('rangeText').innerText += "\n\n官员的数量决定每月需要的调查费用。";
      id('rqueding').onclick = function(){
         if(id('range').value == 0){
            小提示("请拉动红条操作");
         }
         else if(id('range').value > 0){
            var _loc3_ = Number(id('range').value);
            var _loc4_ = "国库拨银" + _loc3_ + "两至刑部，对各地大臣进行检查。";
            国家.调查经费 += _loc3_;
            国库钱数变动的程序(_loc3_ * -1);
            出圣旨(_loc4_);
            大殿体力扣除程序(20);
            id('数值拉动面板').style.display = 'none';
            更新资料(属性栏);
         }
      };
   }
}
function 国家减少壮丁(数量){
   var _loc2_ = [];
   var _loc1_ = 0;
   while(_loc1_ < _all_city.length){
      if(_all_city[_loc1_].归属 == 8){
         _loc2_.push(_all_city[_loc1_]);
      }
      _loc1_ = _loc1_ + 1;
   }
   var _loc3_ = Math.round(数量 / _loc2_.length);
   _loc1_ = 0;
   while(_loc1_ < _loc2_.length){
      if(_loc2_[_loc1_].人口 > _loc3_){
         _loc2_[_loc1_].人口 -= _loc3_;
      }
      _loc1_ = _loc1_ + 1;
   }
}
function 在这里建设行宫(城市, 执行人){
   var 需要花钱 = Math.round(3000000 * (2 - 执行人.清廉 / 100));
   var 需要人力 = Math.round(80000 * (2 - 执行人.政治 / 100));
   id('hukoupucha').style.display = 'block';
   id('huhouTitle').innerText = "建设行宫";
   id('huhouText').innerText = "建设行宫后可以去该地出游。要在" + 城市.名称 + "建设行宫吗？\n执行人：" + 执行人.名字 + "\n（需要银两" + 需要花钱 + "，需要民夫" + 需要人力 + "）。";
   id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
   id('hkan0').onclick = function(){
      if(国家.金钱 < 需要花钱){
         小提示("国库银两不足");
      }
      else if(国家.可用民夫 < 需要人力){
         小提示("民夫数量不足");
      }
      else{
         城市.行宫 = 3;
         执行人.任务中 = 1;
         执行人.功勋 += 10;
         国家.可用民夫 -= 需要人力;
         国家.金钱 -= 需要花钱;
         出圣旨("即刻命" + 执行人.名字 + "前往" + 城市.名称 + "修建行宫。");
         id('hukoupucha').style.display = 'none';
         大殿体力扣除程序(10);
      }
   };
}
function 缉拿贪官(){
	id('hukoupucha').style.display = 'block';
	id('huhouTitle').innerText = '缉拿贪官';
	id('huhouText').innerText = "调查贪污可以将有贪污嫌疑的官员缉拿归案。（目前正在执行任务的官员无法缉拿）\n缉拿大臣后请在处理罪臣选项惩处罪臣。\n确定要缉拿有贪污嫌疑的大臣吗？";
	id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
	id('hkan0').onclick = function(){人才列表显示(21);};
}
function 缉拿贪污官员(人才){
   人才.任务中 = 4;
   人才.罪名 = "贪污";
   出圣旨("即刻将" + 人才.名字 + "以贪污罪缉拿归案。");
   大殿体力扣除程序(30);
   id('hukoupucha').style.display = 'none';
}
function 缉拿反贼(){
   id('hukoupucha').style.display = 'block';
   id('huhouTitle').innerText = '缉拿反贼';
   id('huhouText').innerText = "调查谋反可以将有谋反嫌疑的官员缉拿归案。（目前正在执行任务的官员无法缉拿）\n缉拿大臣后请在处理罪臣选项惩处罪臣。\n确定要缉拿有谋反嫌疑的大臣吗？";
   id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
   id('hkan0').onclick = function(){人才列表显示(20);};
}
function 缉拿谋反官员(人才){
   人才.任务中 = 4;
   人才.罪名 = "谋反";
   出圣旨("即刻将" + 人才.名字 + "以谋反罪缉拿归案。");
   大殿体力扣除程序(30);
   id('hukoupucha').style.display = 'none';
}
治罪 = Array("斩首示众","充军发配","革职抄家","无罪释放");
function 决定处理结果(罪臣){
   id('fengjue').style.display = 'block';
   id('fjan').innerText = '取消';
   id('fjText').innerText = 罪臣.名字 + "因" + 罪臣.罪名 + "嫌疑被缉拿归案。皇上准备如何处置？（处置贪官和反贼可增加其他官员的清廉减少野心，但处置清官和忠臣或姑息贪官和反贼会使官场人心涣散，贪污谋反更甚。）";
   id('fjan').onclick = function (){id('fengjue').style.display = 'none';}
   var i = 0;
   while(i < 6){
   	if(i<4){
   	className('fengjue')[i].innerText = 治罪[i];
   	className('fengjue')[i].style.display = 'block';
   	}
   else{className('fengjue')[i].style.display = 'none';}
   	i++;}
   className('fengjue')[0].onclick = function(){
      出圣旨("罪臣" + 罪臣.名字 + "为官期间犯有" + 罪臣.罪名 + "罪，证据确凿，罪不可赦，当立刻推出菜市口斩首示众。");
      处理结果的影响(1,罪臣);
      删除指定官员的程序(罪臣);
      id('fengjue').style.display = 'none';
      人才列表显示(36);
   };
   className('fengjue')[1].onclick = function(){
      出圣旨("罪臣" + 罪臣.名字 + "为官期间犯有" + 罪臣.罪名 + "罪，证据确凿，罪不可赦，立刻充军发配边疆。");
      处理结果的影响(2,罪臣);
      删除指定官员的程序(罪臣);
      id('fengjue').style.display = 'none';
      人才列表显示(36);
   };
   className('fengjue')[2].onclick = function(){
      出圣旨("罪臣" + 罪臣.名字 + "为官期间犯有" + 罪臣.罪名 + "罪，证据确凿，罪不可赦，当立刻革职抄家。");
      处理结果的影响(3,罪臣);
      删除指定官员的程序(罪臣);
      id('fengjue').style.display = 'none';
      人才列表显示(36);
   };
   className('fengjue')[3].onclick = function(){
      出圣旨("大臣" + 罪臣.名字 + "为官期间曾有" + 罪臣.罪名 + "嫌疑，但经调查，证据不足，予以无罪释放，官复原职。");
      处理结果的影响(4,罪臣);
      罪臣.任务中 = 0;
      id('fengjue').style.display = 'none';
      人才列表显示(36);
   };
}
function 处理结果的影响(参数, 罪臣){
   if(参数 == 1){
      if(罪臣.罪名 == "贪污"){
         if(罪臣.清廉 < 40){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 += 10;
               if(_all_rencai[i].清廉 > 100){_all_rencai[i].清廉 = 100;}
               i++;
            }
            国家.金钱 += 100000;
         }
         else if(罪臣.清廉 >= 40 && 罪臣.清廉 < 60){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 += 5;
               _all_rencai[i].忠诚 -= 1;
               if(_all_rencai[i].清廉 > 100){_all_rencai[i].清廉 = 100;}
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
            国家.金钱 += 50000;
         }
         else if(罪臣.清廉 >= 60 && 罪臣.清廉 < 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 += 2;
               _all_rencai[i].忠诚 -= 5;
               if(_all_rencai[i].清廉 > 100){_all_rencai[i].清廉 = 100;}
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
            国家.金钱 += 10000;
         }
         else if(罪臣.清廉 >= 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].忠诚 -= 15;
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
            国家.金钱 += 1000;
         }
      }
      else if(罪臣.罪名 == "谋反"){
         if(罪臣.野心 < 40){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].忠诚 -= 10;
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
         }
         else if(罪臣.野心 >= 40 && 罪臣.野心 < 60){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 -= 2;
               _all_rencai[i].忠诚 -= 1;
               if(_all_rencai[i].野心 < 0){_all_rencai[i].野心 = 0;}
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
         }
         else if(罪臣.野心 >= 60 && 罪臣.野心 < 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 -= 5;
               if(_all_rencai[i].野心 < 0){_all_rencai[i].野心 = 0;}
               i++;
            }
         }
         else if(罪臣.野心 >= 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 -= 10;
               if(_all_rencai[i].野心 < 0){_all_rencai[i].野心 = 0;}
               i++;
            }
         }
      }
   }
   else if(参数 == 2){
      if(罪臣.罪名 == "贪污"){
         if(罪臣.清廉 < 40){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 += 5;
               if(_all_rencai[i].清廉 > 100){_all_rencai[i].清廉 = 100;}
               i++;
            }
            国家.金钱 += 100000;
         }
         else if(罪臣.清廉 >= 40 && 罪臣.清廉 < 60){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 += 5;
               if(_all_rencai[i].清廉 > 100){_all_rencai[i].清廉 = 100;}
               i++;
            }
            国家.金钱 += 50000;
         }
         else if(罪臣.清廉 >= 60 && 罪臣.清廉 < 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 += 2;
               _all_rencai[i].忠诚 -= 2;
               if(_all_rencai[i].清廉 > 100){_all_rencai[i].清廉 = 100;}
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
            国家.金钱 += 10000;
         }
         else if(罪臣.清廉 >= 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].忠诚 -= 15;
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
            国家.金钱 += 1000;
         }
      }
      else if(罪臣.罪名 == "谋反"){
         if(罪臣.野心 < 40){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].忠诚 -= 8;
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
         }
         else if(罪臣.野心 >= 40 && 罪臣.野心 < 60){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 -= 2;
               _all_rencai[i].忠诚 -= 1;
               if(_all_rencai[i].野心 < 0){_all_rencai[i].野心 = 0;}
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
         }
         else if(罪臣.野心 >= 60 && 罪臣.野心 < 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 -= 2;
               if(_all_rencai[i].野心 < 0){_all_rencai[i].野心 = 0;}
               i++;
            }
         }
         else if(罪臣.野心 >= 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 -= 5;
               if(_all_rencai[i].野心 < 0){_all_rencai[i].野心 = 0;}
               i++;
            }
         }
      }
   }
   else if(参数 == 3){
      if(罪臣.罪名 == "贪污"){
         if(罪臣.清廉 < 40){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 += 3;
               if(_all_rencai[i].清廉 > 100){_all_rencai[i].清廉 = 100;}
               i++;
            }
            国家.金钱 += 100000;
         }
         else if(罪臣.清廉 >= 40 && 罪臣.清廉 < 60){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 += 2;
               if(_all_rencai[i].清廉 > 100){_all_rencai[i].清廉 = 100;}
               i++;
            }
            国家.金钱 += 50000;
         }
         else if(罪臣.清廉 >= 60 && 罪臣.清廉 < 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 += 1;
               if(_all_rencai[i].清廉 > 100){_all_rencai[i].清廉 = 100;}
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
            国家.金钱 += 10000;
         }
         else if(罪臣.清廉 >= 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].忠诚 -= 15;
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
            国家.金钱 += 1000;
         }
      }
      else if(罪臣.罪名 == "谋反"){
         if(罪臣.野心 < 40){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].忠诚 -= 8;
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
         }
         else if(罪臣.野心 >= 40 && 罪臣.野心 < 60){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 -= 1;
               _all_rencai[i].忠诚 -= 1;
               if(_all_rencai[i].野心 < 0){_all_rencai[i].野心 = 0;}
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
         }
         else if(罪臣.野心 >= 60 && 罪臣.野心 < 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 += 1;
               if(_all_rencai[i].野心 > 100){_all_rencai[i].野心 = 100;}
               i++;
            }
         }
         else if(罪臣.野心 >= 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 += 2;
               if(_all_rencai[i].野心 < 0){_all_rencai[i].野心 = 0;}
               i++;
            }
         }
      }
   }
   else if(参数 == 4){
      if(罪臣.罪名 == "贪污"){
         if(罪臣.清廉 < 40){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 -= 3;
               if(_all_rencai[i].清廉 < 1){_all_rencai[i].清廉 = 1;}
               i++;
            }
         }
         else if(罪臣.清廉 >= 40 && 罪臣.清廉 < 60){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 -= 2;
               if(_all_rencai[i].清廉 < 1){_all_rencai[i].清廉 = 1;}
               i++;
            }
         }
         else if(罪臣.清廉 >= 60 && 罪臣.清廉 < 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].清廉 -= 1;
               if(_all_rencai[i].清廉 < 1){_all_rencai[i].清廉 = 1;}
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
         }
         else if(罪臣.清廉 >= 80){
            i = 0;
            while(i < _all_rencai.length){
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
         }
      }
      else if(罪臣.罪名 == "谋反"){
         if(罪臣.野心 < 40){
            i = 0;
            while(i < _all_rencai.length){
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
         }
         else if(罪臣.野心 >= 40 && 罪臣.野心 < 60){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].忠诚 -= 1;
               _all_rencai[i].野心 += 1;
               if(_all_rencai[i].野心 < 0){_all_rencai[i].野心 = 0;}
               if(_all_rencai[i].忠诚 < 1){_all_rencai[i].忠诚 = 1;}
               i++;
            }
         }
         else if(罪臣.野心 >= 60 && 罪臣.野心 < 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 += 3;
               if(_all_rencai[i].野心 > 100){_all_rencai[i].野心 = 100;}
               i++;
            }
         }
         else if(罪臣.野心 >= 80){
            i = 0;
            while(i < _all_rencai.length){
               _all_rencai[i].野心 += 5;
               if(_all_rencai[i].野心 > 100){_all_rencai[i].野心 = 100;}
               i++;
            }
         }
      }
   }
   更新资料(属性栏);
}
function 特殊建筑面板(){
   id('tsjz').style.display = 'block';
   序列 = 0;
   整理特殊建筑(所有特殊建筑,序列);
   id("tsjzqian").onclick = function(){
      if(序列 >= 1){
         序列 -= 1;
         整理特殊建筑(所有特殊建筑,序列);
      }
   };
   id("tsjzhou").onclick = function(){
      if(序列 < 所有特殊建筑.length / 6){
         序列 += 1;
         整理特殊建筑(所有特殊建筑,序列);
      }
   };
}
function 整理特殊建筑(所有特殊建筑,序列){
   var _loc6_ = 0;
   while(_loc6_ < 6){
      var _loc4_ = 所有特殊建筑[序列 * 6 + _loc6_];
      var _loc3_ =  className("jzdk")[_loc6_];
      if(_loc4_ == undefined){
         _loc3_.style.display="none";
      }
      else{
         _loc3_.style.display="block";
		 var x=_loc4_.id*2+2174
		 className("jztu")[_loc6_].src="./images/"+x+".webp";
         className("jzmc")[_loc6_].innerText = _loc4_.名称;
         className("jzsm")[_loc6_].innerText = "作用：" + _loc4_.作用 + "\n费用：" + _loc4_.价格 / 10000 + "万";
         if(_loc4_.建筑程度 >= 2){
            className("jzan")[_loc6_].innerText = "完成";
         }
         else if(_loc4_.建筑程度 == 0){
            className("jzan")[_loc6_].innerText = "修建";
         }
         else{
            className("jzan")[_loc6_].innerText = _loc4_.民夫数量 + "民夫";
         }
         var _loc5_ = Math.floor(_loc4_.完成人次 / _loc4_.需要人次 * 100);
         if(_loc5_ > 100){
            _loc5_ = 100;
         }
         className("jzshux")[_loc6_].innerText =_loc5_ + "%";
         className("jztiao2")[_loc6_].style.width = _loc5_ + "%";
         className("jzan")[_loc6_].取 = _loc4_;
         className("jzan")[_loc6_].onclick = function(){
            if(this.取.建筑程度 >= 2){
               小提示("该建筑已经完成了");
            }
            else{
               特殊建筑民夫函数(this.取);
            }
         };
      }
      _loc6_ = _loc6_ + 1;
   }
}
function 特殊建筑民夫函数(对象){
    id('zhixingren').innerText = "";
	id('zxrbg').onclick = function(){};
	id('数值拉动面板').style.display = 'block';
	id('range').value = 0;
	id('range').max = Math.floor(国家.可用民夫 + 对象.民夫数量);
	change();
	id('rangeText').innerText = "回禀皇上：\n当前国家共有可用民夫：" + Math.round(国家.可用民夫 / 10000) + "万名。\n当前该特殊建筑有：" + 对象.民夫数量 + "名。";
    id('rangeText').innerText += "\n\n需要将多少民夫分配到特殊建筑中";
    id('rqueding').onclick = function(){
        if(id('range').value == 0){小提示("请拉动红条操作");}
        else if(id('range').value > 0){
            var _loc4_ = Number(id('range').value);
            var _loc5_ = "调配" + _loc4_ + "名民夫用于特殊建筑。";
            var _loc3_ = _loc4_ - 对象.民夫数量;
            国家.特殊建筑民夫 += _loc3_;
            国家.可用民夫 -= _loc3_;
            对象.民夫数量 += _loc3_;
            if(对象.建筑程度 == 0){
                国家.金钱 -= 对象.价格;
                对象.建筑程度 += 1;
            }
            出圣旨(_loc5_);
            大殿体力扣除程序(10);
            id('数值拉动面板').style.display = 'none';
            id('zxrbg').style.display = 'block';
            id('zhixingren').style.display = 'block';
            更新资料();特殊建筑面板();
        }
    };
}
function 选择公主远嫁面板(阵营数据){
	var 所有可嫁公主 = [];
	var _loc2_ = 0;
	while(_loc2_ < _all_child.length)
	{
	   if(_all_child[_loc2_].年龄 >= 16 && _all_child[_loc2_].婚 == 0 && _all_child[_loc2_].性别 == 1 && _all_child[_loc2_].状态 == 0)
	   {
	      所有可嫁公主.push(_all_child[_loc2_]);
	   }
	   _loc2_ += 1;
	}
	if(所有可嫁公主.length <= 0){
	   id('waijiaoyilan').style.display = 'none';
	   小提示("现没有成年的公主。");
	}
	else{
    id('sy').style.display = 'block';
	id('syb').style.display = 'none';
	id('syb2').style.display = 'block';
	id('syTitle').innerText = '联姻';
	id('sysm').innerText = "选择出嫁公主";
	id('qxsy').onclick = function(){id('syb').style.display = 'block';
	id('syb2').style.display = 'none';id('sy').style.display = 'none';}
	序列 = 0;
	更新联姻公主信息(所有可嫁公主,序列,阵营数据);
	id('syqian').onclick = function(){
      if(序列 >= 1){
         序列 -= 1;
         更新联姻公主信息(所有可嫁公主,序列,阵营数据);
      }
   };
   id('syhou').onclick = function(){
      if(序列 < 所有可嫁公主.length / 32){
         序列 += 1;
         更新联姻公主信息(所有可嫁公主,序列,阵营数据);
      }
   };
   }
}
function 更新联姻公主信息(所有可嫁公主,序列,阵营数据){
   var _loc1_ = 0;
   while(_loc1_ < 32){
      var _loc2_ = 所有可嫁公主[序列 * 20 + _loc1_];
      var _loc3_ = className('sydb2')[_loc1_];
      if(_loc2_ == undefined){_loc3_.style.display = "none";}
      else{
         _loc3_.style.display = "block";
         _loc3_.innerText = _loc2_.名称;
         _loc3_.取 = _loc2_;
         _loc3_.onclick = function(){
			出现联姻公主的介绍(this.取,阵营数据)
         };
      }
      _loc1_ += 1;
   }
}
function 进入联姻程序(子女,阵营数据){
  id('waijiaoyilan').style.display = 'none';
  id("礼明殿面板").style.display = 'block';
  var i =阵营数据.跳*2 +1488;
  var m =阵营数据.跳*2 +1503;
  id("shizhe1").src = "./images/"+i+".webp";
  id("shizhe0").src = "./images/"+m+".webp";
  id("lmdgb").style.display = 'block';
  id("lmdan1").style.display = 'none';
  id("lmdan0").style.display = 'none';
   if(外交 == 0){
      id("lmddh").innerText = "联姻什么的没必要了。\n来打仗吧。";
      id("lmdgb").onclick = function(){
         遵旨函数("与" + 阵营数据.名称 + "联姻失败。");
         id("礼明殿面板").style.display = 'none';
		 缓动黑幕();
      };
   }
   else if(阵营数据.名称 == "突厥"){
      id("lmddh").innerText = "中原王，\n我们可汗的后宫有来自世界各地的女人，但愿公主能讨可汗欢心。";
      id("lmdgb").onclick = function(){
         成功操办婚事(子女,阵营数据);
         id("lmdgb").onclick = function(){
			 缓动黑幕();
            遵旨函数("与" + 阵营数据.名称 + "关系值略微增加。");
            阵营数据.联姻 += 12;
            阵营数据.友好度 += 100;id("礼明殿面板").style.display = 'none';
            if(阵营数据.友好度 >= 999){
               阵营数据.友好度 = 999;
            }
         };
      };
   }
   else if(阵营数据.名称 == "高丽"){
      id("lmddh").innerText = "天朝陛下，\n我等会隆重操办婚事，将公主安全送往我国的思密达。";
      id("lmdgb").onclick = function(){
         成功操办婚事(子女,阵营数据);
         id("lmdgb").onclick = function(){
			 缓动黑幕();
            遵旨函数("与" + 阵营数据.名称 + "关系值略微增加。");
            阵营数据.联姻 += 60;
            阵营数据.友好度 += 100;id("礼明殿面板").style.display = 'none';
            if(阵营数据.友好度 >= 999){
               阵营数据.友好度 = 999;
            }
            id("礼明殿面板").style.display = 'none';
         };
      };
   }
   else if(子女.年龄 > 25){
      id("lmddh").innerText = "陛下，\n公主年长，路途遥远，恐难以经受长途颠簸之苦。";
      id("lmdgb").onclick = function(){
         遵旨函数("与" + 阵营数据.名称 + "联姻失败。");id("礼明殿面板").style.display = 'none';
      };
   }
   else{
      id("lmddh").innerText = "谢陛下美意，\n公主花容月貌，古灵精怪。必定能让我国"+国王称呼计算(阵营数据.id)+"开心。";
      id("lmdgb").onclick = function(){
         成功操办婚事(子女,阵营数据);
         id("lmdgb").onclick = function(){
			 缓动黑幕();
            遵旨函数("与" + 阵营数据.名称 + "关系值略微增加。");
            阵营数据.联姻 += 60 - 阵营数据.姿态 * 12;
            阵营数据.友好度 += 100;id("礼明殿面板").style.display = 'none';
            if(阵营数据.友好度 >= 999){
               阵营数据.友好度 = 999;
            }
         };
      };
   }
}
function 成功操办婚事(子女,阵营数据){
	_loc2_ = 生成外国男子(_all_nation[阵营数据.id]);
   子女.婚 = 1;
   子女.状态 = 3;
   子女.封号 = "远嫁" + 阵营数据.名称;
   子女.婚配 = _loc2_.名称;
   _loc2_.统帅 = random(40);
   _loc2_.武力 = random(40);
   _loc2_.智力 = random(99);
   _loc2_.政治 = random(99);
   _loc2_.野心 = random(99);
   _loc2_.清廉 = random(99);
   _loc3_ =性格计算(_loc2_);
   _all_family.push({id:_all_family.length,_code:15000,名称:_loc2_.名称,家族:_loc2_.家族,年龄:random(5) + 20,婚配:子女.名称,婚配序号:子女.id,身份:"夫君",儿女:0,文化:阵营数据.id,性格:_loc3_,地位:0,头像:计算外域头像(_loc2_),介绍:_all_nation[阵营数据.id].名称 + "宗室贵族。"});
   var 寿命 = 20 + random(50);
   id('neishiMB').style.display = 'block';
   id('neishi2').style.display = 'none';
   id('neishiBG').style.display = 'none';
   id('neishiTitle').innerText = '联姻';
   id('neishiText').innerText  = "皇上，" + 子女.名称 + "公主远嫁。\n准备要怎么办?\n低调操办：花费10000两\n礼部操办：花费20000两\n";
   id('nsan0').innerText = "低调操办";
   id('nsan1').innerText = "礼部操办";
   id('nsan2').innerText = "皇后操办";
   id('nsan3').innerText = "亲自操办";
   id('nsan0').onclick = function(){
      寿命 -= 5;
      远嫁公主.push({id:子女.id,寿命:寿命});
      国家.金钱 -= 10000;
      更新资料(属性栏);
      id("lmddh").innerText = "那我们带公主准备出发。";
      id('neishiMB').style.display = 'none';
   };
   id('nsan1').onclick = function(){
      远嫁公主.push({id:子女.id,寿命:寿命});
      国家.金钱 -= 20000;
      更新资料(属性栏);
      id("lmddh").innerText = "那我们带公主准备出发。";
      id('neishiMB').style.display = 'none';
   };
   id('nsan2').onclick = function(){
      寿命 += 10;
      远嫁公主.push({id:子女.id,寿命:寿命});
      国家.金钱 -= 50000;
      更新资料(属性栏);
      id("lmddh").innerText = "那我们带公主准备出发。";
      id('neishiMB').style.display = 'none';
   };
   id('nsan3').onclick = function(){
      寿命 += 15;
      远嫁公主.push({id:子女.id,寿命:寿命});
      国家.金钱 -= 100000;
      更新资料(属性栏);
      id("lmddh").innerText = "那我们带公主准备出发。";
      id('neishiMB').style.display = 'none';
   };
}
function 出现联姻公主的介绍(取数据,阵营数据){
    id('介绍图').style.display = 'block';id('介绍图an3').innerText = "关闭";
    出现这个人的头像(id('介绍图头像'),取数据);
    id('介绍图名字').innerText = 取数据.名称;
    id('介绍图an2').innerText = '选定';id('介绍图an2').style.display = 'block';
	id('介绍图an0').style.display = 'none';id('介绍图an1').style.display = 'none';
	id('介绍图an2').onclick = function(){
		id('介绍图').style.display = 'none';
		var _loc3_ = random(10);
		if(取数据._code == 9900){嘉宁公主不愿意联姻远嫁();}
		else if(_loc3_ < 2 && 取数据._code !== 9900){
		    公主不愿意远嫁(取数据,阵营数据);
		}
		else{
		    进入联姻程序(取数据,阵营数据);
		    id('syb').style.display = 'block';
		    id('syb2').style.display = 'none';id('sy').style.display = 'none';
		   }
		}
   id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';id('介绍图an0').style.display = 'none';id('介绍图an1').style.display = 'none';}
      id('介绍图介绍').innerText = "封号：" + 取数据.封号;
   id('介绍图介绍').innerText += ("\n年龄：" + 取数据.年龄);
   if(取数据.年龄 >= 3){
      id('介绍图介绍').innerText += ("\n性格：" + 性情啊[取数据.性情]);
   }
   id('介绍图介绍').innerText += ("\n母亲：" + 取数据.母亲);
   id('介绍图介绍').innerText += ("\n文化圈：" + _all_nation[取数据.文化].名称);
   id('介绍图介绍').innerText += "\n\n统/武/智/政/魅";
   id('介绍图介绍').innerText += ("\n" + Math.round(取数据.统帅) + "/" + Math.round(取数据.武力) + "/" + Math.round(取数据.智力) + "/" + Math.round(取数据.政治) + "/" + Math.round(取数据.魅力));
}