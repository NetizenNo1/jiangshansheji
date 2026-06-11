function 生成默认事件开关的程序(){
   var _loc1_ = 0;
   while(_loc1_ < 默认事件开关库.length){
      主角.事件库[默认事件开关库[_loc1_]] = 0;
      _loc1_ += 1;
   }
}
function 读档时使用事件开关的程序(开关库){
   var _loc2_ = 0;
   while(_loc2_ < 默认事件开关库.length){
      if(开关库[默认事件开关库[_loc2_]] !== undefined){
         主角.事件库[默认事件开关库[_loc2_]] = 开关库[默认事件开关库[_loc2_]];
      }
      _loc2_ += 1;
   }
}
function 打印所有事件开关的程序呢(){
   var _loc1_ = 0;
   while(_loc1_ < 默认事件开关库.length){
      修改功能面板.输出.text += 默认事件开关库[_loc1_] + ":" + 主角.事件库[默认事件开关库[_loc1_]] + "\n";
      _loc1_ += 1;
   }
}
function 清空所有的开关事件程序(){
   var _loc1_ = 0;
   while(_loc1_ < 默认事件开关库.length){
      主角.事件库[默认事件开关库[_loc1_]] = 999;
      _loc1_ += 1;
   }
}
function 固定事件(){
   var _loc2_ = [];
   if(主角.出战 == 1){
      var _loc3_ = 国家.临时的战争要素[0];
      var _loc4_ = 国家.临时的战争要素[1];
      var _loc5_ = 国家.临时的战争要素[2];
      var _loc6_ = 国家.临时的战争要素[3];
      var _loc7_ = 国家.临时的战争要素[4];
      var _loc8_ = 国家.临时的战争要素[5];
      新版计算战斗结果(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_);
      if(主角.战斗队伍.胜负 !== undefined){
         _loc2_.push("战争战报事件");
         主角.战斗队伍.胜负 = undefined;
         主角.出战 = 0;
      }
   }
   else{每月的军事奏折 = '';战争结局.战报 = "";}
   if(城市升级喜报 == 1){
      if(主角.难度 != 4){
         城市升级喜报 = 0;
         _loc2_.push("城市升级喜报播报");
      }
   }
   if(季 == 1 && 旬 == "上旬"){
      _loc2_.push("各地赠送贡品事件");
   }
   if(国家.遇到山贼 == 1){
      _loc2_.push("遇到山贼事件");
   }
   装入事件的逻辑判断(_loc2_);
   if(年 == 11&&季 == 1&&旬 == "上旬"){
         _loc2_.push("十年修缮事件");
      }
      if(年 == 21&&季 == 1&&旬 == "上旬"){
         _loc2_.push("二十年修缮事件");
      }
      if(年 == 31&&季 == 1&&旬 == "上旬"){
         _loc2_.push("三十年修缮事件");
      }
      if(年 == 5&&季 == 1&&旬 == "中旬"){
         _loc2_.push("西洋铁炮");
      }
      if(年 == 10&&季 == 2&&旬 == "中旬"){
         _loc2_.push("西洋铁炮");
      }
      if(年 == 15&&季 == 2&&旬 == "中旬"){
         _loc2_.push("西洋铁炮");
      }
      if(年 == 20&&季 == 3&&旬 == "中旬"){
         _loc2_.push("西洋铁炮");
      }
      if(年 == 25&&季 == 3&&旬 == "中旬"){
         _loc2_.push("西洋铁炮");
      }
      if(年 == 30&&季 == 4&&旬 == "中旬"){
         _loc2_.push("西洋铁炮");
      }
      if(国家.事件五 == 1&&国家.事件六 == 0){
         _loc2_.push("襄阳公主归降");
      }
      if(年 == 1&&季 == 2&&旬 == "上旬"){
         _loc2_.push("二皇子胎相不稳");
      }
      if(年 == 1&&季 == 2&&旬 == "下旬"){
         _loc2_.push("二皇子出生");
      }
      if(年 == 12&&季 == 2&&旬 == "中旬"){
         _loc2_.push("谢衣出走");
      }
      if(国家.事件九 == 1){
         _loc2_.push("义妁进宫");
      }
      if(年 == 12&&季 == 2&&旬 == "下旬"){
         if(主角.谢衣 == 5)
         {
            主角.谢衣 = 6;
         }
      }
      if(年 == 2&&季 == 2&&旬 == "下旬"){
         _loc2_.push("皇后的表弟事件");
      }
      if(年 == 3&&季 == 2&&旬 == "上旬"){
         _loc2_.push("下江南事件");
      }
      if(年 == 12&&季 == 1&&旬 == "下旬"){
         _loc2_.push("盛子龙成年事件");
      }
      if(年 == 15&&季 == 1&&旬 == "上旬"){
         _loc2_.push("嘉宁成年事件");
      }
      if(年 == 15&&季 == 4&&旬 == "下旬"){
         _loc2_.push("苏美尔进攻事件");
      }
      if(主角.嘉宁 == 41){
         子龙出宫寻嘉宁();
      }
      if(年 == 4&&季 == 2&&旬 == "下旬"){
         _loc2_.push("带妃游玩事件");
      }
      if(年 == 14&&季 == 2&&旬 == "下旬"){
         _loc2_.push("带妃游玩事件");
      }
      if(年 == 24&&季 == 2&&旬 == "下旬"){
         _loc2_.push("带妃游玩事件");
      }
      if(年 == 34&&季 == 2&&旬 == "下旬"){
         _loc2_.push("带妃游玩事件");
      }
      if(年 == 8&&季 == 2&&旬 == "上旬"){
         _loc2_.push("皇子比赛事件");
      }
      if(年 == 13&&季 == 2&&旬 == "上旬"){
         _loc2_.push("皇子表演事件");
      }
      if(年 == 18&&季 == 2&&旬 == "上旬"){
         _loc2_.push("皇子比赛事件");
      }
      if(年 == 23&&季 == 2&&旬 == "上旬"){
         _loc2_.push("皇子表演事件");
      }
      if(年 == 27&&季 == 2&&旬 == "上旬"){
         _loc2_.push("皇子比赛事件");
      }
      if(年 == 33&&季 == 2&&旬 == "上旬"){
         _loc2_.push("皇子表演事件");
      }
      if(年 == 37&&季 == 2&&旬 == "上旬"){
         _loc2_.push("皇子比赛事件");
      }
      if(年 == 27&&季 == 2&&旬 == "上旬"){
         if(主角.难度 != 4)
         {
            _loc2_.push("泰山封禅大典事件");
         }
      }
      if(年 == 5&&季 == 4&&旬 == "下旬"&&_all_child[1].状态 == 0){
         _loc2_.push("长公主夜游事件");
      }
      if(年 == 12&&季 == 4&&旬 == "下旬"){
         _loc2_.push("挚古大王宴会挑战事件");
      }
      if(年 == 9&&季 == 4&&旬 == "上旬"){
         _loc2_.push("和尚宝华殿做法事件");
      }
      if(年 == 10&&季 == 1&&旬 == "上旬"){
         _loc2_.push("太后驾崩事件");
      }
      if(年 == 11&&旬 == "中旬"&&主角.朝旭 == 0){
         刷新世界所有的国家数据();
         if(_all_nation[1].外交 !== 0&&_all_nation[1].城.length !== 0&&属性.威望 > 200)
         {
            _loc2_.push("朝旭与萤_剧情_藤原氏的求助信_执行");
         }
      }
      if(年 == 12&&旬 == "中旬"&&主角.朝旭 == 2){
         刷新世界所有的国家数据();
         if(_all_nation[1].外交 !== 0&&_all_nation[1].城.length !== 0)
         {
            _loc2_.push("朝旭与萤_剧情_事成答谢_执行");
         }
      }
      if(旬 == "下旬"&&主角.朝旭 == 3){
         刷新世界所有的国家数据();
         if(_all_nation[1].外交 !== 0&&_all_nation[1].城.length !== 0)
         {
            _loc2_.push("朝旭与萤_剧情_两人的使团_执行");
         }
      }
      if(年 >= 25&&主角.武媚娘 == 0&&主角.武如意 == 0&&random(5) == 1&&季 == 2){
         _loc2_.push("武如意入宫");
      }
      if((主角.武如意 == 2||主角.武如意 == 4)&&random(4) == 0){
         _loc2_.push("献舞大会");
      }
      if(主角.武如意 == 6){
         _loc2_.push("逃出生天");
      }
      if(年 == 11&&季 == 3&&旬 == "下旬"){
         _loc2_.push("祭祖事件");
      }
      if(年 == 21&&季 == 3&&旬 == "下旬"){
         _loc2_.push("祭祖事件");
      }
      if(年 == 31&&季 == 3&&旬 == "下旬"){
         _loc2_.push("祭祖事件");
      }
      if(年 == 38&&季 == 3&&旬 == "下旬"){
         _loc2_.push("祭祖事件");
      }
      if(主角.倚梅园 == 1){
         _loc2_.push("余莺儿事件");
      }
      if(主角.倚梅园 == 3){
         _loc2_.push("青樱事件");
      }
      if(主角.倚梅园 == 7&&季 == 4&&旬 == "下旬"){
         _loc2_.push("除夕宴会赏梅事件");
      }
      if(主角.吴邪 == 1&&主角.张起灵 == 0&&所有特殊建筑[6].建筑程度 == 1){
         _loc2_.push("张起灵事件");
      }
      if(主角.鱼美人 == 2&&年 < 10){
         _loc2_.push("太后阻拦鱼美人入宫");
      }
      if(主角.鱼美人 == 5&&年 < 10){
         _loc2_.push("鱼美人怀孕");
      }
      if(主角.鱼美人 == 6){
         _loc2_.push("鱼美人产子");
      }
      if(主角.鱼美人 == 7&&季 == 3&&旬 == "上旬"){
         if(random(2) == 0)
         {
            _loc2_.push("鲛人皇子降生");
         }
         else
         {
            _loc2_.push("人鱼公主降生");
         }
      }
      if(年 > 5&&主角.一枝梅 < 3&&random(3) == 1){
         _loc2_.push("珍宝失窃事件");
      }
      if(主角.一枝梅 == 3&&属性.道德 >= 200){
         _loc2_.push("一枝梅出现事件");
      }
      if(主角.曹夙峰 == 2&&属性.才艺 >= 300){
         _loc2_.push("曹夙峰赠画事件");
      }
      if(主角.一枝梅 == 4&&属性.道德 >= 400){
         _loc2_.push("一枝梅相救事件");
      }
      if(年 == 6&&季 == 1&&旬 == "上旬"){
         _loc2_.push("小王爷成年事件");
      }
      if(年 >= 6&&年 < 16&&主角._relation_chenwangyan >= 50&&_all_city[22].归属 == 2&&主角.摩葛可汗 == 1){
         _loc2_.push("摩葛可汗求亲事件");
      }
      if(主角._relation_chenwangyan >= 100&&_all_city[22].归属 == 8&&主角.摩葛可汗 == 4&&主角.小王爷 !== 3&&主角.小王爷 !== 9){
         _loc2_.push("小王爷灵山外宅事件");
      }
      if(季 == 1&&旬 == "上旬"&&主角.小王爷 == 3&&主角.摩葛可汗 == 3&&_all_city[22].归属 == 2){
         _loc2_.push("小王爷死亡事件");
      }
      if(年 == 16&&季 == 3&&旬 == "上旬"&&主角.小王爷 < 3){
         _loc2_.push("小王爷出走事件");
      }
   if(属性.年龄 >= 60){
   }
   if(国家.金钱 <= 1000000){
      var _loc9_ = 看一下宫里有多少个妃子();
      if(_loc9_.length > 30){
         _loc2_.push("妃子拍卖首饰事件");
      }
   }
   if(国家.金钱 <= 0){
      _loc2_.push("官员不发放俸禄事件");
   }
   if(国家.粮食 <= 0){
      _loc2_.push("军队不发粮食事件");
   }
   if(属性.快乐 <= 20){
      if(国家.汤泉宫 == 1){
         _loc2_.push("妃子群沐图事件");
      }
      else{
         _loc2_.push("皇后劝休息事件");
         属性.快乐 += 10;
         更新资料();
      }
   }
   else if(主角._anquan > 18){
      if(random(3) == 0){
         _loc2_.push("刺客行刺事件");
      }
   }
   if(主角.负数时间 > 3 && 国家.金钱 < 0){
      _loc2_.push("穷死了结局");
   }
   if(主角.断粮时间 > 3 && 国家.粮食 < 0){
      _loc2_.push("饿死了结局");
   }
   if(属性.健康 <= 10){
      _loc2_.push("健康很低的御医事件");
   }
   return _loc2_;
}
function 遇到山贼事件(){
   var _loc1_ = Math.round(国家.金钱 * 0.1);
   国家.金钱 -= Math.abs(_loc1_);
   国家.遇到山贼 = 0;
   属性.威望 -= 10;
   更新资料();
   缓动黑幕();
   id('taijianBg').style.display = 'block';
   id('tjjj').style.top = '0px';
   id('taijian2').style.backgroundPositionX = '0px';
   id('taijian2').style.width = '112px';	
   id('taijianbgText').innerText = "启禀皇上。地方山贼横行，外贸商队行至半途遭到抢劫，致使国库损失重大，共计损失" + Math.abs(_loc1_) + "两。";
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "宰相建议提高地方【治安】程度，以保证商路畅通。";
      id('tjBgCon').onclick = function(){
         结束固定事件程序();
      };
   };
}
function 妃子送吃的事件(){
   var _loc2_ = [];
   var _loc3_ = 0;
   while(_loc3_ < _all_feizi.length){
      if((_all_feizi[_loc3_].省亲 == 0 || _all_feizi[_loc3_].省亲 == undefined) && _all_feizi[_loc3_].病 == 0 && _all_feizi[_loc3_].孕 == 0 && _all_feizi[_loc3_].位分 != "秀女"){
         _loc2_.push(_all_feizi[_loc3_]);
      }
      _loc3_ += 1;
   }
   var 谁来送 = _loc2_[random(_loc2_.length)];
   if(_loc2_.length > 0 && 谁来送.爱 > 200){
	   缓动黑幕();
	   id('剧情对话').style.display = 'block';
	   id('剧情背景').src =LJ +  'a0aPic_BG/Tu_13.webp';
	   出现这个人的头像(剧情头像,谁来送);
	   对话打字效果(谁来送.名字 + "：臣妾参见皇上，连日劳累，皇上辛苦了。");
	   剧情对话板.onclick = function(){
	      对话打字效果(谁来送.名字 + "：臣妾特地做了些家乡的糕点，请皇上休息片刻。",["没有心情","爱妃辛苦"]);
	      id('剧情an1').onclick = function(){
	         对话打字效果(谁来送.名字 + "：皇上如此辛苦，臣妾却无法分担。皇上不要太过劳累。\n（快乐，体力恢复。）");
	         剧情对话板.onclick = function(){
	            谁来送.爱 += 20;
	            谁来送.任性 += random(3);
	            属性.快乐 += 2;
	            属性.体力 += 60;
	            缓动黑幕();
	            更新资料();
	           id('剧情对话').style.display = 'none';
	         };
	      };
	      id('剧情an0').onclick  = function(){
	        对话打字效果(谁来送.名字 + "：打扰了皇上的思路。臣妾该死，臣妾这就退下。");
	        剧情对话板.onclick = function(){
	            缓动黑幕();
	           id('剧情对话').style.display = 'none';
	         };
	      };
	   };
   }
}
function 送药一次程序(文本,影响,数值){
   var _loc5_ = {};
   _loc5_.名称 = 文本;
   _loc5_.增加 = [[影响,数值]];
   _loc5_.特殊 = 0;
   主角.丹药.unshift(_loc5_);
}
function 沦陷死亡事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianBg').style.display = 'block';
   id('tjjj').style.top = '0px';
   太监图(8);	
   id('taijianbgText').innerText = "谁都不许碰我们皇上……\n(京城沦陷，皇宫里一阵骚乱。)";
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "我跟你们拼了……";
      太监图(7);
      id('tjBgCon').onclick = function(){
         id('taijianbgText').innerText = "(小桂子被敌军砍死在大殿之上)";
         id('tjBgCon').onclick = function(){
            id('taijianbgText').innerText = "一切都结束了，皇帝。\n南柯一梦……\n罢了……";
            id('tjBgCon').onclick = function(){
               死亡判定(5);
            };
         };
      };
   };
}
function 皇后的表弟事件(){
   var _loc2_ = 0;
   i = 0;
   while(i < _all_feizi.length){
      if(_all_feizi[i].地位 == 0){
         _loc2_ += 1;
      }
      i++;
   }
   if(_loc2_ == 1){
      缓动黑幕();
      id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
      太监图(4);	
      id('taijianbgText').innerText = "启禀皇上。\n皇后的表亲 王士开 求见。";
      id('tjBgCon').onclick = function(){
         id('taijianbgText').innerText = "皇后觉得王士开武功出众，可当陛下的贴身卫士。皇上觉得意下如何？";
         var _loc1_ = 0;
         while(_loc1_ < 剧情汇总.length){
            if(剧情汇总[_loc1_]._code == 10){
               剧情汇总[_loc1_].达成 = 1;
            }
            _loc1_ += 1;
         }
		 id("tjBgCon").style.display="none";id("tjBgCho").style.display="block";
         id("tjBgan0").innerText = "同意";
         id("tjBgan1").innerText = "不妥";
         id("tjBgan0").onclick = function(){
            id("tjBgCon").style.display="block";id("tjBgCho").style.display="none";
            id('taijianbgText').innerText = "那奴才这就安排他进入粘干处。";
            _all_feizi[0].爱 += 50;
            _all_feizi[0].任性 += 20;
            var _loc2_ = 开启血滴子(1);
            血滴子.push(_loc2_);
            太监图(6);
            id('tjBgCon').onclick = function(){
               结束固定事件程序();
            };
         };
         id("tjBgan1").onclick = function(){
            id('tjBgCho').style.display = 'none';
            id('taijianbgText').innerText = "是，这就让他离开。";
            _all_feizi[0].爱 -= 20;
            太监图(1);
            id("tjBgCon").style.display="block";id("tjBgCho").style.display="none";
            id('tjBgCon').onclick = function(){
               结束固定事件程序();
            };
         };
      };
   }
}
function 取出宰相程序(){
   var _loc1_ = [];
   i = 0;
   while(i < _all_rencai.length){
      _loc1_.push(_all_rencai[i]);
      i++;
   }
   _loc1_.sort(compare("野心"),0);
   var _loc2_ = _loc1_[0];
   return _loc2_;
}
function 宰相篡位事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   var _loc1_ = 取出宰相程序();
   太监图(8);
   id('taijianbgText').innerText = _loc1_.名字 + "，你好大的胆子，敢带兵入宫。";
   id('tjBgCon').onclick = function(){
      太监图(7);
      id('taijianbgText').innerText = "皇上待你不薄，予你高官厚禄。\n你竟敢图谋不轨……";
      id('tjBgCon').onclick = function(){
         太监图(3);
         id('taijianbgText').innerText = "你们带我去哪? 我哪也不去……\n皇上，皇上……";
         id('tjBgCon').onclick = function(){
            死亡判定(6);
         };
      };
   };
}
function 党首篡位事件(党首其人){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   太监图(8);
   id('taijianbgText').innerText = 党首其人.名字 + " 你好大的胆子，敢带兵入宫。";
   id('tjBgCon').onclick = function(){
      太监图(7);
      id('taijianbgText').innerText = "皇上待你不薄，予你高官厚禄。\n你竟敢图谋不轨……";
      id('tjBgCon').onclick = function(){
         太监图(3);
         id('taijianbgText').innerText = "你们带我去哪? 我哪也不去……\n皇上，皇上……";
         id('tjBgCon').onclick = function(){
            死亡判定(8);
         };
      };
   };
}
function 地方起义事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "报……报告。";
   太监图(1);
   id('tjBgCon').onclick = function(){
      var _loc1_ = random(3);
      if(_loc1_ == 0){
         id('taijianbgText').innerText = "州府总兵起兵叛变，当地知府已经被杀害。\n现在附近州府人心惶惶。";
      }
      else if(_loc1_ == 1){
         id('taijianbgText').innerText = "州府总兵起兵叛变，当地知府也已叛逃。\n现在附近州府人心惶惶。";
      }
      else if(_loc1_ == 2){
         id('taijianbgText').innerText = "州府总兵起兵叛变，当地知府失踪。\n现在附近州府人心惶惶。";
      }
      太监图(1);
      id('tjBgCon').onclick = function(){
         属性.快乐 -= 20;
         属性.健康 -= 10;
         更新资料();
         结束固定事件程序();
      };
   };
}
function 带妃游玩事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "启禀皇上。\n避暑山庄荷塘月色，及其漂亮。\n皇上要带一位娘娘前往游玩呢？";
   太监图(4);
   id('tjBgCon').onclick = function(){
      选哪位娘娘出去玩();
      太监图(4);
      id('taijianbgText').innerText = "游玩结束。\n快乐增加，妃子爱情增加。";
      id('tjBgCon').onclick = function(){
         结束固定事件程序();
      };
   };
}
function 选哪位娘娘出去玩(){
   嫔妃一览程序(9);
}
function 选哪位娘娘出去玩呢(对象){
   对象.爱 += random(30);
   id('youyuan').style.display = 'block';
   id('yyBG').src =LJ +  "a0aPic_BG/Tu_211211.webp";
   id('yyText').innerText = "美人相伴，避暑山庄之行。\n" + 对象.封号 + 对象.位分 + " " + 对象.名字 + " 让朕很愉快。";
   属性.快乐 += 10;
   if(属性.快乐 >= 100){
      属性.快乐 = 100;
   }
   更新资料();
   id('yykuang').onclick = function(){
      if(主角.张起灵 == 1){
         温泉相遇瓶邪事件();
      }else{
		id('youyuan').style.display = 'none';
	  }
   };
}
function 比目鱼谴责事件(){
   if(主角.事件库.比目鱼谴责事件 == 0){
      主角.事件库.比目鱼谴责事件 = 1;
      缓动黑幕();
      id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
      id('taijianbgText').innerText = "皇上，\n打扰一下，鱼叔来信。";
      太监图(4);
      id('tjBgCon').onclick = function(){
         太监图(2);
         id('taijianbgText').innerText = "比目鱼：\n《皇帝成长计划》平平淡淡的迎来了一周年。没有鲜花，也没有祝福。\n放弃更新的理由很多，但是坚持理由只有一个，因为你。";
         id('tjBgCon').onclick = function(){
            结束固定事件程序();
         };
      };
   }
   else{
      需要判断跳过这个事件的程序();
   }
}
function 皇后劝休息事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "启禀皇上。\n皇后派人送来夜宵，请皇上保重龙体，别太劳累。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      太监图(4);
      id('taijianbgText').innerText = "快乐值略微得到恢复。\n(请注意快乐值，避免过低。)";
      id('tjBgCon').onclick = function(){
         结束固定事件程序();
      };
   };
}
function 选妃子咯(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "启禀皇上。\n储秀宫挑选了一些宫女，\n皇上中意的可以立即册封。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      太监图(2);
      id('taijianbgText').innerText = "请皇上移驾储秀宫。";
      id('tjBgCon').onclick = function(){
         选妃程序();
         比赛.标题.text = "选择满意者留下";
         太监图(4);
         id('taijianbgText').innerText = "选妃结束。";
         id('tjBgCon').onclick = function(){
            结束固定事件程序();
         };
      };
   };
}
function 皇子比赛事件(){
   缓动黑幕();
   var 列表 = [];
   var _loc2_ = 0;
   while(_loc2_ < _all_child.length){
      if(_all_child[_loc2_].性别 == 0 && _all_child[_loc2_].年龄 >= 5 && _all_child[_loc2_].状态 == 0){
         列表.push(_all_child[_loc2_]);
      }
      _loc2_ += 1;
   }
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "启禀皇上。\n十年一届的皇子资质大测试在国子监隆重举行。\n所有年满五岁以上的皇子都会进行资质测试。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      if(列表.length > 0){
         太监图(2);
         id('taijianbgText').innerText = "请皇上移驾国子监。";
         id('tjBgCon').onclick = function(){
           id('szb').style.display = 'block';
           id('ksbs').style.display = 'block';
            id('szbTittle').innerText = "资质测试";
            id('szbgb').style.display = 'none';id("ksbs").innerText="开始";
            资质大测试吧(列表,0);
            太监图(4);
         };
      }
      else{
         太监图(5);
         id('taijianbgText').innerText = "可惜，没有能够参加考试的皇子。";
         id('tjBgCon').onclick = function(){
            结束固定事件程序();
         };
      }
   };
}
function 皇子表演事件(){
   缓动黑幕();
   var 列表 = [];
   var _loc2_ = 0;
   while(_loc2_ < _all_child.length){
      if(_all_child[_loc2_].性别 == 0 && _all_child[_loc2_].年龄 >= 9 && _all_child[_loc2_].状态 == 0){
         列表.push(_all_child[_loc2_]);
      }
      _loc2_ += 1;
   }
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "启禀皇上。\n十年一届的皇子骑射表演比赛在武英馆隆重举行。\n所有年满九岁以上的皇子都会进行资质测试。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      if(列表.length > 0){
         太监图(2);
         id('taijianbgText').innerText = "请皇上移驾武英馆。";
         id('tjBgCon').onclick = function(){
            id('szb').style.display = 'block';
            id('ksbs').style.display = 'block';
            id('szbTittle').innerText = "骑射表演";
            id('szbgb').style.display = 'none';id("ksbs").innerText="开始";
            资质大测试吧(列表,1);
            太监图(4);
         };
      }
      else{
         太监图(5);
         id('taijianbgText').innerText = "可惜，没有能够参加表演的皇子。";
         id('tjBgCon').onclick = function(){
            结束固定事件程序();
         };
      }
   };
}
function 资质大测试吧(临时列表,参数){
   id('szbText').innerText = "所有皇子入列：\n";
   var 临时数据 = [];
   var _loc2_ = 0;
   while(_loc2_ < 临时列表.length){
      var _loc3_ = 临时列表[_loc2_];
      var _loc4_ = 0;
      var _loc5_ = "";
      if(参数 == 0){
         var _loc6_ = _loc3_.文质;
      }
      else if(参数 == 1){
         _loc6_ = _loc3_.武质;
      }
      if(_loc6_ >= 80){
         _loc5_ = "超额发挥";
         _loc4_ = 80 + random(15);
      }
      else if(_loc6_ > 60){
         _loc5_ = "状态一般";
         _loc4_ = 60 + random(15);
      }
      else if(_loc6_ > 40){
         _loc5_ = "发挥失常";
         _loc4_ = 30 + random(15);
      }
      else if(_loc6_ > 20){
         _loc5_ = "状态低迷";
         _loc4_ = 20 + random(5);
      }
      else{
         _loc5_ = "作弊被抓";
         _loc4_ = 10 - random(10);
      }
      临时数据.push({人:临时列表[_loc2_],分数的:_loc4_,情况的:_loc5_});
      id('szbText').innerText += _loc3_.名称 + ",年龄：" + _loc3_.年龄 + "，母亲：" + _loc3_.母亲 + "。\n";
      _loc2_ += 1;
   }
   临时数据.sort(compare("分数的",0));
   id("ksbs").onclick = function(){
      进入倒计时大测试(临时数据,参数);
   };
}
function 进入倒计时大测试(临时数据, 参数){
   id("jdt").style.display="block";
   if(参数 == 0){
      id("bssm").innerText = "皇子正在紧张考试";
	  id('taijianbgText').innerText = "皇子资质大测试结束了。\n大型歌舞宴会，皆大欢喜。";
	  id('tjBgCon').onclick = function(){
	     属性.快乐 += 20;
	     if(属性.快乐 > 100)
	     {
	        属性.快乐 = 100;
	     }
	     更新资料();
	     结束固定事件程序();
	  };
   }
   else if(参数 == 1){
      id("bssm").innerText = "皇子正在跑马骑射";
	  id('taijianbgText').innerText = "皇子骑射表演结束了。\n大型歌舞宴会，皆大欢喜。";
	  id('tjBgCon').onclick = function(){
	     属性.快乐 += 20;
	     if(属性.快乐 > 100)
	     {
	        属性.快乐 = 100;
	     }
	     更新资料();
	     结束固定事件程序();
	  };
   }
   setTimeout(function() {id('jdt').style.display = 'none';出结果大测试(临时数据,参数);}, 4990);
}
function 出结果大测试(临时数据,参数){
	缓动黑幕();
   id('szbText').innerText = "比赛结果揭晓：\n";
   var _loc1_ = 0;
   while(_loc1_ < 临时数据.length){
      var _loc2_ = 临时数据[_loc1_];
      id('szbText').innerText += _loc2_.人.名称 + ",年龄：" + _loc2_.人.年龄 + "，母亲：" + _loc2_.人.母亲 + "，表现：" + _loc2_.情况的 + "，分数：" + _loc2_.分数的 + "。\n";
      _loc1_ += 1;
   }
   id("ksbs").innerText = "进入提名";
   id("ksbs").onclick = function(){
      id("ksbs").style.display="none";id('szbgb').style.display = 'block';
      进入提名大测试(临时数据,参数);
   };
}
function 进入提名大测试(临时数据,参数){
	id('szb').style.display = 'none';
	id('bsjg').style.display = 'block';
    id('jgsm').innerText = "选第一名";
   var _loc2_ = [];
   if(临时数据.length > 10){
      var _loc3_ = 0;
      while(_loc3_ < 10){
         if(临时数据[_loc3_]!== undefined){
            _loc2_.push(临时数据[_loc3_]);
			className('jgxb')[_loc3_].style.display="block";
			className('jctext')[_loc3_].style.display="block";
         }
         _loc3_ += 1;
      }
   }
   else{
      _loc3_ = 0;
      while(_loc3_ < 10){
         if(临时数据[_loc3_]!== undefined &&_loc3_ <临时数据.length){
            _loc2_.push(临时数据[_loc3_]);
			className('jgxb')[_loc3_].style.display="block";
			className('jctext')[_loc3_].style.display="block";
         }
		 else{
			 className('jgxb')[_loc3_].style.display="none";
			 className('jctext')[_loc3_].style.display="none";
		 }
         _loc3_ += 1;
      }
   }
   _loc3_ = 0;
   while(_loc3_ < _loc2_.length){
	   var _loc4_=className('jgxb')[_loc3_];
	   var _loc5_=className('jctext')[_loc3_];
      var 对象 = _loc2_[_loc3_];
      _loc4_.属性 = 对象.人;
      _loc5_.innerText = 对象.人.名称;
      _loc5_.innerText += "，年龄：" + 对象.人.年龄;
      _loc5_.innerText += "，母亲：" + 对象.人.母亲;
      _loc5_.innerText += "，分数：" + 对象.分数的;
      _loc4_.onclick = function(){
         var _loc3_ = this.属性;
         id('gzhjan0').innerText = "言语鼓励";
         if(参数 == 0){
            id('gzhjan1').innerText = "赐笔墨";
            id('gzhjan2').innerText = "赐书卷";
         }
         else if(参数 == 1){
            id('gzhjan1').innerText = "赐御马";
            id('gzhjan2').innerText = "赐宝剑";
         }
		 id('gzhjxz').style.display = 'block';
		 id('gzhjTittle').innerText = "比赛奖励";
		 id('gzhjText').innerText = "要给皇子" + _loc3_.名称 + "什么样的奖励呢？";
		 id('gzhjan2').onclick = function(){id('gzhjxz').style.display = 'none';id('sy').style.display = 'block';};
		 id('gzhjan0').onclick = function(){
            id('gzhjan2').innerText = "取消";
            id('gzhjxz').style.display = 'none';id('bsjg').style.display = 'none';
            更新资料();
         };
         id('gzhjan1').onclick = function(){
            国家.金钱 -= 20000;
            if(参数 == 0){
               对象.人.文质 += 4;
            }
            else if(参数 == 1){
               对象.人.武质 += 4;
            }
            id('gzhjan2').innerText = "取消";
            id('gzhjxz').style.display = 'none';id('bsjg').style.display = 'none';
            更新资料();
         };
         id('gzhjan2').onclick = function(){
            国家.金钱 -= 40000;
            if(参数 == 0){
               对象.人.文质 += 7;
            }
            else if(参数 == 1){
               对象.人.武质 += 7;
            }
            id('gzhjan2').innerText = "取消";
            id('gzhjxz').style.display = 'none';id('bsjg').style.display = 'none';
            更新资料();
         };
      };
      _loc3_ += 1;
   }
}
function 第一届武斗大会(){
   缓动黑幕();
   var _loc3_ = [];
   var _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
      _loc3_.push(_all_rencai[_loc2_]);
      _loc2_ += 1;
   }
   var 临时列表 = [];
   _loc3_.sort(打乱数组程序);
   _loc2_ = 0;
   while(_loc2_ < 8){
      临时列表.push(_loc3_[_loc2_]);
      _loc2_ += 1;
   }
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   
   对象.太监.图._visible = false;
   id('taijianbgText').innerText = "启禀皇上。\n十年一届的武斗大会已经到来，朝廷上选出八位进入武斗决赛。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      太监图(2);
      id('taijianbgText').innerText = "请皇上移驾武斗场。";
      id('tjBgCon').onclick = function(){
         var _loc2_ = attachMovie("比赛项目","比赛项目",73000,{_x:0,_y:0});
         _loc2_.标题.text = "武斗大会";
         开始武斗比赛吧(_loc2_,临时列表);
         太监图(4);
         id('taijianbgText').innerText = "武斗大会结束了。\n宴会众大臣，皆大欢喜。";
         id('tjBgCon').onclick = function(){
            属性.快乐 += 20;
            if(属性.快乐 > 100){
               属性.快乐 = 100;
            }
            更新资料();
            结束固定事件程序();
         };
      };
   };
}
function 开始武斗比赛吧(比赛, 列表){
   var _loc2_ = ["a0","a1","a2","a3","a4","a5","a6","a7","b0","b1","b2","b3","c0","c1","d0"];
   var 排名面板 = 比赛.attachMovie("排名面板","排名面板",8000,{_x:0,_y:0});
   var _loc3_ = 0;
   while(_loc3_ < _loc2_.length){
      排名面板[_loc2_[_loc3_]]._alpha = 0;
      _loc3_ += 1;
   }
   var _loc4_ = 0;
   _loc3_ = 0;
   while(_loc3_ < 8){
      var _loc5_ = 列表[_loc3_];
      var _loc6_ = 排名面板.attachMovie("加载的比赛板子","加载的比赛板子" + _loc4_,_loc4_ + 8000,{_x:排名面板["a" + _loc3_]._x,_y:排名面板["a" + _loc3_]._y});
      _loc6_.版 = 排名面板["a" + _loc3_];
      _loc6_.版.属性 = _loc5_;
      _loc6_.序列 = _loc4_;
      _loc6_.文本.html = true;
      _loc6_.属性 = _loc5_;
      _loc6_.文本.htmlText = 颜色代码(_loc5_.名字 + "\n武力：" + _loc5_.武力,"DDDDDD");
      _loc4_ += 1;
      _loc3_ += 1;
   }
   排名面板.序列 = 20;
   var 对话 = 比赛.attachMovie("对话框面板","对话框面板",12000,{_x:480,_y:420});
   对话._x = (640 - 对话._width) / 2;
   对话.文本.text = 列表[0].名字 + "," + 列表[1].名字 + "," + 列表[2].名字 + "," + 列表[3].名字 + "," + 列表[4].名字 + "," + 列表[5].名字 + "," + 列表[6].名字 + "," + 列表[7].名字 + ",八位大臣进入决赛。\n（点击开始决赛。）";
   对话.an.onclick = function(){
      var _loc2_ = 排名面板.a0.属性;
      var _loc3_ = 排名面板.a1.属性;
      单挑程序(_loc2_,_loc3_);
      对话.文本.text = "比赛胜负已分";
      单挑位置 = {位置:排名面板.b0,颜色:"FFFFCC"};
      对话.an.onclick = function(){
         对话.文本.text = 单挑胜负判断;
         对话.an.onclick = function(){
            var _loc2_ = 排名面板.a2.属性;
            var _loc3_ = 排名面板.a3.属性;
            单挑程序(_loc2_,_loc3_);
            对话.文本.text = "比赛胜负已分";
            单挑位置 = {位置:排名面板.b1,颜色:"FFFFCC"};
            对话.an.onclick = function(){
               对话.文本.text = 单挑胜负判断;
               对话.an.onclick = function()
               {
                  对话.文本.text = 单挑胜负判断;
                  对话.an.onclick = function()
                  {
                     var _loc2_ = 排名面板.a4.属性;
                     var _loc3_ = 排名面板.a5.属性;
                     单挑程序(_loc2_,_loc3_);
                     对话.文本.text = "比赛胜负已分";
                     单挑位置 = {位置:排名面板.b2,颜色:"FFFFCC"};
                     对话.an.onclick = function()
                     {
                        对话.文本.text = 单挑胜负判断;
                        对话.an.onclick = function()
                        {
                           对话.文本.text = 单挑胜负判断;
                           对话.an.onclick = function()
                           {
                              var _loc2_ = 排名面板.a6.属性;
                              var _loc3_ = 排名面板.a7.属性;
                              单挑程序(_loc2_,_loc3_);
                              对话.文本.text = "比赛胜负已分";
                              单挑位置 = {位置:排名面板.b3,颜色:"FFFFCC"};
                              对话.an.onclick = function()
                              {
                                 对话.文本.text = 单挑胜负判断;
                                 对话.an.onclick = function()
                                 {
                                    对话.文本.text = "进入四强赛。";
                                    对话.an.onclick = function()
                                    {
                                       var _loc2_ = 排名面板.b0.属性;
                                       var _loc3_ = 排名面板.b1.属性;
                                       单挑程序(_loc2_,_loc3_);
                                       对话.文本.text = "比赛胜负已分";
                                       单挑位置 = {位置:排名面板.c0,颜色:"FFFF00"};
                                       对话.an.onclick = function()
                                       {
                                          对话.文本.text = 单挑胜负判断;
                                          对话.an.onclick = function()
                                          {
                                             var _loc2_ = 排名面板.b2.属性;
                                             var _loc3_ = 排名面板.b3.属性;
                                             单挑程序(_loc2_,_loc3_);
                                             对话.文本.text = "比赛胜负已分";
                                             单挑位置 = {位置:排名面板.c1,颜色:"FFFF00"};
                                             对话.an.onclick = function()
                                             {
                                                对话.文本.text = 单挑胜负判断;
                                                对话.an.onclick = function()
                                                {
                                                   对话.文本.text = "进入决赛";
                                                   对话.an.onclick = function()
                                                   {
                                                      var _loc2_ = 排名面板.c0.属性;
                                                      var _loc3_ = 排名面板.c1.属性;
                                                      单挑程序(_loc2_,_loc3_);
                                                      对话.文本.text = "比赛胜负已分";
                                                      单挑位置 = {位置:排名面板.d0,颜色:"ccccff"};
                                                      对话.an.onclick = function()
                                                      {
                                                         对话.文本.text = 单挑胜负判断;
                                                         对话.an.onclick = function()
                                                         {
                                                            对话.文本.text = "结束了，" + 排名面板.d0.属性.名字 + "获得第一。\n" + 排名面板.d0.属性.名字 + "大人果然神勇。";
                                                            对话.an.onclick = function()
                                                            {
                                                               var _loc1_ = 比赛.attachMovie("比赛奖励面板","比赛奖励面板",80000,{_x:0,_y:0});
                                                               _loc1_.文0.text = "一盒银子";
                                                               _loc1_.文1.text = "一箱银子";
                                                               _loc1_.文2.text = "蓝色战袍";
                                                               _loc1_.文3.text = "红色战袍";
                                                               _loc1_.an0.onclick = function()
                                                               {
                                                                  国家.金钱 -= 5000;
                                                                  排名面板.d0.属性.忠诚 += 5;
                                                                  if(排名面板.d0.属性.忠诚 > 100)
                                                                  {
                                                                     排名面板.d0.属性.忠诚 = 100;
                                                                  }
                                                                  比赛.removeMovieClip();
                                                                  更新资料();
                                                               };
                                                               _loc1_.an1.onclick = function()
                                                               {
                                                                  国家.金钱 -= 10000;
                                                                  排名面板.d0.属性.忠诚 += 10;
                                                                  if(排名面板.d0.属性.忠诚 > 100)
                                                                  {
                                                                     排名面板.d0.属性.忠诚 = 100;
                                                                  }
                                                                  比赛.removeMovieClip();
                                                                  更新资料();
                                                               };
                                                               _loc1_.an2.onclick = function()
                                                               {
                                                                  国家.金钱 -= 20000;
                                                                  排名面板.d0.属性.忠诚 += 15;
                                                                  if(排名面板.d0.属性.忠诚 > 100)
                                                                  {
                                                                     排名面板.d0.属性.忠诚 = 100;
                                                                  }
                                                                  比赛.removeMovieClip();
                                                                  更新资料();
                                                               };
                                                               _loc1_.an3.onclick = function()
                                                               {
                                                                  国家.金钱 -= 40000;
                                                                  排名面板.d0.属性.忠诚 += 20;
                                                                  if(排名面板.d0.属性.忠诚 > 100)
                                                                  {
                                                                     排名面板.d0.属性.忠诚 = 100;
                                                                  }
                                                                  比赛.removeMovieClip();
                                                                  更新资料();
                                                               };
                                                               _loc1_.文本.text = "要给" + 排名面板.d0.属性.名字 + "什么样的奖励呢？";
                                                               模糊特效(排名面板);
                                                               模糊特效(比赛.ff);
                                                               模糊特效(对话);
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
function 各种药材增加(){
   var _loc1_ = random(所有药材.length);
   所有药材[_loc1_].数量 += 1;
}
function 各地赠送贡品事件(){
   缓动黑幕();
   var _loc2_ = 0;
   while(_loc2_ < _all_city.length){
      if(_all_city[_loc2_].归属 == 8){
         if(random(2) == 0){
            var _loc3_ = _all_city[_loc2_].名称 + "送来珍贵药材和其他贡品。";
            每月的官员奏折.push(_loc3_);
            各种药材增加();
         }
      }
      _loc2_ += 1;
   }
   _loc2_ = 0;
   while(_loc2_ < _all_nation.length){
      if(_all_nation[_loc2_].外交 == 7){
         if(random(1) == 0){
            var _loc4_ = 来一个宝贝();
            _loc3_ = _all_nation[_loc2_].名称 + "进贡了珍贵的药材品。\n还有一件珍品“" + _loc4_ + "”。";
         }
         else{
            _loc3_ = _all_nation[_loc2_].名称 + "进贡了珍贵的药材和其他贡品。";
         }
         每月的官员奏折.push(_loc3_);
         各种药材增加();
         各种药材增加();
         各种药材增加();
      }
      _loc2_ += 1;
   }
   id('tjjj').style.top = '50px';
   id('taijianBg').style.display = 'block';
   var i = 20 * 2 + 1168;id('taijiantu').style.display = 'block';
   id('太监报告事情图').src = 'images/' + i + '.webp';
   id('taijianbgText').innerText = "各地的贡品已送达皇宫。";
   记录大事件的程序("各地的贡品已送达皇宫。");
   id('taijian2').style.backgroundPositionX = '-224px';
   id('taijian2').style.width = '159px';	
   id('tjBgCon').onclick = function(){
      结束固定事件程序();
   };
}
function 刺客行刺事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "皇上，皇上。\n一群刺客潜入皇宫。";
   太监图(3);
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "御林军正在全力搜捕。";
      太监图(7);
      id('tjBgCon').onclick = function(){
         var _loc2_ = random(20);
         var _loc3_ = 看一下宫里有多少个妃子();
         var _loc4_ = 看一下有多少活着的孩子();
         if(_loc2_ == 0 && 属性.武力 <= 500){
            id('taijianbgText').innerText = "刺客闯入皇帝寝室，很可惜一刀刺中要害。\n御医赶来已经回天无力了。";
            记录大事件的程序("刺客闯入皇帝寝室，很可惜一刀刺中要害。\n御医赶来已经回天无力了。");
            太监图(1);
            id('tjBgCon').onclick = function(){
               结束固定事件程序();
               死亡判定(3);
            };
         }
         else if(_loc2_ < 8){
            id('taijianbgText').innerText = "刺客闯入皇帝寝宫。\n幸得御林军及时赶到，皇上受了点轻伤。";
            记录大事件的程序("刺客闯入皇帝寝宫。\n幸得御林军及时赶到，皇上受了点轻伤。");
            太监图(5);
            id('tjBgCon').onclick = function(){
               属性.寿命 -= 8;
               结束固定事件程序();
            };
         }
         else if(_loc2_ >= 8 && _loc2_ < 10 && _loc4_.length > 0){
            var _loc5_ = _loc4_[random(_loc4_.length)];
            var _loc6_ = 0;
            while(_loc6_ < _all_feizi.length){
               var _loc7_ = _all_feizi[_loc6_];
               if(_loc7_.名字 !== undefined)
               {
                  if(_loc7_.名字 == _loc5_.母亲)
                  {
                     var _loc8_ = _loc7_;
                  }
               }
               _loc6_ += 1;
            }
            if(_loc5_._code == 9900){
               id('taijianbgText').innerText = "皇宫太大，刺客不巧闯入" + _loc5_.名称 + "殿下的房间，正准备行刺时，" + _loc5_.名称 + "殿下回首一枪刺死了刺客。";
               记录大事件的程序("刺客闯入" + _loc5_.名称 + "殿下的房间，" + _loc5_.名称 + "殿下回首一枪刺死了刺客。");
               太监图(7);
            }
            else if(_loc5_._code == 8900){
               id('taijianbgText').innerText = "皇宫太大，刺客不巧闯入" + _loc5_.名称 + "殿下的房间，正巧红教头经过至此，红教头一剑刺死了刺客。";
               记录大事件的程序("刺客闯入" + _loc5_.名称 + "殿下的房间，红星寿保护了" + _loc5_.名称 + "殿下。");
               太监图(7);
            }
            else{
               判定这个子女死亡(_loc5_);
               id('taijianbgText').innerText = "皇宫太大，刺客不巧闯入" + _loc5_.名称 + "殿下的房间，一刀刺中要害，御林军赶来当场斩杀了刺客，但" + _loc5_.名称 + "殿下已经不行了。";
               记录大事件的程序("刺客闯入" + _loc5_.名称 + "殿下的房间，一刀刺中要害，太医赶来时已经无力回天了。");
               太监图(1);
            }
            id('tjBgCon').onclick = function(){
               结束固定事件程序();
            };
         }
         else if(_loc2_ >= 10 && _loc2_ < 12 && _loc3_.length > 0){
            _loc5_ = 排序妃子们的数值(7);
            var _loc9_ = Math.round(_loc5_.武力 / 10) + 1;
            if(random(_loc9_) > 4 && _loc5_.武力 > 80){
               id('taijianbgText').innerText = "刺客闯入皇上寝宫，一刀刺向皇上。\n原本站在旁边的" + _loc5_.封号 + _loc5_.位分 + "娘娘见状，与刺客殊死搏斗，保护了皇上。";
               记录大事件的程序("刺客闯入皇上寝宫，一刀刺向皇上。\n原本站在旁边的" + _loc5_.封号 + _loc5_.位分 + "娘娘见状，与刺客殊死搏斗，保护了皇上。");
               太监图(7);
            }
            else{
               id('taijianbgText').innerText = "刺客闯入皇上寝宫，一刀刺向皇上。\n原本站在旁边的" + _loc5_.封号 + _loc5_.位分 + "娘娘为了保护皇上，挡在了皇上身前，不幸被刺客杀害。";
               记录大事件的程序("刺客闯入皇上寝宫，一刀刺向皇上。\n原本站在旁边的" + _loc5_.封号 + _loc5_.位分 + "娘娘为了保护皇上，挡在了皇上身前，不幸被刺客杀害。");
               太监图(1);
               删除这个妃子的值(_loc5_);
            }
            id('tjBgCon').onclick = function(){
               结束固定事件程序();
            };
         }
         else if(_loc2_ == 0 && 属性.武力 > 500){
            id('taijianbgText').innerText = "皇上手持扇子，以一对五。\n将刺客全部拿下。";
            记录大事件的程序("皇上手持扇子，以一对五。\n将刺客全部拿下。");
            太监图(7);
            id('tjBgCon').onclick = function(){
               结束固定事件程序();
            };
         }
         else{
            记录大事件的程序("刺客全被御林军抓住了。\n虚惊一场。");
            id('taijianbgText').innerText = "刺客全被御林军抓住了。\n虚惊一场。";
            太监图(3);
            id('tjBgCon').onclick = function(){
               结束固定事件程序();
            };
         }
      };
   };
}
function 城市升级喜报播报(){}
function 穷死了结局(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "启禀皇上，官员，将士拖欠俸禄多日。";
   太监图(5);
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "国库已经很长时间都没进过银子了。";
      太监图(1);
      id('tjBgCon').onclick = function(){
         太监图(5);
         id('taijianbgText').innerText = "(很遗憾，提前进入结局)";
         id('tjBgCon').onclick = function(){
            死亡判定(4);
            结束固定事件程序();
         };
      };
   };
}
function 饿死了结局(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "启禀皇上，宫内已经断粮多日。";
   太监图(5);
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "国家已经很长时间都没收过粮食了。";
      太监图(1);
      id('tjBgCon').onclick = function(){
         太监图(5);
         id('taijianbgText').innerText = "(很遗憾，提前进入结局)";
         id('tjBgCon').onclick = function(){
            死亡判定(4);
            结束固定事件程序();
         };
      };
   };
}
function 十年修缮事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '50px';
   id('taijiantu').style.display = 'block';
   var i = 21 * 2 + 1168;
   id('太监报告事情图').src = 'images/' + i + '.webp';
   id('taijianbgText').innerText = "皇上登基已过十年。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "各地百姓送来上好的建材庆贺。\n皇宫大殿进行修缮。";
      太监图(2);
      id('tjBgCon').onclick = function(){
         id('taijianbgText').innerText = "(大殿修缮类事件解锁)。";
         记录大事件的程序("大殿第一次修缮。");
         太监图(4);
         id('tjBgCon').onclick = function(){
            主角.大殿 = 2;
            结束固定事件程序();
         };
      };
   };
}
function 二十年修缮事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '50px';
   var i = 21 * 2 + 1168;id('taijiantu').style.display = 'block';
   id('太监报告事情图').src = 'images/' + i + '.webp';
   id('taijianbgText').innerText = "皇上登基已过了二十年。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "各地百姓送来上好的建材庆贺。\n皇宫大殿进行修缮。";
      太监图(2);
      id('tjBgCon').onclick = function(){
         id('taijianbgText').innerText = "大殿好像比以前更好了。";
         记录大事件的程序("大殿第二次修缮。");
         太监图(4);
         id('tjBgCon').onclick = function(){
            主角.大殿 = 3;
            结束固定事件程序();
         };
      };
   };
}
function 三十年修缮事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '50px';
   var i = 21 * 2 + 1168;id('taijiantu').style.display = 'block';
   id('太监报告事情图').src = 'images/' + i + '.webp';
   id('taijianbgText').innerText = "皇上登基已过了三十年。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "各地百姓送来上好的建材庆贺。\n皇宫大殿进行修缮。";
      太监图(2);
      id('tjBgCon').onclick = function(){
         id('taijianbgText').innerText = "大殿被修缮一新。";
         记录大事件的程序("登基三十年，大殿第三次修缮。");
         太监图(4);
         id('tjBgCon').onclick = function(){
            主角.大殿 = 4;
            结束固定事件程序();
         };
      };
   };
}
function 东突厥来使事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "皇上，东突厥来使求见。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "现在已在礼明殿。";
      太监图(4);
      id('tjBgCon').onclick = function(){
         var 面板啊 = attachMovie("礼明殿面板","礼明殿面板",12012,{_x:0,_y:0});
         面板啊.使者0.gotoAndStop(6);
         面板啊.使者1.gotoAndStop(6);
         面板啊.离开.text = "";
         面板啊.按._visible = false;
         面板啊.按.onclick = function(){
         };
         var 对话框什么 = 面板啊.attachMovie("礼明殿对话","礼明殿对话",212,{_x:0,_y:0});
         对话框什么.文本.text = "中原王。\n我等奉突厥圣天大可汗之命前来。\n如贵邦能向我突厥进贡2000万两白银和美女百名。\n我国将会考虑改善两国的外交。\n突厥铁骑横扫大半个世界，大可汗让你慎重考虑。";
         面板啊.attachMovie("二级按钮-红色","答应",600,{_x:420,_y:300});
         面板啊.答应.文本.text = "答应";
         面板啊.答应.an.onclick = function(){
            面板啊.答应._visible = false;
            面板啊.拒绝._visible = false;
            对话框什么.文本.text = "中原王果然是个明理之人。\n大可汗定十分愉快。";
            _all_nation[2].外交 = 3;
            国家.金钱 -= 20000000;
            属性.威望 = 50;
            属性.快乐 = 60;
            更新资料();
            对话框什么.an.onclick = function(){
               面板啊.removeMovieClip();
               id('taijianbgText').innerText = "皇上做得对，识时务者为俊杰。";
               记录大事件的程序("我国对突厥进贡2000万两白银。");
               太监图(1);
               id('tjBgCon').onclick = function()
               {
                  结束固定事件程序();
               };
            };
         };
         面板啊.attachMovie("二级按钮-红色","拒绝",602,{_x:530,_y:300});
         面板啊.拒绝.文本.text = "拒绝";
         面板啊.拒绝.an.onclick = function(){
            面板啊.答应._visible = false;
            面板啊.拒绝._visible = false;
            对话框什么.文本.text = "中原王需明白，大汗想取贵国领土如探囊取物。\n好自为知。";
            _all_nation[2].外交 = 0;
            _all_nation[2].友好度 = 0;
            _all_nation[2].贸易额 = 0;
            _all_nation[2].贸易年数 = 0;
            对话框什么.an.onclick = function(){
               面板啊.removeMovieClip();
               id('taijianbgText').innerText = "皇上做得对，是可忍孰不可忍。";
               记录大事件的程序("突厥来使威胁，皇上表示不屈服。");
               太监图(8);
               id('tjBgCon').onclick = function()
               {
                  结束固定事件程序();
               };
            };
         };
      };
   };
}
function 日本来使事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "皇上，日本来使求见。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "现在已在礼明殿。";
      太监图(4);
      id('tjBgCon').onclick = function(){
         var 面板啊 = attachMovie("礼明殿面板","礼明殿面板",12012,{_x:0,_y:0});
         面板啊.使者0.gotoAndStop(4);
         面板啊.使者1.gotoAndStop(4);
         面板啊.离开.text = "";
         面板啊.按._visible = false;
         面板啊.按.onclick = function(){
         };
         var 对话框什么 = 面板啊.attachMovie("礼明殿对话","礼明殿对话",212,{_x:0,_y:0});
         对话框什么.文本.text = "中原王。\n我大和天皇陛下实在不想对贵国用兵。\n如贵国割淮南予我国，可免刀剑冲突。\n这只能让贵国百姓遭殃。";
         面板啊.attachMovie("二级按钮-红色","答应",600,{_x:420,_y:300});
         面板啊.答应.文本.text = "答应";
         面板啊.答应.an.onclick = function(){
            面板啊.答应._visible = false;
            面板啊.拒绝._visible = false;
            对话框什么.文本.text = "中原王果然是个明理之人。\n天皇陛下定十分愉快。";
            _all_nation[1].外交 = 1;
            属性.威望 -= 100;
            属性.快乐 -= 10;
            var _loc2_ = 获取知府和总兵程序(25);
            删除指定官员的程序(_loc2_.知府);
            删除指定官员的程序(_loc2_.总兵);
            删除指定官员的程序(_loc2_.通判);
            _all_city[25].归属 = 1;
            生成这个城市的兵力(_all_city[25]);
            更新资料();
            对话框什么.an.onclick = function(){
               面板啊.removeMovieClip();
               id('taijianbgText').innerText = "皇上……\n真的把淮南割出去了?";
               记录大事件的程序("签订丧权辱国条约。");
               太监图(1);
               id('tjBgCon').onclick = function()
               {
                  结束固定事件程序();
               };
            };
         };
         面板啊.attachMovie("二级按钮-红色","拒绝",602,{_x:530,_y:300});
         面板啊.拒绝.文本.text = "拒绝";
         面板啊.拒绝.an.onclick = function(){
            面板啊.答应._visible = false;
            面板啊.拒绝._visible = false;
            对话框什么.文本.text = "你竟然无视我们天皇陛下的好意。\n好自为知。";
            _all_nation[1].外交 = 0;
            _all_nation[1].友好度 = 0;
            _all_nation[1].贸易额 = 0;
            _all_nation[1].贸易年数 = 0;
            对话框什么.an.onclick = function(){
               面板啊.removeMovieClip();
               id('taijianbgText').innerText = "皇上，日本乃区区弹丸之地。\n犯我中华,虽远必诛！";
               记录大事件的程序("日本来使威胁，皇上表示不屈服。");
               太监图(8);
               id('tjBgCon').onclick = function()
               {
                  结束固定事件程序();
               };
            };
         };
      };
   };
}
function 妃子拍卖首饰事件(){
   var _loc2_ = [];
   var _loc1_ = 0;
   while(_loc1_ < _all_feizi.length){
      if(_all_feizi[_loc1_].名字 !== undefined){
         _all_feizi[_loc1_].爱 -= 50;
         _loc2_.push(_all_feizi[_loc1_]);
      }
      _loc1_ += 1;
   }
   属性.威望 -= 80;
   国家.金钱 += 150000 * _loc2_.length;
   更新资料();
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '50px';
   var i = 21 * 2 + 1168;id('taijiantu').style.display = 'block';
   id('太监报告事情图').src = 'images/' + i + '.webp';
   id('taijianbgText').innerText = "皇上，国库空虚。\n后宫的各位娘娘自觉拿出金银细软首饰衣物，或直接捐赠国库，或拍卖了捐赠所得银两。\n虽然缓解了国库空虚的燃眉之急，但此事民间传闻甚广，不免影响皇威啊。";
   记录大事件的程序("国库空虚，宫内嫔妃变卖首饰捐赠。");
   太监图(1);
   id('tjBgCon').onclick = function(){
      结束固定事件程序();
   };
}
function 官员不发放俸禄事件(){
   var _loc1_ = 0;
   while(_loc1_ < _all_rencai.length){
      var _loc2_ = random(2);
      if(_loc2_ == 1){
         _all_rencai[_loc1_].忠诚 -= 2;
      }
      if(_all_rencai[_loc1_].忠诚 < 20){
         _all_rencai[_loc1_].忠诚 = 20;
      }
      _loc1_ += 1;
   }
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '50px';
   var i = 21 * 2 + 1168;id('taijiantu').style.display = 'block';
   id('太监报告事情图').src = 'images/' + i + '.webp';
   id('taijianbgText').innerText = "皇上，国库已无存银。\n本月的官员俸禄无法发放。\n百官之中流言蜚语散播。";
   记录大事件的程序("国库已无存银，宫内压缩开支。");
   太监图(1);
   id('tjBgCon').onclick = function(){
      结束固定事件程序();
   };
}
function 军队不发粮食事件(){
   var _loc1_ = 0;
   while(_loc1_ < _all_army.length){
      _all_army[_loc1_].兵力 = Math.round(_all_army[_loc1_].兵力 * 0.2);
      _loc1_ += 1;
   }
   国家.士兵 = Math.round(国家.士兵 * 0.2);
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '50px';
   var i = 21 * 2 + 1168;id('taijiantu').style.display = 'block';
   id('太监报告事情图').src = 'images/' + i + '.webp';
   id('taijianbgText').innerText = "皇上，国库已无存粮。\n本月的军粮无法发放。\n国家大部分士兵已经逃散。";
   记录大事件的程序("国库已无存粮，士兵大量逃散。");
   太监图(1);
   id('tjBgCon').onclick = function(){
      结束固定事件程序();
   };
}
function 皇帝禅让事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   太监图(5);
   id('taijianbgText').innerText = "皇上您想禅让？可是皇上，您身体还很健康。";
   太监图(3);
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "可是国家不能一日无君，让太子继位吗？";
      太监图(1);
      id('tjBgCon').onclick = function(){
         id('taijianbgText').innerText = "那禅让仪式，我通知内务府和太子府尽快准备。";
         记录大事件的程序("禅让仪式开始，皇帝让位，太子登基。");
         太监图(4);
         id('tjBgCon').onclick = function(){
            id('taijianBg').style.display = 'none';
            死亡判定(2);
         };
      };
   };
}
function 健康很低的御医事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "皇上，皇上……。";
   太监图(4);
   id('tjBgCon').onclick = function(){
      var _loc1_ = random(3);
      if(_loc1_ == 0){
         id('taijianbgText').innerText = "御医，快传御医。皇上吐血了……";
      }
      else if(_loc1_ == 1){
         id('taijianbgText').innerText = "不好，快叫御医。\n皇上晕过去了，快叫御医……";
      }
      else if(_loc1_ == 2){
         id('taijianbgText').innerText = "皇上突然在大殿晕过去，快叫御医……";
      }
      记录大事件的程序("皇上劳累过度，晕倒。");
      太监图(3);
      id('tjBgCon').onclick = function(){
         id('youyuan').style.display = 'block';
         id('yyBG').src =LJ +  "a0aPic_BG/Tu_987203.webp";
         id('yyText').innerText = "御医们前来诊断，情况渐渐好转。";
         id('yykuang') .onclick = function(){
            id('yyText').innerText= "(皇上要注意健康，不要太劳累了。)";
            id('yykuang') .onclick = function(){
               属性.健康 = 70;
               主角.生病次数 += 2;
               属性.寿命 -= random(20) + 10 * 主角.生病次数;
               更新资料();
               id('youyuan').style.display = 'none';
               结束固定事件程序(1);
            };
         };
      };
   };
}
function 妃子群沐图事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   id('taijianbgText').innerText = "看皇上闷闷不乐的。";
   太监图(6);
   id('tjBgCon').onclick = function(){
      id('taijianbgText').innerText = "不如，奴才找些妃子来伺候下皇上。";
      太监图(6);
      id('tjBgCon').onclick = function(){
         缓动黑幕();
         id('youyuan').style.display = 'block';
         id('yyBG').src =LJ +  "a0aPic_BG/Tu_233333.webp";
         id('yyText').innerText = "鸳鸯浴，很愉快……";
         id('yykuang') .onclick = function(){
            id('yyText').innerText = "(快乐增加)";
            id('yykuang') .onclick = function(){
               属性.快乐 = 100;
               更新资料();
               id('youyuan').style.display = 'none';
               结束固定事件程序();
               var _loc2_ = 0;
               while(_loc2_ < 剧情汇总.length)
               {
                  if(剧情汇总[_loc2_]._code == 6)
                  {
                     剧情汇总[_loc2_].达成 = 1;
                  }
                  _loc2_ += 1;
               }
            };
         };
      };
   };
}
function 祭祖事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '50px';
   var i = 27 * 2 + 1168;id('taijiantu').style.display = 'block';
   id('太监报告事情图').src = 'images/' + i + '.webp';
   id('taijianbgText').innerText = "皇上，今年秋天该去祭祖了。皇上准备亲自去祭祖还是让皇子代去？";
   太监图(4);id('tjBgCon').style.display = 'none';id('tjBgCho').style.display = 'block';
   id('tjBgan0').innerText = "亲自祭祖";
   id('tjBgan1').innerText = "皇子代去";
   id('tjBgan0').onclick = function(){
      id('tjBgCho').style.display = 'none';
      id('tjBgCon').style.display = 'block';id('taijiantu').style.display = 'none';id('tjjj').style.top = '0px';
      id('taijianbgText').innerText = "皇上英明。\n奴才这就去安排。";
      太监图(6);
      记录大事件的程序("皇帝亲自前往祭祖。");
      id('tjBgCon').onclick = function(){
         id('youyuan').style.display = 'block';id('yyBG').src =LJ +  "a0aPic_BG/Tu_348763.webp";
         id('yyText').innerText = "皇上亲自前往祭祖。";
         id('yykuang').onclick = function(){
            id('youyuan').style.display = 'none';缓动黑幕();
         };
         属性.道德 += 50 + random(50);
         更新资料();	
         id('taijianbgText').innerText = "祭祀典礼虽操办辛苦，但终显孝道。\n道德增加。";
         id('tjBgCon').onclick = function(){
            结束固定事件程序();
         };
      };
   };
   id('tjBgan1').onclick = function(){
      var _loc1_ = [];
      i = 0;
      while(i < _all_child.length){
         if(_all_child[i].年龄 >= 16 && _all_child[i].性别 == 0 && _all_child[i].状态 == 0){
            _loc1_.push(_all_child[i]);
         }
         i++;
      }
      if(_loc1_.length == 0){
         小提示("皇子们还都太小，无法代去");
      }
      else{
         id('tjBgCho').style.display = 'none';
         id('tjBgCon').style.display = 'block';
         子女一览程序(10);
         id('taijianbgText').innerText = "皇上是属意于这位皇子啊。奴才马上给皇子安排行程。（皇子在朝中势力增加）";
         太监图(4);
         id('tjBgCon').onclick = function(){
            结束固定事件程序();
         };
      }
   };
}
function 比目鱼密函事件(){
   if(主角.事件库.比目鱼密函事件 == 0){
      主角.事件库.比目鱼密函事件 = 1;
      缓动黑幕();
      id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
      太监图(4);
      id('taijianbgText').innerText = "启禀皇上，" + 颜色代码("鱼叔","ff0000") + "密函一封，请皇上过目。\n上面写着:\n“皇上是否会继续支持比目鱼策略游戏?”";
      对象.太监.图.gotoAndStop(19);
      对象.太监.图._visible = false;
      id('tjBgCon').onclick = function(){
      };
      固定事件的是否选择(对象.太监);
      对象.太监.是.文本.text = "支持";
      对象.太监.否.文本.text = "支持";
      对象.太监.是.按.onclick = function(){
         id('tjBgCho').style.display = 'none';
         if(random(2) == 0){
            送药一次程序("昆仑仙豆","健康",50);
         }
         else{
            送药一次程序("伸腿瞪眼丸","健康",50);
         }
         id('taijianbgText').innerText = "皇上英明。\n感受策略游戏，最有意思了。\n(^_^)";
         太监图(2);
         id('tjBgCon').onclick = function(){
            结束固定事件程序();
         };
      };
      对象.太监.否.按.onclick = function(){
         id('tjBgCho').style.display = 'none';
         if(random(2) == 0){
            送药一次程序("夜夜笙歌香","兴奋",50);
         }
         else{
            送药一次程序("春水流香丸","兴奋",50);
         }
         id('taijianbgText').innerText = "皇上英明。\n感受策略游戏，最有意思了。\n(^_^)";
         太监图(6);
         id('tjBgCon').onclick = function(){
            结束固定事件程序();
         };
      };
   }
   else{
      需要判断跳过这个事件的程序();
   }
}
function 比目鱼山寨兵团事件(){
   if(主角.事件库.比目鱼山寨兵团事件 == 0){
      主角.事件库.比目鱼山寨兵团事件 = 1;
      缓动黑幕();
      id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
      太监图(4);
      id('taijianbgText').innerText = "启禀皇上，流寇" + 颜色代码("比目鱼","ff0000") + "手下的山寨军团十五万人马希望朝廷能够招安。\n皇上愿意招收他们么?";
      对象.太监.图.gotoAndStop(19);
      对象.太监.图._visible = false;
      id('tjBgCon').onclick = function(){
      };
      固定事件的是否选择(对象.太监);
      对象.太监.是.文本.text = "收入军营";
      对象.太监.否.文本.text = "打发离开";
      对象.太监.是.按.onclick = function(){
         id('tjBgCho').style.display = 'none';
         id('taijianbgText').innerText = "皇上英明。\n为朝廷效命是他们天大的荣幸。";
         太监图(2);
         id('tjBgCon').onclick = function(){
            国家.士兵 += 150000;
            结束固定事件程序();
         };
      };
      对象.太监.否.按.onclick = function(){
         id('tjBgCho').style.display = 'none';
         id('taijianbgText').innerText = "皇上英明。\n朝廷正规军队岂能与草寇为伍。";
         太监图(6);
         id('tjBgCon').onclick = function(){
            结束固定事件程序();
         };
      };
   }
   else{
      需要判断跳过这个事件的程序();
   }
}
function 大臣女儿很漂亮事件(){
   缓动黑幕();
   id('taijianBg').style.display = 'block';id('tjjj').style.top = '0px';
   太监图(4);
   id('taijianbgText').innerText = "启禀皇上，昨日办差到" + 颜色代码("杨学士","ff0000") + "府上。\n杨府三个女儿都长得国色天香。\n皇上如有得闲，奴才就把他们领进宫来。";
   对象.太监.图.gotoAndStop(19);
   对象.太监.图._visible = false;
   id('tjBgCon').onclick = function(){
   };
   固定事件的是否选择(对象.太监);
   对象.太监.是.文本.text = "甚好";
   对象.太监.否.文本.text = "掌嘴";
   对象.太监.是.按.onclick = function(){
      id('tjBgCho').style.display = 'none';
      id('taijianbgText').innerText = "皇上英明。";
      太监图(6);
      id('tjBgCon').onclick = function(){
         结束固定事件程序();
      };
   };
   对象.太监.否.按.onclick = function(){
      id('tjBgCho').style.display = 'none';
      id('taijianbgText').innerText = "奴才罪该万死。";
      太监图(3);
      id('tjBgCon').onclick = function(){
         结束固定事件程序();
      };
   };
}
function 固定事件的是否选择取消(太监){
   太监.是._visible = false;
   太监.否._visible = false;
   太监.继续._visible = true;
}
function 固定事件的是否选择(太监){
   太监.继续._visible = false;
   太监.attachMovie("通用按钮","是",8000,{_x:太监.继续._x - 100,_y:太监.继续._y});
   太监.attachMovie("通用按钮","否",8001,{_x:太监.继续._x + 100,_y:太监.继续._y});
   太监.是.文本.text = "准奏";
   太监.否.文本.text = "搁置";
   太监.是.按.onclick = function(){
   };
   太监.否.按.onclick = function(){
   };
}
function 出基本对话事件图(){}
固定显示事件 = [];
每月丞相奏报 = [];
默认事件开关库 = [];
function 装入事件的逻辑判断(固定显示事件){
   var _loc2_ = 通过称呼查出后宫人员的程序("皇后");
}
function 剧情事件逻辑(){
   function 执行事件添加(){
      默认事件开关库.push("皇后送点心事件");
      默认事件开关库.push("生病是否去看望事件");
      默认事件开关库.push("比目鱼谴责事件");
      默认事件开关库.push("比目鱼密函事件");
      默认事件开关库.push("比目鱼山寨兵团事件");
      默认事件开关库.push("皇后送吃的事件");
      默认事件开关库.push("皇后生病请求事件");
      默认事件开关库.push("皇后骑马的事件");
   }
   function 皇后骑马的事件(){
      if(主角.事件库.皇后骑马的事件 == 0){
         主角.事件库.皇后骑马的事件 = 1;
         id('剧情对话').style.display = 'block';
         var _loc4_ = 通过称呼查出后宫人员的程序("皇后");
         新后宫图形读取程序(剧情对话.图,_loc4_.头像);
         对话打字效果("臣妾参见皇上，家父上月在塞外，购得一匹上好骏马。");
         剧情对话板.onclick = function(){
            对话打字效果("马匹虽是好马，但生性刚烈。京城内无一人能驯服得了。");
            var _loc2_ = ["带朕去看看","你太无聊了"];
            对话框出现按钮(剧情对话,_loc2_);
            剧情对话.选择按钮区.条0.onclick = function(){
               剧情对话.选择按钮区.removeMovieClip();
               对话打字效果("皇上，我有一表弟，从小在边境长大，擅长骑术。能否命他至侯爷府，将马匹带进宫?");
               var _loc3_ = 通过称呼查出后宫人员的程序("皇后");
               _loc3_.爱 = _loc3_.爱 + 10;
               剧情对话板.onclick = function()
               {
                  剧情对话板.onclick = function()
                  {
                  };
                  var _loc2_ = ["如此可以","让侍卫去"];
                  对话框出现按钮(剧情对话,_loc2_);
                  剧情对话.选择按钮区.条0.onclick = function()
                  {
                     剧情对话.选择按钮区.removeMovieClip();
                     对话打字效果("谢皇上。");
                     var _loc2_ = 通过称呼查出后宫人员的程序("皇后");
                     _loc2_.爱 = _loc2_.爱 + 10;
                     剧情对话板.onclick = function()
                     {
                        id('剧情对话').style.display = 'none';
                        处理固定事件程序();
                     };
                  };
                  剧情对话.选择按钮区.条1.onclick = function()
                  {
                     剧情对话.选择按钮区.removeMovieClip();
                     对话打字效果("好的，皇上。");
                     var _loc2_ = 通过称呼查出后宫人员的程序("皇后");
                     _loc2_.爱 = _loc2_.爱 - 10;
                     剧情对话板.onclick = function()
                     {
                        id('剧情对话').style.display = 'none';
                        处理固定事件程序();
                     };
                  };
               };
            };
            剧情对话.选择按钮区.条1.onclick = function(){
               剧情对话.选择按钮区.removeMovieClip();
               对话打字效果("臣妾多嘴了，臣妾该死。");
               var _loc2_ = 通过称呼查出后宫人员的程序("皇后");
               _loc2_.爱 = _loc2_.爱 - 10;
               剧情对话板.onclick = function()
               {
                  id('剧情对话').style.display = 'none';
                  处理固定事件程序();
               };
            };
         };
      }
      else{
         处理固定事件程序();
      }
   }
   function 皇后送吃的事件(){
      console.log("皇后送吃的事件");
      console.log("=========");
      if(主角.事件库.皇后送吃的事件 == 0){
         主角.事件库.皇后送吃的事件 = 1;
         id('剧情对话').style.display = 'block';
         var _loc4_ = 通过称呼查出后宫人员的程序("皇后");
         新后宫图形读取程序(剧情对话.图,_loc4_.头像);
         对话打字效果("臣妾参见皇上，连日劳累，皇上辛苦了。");
         剧情对话板.onclick = function(){
            对话打字效果("臣妾特地做了些家乡的糕点，请皇上休息片刻。");
            var _loc2_ = ["爱妃辛苦","没有心情"];
            对话框出现按钮(剧情对话,_loc2_);
            剧情对话.选择按钮区.条0.onclick = function(){
               剧情对话.选择按钮区.removeMovieClip();
               对话打字效果("皇上如此辛苦，臣妾却无法分担。请皇上不要太过劳累。");
               var _loc2_ = 通过称呼查出后宫人员的程序("皇后");
               _loc2_.爱 = _loc2_.爱 + 10;
               剧情对话板.onclick = function()
               {
                  id('剧情对话').style.display = 'none';
                  处理固定事件程序();
               };
            };
            剧情对话.选择按钮区.条1.onclick = function(){
               剧情对话.选择按钮区.removeMovieClip();
               对话打字效果("打扰了皇上的思路。臣妾该死，臣妾这就退下。");
               var _loc2_ = 通过称呼查出后宫人员的程序("皇后");
               _loc2_.爱 = _loc2_.爱 - 10;
               剧情对话板.onclick = function()
               {
                  id('剧情对话').style.display = 'none';
                  处理固定事件程序();
               };
            };
         };
      }
      else{
         处理固定事件程序();
      }
   }
   function 皇后生病请求事件(){
      if(主角.事件库.皇后生病请求事件 == 0){
         主角.事件库.皇后生病请求事件 = 1;
         id('剧情对话').style.display = 'block';
         var _loc4_ = 通过称呼查出后宫人员的程序("皇后");
         新后宫图形读取程序(剧情对话.图,_loc4_.头像);
         对话打字效果("(皇后生病已近一个月了)臣妾不能起身参见皇上，请皇上赐罪。");
         剧情对话板.onclick = function(){
            对话打字效果("风寒之疾，已有半月，仍不见好。");
            var _loc3_ = ["留下照顾","责罚御医"];
            对话框出现按钮(剧情对话,_loc3_);
            剧情对话.选择按钮区.条0.onclick = function(){
               剧情对话.选择按钮区.removeMovieClip();
               对话打字效果("皇上日理万机，因臣妾而耽误国家大事……。");
               var _loc2_ = 通过称呼查出后宫人员的程序("皇后");
               _loc2_.爱 = _loc2_.爱 + 10;
               _loc2_.病 = 2;
               剧情对话板.onclick = function()
               {
                  id('剧情对话').style.display = 'none';
                  处理固定事件程序();
               };
            };
            剧情对话.选择按钮区.条1.onclick = function(){
               剧情对话.选择按钮区.removeMovieClip();
               对话打字效果("皇上休要动怒，御医已尽心为臣妾医病。只怪臣妾身体不争气。");
               var _loc2_ = 通过称呼查出后宫人员的程序("皇后");
               _loc2_.爱 = _loc2_.爱 + 5;
               _loc2_.病 = 5;
               剧情对话板.onclick = function()
               {
                  id('剧情对话').style.display = 'none';
                  处理固定事件程序();
               };
            };
         };
      }
      else{
         处理固定事件程序();
      }
   }
}
function 桂公公获得珍宝事件(){
    id('剧情对话').style.display = 'block';
    新后宫图形读取程序(剧情头像,42,"特殊");
    if(季 == 1){
        新后宫图形读取程序(剧情背景,111343126,"背景");
    }
    else if(季 == 2){
        新后宫图形读取程序(剧情背景,111343127,"背景");
    }
    else if(季 == 3){
        新后宫图形读取程序(剧情背景,111343128,"背景");
    }
    else if(季 == 4){
        新后宫图形读取程序(剧情背景,111343129,"背景");
    }
    var 什么东西 = 来一个宝贝();
    对话打字效果("皇上，桂公公让小的带一件珍宝给皇上。");
    剧情对话板.onclick = function(){
        var _loc2_ = [];
        _loc2_.push("据说是从一流浪汉手中购得。");
        _loc2_.push("据说是当地乡绅托公公带给皇上的。");
        _loc2_.push("据说是从当地地痞中缴获的。");
        _loc2_.push("据说是从九门提督府里找到的。");
        _loc2_.push("据说是从外域商贩手中购得。");
        _loc2_.push("据说是从在西直门菜市场发现的。");
        _loc2_.push("据说是从当地百姓赠送给桂公公的。");
        _loc2_.push("据说是从附近的山贼据点缴获的。");
        对话打字效果(_loc2_[random(_loc2_.length)]);
        剧情对话板.onclick = function(){
            对话打字效果("珍宝【" + 什么东西 + "】获得。");
            剧情对话板.onclick = function(){
               id('剧情对话').style.display = 'none';
            };
         };
      };
   }
function 西洋铁炮(){}
var 剧情事件逻辑 = 剧情事件逻辑();