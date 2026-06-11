function checkStorageSupport(){
 // sessionStorage
 if (window.sessionStorage) {
  return true;
 } else {
  return false;
 }
 // localStorage
 if (window.localStorage) {
  return true;
 } else {
  return false;
 }
}
function onStorageChange(e){
  console.log(e._loc44_);
}
function 存档放入(){
   console.log("存档放入");
   var _loc2_ = ["h5v0.9.00",主角,国家,远嫁公主,太监报告所有事件,这么多年所有大事,敬事房的存档,后宫位分,后宫记事的存档];
   var _loc3_ = [];
   var _loc4_ = 0;
   while(_loc4_ < _all_child.length)
   {
      var _loc5_ = _all_child[_loc4_];
      _loc3_.push([_loc5_.id,_loc5_._code,_loc5_.序号,_loc5_.名称,_loc5_.性别,_loc5_.母亲,_loc5_.生母,_loc5_.统帅,_loc5_.武力,_loc5_.智力,_loc5_.政治,_loc5_.魅力,_loc5_.清廉,_loc5_.野心,_loc5_.幼年,_loc5_.头像,_loc5_.文化,_loc5_.年龄,_loc5_.婚,_loc5_.婚配,_loc5_.病,_loc5_.保,_loc5_.状态,_loc5_.关系,_loc5_.文质,_loc5_.武质,_loc5_.魅质,_loc5_.后宫势力,_loc5_.朝廷势力,_loc5_.功勋,_loc5_.被过继过,_loc5_.封号,_loc5_.性情,_loc5_._sheng,_loc5_.儿女,_loc5_.课程,_loc5_.党,_loc5_.封地,_loc5_.谥号,_loc5_.寿命,_loc5_.心,_loc5_.召见]);
      _loc4_ += 1;
   }
   var _loc6_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_doctor.length)
   {
      _loc6_.push([_all_doctor[_loc4_].宫,_all_doctor[_loc4_].开启,_all_doctor[_loc4_].任务中]);
      _loc4_ += 1;
   }
   var _loc7_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_nation.length)
   {
      _loc7_.push([_all_nation[_loc4_].联姻,_all_nation[_loc4_].外交,_all_nation[_loc4_].友好度,_all_nation[_loc4_].贸易额,_all_nation[_loc4_].贸易年数,_all_nation[_loc4_].战力,_all_nation[_loc4_].人质,_all_nation[_loc4_].都城,_all_nation[_loc4_].皇帝]);
      _loc4_ += 1;
   }
   var _loc8_ = [];
   _loc4_ = 0;
   while(_loc4_ < 所有历史名人.length)
   {
      _loc8_.push(所有历史名人[_loc4_].用过);
      _loc4_ += 1;
   }
   var _loc9_ = [];
   _loc4_ = 0;
   while(_loc4_ < 后宫名人.length)
   {
      _loc9_.push(后宫名人[_loc4_].用过);
      _loc4_ += 1;
   }
   var _loc10_ = [];
   _loc4_ = 0;
   while(_loc4_ < 丫环名人.length)
   {
      _loc10_.push(丫环名人[_loc4_].用过);
      _loc4_ += 1;
   }
   var _loc11_ = [];
   _loc4_ = 0;
   while(_loc4_ < 所有药材.length)
   {
      _loc11_.push(所有药材[_loc4_].数量);
      _loc4_ += 1;
   }
   var _loc12_ = [];
   _loc4_ = 0;
   while(_loc4_ < 所有物品.length)
   {
      _loc12_.push(所有物品[_loc4_].数量);
      _loc4_ += 1;
   }
   var _loc13_ = [];
   _loc4_ = 0;
   while(_loc4_ < 我的成药.length)
   {
      _loc13_.push(我的成药[_loc4_].数量);
      _loc4_ += 1;
   }
   var _loc14_ = [];
   var _loc15_ = [];
   _loc4_ = 0;
   while(_loc4_ < 所有戏子.length)
   {
      _loc14_.push(所有戏子[_loc4_].见面);
      _loc15_.push(所有戏子[_loc4_].伶官);
      _loc4_ += 1;
   }
   var _loc16_ = [];
   _loc4_ = 0;
   while(_loc4_ < 所有隐士.length)
   {
      _loc16_.push(所有隐士[_loc4_].录用);
      _loc4_ += 1;
   }
   var _loc17_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_mingji.length)
   {
      _loc17_.push(_all_mingji[_loc4_].标);
      _loc4_ += 1;
   }
   var _loc18_ = [];
   var _loc19_ = [];
   var _loc45_ = [];
   var _loc46_ = [];
   _loc4_ = 0;
   while(_loc4_ < 所有敌将.length)
   {
      _loc18_.push(所有敌将[_loc4_].被关押);
      _loc19_.push(所有敌将[_loc4_].抗拒);
	  _loc45_.push(所有敌将[_loc4_].地位);
	  _loc46_.push(所有敌将[_loc4_].用过);
      _loc4_ += 1;
   }
   var _loc47_ = [];
   var _loc48_ = [];
   _loc4_ = 0;
   while(_loc4_ < 外域美人.length)
   {
   	  _loc47_.push(外域美人[_loc4_].地位);
   	  _loc48_.push(外域美人[_loc4_].用过);
      _loc4_ += 1;
   }
   var _loc20_ = [];
   var _loc21_ = [];
   var _loc22_ = [];
   _loc4_ = 0;
   while(_loc4_ < 所有技术.length)
   {
      _loc20_.push(所有技术[_loc4_].周期);
      _loc21_.push(所有技术[_loc4_].研发中);
      _loc22_.push(所有技术[_loc4_].开启);
      _loc4_ += 1;
   }
   var _loc23_ = [];
   _loc4_ = 0;
   while(_loc4_ < 剧情汇总.length)
   {
      _loc23_.push(剧情汇总[_loc4_].达成);
      _loc4_ += 1;
   }
   var _loc24_ = [];
   var _loc25_ = [];
   var _loc26_ = [];
   _loc4_ = 0;
   while(_loc4_ < 所有特殊建筑.length)
   {
      _loc24_.push(所有特殊建筑[_loc4_].完成人次);
      _loc25_.push(所有特殊建筑[_loc4_].民夫数量);
      _loc26_.push(所有特殊建筑[_loc4_].建筑程度);
      _loc4_ += 1;
   }
   var _loc27_ = [];
   _loc4_ = 0;
   while(_loc4_ < 血滴子.length)
   {
      _loc27_.push([血滴子[_loc4_].id,血滴子[_loc4_]._code,血滴子[_loc4_].名称,血滴子[_loc4_].暗杀能力,血滴子[_loc4_].破坏能力,血滴子[_loc4_].调查能力,血滴子[_loc4_].逃生能力,血滴子[_loc4_].经验,血滴子[_loc4_].任务中,血滴子[_loc4_].疗伤中,血滴子[_loc4_].任务类型,血滴子[_loc4_].目标,血滴子[_loc4_].结果,血滴子[_loc4_].头像]);
      _loc4_ += 1;
   }
   var _loc28_ = [年,季,旬,月];
   var _loc29_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_city.length)
   {
      var _loc30_ = _all_city[_loc4_];
      _loc29_.push([_loc30_.人口,_loc30_.士兵,_loc30_.工资,_loc30_.等级,_loc30_.治安,_loc30_.民心,_loc30_.行宫,_loc30_.金钱,_loc30_.粮食,_loc30_.布匹,_loc30_.瓷器,_loc30_.矿石,_loc30_.珠宝,_loc30_.牲畜,_loc30_.民间金钱,_loc30_.民间粮食,_loc30_.民间布匹,_loc30_.民间瓷器,_loc30_.民间矿石,_loc30_.民间珠宝,_loc30_.民间牲畜,_loc30_.种植业,_loc30_.丝织业,_loc30_.陶瓷业,_loc30_.采矿业,_loc30_.珠宝业,_loc30_.畜牧业,_loc30_.种植业上限,_loc30_.丝织业上限,_loc30_.陶瓷业上限,_loc30_.采矿业上限,_loc30_.珠宝业上限,_loc30_.畜牧业上限,_loc30_.委任者,_loc30_.妃子开关,_loc30_.敌将开关,_loc30_.刺客开关,_loc30_.民间美女开关,_loc30_.地方委任,_loc30_.归属,_loc30_.士兵上限]);
      _loc4_ += 1;
   }
   var _loc31_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_grandchild.length)
   {
      _loc31_.push([_all_grandchild[_loc4_].id,_all_grandchild[_loc4_].名称,_all_grandchild[_loc4_].性别,_all_grandchild[_loc4_].母亲,_all_grandchild[_loc4_].父亲,_all_grandchild[_loc4_].年龄,_all_grandchild[_loc4_].脉系]);
      _loc4_ += 1;
   }
   var _loc32_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_family.length)
   {
      _loc32_.push([_all_family[_loc4_].id,_all_family[_loc4_].名称,_all_family[_loc4_].年龄,_all_family[_loc4_].婚配,_all_family[_loc4_].身份,_all_family[_loc4_].儿女,_all_family[_loc4_].婚配序号,_all_family[_loc4_].孕,_all_family[_loc4_].家族,_all_family[_loc4_].性格,_all_family[_loc4_].爱,_all_family[_loc4_].出身,_all_family[_loc4_].脉系,_all_family[_loc4_].头像,_all_family[_loc4_]._code,_all_family[_loc4_].介绍,_all_family[_loc4_].文化,_all_family[_loc4_].幼年]);
      _loc4_ += 1;
   }
   var _loc33_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_palace.length)
   {
      _loc33_.push([_all_palace[_loc4_].名称,_all_palace[_loc4_].等级,_all_palace[_loc4_].次数,_all_palace[_loc4_].内殿]);
      _loc4_ += 1;
   }
   var _loc34_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_taijian.length)
   {
      _loc34_.push([_all_taijian[_loc4_].id,_all_taijian[_loc4_].名称,_all_taijian[_loc4_].主子,_all_taijian[_loc4_].职务,_all_taijian[_loc4_].能力,_all_taijian[_loc4_].俸禄]);
      _loc4_ += 1;
   }
   var _loc35_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_gongnv.length)
   {
      _loc35_.push([_all_gongnv[_loc4_].id,_all_gongnv[_loc4_].名称,_all_gongnv[_loc4_].主子,_all_gongnv[_loc4_].职务,_all_gongnv[_loc4_].能力,_all_gongnv[_loc4_].俸禄,_all_gongnv[_loc4_]._code,_all_gongnv[_loc4_].头像]);
      _loc4_ += 1;
   }
   var _loc36_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_rencai.length)
   {
      var _loc37_ = _all_rencai[_loc4_];
      _loc36_.push([_loc37_.id,_loc37_._code,_loc37_.名字,_loc37_.家族,_loc37_.性别,_loc37_.经验,_loc37_.党,_loc37_.统帅,_loc37_.武力,_loc37_.智力,_loc37_.政治,_loc37_.魅力,_loc37_.清廉,_loc37_.野心,_loc37_.忠诚,_loc37_.头像,_loc37_.文化,_loc37_.年龄,_loc37_.功勋,_loc37_.地位,_loc37_.品阶,_loc37_.带兵上限,_loc37_.爵位,_loc37_.任务中,_loc37_.委任城市,_loc37_.后宫相性,_loc37_.后宫势力,_loc37_.朝廷相性,_loc37_.朝廷势力,_loc37_.皇嗣相性,_loc37_.爱好,_loc37_.关系,_loc37_.结婚,_loc37_.罪名,_loc37_.官职,_loc37_.性格,_loc37_.介绍]);
      _loc4_ += 1;
   }
   var _loc38_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_army.length)
   {
      _loc38_.push([_all_army[_loc4_].id,_all_army[_loc4_].队名,_all_army[_loc4_].将军,_all_army[_loc4_].兵种,_all_army[_loc4_].兵力,_all_army[_loc4_].兵力上限,_all_army[_loc4_].训练度,_all_army[_loc4_].出战中,_all_army[_loc4_].单兵战力,_all_army[_loc4_].斩杀,_all_army[_loc4_].损失]);
      _loc4_ += 1;
   }
   var _loc39_ = [];
   _loc4_ = 0;
   while(_loc4_ < _all_feizi.length)
   {
      _loc5_ = _all_feizi[_loc4_];
      _loc39_.push([_loc5_.id,_loc5_._code,_loc5_.地位,_loc5_.位分,_loc5_.封号,_loc5_.宫殿,_loc5_.寝殿,_loc5_.名字,_loc5_.家族,_loc5_.党,_loc5_.性别,_loc5_.经验,_loc5_.统帅,_loc5_.武力,_loc5_.智力,_loc5_.政治,_loc5_.魅力,_loc5_.清廉,_loc5_.野心,_loc5_.头像,_loc5_.文化,_loc5_.年龄,_loc5_.喜好,_loc5_.状态,_loc5_.性格,_loc5_.爱,_loc5_.孕,_loc5_.病,_loc5_.仙,_loc5_.生育,_loc5_.任性,_loc5_.护,_loc5_.后宫相性,_loc5_.后宫势力,_loc5_.朝廷相性,_loc5_.朝廷势力,_loc5_.皇嗣相性,_loc5_.介绍,_loc5_.性情,_loc5_.出身,_loc5_.称呼]);
      _loc4_ += 1;
   }
   var _loc40_ = [属性.年龄,属性.健康,属性.状态,属性.体力,属性.体力上限,属性.快乐,属性.威望,属性.统帅,属性.武力,属性.智力,属性.政治,属性.魅力,属性.暴戾,属性.道德,属性.才艺,属性.寿命];
   var _loc41_ = 主角.姓氏 + 主角.名字 + " " + 主角.年号 + " " + 年 + "年" + 月 + "月";
   var _loc42_ = new Object();
   _loc42_.列表 = _loc2_;
   _loc42_.标题 = _loc41_;
   _loc4_ = 0;
   while(_loc4_ < _loc2_.length)
   {
      _loc42_[_loc2_[_loc4_]] = _loc2_[_loc4_];
      _loc4_ += 1;
   }
   _loc42_._aa = _loc3_;
   _loc42_._bb = _loc6_;
   _loc42_._cc = _loc17_;
   _loc42_._aaa = _loc7_;
   _loc42_._bbb = _loc8_;
   _loc42_._ccc = _loc9_;
   _loc42_._ddd = _loc10_;
   _loc42_._eee = _loc11_;
   _loc42_._fff = _loc12_;
   _loc42_._ggg = _loc13_;
   _loc42_._hhh0 = _loc14_;
   _loc42_._hhh1 = _loc15_;
   _loc42_._iii = _loc16_;
   _loc42_._jjj0 = _loc18_;
   _loc42_._jjj1 = _loc19_;
   _loc42_._jjj2 = _loc45_;
   _loc42_._jjj3 = _loc46_;
   _loc42_._kkk0 = _loc20_;
   _loc42_._kkk1 = _loc21_;
   _loc42_._kkk2 = _loc22_;
   _loc42_._lll = _loc23_;
   _loc42_._mmm0 = _loc24_;
   _loc42_._mmm1 = _loc25_;
   _loc42_._mmm2 = _loc26_;
   _loc42_._nnn = _loc27_;
   console.log("血滴子" + _loc42_._nnn.length);
   _loc42_._ooo = _loc28_;
   _loc42_._ppp = _loc29_;
   _loc42_._qqq = _loc31_;
   console.log("皇孙" + _loc42_._qqq.length);
   _loc42_._rrr = _loc32_;
   console.log("家眷" + _loc42_._rrr.length);
   _loc42_._sss = _loc33_;
   _loc42_._ttt = _loc34_;
   console.log("太监" + _loc42_._ttt.length);
   _loc42_._uuu = _loc35_;
   console.log("宫女" + _loc42_._uuu.length);
   _loc42_._vvv = _loc36_;
   console.log("大臣" + _loc42_._vvv.length);
   _loc42_._xxx = _loc38_;
   console.log("军队" + _loc42_._xxx.length);
   _loc42_._yyy = _loc39_;
   console.log("妃子" + _loc42_._yyy.length);
   _loc42_._zzz = _loc40_;
   _loc42_._www0 = _loc47_;
   _loc42_._www1 = _loc48_;
   try
   {
      var _loc43_ = JSON.stringify(_loc42_);
   }
   catch(ex)
   {
   }
   data = JSON.stringify(_loc42_); //将JSON转为字符串存到变量里
   _loc44_ = localStorage.setItem("存档",data);
   等待存档的进度("本游戏存档较大，请等待一下。",140);
}
function 存档成功a(eee){
   if(eee)
   {
      等待存档的进度("本游存档较大，请等待一会。",100);
   }
}
function 等待存档的进度(文本, 时间){
	小提示(文本);
}
function 读档(参数){
	var _loc2_ = localStorage.getItem("存档");
	_loc2_ = JSON.parse(_loc2_); //转为JSON
	存档版本号 = _loc2_.列表[0];
	console.log("存档版本号" + _loc2_.列表[0]);
	if(存档版本号 !== "江山社稷v26.0.0"){
	    小提示("报告大王：存档已被浏览器或其他软件清除了！（哭）");
	}
	else{
		if(参数 == 0){id('tjShBG').style.display = 'none';id('hgdt').style.display = 'block';生成世界地图();}
	    执行覆盖档案的动作(_loc2_);
	}
}
function 执行覆盖档案的动作(Data){
   var _loc3_ = Data.列表;
   var _loc4_ = 0;
   主角 = Data.列表[1];
   国家 = Data.列表[2];
   远嫁公主 = Data.列表[3];
   if(Data.列表[3] == null){远嫁公主 = [];}
   太监报告所有事件 = Data.列表[4];
   这么多年所有大事 = Data.列表[5];
   敬事房的存档 = Data.列表[6];
   后宫位分 = Data.列表[7];
   后宫记事的存档 = Data.列表[8];
   if(Data.列表[6] == null){敬事房的存档 = [];}
   if(Data.列表[8] == null){后宫记事的存档 = [];}
   _all_child = [];
   _loc4_ = 0;
   while(_loc4_ < Data._aa.length){
	    var i =0;
	    while(i<=41){
		    if(Data._aa[_loc4_][i] == null){
			    Data._aa[_loc4_][i] = undefined;
			}
		    i++;
	    }
      var _loc5_ = {};
      _loc5_.id = Data._aa[_loc4_][0];
      _loc5_._code = Data._aa[_loc4_][1];
      _loc5_.序号 = Data._aa[_loc4_][2];
      _loc5_.名称 = Data._aa[_loc4_][3];
      _loc5_.性别 = Data._aa[_loc4_][4];
      _loc5_.母亲 = Data._aa[_loc4_][5];
      _loc5_.生母 = Data._aa[_loc4_][6];
      _loc5_.统帅 = Data._aa[_loc4_][7];
      _loc5_.武力 = Data._aa[_loc4_][8];
      _loc5_.智力 = Data._aa[_loc4_][9];
      _loc5_.政治 = Data._aa[_loc4_][10];
      _loc5_.魅力 = Data._aa[_loc4_][11];
      _loc5_.清廉 = Data._aa[_loc4_][12];
      _loc5_.野心 = Data._aa[_loc4_][13];
      _loc5_.幼年 = Data._aa[_loc4_][14];
      _loc5_.头像 = Data._aa[_loc4_][15];
      _loc5_.文化 = Data._aa[_loc4_][16];
      _loc5_.年龄 = Data._aa[_loc4_][17];
      _loc5_.婚 = Data._aa[_loc4_][18];
      _loc5_.婚配 = Data._aa[_loc4_][19];
      _loc5_.病 = Data._aa[_loc4_][20];
      _loc5_.保 = Data._aa[_loc4_][21];
      _loc5_.状态 = Data._aa[_loc4_][22];
      _loc5_.关系 = Data._aa[_loc4_][23];
      _loc5_.文质 = Data._aa[_loc4_][24];
      _loc5_.武质 = Data._aa[_loc4_][25];
      _loc5_.魅质 = Data._aa[_loc4_][26];
      _loc5_.后宫势力 = Data._aa[_loc4_][27];
      _loc5_.朝廷势力 = Data._aa[_loc4_][28];
      _loc5_.功勋 = Data._aa[_loc4_][29];
      _loc5_.被过继过 = Data._aa[_loc4_][30];
      _loc5_.封号 = Data._aa[_loc4_][31];
      _loc5_.性情 = Data._aa[_loc4_][32];
      _loc5_._sheng = Data._aa[_loc4_][33];
      _loc5_.儿女 = Data._aa[_loc4_][34];
      _loc5_.课程 = Data._aa[_loc4_][35];
      _loc5_.党 = Data._aa[_loc4_][36];
      _loc5_.封地 = Data._aa[_loc4_][37];
      _loc5_.谥号 = Data._aa[_loc4_][38];
      _loc5_.寿命 = Data._aa[_loc4_][39];
      _loc5_.心 = Data._aa[_loc4_][40];
	  _loc5_.召见 = Data._aa[_loc4_][41];
      _all_child.push(_loc5_);
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < _all_doctor.length)
   {
	   if(Data._bb[_loc4_][0] == null){_all_doctor[_loc4_].宫 = undefined}
	   else{_all_doctor[_loc4_].宫 = Data._bb[_loc4_][0];}
      _all_doctor[_loc4_].开启 = Data._bb[_loc4_][1];
      _all_doctor[_loc4_].任务中 = Data._bb[_loc4_][2];
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < _all_nation.length)
   {
	   var i =0;
	   while(i<=8){
	       if(Data._aaa[_loc4_][i] == null){
	   	    Data._aaa[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      _all_nation[_loc4_].联姻 = Data._aaa[_loc4_][0];
      _all_nation[_loc4_].外交 = Data._aaa[_loc4_][1];
      _all_nation[_loc4_].友好度 = Data._aaa[_loc4_][2];
      _all_nation[_loc4_].贸易额 = Data._aaa[_loc4_][3];
      _all_nation[_loc4_].贸易年数 = Data._aaa[_loc4_][4];
      _all_nation[_loc4_].战力 = Data._aaa[_loc4_][5];
      _all_nation[_loc4_].人质 = Data._aaa[_loc4_][6];
      _all_nation[_loc4_].都城 = Data._aaa[_loc4_][7];
	  _all_nation[_loc4_].皇帝 = Data._aaa[_loc4_][8];
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 所有历史名人.length){
	   if(Data._bbb[_loc4_] == 1){所有历史名人[_loc4_].用过 =1;}else{所有历史名人[_loc4_].用过 =undefined;}
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 后宫名人.length){
	   if(Data._ccc[_loc4_] == 1){后宫名人[_loc4_].用过 =1;}else{后宫名人[_loc4_].用过 =undefined;}
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 丫环名人.length){
	   if(Data._ddd[_loc4_] == 1){丫环名人[_loc4_].用过 =1;}else{丫环名人[_loc4_].用过 =undefined;}
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 所有药材.length){
      所有药材[_loc4_].数量 = Data._eee[_loc4_];
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 所有物品.length){
      所有物品[_loc4_].数量 = Data._fff[_loc4_];
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 我的成药.length){
      我的成药[_loc4_].数量 = Data._ggg[_loc4_];
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 所有戏子.length){
      所有戏子[_loc4_].见面 = Data._hhh0[_loc4_];
      所有戏子[_loc4_].伶官 = Data._hhh1[_loc4_];
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 所有隐士.length){
      所有隐士[_loc4_].录用 = Data._iii[_loc4_];
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < _all_mingji.length){
      _all_mingji[_loc4_].标 = Data._cc[_loc4_];
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 所有敌将.length){
      所有敌将[_loc4_].被关押 = Data._jjj0[_loc4_];
      所有敌将[_loc4_].抗拒 = Data._jjj1[_loc4_];
	  if(Data._jjj2[_loc4_]==null){
		所有敌将[_loc4_].地位 = undefined;
	  }else{所有敌将[_loc4_].用过 = Data._jjj3[_loc4_];}
	  if(Data._jjj3[_loc4_]==null){
	  	所有敌将[_loc4_].用过 = undefined;
	  }else{所有敌将[_loc4_].用过 = Data._jjj3[_loc4_];}
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 外域美人.length){
   	  if(Data._www0[_loc4_]==null){
   		外域美人[_loc4_].地位 = undefined;
   	  }else{外域美人[_loc4_].用过 = Data._www0[_loc4_];}
   	  if(Data._www1[_loc4_]==null){
   	  	外域美人[_loc4_].用过 = undefined;
   	  }else{外域美人[_loc4_].用过 = Data._www1[_loc4_];}
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 所有技术.length){
      所有技术[_loc4_].周期 = Data._kkk0[_loc4_];
      所有技术[_loc4_].研发中 = Data._kkk1[_loc4_];
      所有技术[_loc4_].开启 = Data._kkk2[_loc4_];
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 剧情汇总.length){
      剧情汇总[_loc4_].达成 = Data._lll[_loc4_];
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < 所有特殊建筑.length){
      所有特殊建筑[_loc4_].完成人次 = Data._mmm0[_loc4_];
      所有特殊建筑[_loc4_].民夫数量 = Data._mmm1[_loc4_];
      所有特殊建筑[_loc4_].建筑程度 = Data._mmm2[_loc4_];
      _loc4_ += 1;
   }
   血滴子 = [];
   _loc4_ = 0;
   while(_loc4_ < Data._nnn.length){
	   var i =0;
	   while(i<=13){
	       if(Data._nnn[_loc4_][i] == null){
	   	    Data._nnn[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      _loc5_ = {};
      _loc5_.id = Data._nnn[_loc4_][0];
      _loc5_._code = Data._nnn[_loc4_][1];
      _loc5_.名称 = Data._nnn[_loc4_][2];
      _loc5_.暗杀能力 = Data._nnn[_loc4_][3];
      _loc5_.破坏能力 = Data._nnn[_loc4_][4];
      _loc5_.调查能力 = Data._nnn[_loc4_][5];
      _loc5_.逃生能力 = Data._nnn[_loc4_][6];
      _loc5_.经验 = Data._nnn[_loc4_][7];
      _loc5_.任务中 = Data._nnn[_loc4_][8];
      _loc5_.疗伤中 = Data._nnn[_loc4_][9];
      _loc5_.任务类型 = Data._nnn[_loc4_][10];
      _loc5_.目标 = Data._nnn[_loc4_][11];
      _loc5_.结果 = Data._nnn[_loc4_][12];
      _loc5_.头像 = Data._nnn[_loc4_][13];
      血滴子.push(_loc5_);
      _loc4_ += 1;
   }
   年 = Data._ooo[0];
   季 = Data._ooo[1];
   旬 = Data._ooo[2];
   月 = Data._ooo[3];
   _loc4_ = 0;
   while(_loc4_ < _all_city.length){
	   var i =0;
	   while(i<=40){
	       if(Data._ppp[_loc4_][i] == null){
	   	    Data._ppp[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      var _loc6_ = _all_city[_loc4_];
      _loc6_.人口 = Data._ppp[_loc4_][0];
      _loc6_.士兵 = Data._ppp[_loc4_][1];
      _loc6_.工资 = Data._ppp[_loc4_][2];
      _loc6_.等级 = Data._ppp[_loc4_][3];
      _loc6_.治安 = Data._ppp[_loc4_][4];
      _loc6_.民心 = Data._ppp[_loc4_][5];
      _loc6_.行宫 = Data._ppp[_loc4_][6];
      _loc6_.金钱 = Data._ppp[_loc4_][7];
      _loc6_.粮食 = Data._ppp[_loc4_][8];
      _loc6_.布匹 = Data._ppp[_loc4_][9];
      _loc6_.瓷器 = Data._ppp[_loc4_][10];
      _loc6_.矿石 = Data._ppp[_loc4_][11];
      _loc6_.珠宝 = Data._ppp[_loc4_][12];
      _loc6_.牲畜 = Data._ppp[_loc4_][13];
      _loc6_.民间金钱 = Data._ppp[_loc4_][14];
      _loc6_.民间粮食 = Data._ppp[_loc4_][15];
      _loc6_.民间布匹 = Data._ppp[_loc4_][16];
      _loc6_.民间瓷器 = Data._ppp[_loc4_][17];
      _loc6_.民间矿石 = Data._ppp[_loc4_][18];
      _loc6_.民间珠宝 = Data._ppp[_loc4_][19];
      _loc6_.民间牲畜 = Data._ppp[_loc4_][20];
      _loc6_.种植业 = Data._ppp[_loc4_][21];
      _loc6_.丝织业 = Data._ppp[_loc4_][22];
      _loc6_.陶瓷业 = Data._ppp[_loc4_][23];
      _loc6_.采矿业 = Data._ppp[_loc4_][24];
      _loc6_.珠宝业 = Data._ppp[_loc4_][25];
      _loc6_.畜牧业 = Data._ppp[_loc4_][26];
      _loc6_.种植业上限 = Data._ppp[_loc4_][27];
      _loc6_.丝织业上限 = Data._ppp[_loc4_][28];
      _loc6_.陶瓷业上限 = Data._ppp[_loc4_][29];
      _loc6_.采矿业上限 = Data._ppp[_loc4_][30];
      _loc6_.珠宝业上限 = Data._ppp[_loc4_][31];
      _loc6_.畜牧业上限 = Data._ppp[_loc4_][32];
      _loc6_.委任者 = Data._ppp[_loc4_][33];
      _loc6_.妃子开关 = Data._ppp[_loc4_][34];
      _loc6_.敌将开关 = Data._ppp[_loc4_][35];
      _loc6_.刺客开关 = Data._ppp[_loc4_][36];
      _loc6_.民间美女开关 = Data._ppp[_loc4_][37];
      _loc6_.地方委任 = Data._ppp[_loc4_][38];
      _loc6_.归属 = Data._ppp[_loc4_][39];
      _loc6_.士兵上限 = Data._ppp[_loc4_][40];
      _loc4_ += 1;
   }
   _all_grandchild = [];
   _loc4_ = 0;
   while(_loc4_ < Data._qqq.length){
	   var i =0;
	   while(i<=6){
	       if(Data._qqq[_loc4_][i] == null){
	   	    Data._qqq[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      _loc5_ = {};
      _loc5_.id = Data._qqq[_loc4_][0];
      _loc5_.名称 = Data._qqq[_loc4_][1];
      _loc5_.性别 = Data._qqq[_loc4_][2];
      _loc5_.母亲 = Data._qqq[_loc4_][3];
      _loc5_.父亲 = Data._qqq[_loc4_][4];
      _loc5_.年龄 = Data._qqq[_loc4_][5];
      _loc5_.脉系 = Data._qqq[_loc4_][6];
      _all_grandchild.push(_loc5_);
      _loc4_ += 1;
   }
   _all_family = [];
   _loc4_ = 0;
   while(_loc4_ < Data._rrr.length){
	   var i =0;
	   while(i<=17){
	       if(Data._rrr[_loc4_][i] == null){
	   	    Data._rrr[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      _loc5_ = {};
      _loc5_.id = Data._rrr[_loc4_][0];
      _loc5_.名称 = Data._rrr[_loc4_][1];
      _loc5_.年龄 = Data._rrr[_loc4_][2];
      _loc5_.婚配 = Data._rrr[_loc4_][3];
      _loc5_.身份 = Data._rrr[_loc4_][4];
      _loc5_.儿女 = Data._rrr[_loc4_][5];
      _loc5_.婚配序号 = Data._rrr[_loc4_][6];
      _loc5_.孕 = Data._rrr[_loc4_][7];
      _loc5_.家族 = Data._rrr[_loc4_][8];
      _loc5_.性格 = Data._rrr[_loc4_][9];
      _loc5_.爱 = Data._rrr[_loc4_][10];
      _loc5_.出身 = Data._rrr[_loc4_][11];
	  _loc5_.脉系 = Data._rrr[_loc4_][12];
	  _loc5_.头像 = Data._rrr[_loc4_][13];
	  _loc5_._code = Data._rrr[_loc4_][14];
	  _loc5_.介绍 = Data._rrr[_loc4_][15];
	  _loc5_.文化 = Data._rrr[_loc4_][16];
	  _loc5_.幼年 = Data._rrr[_loc4_][17];
      _all_family.push(_loc5_);
      _loc4_ += 1;
   }
   _loc4_ = 0;
   while(_loc4_ < _all_palace.length){
	   var i =0;
	   while(i<=3){
	       if(Data._sss[_loc4_][i] == null){
	   	    Data._sss[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      _all_palace[_loc4_].名称 = Data._sss[_loc4_][0];
      _all_palace[_loc4_].等级 = Data._sss[_loc4_][1];
      _all_palace[_loc4_].次数 = Data._sss[_loc4_][2];
	  _all_palace[_loc4_].内殿 = Data._sss[_loc4_][3];
      _loc4_ += 1;
   }
   _all_taijian = [];
   _loc4_ = 0;
   while(_loc4_ < Data._ttt.length){
	   var i =0;
	   while(i<=5){
	       if(Data._ttt[_loc4_][i] == null){
	   	    Data._ttt[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      _loc5_ = {};
      _loc5_.id = Data._ttt[_loc4_][0];
      _loc5_.名称 = Data._ttt[_loc4_][1];
      _loc5_.主子 = Data._ttt[_loc4_][2];
      _loc5_.职务 = Data._ttt[_loc4_][3];
      _loc5_.能力 = Data._ttt[_loc4_][4];
      _loc5_.俸禄 = Data._ttt[_loc4_][5];
      _all_taijian.push(_loc5_);
      _loc4_ += 1;
   }
   _all_gongnv = [];
   _loc4_ = 0;
   while(_loc4_ < Data._uuu.length){
	   var i =0;
	   while(i<=7){
	       if(Data._uuu[_loc4_][i] == null){
	   	    Data._uuu[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      _loc5_ = {};
      _loc5_.id = Data._uuu[_loc4_][0];
      _loc5_.名称 = Data._uuu[_loc4_][1];
      _loc5_.名字 = Data._uuu[_loc4_][1];
      _loc5_.主子 = Data._uuu[_loc4_][2];
      _loc5_.职务 = Data._uuu[_loc4_][3];
      _loc5_.能力 = Data._uuu[_loc4_][4];
      _loc5_.俸禄 = Data._uuu[_loc4_][5];
      _loc5_._code = Data._uuu[_loc4_][6];
      _loc5_.头像 = Data._uuu[_loc4_][7];
      _loc5_.跳 = Data._uuu[_loc4_][7];
      _all_gongnv.push(_loc5_);
      _loc4_ += 1;
   }
   _all_rencai = [];
   _loc4_ = 0;
   while(_loc4_ < Data._vvv.length){
	   var i =0;
	   while(i<=36){
	       if(Data._vvv[_loc4_][i] == null){
	   	    Data._vvv[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      var _loc7_ = {};
      _loc7_.id = Data._vvv[_loc4_][0];
      _loc7_._code = Data._vvv[_loc4_][1];
      _loc7_.名字 = Data._vvv[_loc4_][2];
      _loc7_.家族 = Data._vvv[_loc4_][3];
      _loc7_.性别 = Data._vvv[_loc4_][4];
      _loc7_.经验 = Data._vvv[_loc4_][5];
      _loc7_.党 = Data._vvv[_loc4_][6];
      _loc7_.统帅 = Data._vvv[_loc4_][7];
      _loc7_.武力 = Data._vvv[_loc4_][8];
      _loc7_.智力 = Data._vvv[_loc4_][9];
      _loc7_.政治 = Data._vvv[_loc4_][10];
      _loc7_.魅力 = Data._vvv[_loc4_][11];
      _loc7_.清廉 = Data._vvv[_loc4_][12];
      _loc7_.野心 = Data._vvv[_loc4_][13];
      _loc7_.忠诚 = Data._vvv[_loc4_][14];
      _loc7_.头像 = Data._vvv[_loc4_][15];
      _loc7_.文化 = Data._vvv[_loc4_][16];
      _loc7_.年龄 = Data._vvv[_loc4_][17];
      _loc7_.功勋 = Data._vvv[_loc4_][18];
      _loc7_.地位 = Data._vvv[_loc4_][19];
      _loc7_.品阶 = Data._vvv[_loc4_][20];
      _loc7_.带兵上限 = Data._vvv[_loc4_][21];
      _loc7_.爵位 = Data._vvv[_loc4_][22];
      _loc7_.任务中 = Data._vvv[_loc4_][23];
      _loc7_.委任城市 = Data._vvv[_loc4_][24];
      _loc7_.后宫相性 = Data._vvv[_loc4_][25];
      _loc7_.后宫势力 = Data._vvv[_loc4_][26];
      _loc7_.朝廷相性 = Data._vvv[_loc4_][27];
      _loc7_.朝廷势力 = Data._vvv[_loc4_][28];
      _loc7_.皇嗣相性 = Data._vvv[_loc4_][29];
      _loc7_.爱好 = Data._vvv[_loc4_][30];
      _loc7_.关系 = Data._vvv[_loc4_][31];
      _loc7_.结婚 = Data._vvv[_loc4_][32];
      _loc7_.罪名 = Data._vvv[_loc4_][33];
      _loc7_.官职 = Data._vvv[_loc4_][34];
	  _loc7_.性格 = Data._vvv[_loc4_][35];
	  _loc7_.介绍 = Data._vvv[_loc4_][36];
      _all_rencai.push(_loc7_);
      _loc4_ += 1;
   }
   _all_army = [];
   _loc4_ = 0;
   while(_loc4_ < Data._xxx.length){
	   var i =0;
	   while(i<=10){
	       if(Data._xxx[_loc4_][i] == null){
	   	    Data._xxx[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      var _loc8_ = {};
      _loc8_.id = Data._xxx[_loc4_][0];
      _loc8_.队名 = Data._xxx[_loc4_][1];
      _loc8_.将军 = Data._xxx[_loc4_][2];
      _loc8_.兵种 = Data._xxx[_loc4_][3];
      _loc8_.兵力 = Data._xxx[_loc4_][4];
      _loc8_.兵力上限 = Data._xxx[_loc4_][5];
      _loc8_.训练度 = Data._xxx[_loc4_][6];
      _loc8_.出战中 = Data._xxx[_loc4_][7];
      _loc8_.单兵战力 = Data._xxx[_loc4_][8];
      _loc8_.斩杀 = Data._xxx[_loc4_][9];
      _loc8_.损失 = Data._xxx[_loc4_][10];
      _all_army.push(_loc8_);
      _loc4_ += 1;
   }
   _all_feizi = [];
   _loc4_ = 0;
   while(_loc4_ < Data._yyy.length){
	   var i =0;
	   while(i<=40){
	       if(Data._yyy[_loc4_][i] == null){
	   	    Data._yyy[_loc4_][i] = undefined;
	   	    }
	       i++;
	   }
      _loc5_ = {};
      _loc5_.id = Data._yyy[_loc4_][0];
      _loc5_._code = Data._yyy[_loc4_][1];
      _loc5_.地位 = Data._yyy[_loc4_][2];
      _loc5_.位分 = Data._yyy[_loc4_][3];
      _loc5_.封号 = Data._yyy[_loc4_][4];
      _loc5_.宫殿 = Data._yyy[_loc4_][5];
      _loc5_.寝殿 = Data._yyy[_loc4_][6];
      _loc5_.名字 = Data._yyy[_loc4_][7];
      _loc5_.家族 = Data._yyy[_loc4_][8];
      _loc5_.党 = Data._yyy[_loc4_][9];
      _loc5_.性别 = Data._yyy[_loc4_][10];
      _loc5_.经验 = Data._yyy[_loc4_][11];
      _loc5_.统帅 = Data._yyy[_loc4_][12];
      _loc5_.武力 = Data._yyy[_loc4_][13];
      _loc5_.智力 = Data._yyy[_loc4_][14];
      _loc5_.政治 = Data._yyy[_loc4_][15];
      _loc5_.魅力 = Data._yyy[_loc4_][16];
      _loc5_.清廉 = Data._yyy[_loc4_][17];
      _loc5_.野心 = Data._yyy[_loc4_][18];
      _loc5_.头像 = Data._yyy[_loc4_][19];
      _loc5_.文化 = Data._yyy[_loc4_][20];
      _loc5_.年龄 = Data._yyy[_loc4_][21];
      _loc5_.喜好 = Data._yyy[_loc4_][22];
      _loc5_.状态 = Data._yyy[_loc4_][23];
      _loc5_.性格 = Data._yyy[_loc4_][24];
      _loc5_.爱 = Data._yyy[_loc4_][25];
      _loc5_.孕 = Data._yyy[_loc4_][26];
      _loc5_.病 = Data._yyy[_loc4_][27];
      _loc5_.仙 = Data._yyy[_loc4_][28];
      _loc5_.生育 = Data._yyy[_loc4_][29];
      _loc5_.任性 = Data._yyy[_loc4_][30];
      _loc5_.护 = Data._yyy[_loc4_][31];
      _loc5_.后宫相性 = Data._yyy[_loc4_][32];
      _loc5_.后宫势力 = Data._yyy[_loc4_][33];
      _loc5_.朝廷相性 = Data._yyy[_loc4_][34];
      _loc5_.朝廷势力 = Data._yyy[_loc4_][35];
      _loc5_.皇嗣相性 = Data._yyy[_loc4_][36];
      _loc5_.介绍 = Data._yyy[_loc4_][37];
      _loc5_.性情 = Data._yyy[_loc4_][38];
      _loc5_.出身 = Data._yyy[_loc4_][39];
      _loc5_.称呼 = Data._yyy[_loc4_][40];
      _all_feizi.push(_loc5_);
      _loc4_ += 1;
   }
   属性.年龄 = Data._zzz[0];
   属性.健康 = Data._zzz[1];
   属性.状态 = Data._zzz[2];
   属性.体力 = Data._zzz[3];
   属性.体力上限 = Data._zzz[4];
   属性.快乐 = Data._zzz[5];
   属性.威望 = Data._zzz[6];
   属性.统帅 = Data._zzz[7];
   属性.武力 = Data._zzz[8];
   属性.智力 = Data._zzz[9];
   属性.政治 = Data._zzz[10];
   属性.魅力 = Data._zzz[11];
   属性.暴戾 = Data._zzz[12];
   属性.道德 = Data._zzz[13];
   属性.才艺 = Data._zzz[14];
   属性.寿命 = Data._zzz[15];
   _loc4_ = 0;
   while(_loc4_ < _all_feizi.length)
   {
      if(_all_feizi[_loc4_].名字 == "undefined")
      {
         _all_feizi[_loc4_].名字 = undefined;
      }
      if(_all_feizi[_loc4_].id == "undefined")
      {
         _all_feizi[_loc4_].id = undefined;
      }
      if(_all_feizi[_loc4_].特殊头像 == "undefined")
      {
         _all_feizi[_loc4_].特殊头像 = undefined;
      }
      _loc4_ += 1;
   }
   if(主角.丹药列表 == "undefined")
   {
      主角.丹药列表 = undefined;
   }
   if(主角.战斗队伍.胜负 == "undefined")
   {
      主角.战斗队伍.胜负 = undefined;
   }
   太监报告所有事件 = [];
   出现的固定事件 = [];
   id('紫宸殿内').style.display = 'none';
   gameEnter.style.display = 'none';
   太监说话的程序(4,Data.标题 + "\n皇上，欢迎回来。");
   刷新_all_palace居住情况();
   更新资料();
   if(className('名分板').length !==0){
   	var i=className('名分板').length;
   	while(i>0){
		i--;
   		className('名分板')[i].remove();
   		className('mfsm')[i].remove();
   	}
   }
   板子加载();
   主要面板操作();
   显示用的地方收成表 = [];
   更新季节的程序呢();
   更新皇宫背景图的程序();
   皇宫的各个按钮();
   版本号 = Data.列表[0];
   小提示(版本号 + "版存档，读入完毕。");
   关联人才();
}   