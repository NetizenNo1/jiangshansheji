function 太医院程序(){
    id("qita").style.display="block";
	id("taiyiyuan").style.display="block";
	id('qitaTittle').innerText = '太医院';
	id('qitalikai').onclick = function (){id("taiyiyuan").style.display="none";id("qita").style.display="none";};
	id('qitaBG').src =LJ +  'a0aPic_BG/Tu_7.webp';
    id("wangyaoc").onclick = function(){
    id('neishiMB').style.display = 'block';
    id('neishiBG').style.display = 'none';
    id('neishi2').style.display = 'block';
    id('nsan4').style.display = 'block';id('nsan5').style.display = 'block';id('nsan6').style.display = 'block';id('nsan7').style.display = 'block';
    id('neishiTitle').innerText = '太医院';
    id('nsan0').innerText = '供药局';
    id('nsan1').innerText = '查看成药';
    id('nsan2').innerText = '把平安脉';
    id('nsan3').innerText = '医治妃嫔';
    id('nsan4').innerText = '太医值班';
	id('nsan5').innerText = '人员详情';
    id('nsan6').innerText = '招募太医';
	id('nsan7').innerText = '医治子女';
    id('neishiText').innerText = "王耀辰恭迎陛下。\n供药局：选择每月进贡的成药数量和费用。\n查看成药：查看或使用已有的成药。\n把平安脉：少量恢复健康和体力。\n医治妃子：治疗效果视太医医术决定。\n太医值班：宫中妃子生病或难产率降低。";
    id('nsan0').onclick = function (){id('neishiMB').style.display = 'none';供药局程序()};
	id('nsan1').onclick = function (){id('neishiMB').style.display = 'none';查看成药程序();};
    id('nsan2').onclick = function (){id('neishiMB').style.display = 'none';把平安脉程序();};
    id('nsan3').onclick = function (){嫔妃一览程序(10);};
    id('nsan4').onclick = function (){选择去哪个宫殿(40);};
	id('nsan5').onclick = function (){安排御医(0);};
	id('nsan6').onclick = function (){招募太医();};
    id('nsan7').onclick = function (){id('neishiMB').style.display = 'none';子女一览程序(13);};
   };
}
function 招募太医(){
	var _loc2_ = [];
	var i =0;
	while(i<_all_doctor.length){
		if(_all_doctor[i].开启==0&&i>13){
			_loc2_.push(i);
		}
		i++;
	}
	if(_loc2_.length>0){
		var _loc3_ = _loc2_[0];
		_all_doctor[_loc3_].开启=1;
		_all_doctor[_loc3_].名称 = 姓[random(姓.length)] + 只取名程序("男");
		if(random(10)>4){
			_all_doctor[_loc3_].治疗 = random(3)+2;
			_all_doctor[_loc3_].保胎 = random(3)+1;
			_all_doctor[_loc3_].预防 = random(3)+1;
		}
		else if(random(10)<3){
			_all_doctor[_loc3_].治疗 = random(3)+3;
			_all_doctor[_loc3_].保胎 = random(3)+2;
			_all_doctor[_loc3_].预防 = random(3)+2;
		}
		else{
			_all_doctor[_loc3_].治疗 = random(3)+5;
			_all_doctor[_loc3_].保胎 = random(3)+4;
			_all_doctor[_loc3_].预防 = random(3)+5;
		}
		if(主角.当前时辰==3){
			id("taiyiyuan").style.display="none";id("qita").style.display="none";id('neishiMB').style.display = 'none';
		}
		出圣旨("命太医院招募太医以侍奉皇宫，即刻执行，不得有误。",1);
	}
	else{
		小提示("太医数量已达上限！！")
	}
}
function 安排御医(参数,选宫面板){
	id("qxzb").style.display = "none";
    id('jiajuanyilan').style.display = 'block';
    id('jjText').innerText = '太医列表';
    id('jia2').innerText = '';
    id('jia3').innerText = '能力';
    id('jia5').innerText = '任务';
    id('jia7').innerText = '';
    id('jia3').style.display = 'block';
    id('jia4').style.display = 'none';
    id('jia6').style.display = 'none';
    临时太医列表 = [];
    if(参数 == 0){
        var _loc2_ = 0;
        while(_loc2_ < _all_doctor.length){
            if(_all_doctor[_loc2_].开启 == 1){
                临时太医列表.push(_all_doctor[_loc2_]);
         }
         _loc2_ = _loc2_ + 1;
      }
   }
   else if(参数 == 1){
      _loc2_ = 0;
      while(_loc2_ < _all_doctor.length){
         if(_all_doctor[_loc2_].开启 == 1 && _all_doctor[_loc2_].任务中 == 0){
            临时太医列表.push(_all_doctor[_loc2_]);
         }
         _loc2_ = _loc2_ + 1;
      }
      id("qxzb").style.display = "block";
      id("qxzb").onclick = function(){
		  if(选宫面板.太医 !== undefined){
			  _all_doctor[选宫面板.太医].任务中 = 0;
			  _all_doctor[选宫面板.太医].宫 = undefined;
			  选宫面板.太医 = undefined;
		  }
         id('jiajuanyilan').style.display = 'none';
         选择去哪个宫殿(40);
      };
   }
   else if(参数 == 2 || 参数 == 3){
      _loc2_ = 0;
      while(_loc2_ < _all_doctor.length){
         if(_all_doctor[_loc2_].开启 == 1 && _all_doctor[_loc2_].任务中 == 0){
            临时太医列表.push(_all_doctor[_loc2_]);
         }
         _loc2_ = _loc2_ + 1;
      }
   }
   序列 = 0;
   更新太医信息(临时太医列表,参数,选宫面板);
   id('jiajuanqian').onclick = function(){
      if(序列 > 0){
         序列 -= 1;
         更新太医信息(临时太医列表,参数,选宫面板,);
      }
   };
   id('jiajuanhou').onclick = function(){
      if(序列 < Math.round(临时太医列表.length / 10)){
         序列 += 1;
         更新太医信息(临时太医列表,参数,选宫面板);
      }
   };
}
function 更新太医信息(临时太医列表,参数,选宫面板){
   var _loc4_ = 0;
   while(_loc4_ < 10){
      var _loc3_ = 临时太医列表[序列 * 10 + _loc4_];
      var _loc2_ = className('jiajuanlbx')[_loc4_];
      if(_loc3_ == undefined){_loc2_.style.display = 'none';}
      else{
		  _loc2_.style.display = 'block';
		  className('jj1')[_loc4_].style.color="#ffffff"
         className('jj1')[_loc4_].innerText = _loc3_.名称;
         className('jj3')[_loc4_].innerText= _loc3_.预防;
         if(_loc3_.任务中 == 0){
            className('jj5')[_loc4_].innerText = "无";
         }
         else if(_loc3_.任务中 == 1){
            className('jj5')[_loc4_].innerText = "医治皇嗣";
         }
         else if(_loc3_.任务中 == 2){
            className('jj5')[_loc4_].innerText = "医治妃子";
         }
         else if(_loc3_.任务中 == 3){
            className('jj5')[_loc4_].innerText = _all_palace[_loc3_.宫].名称 + "当值";
         }
		 className('jj2')[_loc4_].innerText= "";className('jj4')[_loc4_].innerText= "";className('jj6')[_loc4_].innerText= "";className('jj7')[_loc4_].innerText= "";
         _loc2_.取 = _loc3_;
         _loc2_.onclick = function(){
            if(参数 == 0){
               展示太医(this.取);
            }
            else if(参数 == 1){
               id('后宫内').style.display = 'none';
			   治疗确认(this.取,选宫面板,3);
               id('jiajuanyilan').style.display = 'none';
            }
            else if(参数 == 2){
               治疗确认(this.取,选宫面板,0);
               id('jiajuanyilan').style.display = 'none';
            }
            else if(参数 == 3){
               治疗确认(this.取,选宫面板,1);
               id('jiajuanyilan').style.display = 'none';
            }
         };
      }
      _loc4_ = _loc4_ + 1;
   }
}
function 展示太医(取数据){
   id('介绍图').style.display = 'block';
   出现这个人的头像(id('介绍图头像'),取数据);
   id('介绍图名字').innerText = 取数据.名称;
   id('介绍图an2').style.display = 'block';
   id('介绍图an1').style.display = 'none';
   id('介绍图an0').style.display = 'none';
   id('介绍图an2').innerText ="辞退";
   id('介绍图an2').onclick = function(){
		id('介绍图').style.display = 'none';
		id('hukoupucha').style.display = 'block';
		id('huhouTitle').innerText = '辞退太医';
		id('huhouText').innerText = '确认要将太医'+取数据.名称+'辞退吗？';
		id('hkan0').innerText = '确定';
		id('hkan1').innerText = '取消';
		id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
		id('hkan0').onclick = function (){
		id('hukoupucha').style.display = 'none';id('jiajuanyilan').style.display = 'none';
			var i =0;
			while(i<_all_doctor.length){
				if(_all_doctor[i].id == 取数据.id&&_all_doctor[i].名称 == 取数据.名称){
					_all_doctor[i].开启=0;_all_doctor[i].任务中=0;
					if(_all_doctor[i].宫 !== undefined){
						_all_palace[取数据.宫].太医 = undefined;
					}
					_all_doctor[i].宫 = undefined;安排御医(0);
				}
				i++;
			}
		}
	}
   id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';}
   var _loc4_ = 导出介绍(取数据);
   id('介绍图介绍').innerText = "    " + _loc4_;
}
function 治疗确认(太医,数据,参数){
   id('剧情对话').style.display = 'block';
   剧情背景.src =LJ +  'a0aPic_BG/Tu_7.webp';
   出现这个人的头像(剧情头像,太医);
   if(太医.id == 0){
      对话打字效果("王耀辰：耀辰初进太医院的时候说过，只给陛下治病，其他人，不医。");
      剧情对话板.onclick = function(){
		  新后宫图形读取程序(剧情头像,0,"皇帝");
         对话打字效果("皇上：耀辰，你想抗旨不尊吗？");
         剧情对话板.onclick = function(){  
			 出现这个人的头像(剧情头像,太医);
            对话打字效果("王耀辰：反正又不是抗过一次两次了。╮(╯3╰)╭");
            剧情对话板.onclick = function(){
				新后宫图形读取程序(剧情头像,0,"皇帝");
               对话打字效果("皇上：你……");
               剧情对话板.onclick = function(){
				   新后宫图形读取程序(剧情头像,0,"特殊");
                  对话打字效果("（皇上拿他没辙，只好作罢）");
                  剧情对话板.onclick = function(){
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            };
         };
      };
   }
   else if(参数==0){
      太医.任务中 = 2;
      数据.病 -= 太医.治疗;
      if(数据.病 < 0){数据.病 = 0;}
      对话打字效果(太医.名称 + "：微臣这就去给" + 数据.封号 + 数据.位分 + "医治。");
      剧情对话板.onclick = function(){
         缓动黑幕();
         id('剧情对话').style.display = 'none';
		 嫔妃一览程序(10);
      };
   }
    else if(参数==1){
	    if(数据._code == 8900){
        对话打字效果(太医.名称 + "：" + 数据.名称 + "殿下只是体质较弱，并无大碍，无须医治，静养即可。");
        }
        else{
         太医.任务中 = 1;
         数据.病 -= 太医.治疗;
         if(数据.病 < 0){
            数据.病 = 0;
         }
         对话打字效果(太医.名称 + "：微臣这就去给" + 数据.名称 + "殿下医治。");
      }
      剧情对话板.onclick = function(){
         缓动黑幕();
         id('剧情对话').style.display = 'none';
      	 子女一览程序(13);
      };
   }
   else if(参数 == 3){
      if(数据.太医 !== undefined){
         _all_doctor[数据.太医].任务中 = 0;
         _all_doctor[数据.太医].宫 = undefined;
      }
      数据.太医 = 太医.id;
      太医.宫 = 数据.id;
      太医.任务中 = 3;
      对话打字效果(太医.名称 + "：微臣这就前往" + 数据.名称 + "当值。");
      剧情对话板.onclick = function(){
         缓动黑幕();
         id('剧情对话').style.display = 'none';
      	 选择去哪个宫殿(40);
      };
   }
}
function 产生成药(){
   var _loc1_ = random(1000);
   if(_loc1_ < 1){
      我的成药[9].数量 += 1;
   }
   else if(_loc1_ < 260){
      我的成药[1].数量 += 1;
   }
   else if(_loc1_ < 400){
      我的成药[2].数量 += 1;
   }
   else if(_loc1_ < 500){
      我的成药[3].数量 += 1;
   }
   else if(_loc1_ < 650){
      我的成药[4].数量 += 1;
   }
   else if(_loc1_ < 800){
      我的成药[5].数量 += 1;
   }
   else if(_loc1_ < 940){
      我的成药[6].数量 += 1;
   }
   else if(_loc1_ < 960){
      我的成药[7].数量 += 1;
   }
   else if(_loc1_ < 980){
      我的成药[8].数量 += 1;
   }
   else{
      我的成药[0].数量 += 1;
   }
}
function 把平安脉程序(){
   if(主角.把平安脉 == 0){
      主角.把平安脉 = 1;
      平安脉计算程序();
   }
   else{
      小提示("今日已经请过平安脉了。");
   }
}
function 平安脉计算程序(){
   属性.健康 += 5;
   属性.体力 += 5;
   更新资料();
   id('剧情对话').style.display = 'block';
   剧情背景.src =LJ +  'a0aPic_BG/Tu_7.webp';
   var _loc2_ = Math.round(属性.健康 / 20);
   if(_loc2_ <= 1){
      _loc3_="王耀辰： 陛下，您已经重病如此就不要随便乱跑了啊~！快点回养心殿休息~！微臣这就命人煎一副汤药送过去。（健康、体力少量增加）";
   }
   else if(_loc2_ == 2){
      _loc3_="王耀辰：陛下感染了一些风寒之症，悉心调理并无大碍，切勿再度劳累了，否则病情加重就麻烦了。（健康、体力少量增加）";
   }
   else if(_loc2_ == 3){
      _loc3_="王耀辰：陛下近日来似乎颇为劳累，微臣建议还是多休息为好，否则积劳成疾就不好了。（健康、体力少量增加）";
   }
   else if(_loc2_ == 4){
      _loc3_="王耀辰：陛下脉象稳定，身体状况尚佳。 （健康、体力少量增加）";
   }
   else{
      _loc3_="王耀辰：陛下气色红润，经脉畅通，龙体安康，乃国之大幸。（健康、体力少量增加） ";
   }
   新后宫图形读取程序(剧情头像,0,"太医");
   对话打字效果(_loc3_);
   剧情对话板.onclick = function(){
      缓动黑幕();
      id('剧情对话').style.display = 'none';
   };
}
function 供药局程序(){
    id('sy').style.display = 'block';
    id('syb').style.display = 'block';
    id('syTitle').innerText = '';
    id('sysm').innerText = '';
    var i = 0;
    while(i < 15){
   	   if(i < 3||i==4){className('sydb')[i].style.display = 'block';}else{className('sydb')[i].style.display = 'none';}
   	i++;
    }
    className('sydb')[0].innerText = "常青堂";
	className('sydb')[0].onclick=function(){供药局确定(1);}
	className('sydb')[1].innerText = "清风堂";
	className('sydb')[1].onclick=function(){供药局确定(2);}
	className('sydb')[2].innerText = "静宜堂";
	className('sydb')[2].onclick=function(){供药局确定(3);}
	className('sydb')[4].innerText = "停止特供";
	className('sydb')[4].onclick=function(){供药局确定(0);}
}
function 供药局确定(参数){
	if(参数==0){
		_loc1_="停止特供";
		_loc2_="停止供奉，节省开销。";
		_loc3_="即日起，供药局停止宫廷特供。";
	}
	if(参数==1){
		_loc1_="清风堂";
		_loc2_="清风堂。以物美价廉闻名于世，平民百姓多来此买药。每月需10万两，可供奉两味成药。";
		_loc3_="即日起，宫廷供药局药品由清风堂特供。";
	}
	if(参数==2){
		_loc1_="常青堂";
		_loc2_="常青堂。以制药考究闻名于世，地主乡绅多来此买药。每月需50万两，可供奉三味成药。";
		_loc3_="即日起，宫廷供药局药品由常青堂特供。";
	}
	if(参数==3){
		_loc1_="静宜堂";
		_loc2_="静宜堂。以独家秘方闻名于世，达官显贵多来此买药。每月需100万两，可供奉四味成药";
		_loc3_="即日起，宫廷供药局药品由静宜堂特供。";
	}
	id('sy').style.display = 'none';
	id('hukoupucha').style.display = 'block';
	id('huhouTitle').innerText = _loc1_;
	id('huhouText').innerText = _loc2_;
	id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
	id('hkan0').onclick = function(){
	    id('hukoupucha').style.display = 'none';
		国家.供药局 = 参数;
		出圣旨(_loc3_);
	}
}
function 查看成药程序(){
   id('chengyao').style.display = 'block';
   i = 0;
   while(i < 10){
      className('cyxb')[i].属性 = 我的成药[i];
      className('cysl')[i].innerText = "X "+我的成药[i].数量;
	  className('cyxb')[i].innerText=我的成药[i].名称;
      className('cyxb')[i].onclick = function(){
         if(this.属性.数量 == 0){
            小提示("该药品库存不足");
         }
         else{
            使用这个成药(this.属性);
         }
      };
      i++;
   }
}
function 使用这个成药(对象){
    id('neishiMB').style.display = 'block';
    id('neishiBG').style.display = 'none';
    id('neishi2').style.display = 'none';
    id('neishiTitle').innerText = 对象.名称;
    id('neishiText').innerText = 对象.说明 +"\n皇上，这件成药：" + 对象.名称 + "您想怎么处理？";
    id('nsan0').innerText = '给自己用';
    id('nsan1').innerText = '赐予妃子';
    id('nsan2').innerText = '赐予大臣';
    id('nsan3').innerText = '赐予子女';
    id('nsan1').onclick = function (){嫔妃一览程序(7,对象);id('neishiMB').style.display = 'none';};
    id('nsan2').onclick = function (){人才列表显示(28,对象);id('neishiMB').style.display = 'none';};
    id('nsan3').onclick = function (){子女一览程序(8,对象);id('neishiMB').style.display = 'none';};
    id('nsan0').onclick = function (){
		id('neishiMB').style.display = 'none';
        if(对象.类 == "整"||对象.类 == "情"||对象.类 == "胎"||对象.类 == "堕"||对象.类 == "美"||对象.类 == "保"){
            小提示("这药不适合皇上用。");}
        else{自己吃掉这个成药(对象);}
    };
}
function 自己吃掉这个成药(成药){
	if(成药.类 == "体"){
	    属性.体力上限+=20;
	    成药.数量 -= 1;
	}
	else if(成药.类 == "健"){
	    属性.健康+=20;
	    成药.数量 -= 1;
	}
	else if(成药.类 == "智"){
	    属性.智力+=20;
	    成药.数量 -= 1;
	}
	else if(成药.类 == "政"){
	    属性.政治+=20;
	    成药.数量 -= 1;
	}
	else if(成药.类 == "武"){
	    属性.武力+=20;
	    成药.数量 -= 1;
	}
	更新资料();查看成药程序()
}
function 进入御书房(){
   id("qita").style.display="block";
   id('qitaBG').src =LJ +  'a0aPic_BG/Tu_3.webp';
   id("yushufang").style.display="block";id('qitaTittle').innerText = '御书房';
   id('qitalikai').onclick = function (){id("yushufang").style.display="none";id("qita").style.display="none";};
   id("caosuf").onclick = function(){
   id('neishiMB').style.display = 'block';
   id('neishiBG').style.display = 'none';
   id('neishi2').style.display = 'block';
   id('nsan4').style.display = 'block';id('nsan5').style.display = 'none';id('nsan6').style.display = 'none';id('nsan7').style.display = 'none';
   id('neishiTitle').innerText = '御书房';
   id('nsan0').innerText = '读书学习';
   id('nsan1').innerText = '没事闲聊';
   id('nsan2').innerText = '询问建议';
   id('nsan3').innerText = '教导皇子';
   id('nsan4').innerText = '课程安排';
   id('neishiText').innerText = "曹夙峰给主子请安。\n主子有什么事情拿不准，不妨和夙峰商量商量。\n5岁以上的皇子可出入御书房。";
   id('nsan0').onclick = function (){读书学习();};
   id('nsan1').onclick = function (){与曹夙峰闲聊程序();};
   id('nsan2').onclick = function (){询问曹夙峰建议程序();};
   id('nsan3').onclick = function (){子女一览程序(6);};
   id('nsan4').onclick = function (){课程安排(4);};
   };
}
function 读书学习(){
   id('neishiMB').style.display = 'none';id("yushufang").style.display="none";id("qita").style.display="none";
   学习事件处理(2);
   主角._relation_caosufeng += random(5);
}
function 与曹夙峰闲聊程序(){
   if(主角.与曹夙峰闲聊 == 1){
      小提示("一天到晚哪有那么多可聊的。-_-。！");
   }
   else{
      主角.与曹夙峰闲聊 = 1;
      主角._relation_caosufeng += random(5);
      if(主角.吕四娘 == 4){
         询问曹夙峰与吕四娘的关系();
      }
      else if(年 == 12&&季 == 4&&(主角.嘉宁 == 7 || 主角.嘉宁 == 8)){
         询问鸽子是怎么招来的();
      }
      else if(年 <= 2&&国家.事件一 == 0){
         曹夙峰教幼年小王爷();
      }
      else{
         id('剧情对话').style.display = 'block';
         剧情背景.src =LJ +  'a0aPic_BG/Tu_3.webp';
         var _loc2_ = random(7);
         if(_loc2_ == 0){
            新后宫图形读取程序(剧情头像,15,"特殊");
            对话打字效果("曹夙峰：主子最近可读书见少啊，别老一天到晚泡在后宫里行不？红颜祸水，没准哪天你就壮士了。");
            剧情对话板.onclick = function(){
               对话打字效果("（你嫉妒！这乌鸦嘴…… = =）");
               剧情对话板.onclick = function(){
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
         else if(_loc2_ == 1){
            新后宫图形读取程序(剧情头像,19,"特殊");
            对话打字效果("曹夙峰： 主子能不能给在下也分配个美人？在下也好歹这么大岁数了，不能总是陪着主子鬼混啊！唉~我的良人，你在哪里啊~！");
            剧情对话板.onclick = function(){
               对话打字效果("（不管多大岁数你还是这幅德行…… = =）");
               剧情对话板.onclick = function(){
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
         else if(_loc2_ == 2){
            新后宫图形读取程序(剧情头像,16,"特殊");
            对话打字效果("曹夙峰：今天在下伤了心，不想陪主子闲扯……（吹笛子去了） ");
            剧情对话板.onclick = function(){
               对话打字效果("（小太监：听说是因为调戏小宫女不成，被拒绝了……）");
               剧情对话板.onclick = function(){
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
         else if(_loc2_ == 3){
            新后宫图形读取程序(剧情头像,18,"特殊");
            对话打字效果("曹夙峰：主子，能不能管管星寿，在下种在御花园的那些花花草草，全让他练剑的时候给砍了！！！本来还想开花之后送给小宫女的……");
            剧情对话板.onclick = function(){
               对话打字效果("（星寿砍得好，断了这货的念想…… = =）");
               剧情对话板.onclick = function(){
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
         else if(_loc2_ == 4){
            新后宫图形读取程序(剧情头像,21,"特殊");
            对话打字效果("曹夙峰：嗯……这个词怎么填好呢？这样……？要不这样……？ ");
            剧情对话板.onclick = function(){
               对话打字效果("（还是不要打搅他了……）");
               剧情对话板.onclick = function(){
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
         else if(_loc2_ == 5){
            新后宫图形读取程序(剧情头像,15,"特殊");
            对话打字效果("曹夙峰：最近主子学习越来越不认真了，就连小主子们进御书房也有些怠慢了，真是上梁不正下梁歪…… ");
            剧情对话板.onclick = function(){
               对话打字效果("（明明就是你没好好教的缘故！成天去花园子里泡妹子…… = =）");
               剧情对话板.onclick = function(){
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
         else if(_loc2_ == 6){
            新后宫图形读取程序(剧情头像,21,"特殊");
            对话打字效果("曹夙峰：嗯？我为什么会跟着主子？……怎么会问这种问题？你是我的主子，御书房就是我的家啊！我必须跟着主子啊！ ");
            剧情对话板.onclick = function(){
               对话打字效果("（感觉背后有点发麻……）");
               剧情对话板.onclick = function(){
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
      }
   }
}
function 询问曹夙峰建议程序(){
   if(主角.曹夙峰的意见 == 1){
      小提示("今天已经询问过建议了");
   }
   else{
      主角.曹夙峰的意见 = 1;
      var 赋闲野心小的人才 = [];
      var 赋闲清廉高的人才 = [];
      i = 0;
      while(i < _all_rencai.length){
         if(_all_rencai[i].野心 < 30){
            赋闲野心小的人才.push(_all_rencai[i]);
         }
         else if(_all_rencai[i].清廉 > 80){
            赋闲清廉高的人才.push(_all_rencai[i]);
         }
         i++;
      }
      var 推荐的人才 = 赋闲野心小的人才[random(赋闲野心小的人才.length)];
      var 推荐清廉高的 = 赋闲清廉高的人才[random(赋闲清廉高的人才.length)];
      id('剧情对话').style.display = 'block';
      新后宫图形读取程序(剧情头像,19,"特殊");
         剧情背景.src =LJ +  'a0aPic_BG/Tu_3.webp';
      对话打字效果("皇上：夙峰，朝廷正值用人之际，你可有什么人选推荐啊。");
      剧情对话板.onclick = function(){
         if(赋闲野心小的人才.length == 0){
            对话打字效果("曹夙峰：主子，说实话，目前的赋闲人员里，要么野心勃勃，要么能力平庸，没有什么太合适的。");
            剧情对话板.onclick = function(){
               id('剧情对话').style.display = 'none';
               缓动黑幕();
            };
         }
         else{
            对话打字效果("曹夙峰：主子，" + 推荐的人才.名字 + "或许可以一用。");
            剧情对话板.onclick = function(){
               if(推荐的人才.智力 < 80&&推荐的人才.武力 < 80){
                  对话打字效果("曹夙峰：虽然" + 推荐的人才.名字 + "能力平平，但心机不深，很好控制，主子可以放心。");
               }
               else{
                  对话打字效果("曹夙峰：" + 推荐的人才.名字 + "能力较高，也没有很大的野心，主子可以放心。");
               }
               剧情对话板.onclick = function(){
                  if(赋闲清廉高的人才.length == 0){
                     对话打字效果("曹夙峰：另外其他人还没看出谁合适。");
                     剧情对话板.onclick = function(){
                        id('剧情对话').style.display = 'none';
                        缓动黑幕();
                     };
                  }
                  else{
                     对话打字效果("曹夙峰：另外" + 推荐清廉高的.名字 + "平时为人勤俭，可以算是一个清官，但此人心机目前尚未可知，主子可派血滴子查一下。");
                     剧情对话板.onclick = function(){
                        id('剧情对话').style.display = 'none';
                        缓动黑幕();
                     };
                  }
               };
            };
         }
      };
   }
}
function 单独教导这个皇子(对象){
   id('剧情对话').style.display = 'block';
   出现这个人的头像(剧情头像,对象);
    剧情背景.src =LJ +  'a0aPic_BG/Tu_3.webp';
   对话打字效果("传皇子" + 对象.名称 + "进御书房。");
   剧情对话板.onclick = function(){
      console.log("指导前" + 对象.智力);
      if(对象.智力 > 99){
         对象.智力 += 0;
      }
      else{
         对象.智力 += 属性.智力 * 0.002 + 主角._relation_caosufeng * 0.01;
      }
      console.log("指导后" + 对象.智力);
      var _loc2_ = "";
      if(对象.智力 >= 80){
         _loc2_ = "皇子" + 对象.名称 + "精通诗书，对皇上提出的问题对答如流，见解独到。天资聪颖，可成大器。";
      }
      else if(对象.智力 >= 60&&对象.智力 < 80){
         _loc2_ = "皇子" + 对象.名称 + "对一些问题的看法尚不成熟，但对诗书背诵流利，可见平日十分用功。";
      }
      else if(对象.智力 >= 30&&对象.智力 < 60){
         _loc2_ = "皇子" + 对象.名称 + "书背得磕磕巴巴，对治国的看法也十分肤浅。素质平庸，难成大器。";
      }
      else if(对象.智力 < 30){
         _loc2_ = "皇子" + 对象.名称 + "懒懒散散，一个问题也没答上来，书也不会背。真是朽木不可雕也。";
      }
      对话打字效果(_loc2_);
      剧情对话板.onclick = function(){
         id('剧情对话').style.display = 'none';
         id('neishiMB').style.display = 'none';id("yushufang").style.display="none";id("qita").style.display="none";
         缓动黑幕();
         属性.体力 -= 20;
         更新资料();
         主角.当前时辰 = 主角.当前时辰 + 1;
         时辰推进();
      };
   };
}
function 进入武英馆(){
   id("qita").style.display="block";
   id("wuyingguan").style.display="block";
   id('qitaBG').src =LJ +  'a0aPic_BG/Tu_4.webp';id('qitaTittle').innerText = '武英馆';
   id('qitalikai').onclick = function (){id("wuyingguan").style.display="none";id("qita").style.display="none";};
   id("hongxings").onclick = function(){
   id('neishiMB').style.display = 'block';
   id('neishiBG').style.display = 'none';
   id('neishi2').style.display = 'block';
   id('nsan4').style.display = 'block';id('nsan5').style.display = 'none';id('nsan6').style.display = 'none';id('nsan7').style.display = 'none';
   id('neishiTitle').innerText = '武英馆';
   id('nsan0').innerText = '练习武艺';
   id('nsan1').innerText = '没事闲聊';
   id('nsan2').innerText = '训练皇子';
   id('nsan3').innerText = '安全检视';
   id('nsan4').innerText = '训练安排';
   id('neishiText').innerText = "红星寿参见皇上。\n皇上可有什么事情要吩咐。\n5岁以上的皇子可出入武英馆。\n安全检查：减少刺客出现率。";
   id('nsan0').onclick = function (){练习武艺();};
   id('nsan1').onclick = function (){与红星寿闲聊程序();};
   id('nsan2').onclick = function (){子女一览程序(7);};
   id('nsan3').onclick = function (){安全检视();};
   id('nsan4').onclick = function (){课程安排(0)};
   };
}
function 练习武艺(){
   id('neishiMB').style.display = 'none';id("wuyingguan").style.display="none";id("qita").style.display="none";
   学习事件处理(3);
   主角._relation_hongxingshou += random(5);
}
function 与红星寿闲聊程序(){
   if(主角.与红星寿闲聊 == 1){
      小提示("一天到晚哪有那么多可聊的。-_-。！");
   }
   else{
      主角.与红星寿闲聊 = 1;
      主角._relation_hongxingshou += random(5);
      id('剧情对话').style.display = 'block';
      新后宫图形读取程序(剧情背景,4,"背景");
      var _loc2_ = random(7);
      if(_loc2_ == 0){
         新后宫图形读取程序(剧情头像,88,"特殊");
         对话打字效果("红星寿：皇上要和臣过两招吗？（亮出明晃晃的剑）");
         剧情对话板.onclick = function(){
            对话打字效果("皇上：……算了，还是改日吧。");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 1){
         新后宫图形读取程序(剧情头像,86,"特殊");
         对话打字效果("红星寿：通常情况下，臣是不会把背后留给别人的，当然，皇上除外。");
         剧情对话板.onclick = function(){
            对话打字效果("红星寿：因为背后是留给要保护的人的。");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 2){
         新后宫图形读取程序(剧情头像,6,"特殊");
         对话打字效果("红星寿：皇上，最近总有些宫女三两成队地跑到武英馆门口张望，还窃窃私语，弄得臣好不自在。 ");
         剧情对话板.onclick = function(){
            对话打字效果("皇上：星寿你难道还不懂得那些女儿家的心思吗？亏你还有了家室。");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 3){
         新后宫图形读取程序(剧情头像,89,"特殊");
         对话打字效果("红星寿：皇上，能不能让那花儿匠老老实实在御书房待着别来烦臣练剑，每次都站在武英馆墙根底下咿咿呀呀个没完。");
         剧情对话板.onclick = function(){
            对话打字效果("皇上：你直接揍他不就完了。= =");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 4){
         新后宫图形读取程序(剧情头像,85,"特殊");
         对话打字效果("红星寿：噌！噌！唰唰唰唰！（星寿闭着眼，正在舞剑） ");
         剧情对话板.onclick = function(){
            对话打字效果("（还是不要打搅他了……）");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 5){
         新后宫图形读取程序(剧情头像,6,"特殊");
         对话打字效果("红星寿：第一，教头说的话一定是对的，要绝对服从！第二，如果错了，请参照第一条！");
         剧情对话板.onclick = function(){
            对话打字效果("（星寿正在给新进的御林军训话……）");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 6){
         新后宫图形读取程序(剧情头像,87,"特殊");
         对话打字效果("红星寿：唉，皇上这招漏洞太大了，如果臣是敌人，弹指间，皇上的命就没了。不过好在臣永远站在皇上这边，誓死守护皇上。");
         剧情对话板.onclick = function(){
            对话打字效果("（感觉心里暖暖的……朕居然被感动了…… = =）");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
   }
}
function 单独训练这个皇子(对象){
   id('剧情对话').style.display = 'block';
   出现这个人的头像(剧情头像,对象);
   新后宫图形读取程序(剧情背景,4,"背景");
   对话打字效果("传皇子" + 对象.名称 + "进武英馆。");
   剧情对话板.onclick = function(){
      console.log("指导前" + 对象.武力);
      if(对象.武力 > 99){
         对象.武力 += 0;
      }
      else{
         对象.武力 += 属性.智力 * 0.002 + 主角._relation_hongxingshou * 0.01;
      }
      console.log("指导后" + 对象.武力);
      var _loc2_ = "";
      if(对象.武力 >= 80){
         _loc2_ = "皇子" + 对象.名称 + "十八般武艺样样精通，骑马射箭可百步穿杨，定能称为一代名将。";
      }
      else if(对象.武力 >= 60 && 对象.武力 < 80){
         _loc2_ = "皇子" + 对象.名称 + "骑射虽然准度欠佳，但对兵法了若指掌，可见平日十分用功。";
      }
      else if(对象.武力 >= 30 && 对象.武力 < 60){
         _loc2_ = "皇子" + 对象.名称 + "挥刀射箭力道不足，对兵法阵法也是略知一二。资质平庸，难成大器。";
      }
      else if(对象.武力 < 30){
         _loc2_ = "皇子" + 对象.名称 + "刚一上马差点摔下来，剑也舞不起来。真是手无缚鸡之力。";
      }
      对话打字效果(_loc2_);
      剧情对话板.onclick = function(){
         id('剧情对话').style.display = 'none';
         id('neishiMB').style.display = 'none';id("wuyingguan").style.display="none";id("qita").style.display="none";
         缓动黑幕();
         属性.体力 -= 20;
         更新资料(属性栏);
         主角.当前时辰 = 主角.当前时辰 + 1;
         时辰推进();
      };
   };
}
function 安全检视(){
   if(主角.安全检视 == 0){
      主角.安全检视 = 1;
      缓动黑幕();
      id('剧情对话').style.display = 'block';
      新后宫图形读取程序(剧情头像,6,"特殊");
      新后宫图形读取程序(剧情背景,4,"背景");
      对话打字效果("红星寿：是！！臣立刻去办。");
      剧情对话板.onclick = function(){
         缓动黑幕();
         id('剧情对话').style.display = 'none';
      };
      主角._anquan = 0;
   }
   else{
      小提示("侍卫已经开始在皇宫进行排查");
   }
}
function 进入少府监程序(){
    id("qita").style.display="block";
   	id("shaofujian").style.display="block";
   	id('qitaBG').src =LJ +  'a0aPic_BG/Tu_9237.webp';id('qitaTittle').innerText = '少府监';
	id('qitalikai').onclick = function (){id("shaofujian").style.display="none";id("qita").style.display="none";};
	id('nsan4').style.display = 'block';id('nsan5').style.display = 'block';id('nsan6').style.display = 'block';id('nsan7').style.display = 'none';
    id("xieyi").onclick = function(){
    id('neishiMB').style.display = 'block';
    id('neishiBG').style.display = 'none';
    id('neishi2').style.display = 'block';
    id('neishiTitle').innerText = '百工坊';
	id('neishiText').innerText = "谢衣参见皇上。\n皇上可有什么事情要吩咐。";
    id('nsan0').innerText = '雕刻木器';
    id('nsan1').innerText = '没事闲聊';
    id('nsan2').innerText = '研发技术';
    id('nsan3').innerText = '技术一览';
    id('nsan4').innerText = '新建宫殿';
   	id('nsan5').innerText = '宫殿升级';
    id('nsan6').innerText = '宫殿更名';
    id('nsan0').onclick = function (){选择木材();};
   	id('nsan1').onclick = function (){与谢衣闲聊程序();};
    id('nsan2').onclick = function (){研发技术();};
    id('nsan3').onclick = function (){技术一览表();};
    id('nsan4').onclick = function (){新建宫殿();};
   	id('nsan5').onclick = function (){宫殿升级();};
    id('nsan6').onclick = function (){选择去哪个宫殿(62);};
   };
}
function 选择木材(){
    所有木材 = [["花梨",4500,1],["紫檀",4400,4],["柚木",4300,2],["红酸枝",4200,5],["黑金木",4100,3],["枫木",3800,6],["鸡翅木",3700,7],["云杉",3400,8],["香樟",3200,1],["紫芯木",3000,4],["绿芯樟",2900,2],["橡木",2800,5],["铁刀木",2700,3],["虎斑",2500,6],["椴木",2300,7],["花旗松",2200,8]];
    id('neishiMB').style.display = 'none';id("shaofujian").style.display="none";id("qita").style.display="none";
    id('sy').style.display = 'block';
    id('syb').style.display = 'none';
    id('syb2').style.display = 'block';
    id('syTitle').innerText = '选择木材';
    id('sysm').innerText = "";
    id('qxsy').onclick = function(){id('syb').style.display = 'block';
    id('syb2').style.display = 'none';id('sy').style.display = 'none';}
    var i =0;
    while(i<32){
	    if(i<16){
			className('sydb2')[i].取=所有木材[i];
			className('sydb2')[i].style.display = 'block';
			className('sydb2')[i].innerText = 所有木材[i][0];
			className('sydb2')[i].onclick = function(){
			    雕刻木器(this.取);
			    国家.金钱 -= this.取[1];id('syb').style.display = 'block';
			    id('syb2').style.display = 'none';id('sy').style.display = 'none';
			};
		}else{
			className('sydb2')[i].style.display = 'none';
		}
   	i++
   }
}
function 雕刻木器(木材){
   家具样式 = ["床榻","桌子","椅子","凳子","柜子","屏风"];
   缓动黑幕();
   id('youyuan').style.display = 'block';id('yyBG').src =LJ +  "a0aPic_BG/Tu_9237.webp";
   id('yyText').innerText= "皇上在少府监的指导下雕琢木器。才艺上升。";
   var _loc4_ = (属性.才艺 / 2 + 属性.智力 / 2 + 主角._relation_xieyi * 2) * 0.5;
   属性.才艺 += random(5) + 5;
   属性.体力 -= random(5) + 25;
   var 结果的话 = "";
   if(_loc4_ < 100){
      结果的话 = "咔嗤咔嗤咔嗤……磨了一堆木屑，什么也没做出来。";
   }
   else{
      if(_loc4_ < 300){
         var _loc5_ = "破损";
      }
      else if(_loc4_ < 500){
         _loc5_ = "粗糙";
      }
      else if(_loc4_ < 700){
         _loc5_ = "平稳";
      }
      else if(_loc4_ < 900){
         _loc5_ = "精美";
      }
      else{
         _loc5_ = "顶级";
      }
      var _loc6_ = 木材[0];
      var _loc7_ = 家具样式[random(家具样式.length)];
      var _loc8_ = _loc5_ + _loc6_ + _loc7_;
      结果的话 = "磨了好久，终于做出来了。得到【" + _loc8_ + "】，入库内务府。";
      i = 0;
      while(i < 所有物品.length){
         if(所有物品[i].名称 == _loc8_){
            所有物品[i].数量 += 1;
         }
         i++;
      }
   }
   id('yykuang').onclick = function(){
      缓动黑幕();
      id('yyText').innerText = 结果的话;
      id('yykuang').onclick = function(){
         主角._relation_xieyi += random(5);
         id('youyuan').style.display = 'none';
         主角.当前时辰 += 1;
         时辰推进();
      };
   };
}
function 研发技术(){
   if(主角.研发技术 == 1){小提示("技术正在研发中。");}
   else{
       id('sy').style.display = 'block';
       id('syb').style.display = 'none';
       id('syb2').style.display = 'block';
       id('syTitle').innerText = '研发技术';
       id('sysm').innerText = "";
       id('qxsy').onclick = function(){id('syb').style.display = 'block';
       id('syb2').style.display = 'none';id('sy').style.display = 'none';}
	   var 临时技术 = [];
	   var _loc5_ = 0;
	   while(_loc5_ < 20)
	   {
	      if(所有技术[_loc5_].开启 == 0 && 所有技术[_loc5_].研发中 == 0 && 所有技术[_loc5_].id <= 19)
	      {
	         临时技术.push(所有技术[_loc5_]);
	      }
	      _loc5_ = _loc5_ + 1;
	   }
       var i =0;
       while(i<32){
      	    if(i<临时技术.length){
      			className('sydb2')[i].取=临时技术[i];
      			className('sydb2')[i].style.display = 'block';
      			className('sydb2')[i].innerText = 临时技术[i].名称;
      			className('sydb2')[i].onclick = function(){
					id('syb').style.display = 'block';
					id('syb2').style.display = 'none';id('sy').style.display = 'none';
      			    技术展示(this.取);
      			};
      		}else{
      			className('sydb2')[i].style.display = 'none';
      		}
      	i++
      }
	  id('syqian').onclick = function(){};
	  id('syhou').onclick = function(){};
   }
}
function 技术展示(临时技术){
	id('hukoupucha').style.display = 'block';
	id('huhouTitle').innerText = 临时技术.名称;
	id('huhouText').innerText = "\n说明：" + 临时技术.说明;
    id('huhouText').innerText += "\n花费：" + 临时技术.花费 + "两";
	id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
	id('hkan0').onclick = function(){
	    大殿体力扣除程序(70);
	    主角.研发技术 = 1;
	    临时技术.研发中 = 1;
	    国家.金钱 -= 临时技术.花费;
	    更新资料();id('hukoupucha').style.display = 'none';
	}
}
function 技术一览表(){
    id('sy').style.display = 'block';
    id('syb').style.display = 'none';
    id('syb2').style.display = 'block';
    id('syTitle').innerText = '技术一览';
    id('sysm').innerText = "目前拥有的技术：";
    id('qxsy').onclick = function(){id('syb').style.display = 'block';
    id('syb2').style.display = 'none';id('sy').style.display = 'none';}
   	var 临时技术 = [];
   	var _loc5_ = 0;
   	while(_loc5_ < 所有技术.length){
   	    if(所有技术[_loc5_].开启 == 1){
   	         临时技术.push(所有技术[_loc5_]);
   	      }
   	      _loc5_ = _loc5_ + 1;
   	   }
       var i =0;
       while(i<32){
      	    if(i<临时技术.length){
      			className('sydb2')[i].取=临时技术[i];
      			className('sydb2')[i].style.display = 'block';
      			className('sydb2')[i].innerText = 临时技术[i].名称;
      			className('sydb2')[i].onclick = function(){
      			    展示这个技术(this.取);
      			};
      		}else{
      			className('sydb2')[i].style.display = 'none';
      		}
      	i++
      }
   	  id('syqian').onclick = function(){};
   	  id('syhou').onclick = function(){};
}
function 展示这个技术(对象){
	id('介绍图').style.display = 'block';
	id('介绍图an0').style.display = 'none';
	id('介绍图an1').style.display = 'none';
	id('介绍图an2').style.display = 'none';
	新后宫图形读取程序(id('介绍图头像'),对象.跳,"技术");
	id('介绍图名字').innerText = 对象.名称;
	id('介绍图介绍').innerText = "说明：" + 对象.说明;
	id('介绍图介绍').innerText += "\n\n获得方法：" + 对象.获得方法;
	id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';}
}
function 技术研发周期推进(){
   var _loc2_ = 0;
   while(_loc2_ < 所有技术.length){
      if(所有技术[_loc2_].开启 == 0 && 所有技术[_loc2_].研发中 == 1){
         所有技术[_loc2_].周期--;
         if(所有技术[_loc2_].周期 == 1){
            所有技术[_loc2_].周期 = 0;
            所有技术[_loc2_].开启 = 1;
            所有技术[_loc2_].研发中 = 0;
            主角.研发技术 = 0;
            var _loc4_ = "启禀皇上，“" + 所有技术[_loc2_].名称 + "”技术已经研发完毕。";
            太监报告所有事件.push([_loc4_,"快乐",5,0,3]);
            var _loc3_ = "“" + 所有技术[_loc2_].名称 + "”技术已经研发完毕。";
            每月的官员奏折.push(_loc3_);
            n = 0;
            while(n < _all_army.length){
               _all_army[n].单兵战力 = 计算单兵战力(_all_army[n].兵种);
               n++;
            }
         }
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 与谢衣闲聊程序(){
   if(主角.与谢衣闲聊 == 1){
      小提示("一天到晚哪有那么多可聊的。-_-。！");
   }
   else{
      主角.与谢衣闲聊 = 1;
      主角._relation_xieyi += random(5);
      id('剧情对话').style.display = 'block';
      新后宫图形读取程序(剧情背景,9237,"背景");
      var _loc2_ = random(7);
      if(主角.谢衣 > 6){
         if(_loc2_ == 0){
            新后宫图形读取程序(剧情头像,109,"特殊");
            对话打字效果("谢衣：我半生倥偬，毁誉加身，徒负无数虚名罪名。生前我不敢有一字自辩，身后……但愿世间能有哪怕一人，解我毕生隐衷。");
            剧情对话板.onclick = function(){
               对话打字效果("皇上：这家伙小声嘀咕什么呢？怎么像变了一个人似的。");
               剧情对话板.onclick = function()
               {
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
         else if(_loc2_ == 1){
            新后宫图形读取程序(剧情头像,110,"特殊");
            对话打字效果("谢衣：皇上，眼看就要到用膳的时辰了，不如留下尝尝臣的手艺吧。");
            剧情对话板.onclick = function(){
               对话打字效果("（皇上看着这个性情温和的谢衣和那盘依然恐怖的黑暗物质，心想难道只有厨艺还是没有变吗……）");
               剧情对话板.onclick = function()
               {
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
         else if(_loc2_ == 2){
            新后宫图形读取程序(剧情头像,111,"特殊");
            对话打字效果("谢衣：生命至为灿烂，至为珍贵，而又永不重来，身为偃师，万望敬之……畏之……珍之……重之…… ");
            剧情对话板.onclick = function(){
               对话打字效果("皇上：你在念叨什么啊？= =");
               剧情对话板.onclick = function()
               {
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
         else if(_loc2_ == 3){
            新后宫图形读取程序(剧情头像,108,"特殊");
            对话打字效果("皇上：朕怎么觉得你好像变了一个人？好像变得安静了很多，是不是得病了？");
            剧情对话板.onclick = function(){
               对话打字效果("谢衣：谢皇上关心，皇上多虑了，臣十分健康。只是这花香太怡人，让臣有些陶醉了。");
               剧情对话板.onclick = function()
               {
                  对话打字效果("（那盆花下面附了一行字：\n小衣衣，你今天怎~么不开心？\n明显是某人的笔迹……）");
                  剧情对话板.onclick = function()
                  {
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            };
         }
         else if(_loc2_ == 4){
            新后宫图形读取程序(剧情头像,107,"特殊");
            对话打字效果("谢衣：皇上有没有，某个时候，突然感觉，就是自己穷尽一生，也无论如何都想要回护的那个人？ ");
            剧情对话板.onclick = function(){
               对话打字效果("皇上：…………是啊…………这么说的话……确实……");
               剧情对话板.onclick = function()
               {
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         }
         else if(_loc2_ == 5){
            新后宫图形读取程序(剧情头像,111,"特殊");
            对话打字效果("谢衣：看来……我的时间不多了呢……");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         }
         else if(_loc2_ == 6){
            新后宫图形读取程序(剧情头像,107,"特殊");
            对话打字效果("谢衣：臣只要在这里一天，就会为皇上尽自己绵薄之力。就算有那么一天臣不在了……");
            剧情对话板.onclick = function(){
               对话打字效果("皇上：你瞎说什么！！谢衣你到底怎么了？！");
               剧情对话板.onclick = function()
               {
                  对话打字效果("谢衣：啊！没什么，臣一时失言了，请皇上不要在意。");
                  剧情对话板.onclick = function()
                  {
                     缓动黑幕();
                     id('剧情对话').style.display = 'none';
                  };
               };
            };
         }
      }
      else if(_loc2_ == 0){
         新后宫图形读取程序(剧情头像,101,"特殊");
         对话打字效果("谢衣：唉……最近感觉心好累，少府监那么多事，还是皇上最清闲。");
         剧情对话板.onclick = function(){
            对话打字效果("（熊孩子！= = 光看见贼吃肉，没看见贼挨打……其实朕每天很忙的，一点也不清闲啊！！！）");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 1){
         新后宫图形读取程序(剧情头像,102,"特殊");
         对话打字效果("谢衣：哟~皇上来得真巧，这道菜是臣亲手烹制而成，刚出锅的，趁热尝尝。");
         剧情对话板.onclick = function(){
            对话打字效果("（皇上看着谢衣端来的一团黑暗物质，不觉想起方才从御膳房方向传来的爆炸声……）");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 2){
         新后宫图形读取程序(剧情头像,103,"特殊");
         对话打字效果("谢衣：嗯~~~皇上这么早就来了……容臣先去洗个脸。（伸懒腰~~） ");
         剧情对话板.onclick = function(){
            对话打字效果("（已经日上三竿了，你是一宿没睡吗？）");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 3){
         新后宫图形读取程序(剧情头像,104,"特殊");
         对话打字效果("皇上：怎么突然觉得你身上有种香味？檀木香？");
         剧情对话板.onclick = function(){
            对话打字效果("谢衣：不是啦，是衣服用干花熏过了，皇上要试试不，就这个。可以让妃嫔们绣点香囊，取一些装进去……");
            剧情对话板.onclick = function(){
               对话打字效果("（谢衣拿出一盒干花，盒子底面写在【曹氏秘制】四个字……）");
               剧情对话板.onclick = function()
               {
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         };
      }
      else if(_loc2_ == 4){
         新后宫图形读取程序(剧情头像,104,"特殊");
         对话打字效果("谢衣：世界万物皆如梦幻，终将湮灭散逝，无不例外。就趁着这留驻于世的短短瞬间，玩个尽兴罢。 ");
         剧情对话板.onclick = function(){
            对话打字效果("皇上：你还想怎么玩！！！你这儿的爆炸频率都远超青炉房了！！是不是整个皇宫都炸飞了你才尽兴？！= =");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 5){
         新后宫图形读取程序(剧情头像,101,"特殊");
         对话打字效果("谢衣：皇上，天子对上应礼敬神明，对下应与民同乐，不如就趁着这次祭天的机会……");
         剧情对话板.onclick = function(){
            对话打字效果("皇上：休想。朕决不登台献舞……");
            剧情对话板.onclick = function(){
               对话打字效果("谢衣：………………皇上真机智，都学会抢答了。");
               剧情对话板.onclick = function()
               {
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         };
      }
      else if(_loc2_ == 6){
         新后宫图形读取程序(剧情头像,101,"特殊");
         对话打字效果("谢衣：皇上的寿辰快到了。可惜臣囊中羞涩，买不起珍奇异宝献给皇上，就做个万花筒给皇上开开心吧。");
         剧情对话板.onclick = function(){
            对话打字效果("（突然心里暖暖的……朕居然被这熊孩子感动了…… = =）");
            剧情对话板.onclick = function(){
               对话打字效果("谢衣：皇上开心就好了，然后……能不能顺便给臣涨点工资？");
               剧情对话板.onclick = function()
               {
                  缓动黑幕();
                  id('剧情对话').style.display = 'none';
               };
            };
         };
      }
   }
}
function 新建宫殿(){
   if(主角.修筑宫殿 == 0){
      选择去哪个宫殿(60);
   }
   else{
      小提示("本月皇宫内已经大兴土木了。");
   }
}
function 宫殿升级(){
   if(主角.修筑宫殿 == 0){
      选择去哪个宫殿(61);
   }
   else{
      小提示("本月皇宫内已经大兴土木了。");
   }
}
function 给新宫殿取名字(宫殿){
   id("御赐").style.display = "block";
   id("ycsm").innerText = "御赐宫殿名字";
   id("输入").maxlength = 4;
   id("ycts").innerText = "请给新宫殿取一个四字以内的名字";
   id("随机一个").onclick = function(){
      id("输入").value = 皇家名字组合库[random(皇家名字组合库.length)] + 皇家名字组合库[random(皇家名字组合库.length)] + "宫";
   };
   id("御赐确定").onclick = function(){
      宫殿.名称 = id("输入").value;
      var _loc1_ = 皇家名字女字[random(皇家名字女字.length)] + 皇家名字组合库[random(皇家名字组合库.length)] + 阁[random(阁.length)];
      var _loc2_ = 皇家名字女字[random(皇家名字女字.length)] + 皇家名字组合库[random(皇家名字组合库.length)] + 阁[random(阁.length)];
      宫殿.内殿 = [皇家名字组合库[random(皇家名字组合库.length)] + 皇家名字组合库[random(皇家名字组合库.length)] + "殿",_loc1_,_loc2_,殿[random(殿.length)],殿[random(殿.length)]];
      if(宫殿.名称.length == 0){
         小提示("请取宫殿名字");
      }
      else{
         主角.修筑宫殿 = 1;
         宫殿.等级 = 1;
         国家.金钱 -= 1000000 * 宫殿.id;
         更新资料();
         出圣旨("即刻请能工巧匠在后宫大兴土木，修建" + 宫殿.名称 + "，不得有误。");
         id("御赐").style.display = "none";
         id('后宫内').style.display = 'none';id('御赐封号').style.display = 'none';
      }
   };
}
function 升级这个宫殿(宫殿){
   国家.金钱 -= 500000 * 宫殿.等级 * 宫殿.id;
   宫殿.等级 += 1;
   主角.修筑宫殿 = 1;
   更新资料();
   出圣旨("即刻请能工巧匠在后宫大兴土木，对" + 宫殿.名称 + "进行升级改造，不得有误。");
   id('后宫内').style.display = 'none';id('御赐封号').style.display = 'none';
}
function 给宫寝殿换名字(宫,序号){
   id("御赐").style.display = "block";
   if(序号 == 99){
	    id("输入").maxLength = "3";
	    id("输入").value = 宫.名称;
        id("ycsm").innerText = "御赐宫殿名字";
        id("ycts").innerText = "请给宫殿取一个三字以内的名字";
   }
   else{
	   id("ycsm").innerText = "御赐寝殿名字";
	   id("输入").maxLength = "4";
	   id("ycts").innerText = "请给寝殿取一个四字以内的名字";
	   id("输入").value = 宫.内殿[序号];
	   }
   id("随机一个").onclick = function(){
	   if(序号 == 0){
		 id("输入").value = 皇家名字组合库[random(皇家名字组合库.length)] + 皇家名字组合库[random(皇家名字组合库.length)] + "殿";  
	   }
	   else if(序号==99){
		   id("输入").value = 皇家名字组合库[random(皇家名字组合库.length)] + 皇家名字组合库[random(皇家名字组合库.length)] + "宫";
	   }
	   else{
		 id("输入").value = 皇家名字女字[random(皇家名字女字.length)] + 皇家名字组合库[random(皇家名字组合库.length)] + 阁[random(阁.length)];
	   }
   };
   id("御赐确定").onclick = function(){
      if(id("输入").value == 0){
         小提示("请取寝殿名字");
      }
      else{
		  if(序号==99){
			宫.名称 = id("输入").value;
			选择去哪个宫殿(62);  
		  }else{
			 宫.内殿[序号] = id("输入").value;
			 className('各宫的小板')[序号].innerText = id("输入").value; 
		  }
         id("御赐").style.display = "none";
      }
   };
}
function 进入琴淑阁(){
  id("qita").style.display="block";
  id('qitaBG').src =LJ +  'a0aPic_BG/Tu_87245.webp';
  id("qinshuge").style.display="block";id('qitaTittle').innerText = '琴淑阁';
  id('qitalikai').onclick = function (){id("qinshuge").style.display="none";id("qita").style.display="none";};
  id("sumoer").onclick = function(){
  id('neishiMB').style.display = 'block';
  id('neishiBG').style.display = 'none';
  id('neishi2').style.display = 'none';
  id('neishiTitle').innerText = '琴淑阁';
  id('neishiText').innerText = "苏茉尔参见皇上，皇上万福金安。\n皇上今天来是要听曲还是下棋。\n5岁以上的公主可出入琴淑阁。";
  id('nsan0').innerText = '下棋弹琴';
  id('nsan1').innerText = '没事闲聊';
  id('nsan2').innerText = '听听曲子';
  id('nsan3').innerText = '公主课程';
  id('nsan0').onclick = function (){下棋弹琴();};
  id('nsan1').onclick = function (){与苏茉尔闲聊程序();};
  id('nsan2').onclick = function (){小提示("未完善");};
  id('nsan3').onclick = function (){课程安排(9);};
  }
}
function 下棋弹琴(){
   id('neishiMB').style.display = 'none';id("qinshuge").style.display="none";id("qita").style.display="none";
   主角._relation_sumoer += random(5);
   学习事件处理(6);
}
function 与苏茉尔闲聊程序(){
   if(主角.与苏茉尔闲聊 == 1){
      小提示("一天到晚哪有那么多可聊的。-_-。！");
   }
   else{
      主角.与苏茉尔闲聊 = 1;
      主角._relation_sumoer += random(5);
      id('剧情对话').style.display = 'block';
      新后宫图形读取程序(剧情背景,87245,"背景");
      var _loc2_ = random(7);
      if(_loc2_ == 0){
         新后宫图形读取程序(剧情头像,114,"特殊");
         对话打字效果("苏茉尔：皇上今天是弹琴还是听曲啊？或是说……皇上是来物色美貌的歌姬乐姬？（偷笑）");
         剧情对话板.onclick = function(){
            对话打字效果("皇上：咳咳，朕只是来随便看看。");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 1){
         新后宫图形读取程序(剧情头像,114,"特殊");
         对话打字效果("苏茉尔：西洋的乐曲居然有那么多音，我们中原的只有宫商角徵羽。");
         剧情对话板.onclick = function(){
            对话打字效果("皇上：以后给你请个西洋乐师来，你俩切磋切磋。");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 2){
         新后宫图形读取程序(剧情头像,114,"特殊");
         对话打字效果("苏茉尔：皇上，曹大人借走了一支金丝玉笛，一借就不还了，皇上帮苏茉尔要回来吧……T_T ");
         剧情对话板.onclick = function(){
            对话打字效果("皇上：这事你应该去找红星寿，他会很乐意帮你解决的。");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 3){
         新后宫图形读取程序(剧情头像,114,"特殊");
         对话打字效果("苏茉尔：皇上还记得柔则最喜欢的曲子是什么吗？");
         剧情对话板.onclick = function(){
            对话打字效果("皇上：……");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 4){
         新后宫图形读取程序(剧情头像,114,"特殊");
         对话打字效果("苏茉尔：嗯……这个舞蹈应该配个什么样的曲子呢……？ ");
         剧情对话板.onclick = function(){
            对话打字效果("（还是不要打搅她了……）");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 5){
         新后宫图形读取程序(剧情头像,114,"特殊");
         对话打字效果("苏茉尔：……（bolenbolenbolen~~弹琵琶中）");
         剧情对话板.onclick = function(){
            对话打字效果("（大弦嘈嘈如急雨，小弦切切如私语，大概就如此吧）");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
      else if(_loc2_ == 6){
         新后宫图形读取程序(剧情头像,114,"特殊");
         对话打字效果("皇上：近日来可还好？");
         剧情对话板.onclick = function(){
            对话打字效果("苏茉尔：回皇上，苏茉尔一切安好，只是偶尔会思念故人。");
            剧情对话板.onclick = function(){
               缓动黑幕();
               id('剧情对话').style.display = 'none';
            };
         };
      }
   }
}
function 听听曲子(){
   var 面板 = attachMovie("丹药面板","丹药面板",90899,{_x:0,_y:0});
   面板.标题.text = "请选择曲目";
   var _loc7_ = attachMovie("黑框","黑框",999899,{_x:300,_y:90});
   _loc7_.叉子._visible = false;
   var _loc9_ = random(14);
   外部位图图形调用(_loc7_.图.BG,"azcPic_Jyou/" + _loc9_ + ".webp");
   _loc7_.文本.text = "";
   面板.关闭.onclick = function(){
      黑框.removeMovieClip();
      this._parent.removeMovieClip();
      缓动黑幕();
   };
   music.stop();
   var _loc6_ = 0;
   var 所有格子 = [];
   var _loc4_ = 0;
   while(_loc4_ < 8){
      var _loc5_ = 面板.attachMovie("三级按钮-蓝色","三级按钮-蓝色" + _loc6_,112 + _loc6_,{_x:87,_y:75 + _loc4_ * 39});
      _loc5_.文本.text = "aaaa";
      所有格子.push(_loc5_);
      _loc6_ = _loc6_ + 1;
      _loc4_ = _loc4_ + 1;
   }
   var _loc8_ = 面板.attachMovie("二级按钮-红色","二级按钮-红色",1212,{_x:95,_y:390});
   _loc8_.文本.text = "停止播放";
   _loc8_.onclick = function(){
      停止音乐(music);
      停止音乐(music2);
   };
   var 临时曲目 = [];
   var _loc3_ = 0;
   while(_loc3_ < 所有曲目.length){
      if(所有曲目[_loc3_].开启 == 1){
         临时曲目.push(所有曲目[_loc3_]);
      }
      _loc3_ = _loc3_ + 1;
   }
   console.log(临时曲目.length);
   面板.序列 = 0;
   整理曲目展示(临时曲目,面板,所有格子);
   面板.上.onclick = function(){
      if(面板.序列 >= 1){
         面板.序列 -= 1;
         整理曲目展示(临时曲目,面板,所有格子);
      }
   };
   面板.下.onclick = function(){
      if(面板.序列 < 临时曲目.length / 8){
         面板.序列 += 1;
         整理曲目展示(临时曲目,面板,所有格子);
      }
   };
}
function 整理曲目展示(临时曲目, 面板, 所有格子){
    var _loc4_ = 0;
    while(_loc4_ < 所有格子.length){
      var _loc5_ = 临时曲目[面板.序列 * 8 + _loc4_];
      var _loc3_ = 所有格子[_loc4_];
      if(_loc5_ == undefined){
         _loc3_._visible = false;
      }
      else{
         _loc3_._visible = true;
         _loc3_.文本.text = _loc5_.名称;
         _loc3_.取 = _loc5_;
         _loc3_.序列号数 = 面板.序列 * 8 + _loc4_;
         _loc3_板.onclick = function(){
            music.stop();
            黑框.图.gotoAndStop(random(14) + 1);
            黑框.文本.text = this._parent.取.说明;
            播放音乐("Music_" + this._parent.取.id + ".mp3",1);
         };
      }
      _loc4_ = _loc4_ + 1;
   }
}
function 宝华殿程序(){
   id('neishiMB').style.display = 'block';
   id('neishiBG').style.display = 'block';id('neishiBG').src =LJ + 'a0aPic_BG/Tu_413248.webp';
   id('neishi2').style.display = 'none';
   id('neishiTitle').innerText = "宝华殿";
   id('neishiText').innerText = "诵经祈福：增加道德，降低暴戾。\n逝者谥号：追封已故的妃子或子女。\n驱魔做法：在宫内做法事以求驱除邪气。";
   id('nsan0').innerText = '诵经祈福';
   id('nsan1').innerText = '嫔妃谥号';
   id('nsan2').innerText = '子女谥号';
   id('nsan3').innerText = '驱魔做法';
   id('nsan0').onclick = function (){学习事件处理(7);更新资料();id('neishiMB').style.display = 'none';};
   id('nsan1').onclick = function (){嫔妃谥号程序();};
   id('nsan2').onclick = function (){子女谥号程序();};
   id('nsan3').onclick = function (){驱魔做法程序();};
}
function 嫔妃谥号程序(){
	id('jiajuanyilan').style.display = 'block';
	id("qxzb").style.display = "none";
	id('jjText').innerText = '追封妃嫔';
	id('jia2').innerText = '谥号';
	id('jia3').innerText = '家族';
	id('jia4').innerText = '年龄';
	id('jia5').innerText = '生前名号';
	id('jia6').innerText = '儿女';
	id('jia7').innerText = '爱  ';
	id('jia3').style.display = 'block';
	id('jia4').style.display = 'block';
	id('jia6').style.display = 'block';
	var 临时追封妃嫔列表 = [];
	   var _loc5_ = 0;
	   while(_loc5_ < 主角.追封.length){
	      临时追封妃嫔列表.push(主角.追封[_loc5_]);
	      _loc5_ += 1;
	   }
	序列 = 0;
	临时追封妃嫔列表.sort(compare("id"));
	刷新追封追封妃嫔信息(临时追封妃嫔列表,序列);
	id('jiajuanqian').onclick = function(){
		if(序列 > 0 ){
		    序列 -= 1;
		    刷新追封追封妃嫔信息(临时追封妃嫔列表,序列);
		    }
		};
	id('jiajuanhou').onclick = function(){
		if(序列 < Math.round(临时追封妃嫔列表.length / 10)){
			序列 += 1;
			    刷新追封追封妃嫔信息(临时追封妃嫔列表,序列);
			}
	};
}
function 刷新追封追封妃嫔信息(临时追封妃嫔列表,序列){
	var _loc4_ = 0;
	while(_loc4_ < className('jiajuanlbx').length){
		var i = 序列 * 10 + _loc4_;
	    var _loc5_ = 临时追封妃嫔列表[i];
		if(_loc5_ == undefined){className('jiajuanlbx')[_loc4_].style.display = 'none';}
		else{
            className('jiajuanlbx')[_loc4_].style.display = 'block';
			className('jj1')[_loc4_].innerText = _loc5_.名字;
			className('jj2')[_loc4_].innerText = _loc5_.谥号;if(_loc5_.谥号==undefined){className('jj2')[_loc4_].innerText = "";}
			className('jj3')[_loc4_].innerText = _loc5_.家族;if(_loc5_.家族==undefined){className('jj3')[_loc4_].innerText = "无";}
			className('jj4')[_loc4_].innerText = _loc5_.年龄;
			className('jj5')[_loc4_].innerText = _loc5_.封号 + _loc5_.位分;
			className('jj6')[_loc4_].innerText = _loc5_.生育;
			className('jj7')[_loc4_].innerText = _loc5_.爱;
		}
		className('jiajuanlbx')[_loc4_].取 =  _loc5_;
		className('jiajuanlbx')[_loc4_].onclick = function(){
			if(this.取.谥号 == undefined){追封这个妃嫔(this.取);}
            else{小提示("这个妃嫔已经追封过了");}
		}
		_loc4_ += 1;
	}	 
}
function 追封这个妃嫔(妃子){
   id('cf').style.display = 'block';
   id('wfb').style.display = 'block';
   var i = 0;
   while(i < 后宫位分.length){
	className('mfsm')[i].innerText = '';
   	className('名分板')[i].style.display = 'block';className('mfsm')[i].style.display = 'block';
   	className('名分板')[i].属性 = 后宫位分[i];
   	className('名分板')[i].onclick = function (){
   		if(this.innerText == '九嫔'){
   			出现九嫔位分(妃子,1);
   		}
   	    else if(this.属性[0] == 0 && 妃子.地位 > 1){
            小提示("生前名号为"+后宫位分[1][0]+"以上才可追封为皇后");
        }
        else{
            赐谥号给她(妃子,this.属性[1]);
            id('cf').style.display = 'none';
        }
    }
   	i++;
   }
   id('册封取消').onclick = function (){
   	id('cf').style.display = 'none';
   }
}
function 赐谥号给她(妃子,位分名){
   id("御赐").style.display = "block";
   id("ycsm").innerText = "追封妃嫔";
   id("输入").maxlength = 5;
   id("输入").value="";
   id("ycts").innerText = "请皇上给" + 妃子.名字 + "赐谥号：";
   id("随机一个").onclick = function(){
      id("输入").value = 谥号字库[random(谥号字库.length)] + 谥号字库[random(谥号字库.length)] + 谥号字库[random(谥号字库.length)] + 谥号字库[random(谥号字库.length)] + 谥号字库[random(谥号字库.length)];
   };
   id("御赐确定").onclick = function(){
      妃子.谥号 = id("输入").value + 位分名;
      id("御赐").style.display = "none";
      缓动黑幕();
      出圣旨("朕之爱妃" + 妃子.名字 + "，倏尔薨逝，予心深为痛悼，宜追封" + 妃子.谥号 + "，以表哀思。");
      嫔妃谥号程序();
   };
}
function 驱魔做法程序(){
   小提示("暂时没有这个功能");
}
function 子女谥号程序(){
	id('zinvyilan').style.display = 'block';
	id('zn5').innerText = "";
	id('zn6').innerText = "";
	id('zn7').innerText = "谥号";
	id('zn8').innerText = "";
	id('zn9').innerText = "";
	var 临时子女列表 = [];
    var _loc5_ = 0;
    while(_loc5_ < _all_child.length){
        if(_all_child[_loc5_].状态 == 1){
            临时子女列表.push(_all_child[_loc5_]);
        }
         _loc5_ = _loc5_ + 1;
    }
	序列 = 0;
	临时子女列表.sort(compare("id"));
	刷新追封子女信息(临时子女列表,序列);
	id('zinvyilanqian').onclick = function(){
		if(序列 > 0 ){
		    序列 -= 1;
		    刷新追封子女信息(临时子女列表,序列);
		    }
		};
	id('zinvyilanhou').onclick = function(){
		if(序列 < Math.round(临时子女列表.length / 10)){
			序列 += 1;
			刷新追封子女信息(临时子女列表,序列);
			}
	};
}
function 刷新追封子女信息(临时子女列表,序列){
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
		    if(_loc5_.id == 国家.皇储id){className('z4')[_loc4_].innerText = "皇太子";}
			else{className('z4')[_loc4_].innerText = _loc5_.封号;}
			className('z5')[_loc4_].innerText = "";
			className('z6')[_loc4_].innerText = "";
			if(_loc5_.谥号!==undefined){className('z7')[_loc4_].innerText = _loc5_.谥号;}else{className('z7')[_loc4_].innerText = "";}
			className('z8')[_loc4_].innerText = "";
			className('z9')[_loc4_].innerText = "";
			className('z10')[_loc4_].innerText = _loc5_.母亲;
			className('z11')[_loc4_].innerText = _loc5_.婚配;
			if(_loc5_.儿女 == undefined){className('z12')[_loc4_].innerText = '';}
           else{className('z12')[_loc4_].innerText = _loc5_.儿女;}
		}
		className('zinvlbx')[_loc4_].取 =  _loc5_;
		className('zinvlbx')[_loc4_].onclick = function(){
			if(this.取.谥号 == undefined){追封这个子女(this.取);}
			else{小提示("这个子女已经追封过了");}
		}
		_loc4_ += 1;
	}
}
function 追封这个子女(子女){
  id("御赐").style.display = "block";
  id("ycsm").innerText = "追封子女";
  id("输入").maxlength = 5;
  id("输入").value="";
  id("ycts").innerText = "请皇上给" + 子女.名称 + "赐谥号：";
  id("随机一个").onclick = function(){
     id("输入").value = 谥号字库[random(谥号字库.length)] + 谥号字库[random(谥号字库.length)] + 谥号字库[random(谥号字库.length)] + 谥号字库[random(谥号字库.length)] + 谥号字库[random(谥号字库.length)];
  };
  var 性别 = "王";
   if(子女.性别 == 1){性别 = "公主";}
   var 称呼 = "爱子";
   if(子女.性别 == 1){称呼 = "爱女";}
  id("御赐确定").onclick = function(){
     子女.谥号 = id("输入").value+性别;
     id("御赐").style.display = "none";
     缓动黑幕();
     出圣旨("朕之" + 称呼 + 子女.名称 + "，倏尔薨逝，予心深为痛悼，宜追封" + 子女.谥号 + "，以表哀思。");
     子女谥号程序();
  };
}
function 课程安排(参数){
   var 临时学生数据 = [];
   if(参数 < 9){
      i = 0;
      while(i < _all_child.length){
         if(_all_child[i].状态 !== 0){
            _all_child[i].课程 == undefined;
         }
         else if(_all_child[i].课程 == undefined&&_all_child[i].状态 == 0&&_all_child[i].性别 == 0&&_all_child[i].年龄 >= 5){
            临时学生数据.push(_all_child[i]);
         }
         i++;
      }
   }
   else if(参数 >= 9&&参数 <= 13){
      i = 0;
      while(i < _all_child.length) {
         if(_all_child[i].状态 !== 0){
            _all_child[i].课程 == undefined;
         }
         else if(_all_child[i].课程 == undefined&&_all_child[i].状态 == 0&&_all_child[i].性别 == 1&&_all_child[i].年龄 >= 5){
            临时学生数据.push(_all_child[i]);
         }
         i++;
      }
   }
   id("kecheng").style.display="block";id("kc5").style.display="block";
   id("kcTittle").innerText ="课程安排";
   id("k1t").innerText ="无课程学生";id("k2t").innerText =所有课程[参数].名称 + "课学生";
   if(参数 <= 3){
	  id("kan5").style.display="none";
      id("kan1").innerText= "兵法";
      id("kan1").onclick = function(){课程安排(0);};
      id("kan2").innerText="剑术";
      id("kan2").onclick = function(){课程安排(1);};
      id("kan3").innerText="骑射";
      id("kan3").onclick = function(){课程安排(2);};
      id("kan4").innerText="暗杀";
      id("kan4").onclick = function(){课程安排(3);};
   }
   else if(参数 >= 4&&参数 <= 8){
      id("kan1").innerText="历史";
      id("kan1").onclick = function(){课程安排(4);};
      id("kan2").innerText="地理";
      id("kan2").onclick = function(){课程安排(5);};
      id("kan3").innerText = "算数";
      id("kan3").onclick = function(){课程安排(6);};
      id("kan4").innerText = "律法";
      id("kan4").onclick = function(){课程安排(7);};
      id("kan5").innerText = "诗词";
      id("kan5").onclick = function(){课程安排(8);};
   }
   else if(参数 >= 9&&参数 <= 13){
      id("kan1").innerText = "琴曲";
      id("kan1").onclick = function(){课程安排(9);};
      id("kan2").innerText = "棋艺";
      id("kan2").onclick = function(){课程安排(10);};
      id("kan3").innerText = "礼仪";
      id("kan3").onclick = function(){课程安排(11);};
      id("kan4").innerText = "书画";
      id("kan4").onclick = function(){课程安排(12);};
      id("kan5").innerText = "剑舞";
      id("kan5").onclick = function(){课程安排(13);};
   }
   var 序列号 = 0;
   var i = 0;
   处理学生排列(参数,序列号,临时学生数据);
   所有课程[参数].学生 = [];
   var i = 0;
   while(i < _all_child.length){
      if(_all_child[i].状态 !== 0){
         _all_child[i].课程 == undefined;
      }
      else if(_all_child[i].课程 == 参数&&_all_child[i].状态 == 0){
         所有课程[参数].学生.push(_all_child[i]);
      }
      i++;
   }
   所有学生名单 = 所有课程[参数].学生;
   渲染学生名单(参数,所有学生名单);
   id("kcqian").onclick = function(){
      if(序列号 > 0){
         序列号 -= 30;
         处理学生排列(参数,序列号,临时学生数据);
      }
   };
   id("kchou").onclick = function(){
      if(序列号 < 临时学生数据.length - 1){
         序列号 += 30;
         处理学生排列(参数,序列号,临时学生数据);
      }
   };
   id("kcqd").onclick = function(){
      id("kecheng").style.display="none";
   };
}
function 处理学生排列(参数,序列号,临时学生数据){
    var _loc3_ = 0;
    while(_loc3_ < 30){
        var _loc4_ = 临时学生数据[序列号 + _loc3_];
        var _loc2_ = className('kcxb')[_loc3_];
        if(_loc4_ == undefined){
            _loc2_.style.display="none";
        }
        else{
		    _loc2_.style.display="block";
            _loc2_.innerText = _loc4_.名称;
            _loc2_.属性 = _loc4_;
            _loc2_.onclick= function(){
            让这个人物出现课程(参数,this.属性);
            };
        }
        _loc3_ = _loc3_ + 1;
   }
}
function 让这个人物出现课程(参数,人物){
   if(所有学生名单.length < 10){
      var _loc3_ = 0;
      var _loc2_ = 0;
      while(_loc2_ < 所有学生名单.length){
         if(人物.id == 所有学生名单[_loc2_].id){
            _loc3_ = 1;
         }
         _loc2_ = _loc2_ + 1;
      }
      if(_loc3_ == 1){
         小提示("已在课程名单中");
      }
      else{
         人物.课程 = 参数;
         所有学生名单.push(人物);
         渲染学生名单(参数,所有学生名单);
         课程安排(参数);
      }
   }
   else{
      小提示("十名学生已满");
   }
}
function 渲染学生名单(参数,所有学生名单){
    var _loc2_ = 0;
    while(_loc2_ < 10){
        if(所有学生名单[_loc2_] == undefined){
		    className('kcxb2')[_loc2_].style.display="none";
        }
        else{
		    className('kcxb2')[_loc2_].style.display="block";
		    className('kcxb2')[_loc2_].序列 = _loc2_;
		    className('kcxb2')[_loc2_].属性 = 所有学生名单[_loc2_];
		    className('kcxb2')[_loc2_].innerText = 所有学生名单[_loc2_].名称;
		    className('kcxb2')[_loc2_].onclick = function(){
		        this.属性.课程 = undefined;
		        所有学生名单.splice(this.序列,1);
		        渲染学生名单(参数,所有学生名单);
		        课程安排(参数);
		    };
        }
        _loc2_ = _loc2_ + 1;
    }
}
function 伶官演出事件(){
	id('出现这位后宫').style.display = 'block';
	id('后宫对话板').style.display = 'block';
	id('出现后宫an0').style.display = 'block';
    i = 0;
    while(i <= 所有伶官.length){
        var 使用的伶官序号 = random(所有伶官.length);
        var 生成的伶官 = 所有伶官[使用的伶官序号];
        i++;
   }
   var _loc4_ = 生成的伶官.跳;
   新后宫图形读取程序(id("后宫头像"),_loc4_,"戏子");
   新后宫图形读取程序(id("出现背景"),111999,"背景");
   生成的伶官.见面 += 1;
   id('后宫头像').onclick = function (){};
   id('后宫对话').innerHTML = "今天的戏是【" + 生成的伶官.戏码 + "】，主角是：" + 生成的伶官.名称 + "。\n";
   id('出现后宫an0').onclick = function (){
        属性.魅力 += 4;
        属性.才艺 += 4;
        id('出现后宫an0').style.display = 'none';
        id('后宫对话板').style.display = 'none';
        id('后宫对话框').style.display = 'block';
        if(生成的伶官.见面 < 4){
            id('后宫对话2').innerText = 生成的伶官.名称 + "的戏演得很好。甚是赏心悦目。";
            id('后宫对话框').onclick = function (){关闭后宫面板(1);};
        }
        else if(生成的伶官.见面 >= 4&&生成的伶官._code == 3000){
            id('后宫对话2').innerText = "（解语花今日看起来貌似很惆怅。）尔可是有什么伤心之事？";
            id('后宫对话框').onclick = function (){
                id('后宫对话2').innerText = "解语花：皇上，其实我一直有一心事，若皇上能解，我愿意献出我能给的一切。";
                id('后宫对话框').onclick = function (){
                    id('后宫对话2').innerText = "解语花：这事对皇上而言，其实也不是什么难事，只是帮我找两个人。不知皇上是否愿意帮这个忙？";
                    id('出现后宫an1').style.display = 'block';
                    id('出现后宫an2').style.display = 'block';
                    id('出现后宫an1').innerText = "帮忙";
                    id('出现后宫an1').onclick = function(){
                        id('出现后宫an1').style.display = 'none';id('出现后宫an2').style.display = 'none';
                        主角.解语花 = 1;
                        生成的伶官.伶官 += 1;
                        生成的伶官.见面 == 0;
                        所有伶官.splice(使用的伶官序号,1);
                        id('后宫对话2').innerText = "解语花：多谢皇上。这两个人一个叫吴邪，一个叫张起灵，个头大概是这么高，长相大概是……其余就没有线索了，希望皇上能快点找到他们。";
                        id('后宫对话框').onclick = function (){
                            关闭后宫面板(1);
                            剧情达成(12);
                           
                        };
                    };
                    id('出现后宫an2').innerText = "不帮";
                        id('出现后宫an2').onclick = function(){
                        id('后宫对话2').innerText = "解语花：……好吧，我明白了。";
                        生成的伶官.见面 -= 4;
                        关闭后宫面板(1);
                    };
                };
            };
        }
        else if(生成的伶官.见面 >= 4&&生成的伶官._code != 3000){
            id('后宫对话2').innerText = 生成的伶官.名称 + "虽然身为男儿身，但身材曼妙，容貌清秀，要不要直接收入后宫？";
            id('出现后宫an1').style.display = 'block';
            id('出现后宫an2').style.display = 'block';
            id('出现后宫an1').innerText = "收为男宠";
            id('出现后宫an1').onclick = function(){
                id('出现后宫an1').style.display = 'none';id('出现后宫an2').style.display = 'none';
                新后宫图形读取程序(id('后宫头像'),0,"特殊");
				id('后宫对话2').innerText = "（皇上走到后台，看到了" + 生成的伶官.名称 + "卸妆的样子）。尔可愿意做朕的爱妃？";
                id('后宫对话框').onclick = function (){
                    var _loc1_ = 生成的伶官.跳 + 100;
                    新后宫图形读取程序(id('后宫头像'),_loc1_,"戏子");
                    id('后宫对话2').innerText = 生成的伶官.名称 + "：皇上，奴家的心早就是您的了。";
                    id('后宫对话框').onclick = function (){
                        id('后宫对话2').innerText = 生成的伶官.名称 + "：皇上，是喜欢奴家在台上唱戏的样子，还是喜欢奴家现在的样子？";
                        id('出现后宫an1').style.display = 'block';
                        id('出现后宫an2').style.display = 'block';
                        id('出现后宫an1').innerText = "唱戏妆扮";
                        id('出现后宫an1').onclick = function(){
                            生成的伶官.伶官 += 1;
                            生成的伶官.见面 == 0;
                            所有伶官.splice(使用的伶官序号,1);
                            id('出现后宫an1').style.display = 'none';id('出现后宫an2').style.display = 'none';
                            伶官后宫册封(生成的伶官,1);
                            关闭后宫面板(1);
                        };
				        id('出现后宫an2').innerText = "素颜样子";
                        id('出现后宫an2').onclick = function(){
                            生成的伶官.伶官 += 1;
                            生成的伶官.见面 == 0;
                            所有伶官.splice(使用的伶官序号,1);
                            id('出现后宫an1').style.display = 'none';id('出现后宫an2').style.display = 'none';
                            伶官后宫册封(生成的伶官,2);
                            关闭后宫面板(1);
                        };
                    };
                };
            };
		    id('出现后宫an2').innerText = "算了";
		    id('出现后宫an2').onclick = function(){
                id('后宫对话2').innerText = "今天的戏就先听到这。";
                id('出现后宫an1').style.display = 'none';id('出现后宫an2').style.display = 'none';
                id('后宫对话框').onclick = function (){关闭后宫面板(1);};
            };
        }
    };
}
function 伶官后宫册封(对象,参数){
   var 临时对象 = new Object();
   临时对象._code = 对象._code;
   临时对象.年龄 = 14 + random(5);
   临时对象.性别 = 0;
   临时对象.喜好 = 0;
   临时对象.介绍 = undefined;
   临时对象.爱 = 55 + random(10);
   临时对象.经验 = 0;
   临时对象.称呼 = "宫女";
   临时对象.名字 = 对象.名称;
   临时对象.家族 = 对象.家族;
   临时对象.文化 = 8;
   if(参数 == 1){临时对象.头像 = 对象.跳;}
   else if(参数 == 2){临时对象.头像 = 对象.跳 + 100;}
   临时对象.统帅 = 对象.统帅;
   临时对象.武力 = 对象.武力;
   临时对象.智力 = 对象.智力;
   临时对象.政治 = 对象.政治;
   临时对象.魅力 = 对象.魅力;
   临时对象.野心 = 对象.野心;
   临时对象.清廉 = 对象.清廉;
   临时对象.状态 = 0;
   临时对象.性格 = 性格计算(对象);
   临时对象.出身 = "梨园戏子";
   临时对象.id = undefined;
   临时对象.孕 = 0;
   临时对象.病 = 0;
   临时对象.仙 = 0;
   临时对象.护 = 0;
   临时对象.生育 = 0;
   临时对象.宫殿 = "";
   临时对象.寝殿 = "";
   临时对象.后宫相性 = "";
   临时对象.后宫势力 = 0;
   临时对象.朝廷相性 = 对象.朝廷相性;
   临时对象.朝廷势力 = 0;
   临时对象.皇嗣相性 = "";
   册封名号(临时对象,55);
}
function 解语花后宫册封(对象,参数){
   var 临时对象 = new Object();
   临时对象._code = 对象._code;
   临时对象.年龄 = 14 + random(5);
   临时对象.性别 = 0;
   临时对象.喜好 = 0;
   临时对象.介绍 = "生死却未央，逝水落千丈，途途通寒江，坠入汪洋。遮没了烈阳，那又何妨？星点希望，黑暗里吟唱，解语花扬，陪君来往。";
   临时对象.爱 = 55 + random(10);
   临时对象.经验 = 0;
   临时对象.称呼 = "宫女";
   if(参数 == 1){临时对象.名字 = "解语花";}
   else if(参数 == 2){临时对象.名字 = "解雨臣";}
   临时对象.家族 = 对象.家族;
   临时对象.文化 = 8;
   if(参数 == 1){临时对象.头像 = 对象.跳;}
   else if(参数 == 2){临时对象.头像 = 对象.跳 + 100;}
   临时对象.统帅 = 对象.统帅;
   临时对象.武力 = 对象.武力;
   临时对象.智力 = 对象.智力;
   临时对象.政治 = 对象.政治;
   临时对象.魅力 = 对象.魅力;
   临时对象.野心 = 对象.野心;
   临时对象.清廉 = 对象.清廉;
   临时对象.出身 = "梨园戏子";
   临时对象.状态 = 0;
   性格计算(临时对象);
   临时对象.id = undefined;
   临时对象.孕 = 0;
   临时对象.病 = 0;
   临时对象.仙 = 0;
   临时对象.护 = 0;
   临时对象.生育 = 0;
   临时对象.宫殿 = "";
   临时对象.寝殿 = "";
   临时对象.后宫相性 = "";
   临时对象.后宫势力 = 0;
   临时对象.朝廷相性 = 对象.朝廷相性;
   临时对象.朝廷势力 = 0;
   临时对象.皇嗣相性 = "";
   册封名号(临时对象,55);
}
function 赏赐这个妃子成药确定(人物, 成药, 序列){
   var 结果的话 = "";
   if(成药.类 == "胎"){
      console.log("看看属性：" + 人物.名字 + "/仙：" + 人物.仙 + "/孕：" + 人物.孕);
      if(人物.孕 !== 0&&人物.仙 !== 1&&人物.仙 !== 2&&人物.仙 !== 4){
         if(人物.性别 == 0){
            结果的话 = "皇上，这药不适合臣下用，还是留给其他姐妹吧。(成药已退回。)";
         }
         else{
            人物.仙 = 1;
            console.log("看看仙丹管用不：" + 人物.名字 + "/" + 人物.仙);
            结果的话 = "皇上，这药真的管用吗……";
            成药.数量 -= 1;
         }
      }
      else{
         结果的话 = "皇上，这药不适合臣妾用，还是留给其他姐妹吧。(成药已退回。)";
      }
   }
   else if(成药.类 == "保"){
      if(人物.孕 !== 0&&人物.仙 !== 1&&人物.仙 !== 2&&人物.仙 !== 4){
         if(人物.性别 == 0){
            结果的话 = "皇上，这药不适合臣妾用，还是留给其他姐妹吧。(成药已退回。)";
         }
         else{
            人物.仙 = 2;
            结果的话 = "谢皇上隆恩，有了这药，臣妾定能诞下皇嗣。";
            成药.数量 -= 1;
         }
      }
      else{结果的话 = "皇上，这药不适合臣妾用，还是留给其他姐妹吧。(成药已退回。)";}
   }
   else if(成药.类 == "堕"){
      if(人物._code == 7004){结果的话 = "这是什么？没有味道。";}
      else{
         结果的话 = "[哭]皇上，你害得臣妾好苦啊！（娘娘昏了过去…）";
         人物.爱 -= 50;
         人物.孕 = 0;
         人物.病 = 8;
         人物.仙 = 3;
     }
      成药.数量 -= 1;
   }
   else if(成药.类 == "情"){
      var _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.封号 + 人物.位分 + "：这是什么。[羞]";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.封号 + 人物.位分 + "：[惊]这是什么！";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.封号 + 人物.位分 + "：[惊]这是什么……[呆]";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.封号 + 人物.位分 + "：[惊]这是什么。[羞])";
      }
      人物.爱 += 50;
      if(人物.性别 == 1){人物.状态 = 1;}
      else{人物.状态 = 0;}
	  console.log(人物.状态);
      成药.数量 -= 1;
   }
   else if(成药.类 == "美"){
      _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.封号 + 人物.位分 + "：皇上您看臣妾漂亮吗。(娘娘很高兴，相貌提高。)";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.封号 + 人物.位分 + "：谢皇上恩典。(娘娘很高兴，相貌提高。)";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.封号 + 人物.位分 + "：皇上真是有心了。(娘娘很高兴，相貌提高。)";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.封号 + 人物.位分 + "：臣妾定当尽心服侍皇上。(娘娘很高兴，相貌提高。)";
      }
      if(人物.魅力 < 95){
         人物.魅力 += 3;
      }
      else{
         人物.魅力 = 99;
      }
      成药.数量 -= 1;
   }
   else if(成药.类 == "整"){
      if(人物.id !== undefined){
         结果的话 = 人物.封号 + 人物.位分 + "：皇上，这个不适合臣妾用，还是留给其他姐妹吧。(珍宝已退回。)。";
      }
      else if(random(5) == 0){
         结果的话 = "奴才回来了。\n手术失败了，大夫跑路了，" + 人物.封号 + 人物.位分 + "娘娘 可能毁容了。";
         人物.头像 = 0;
         人物.病 = 4 + random(3);
         成药.数量 -= 1;
      }
      else{
         结果的话 = "奴才回来了。\n大夫交代，" + 人物.封号 + 人物.位分 + "娘娘 可能需要休息一段时间。";
         人物.头像 = random(626)+1;
         人物.病 = 4 + random(3);
         成药.数量 -= 1;
      }
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
         结果的话 = 人物.封号 + 人物.位分 + "：皇上太帅了。(娘娘很高兴，爱情提高。)";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.封号 + 人物.位分 + "：万岁万岁万万岁。(娘娘很高兴，爱情提高。)";
      }
      人物.爱 += 10;
      成药.数量 -= 1;
   }
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情头像,42,"特殊");
   新后宫图形读取程序(剧情背景,599993,"背景");
   对话打字效果("太监：赐【" + 成药.名称 + "】予" + 人物.封号 + 人物.位分 + "，奴才这就去。");
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
         查看成药程序();
      };
   };
}
function 赏赐这个大臣成药确定(人物, 成药){
   var 结果的话 = "";
   if(成药.类 == "健"||成药.类 == "体"){
      var _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.名字 + "：臣谢皇上隆恩。(大臣很高兴，忠诚提高。)";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.名字 + "：谢主隆恩。(大臣很高兴，忠诚提高。)";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.名字 + "：皇上太帅了。(大臣很高兴，忠诚提高。)";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.名字 + "：万岁万岁万万岁。(大臣很高兴，忠诚提高。)";
      }
      人物.忠诚 = 100;
      成药.数量 -= 1;
   }
   else if(成药.类 == "情"||成药.类 == "胎"||成药.类 == "堕"||成药.类 == "美"||成药.类 == "整"||成药.类 == "保"){
      _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.名字 + "：皇上这是什么意思?(成药已退回。)";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.名字 + "：公公，这东西是做什么用的?(成药已退回。)";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.名字 + "：公公，赐这东西，臣下实在想不通。(成药已退回。)";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.名字 + "：公公，你拿错了吧。(成药已退回。)";
      }
   }
   else if(成药.类 == "智"){
      _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.名字 + "：臣谢皇上隆恩。(大臣很高兴，智力提高。)";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.名字 + "：谢主隆恩。(大臣很高兴，智力提高。)";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.名字 + "：皇上太帅了。(大臣很高兴，智力提高。)";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.名字 + "：万岁万岁万万岁。(大臣很高兴，智力提高。)";
      }
      if(人物.智力 < 97){
         人物.智力 += 3;
      }
      else{
         人物.智力 = 100;
      }
      成药.数量 -= 1;
   }
   else if(成药.类 == "武"){
      _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.名字 + "：臣谢皇上隆恩。(大臣很高兴，武力提高。)";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.名字 + "：谢主隆恩。(大臣很高兴，武力提高。)";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.名字 + "：皇上太帅了。(大臣很高兴，武力提高。)";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.名字 + "：万岁万岁万万岁。(大臣很高兴，武力提高。)";
      }
      if(人物.武力 < 97){
         人物.武力 += 3;
      }
      else{
         人物.武力 = 100;
      }
      成药.数量 -= 1;
   }
   else if(成药.类 == "政"){
      _loc3_ = random(4);
      if(_loc3_ == 0){
         结果的话 = 人物.名字 + "：臣谢皇上隆恩。(大臣很高兴，政治提高。)";
      }
      else if(_loc3_ == 1){
         结果的话 = 人物.名字 + "：谢主隆恩。(大臣很高兴，政治提高。)";
      }
      else if(_loc3_ == 2){
         结果的话 = 人物.名字 + "：皇上太帅了。(大臣很高兴，政治提高。)";
      }
      else if(_loc3_ == 3){
         结果的话 = 人物.名字 + "：万岁万岁万万岁。(大臣很高兴，政治提高。)";
      }
      if(人物.政治 < 97){
         人物.政治 += 3;
      }
      else{
         人物.政治 = 100;
      }
      成药.数量 -= 1;
   }
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情头像,42,"特殊");
   新后宫图形读取程序(剧情背景,599993,"背景");
   对话打字效果("太监：赐【" + 成药.名称 + "】予" + 人物.名字 + "，奴才这就去。");
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
         查看成药程序();
      };
   };
}
function 把成药给这个子女(人物, 成药){
   var 结果的话 = "";
   if(成药.类 == "健"||成药.类 == "体"){
      var _loc3_ = random(4);
      if(人物.病 > 0){
         if(人物.年龄 > 3){
            if(_loc3_ == 0){
               结果的话 = 人物.名称 + "：儿臣谢父皇隆恩。(身体状况好了很多。)";
            }
            else if(_loc3_ == 1){
               结果的话 = 人物.名称 + "：父皇如此关爱儿臣，儿臣十分感动。(身体状况好了很多。)";
            }
            else if(_loc3_ == 2){
               结果的话 = 人物.名称 + "：儿臣谢父皇垂爱。(身体状况好了很多。)";
            }
            else if(_loc3_ == 3){
               结果的话 = 人物.名称 + "：谢父皇赐药。(身体状况好了很多。)";
            }
         }
         else{
            结果的话 = "乳母给" + 人物.名称 + "喂了药。" + 人物.名称 + "的身体状况好了很多。";
         }
         if(人物.病 < 20){
            人物.病 = 2;
            人物.保 += 10;
         }
         成药.数量 -= 1;
      }
      else if(人物.年龄 > 3){
         结果的话 = 人物.名称 + "：儿臣身体很健康，父皇还是把药留着给其他兄弟姐妹吧。";
      }
      else{
         结果的话 = "乳母：" + 人物.名称 + "小殿下活蹦乱跳，根本不吃药，看来身体很健康。";
      }
   }
   else if(成药.类 == "美"){
      _loc3_ = random(4);
      if(人物.年龄 > 3){
         if(人物.性别 == 1&&人物.年龄 > 12){
            结果的话 = 人物.名称 + "：父皇，儿臣漂亮吗。^_^";
            if(人物.魅力 < 98){
               人物.魅力 += 2;
               结果的话 += "（魅力上升）";
            }
            成药.数量 -= 1;
         }
         else if(_loc3_ == 0){
            结果的话 = 人物.名称 + "：父皇还是把这药留给后宫娘娘们吧。(成药已退回。)";
         }
         else if(_loc3_ == 1){
            结果的话 = 人物.名称 + "：父皇，这东西儿臣貌似用不着。(成药已退回。)";
         }
         else if(_loc3_ == 2){
            结果的话 = 人物.名称 + "：公公，你是不是给错人了。(成药已退回。)";
         }
         else if(_loc3_ == 3){
            结果的话 = 人物.名称 + "：父皇，貌似母妃更适合用这个药。(成药已退回。)";
         }
      }
      else{
         结果的话 = "乳母：" + 人物.名称 + "小殿下现在似乎不适合用这个药。(成药已退回。)";
      }
   }
   else if(成药.类 == "情"||成药.类 == "胎"||成药.类 == "堕"||成药.类 == "整"||成药.类 == "保"){
      _loc3_ = random(4);
      if(人物.年龄 > 3){
         if(_loc3_ == 0){
            结果的话 = 人物.名称 + "：父皇这是什么意思?(成药已退回。)";
         }
         else if(_loc3_ == 1){
            结果的话 = 人物.名称 + "：公公，这东西是做什么用的?(成药已退回。)";
         }
         else if(_loc3_ == 2){
            结果的话 = 人物.名称 + "：公公，赐这东西，儿臣实在想不通。(成药已退回。)";
         }
         else if(_loc3_ == 3){
            结果的话 = 人物.名称 + "：公公，你拿错了吧。(成药已退回。)";
         }
      }
      else{
         结果的话 = "乳母：" + 人物.名称 + "小殿下似乎不适合用这个药。(成药已退回。)";
      }
   }
   else if(成药.类 == "智"){
      _loc3_ = random(4);
      if(人物.年龄 > 3){
         if(_loc3_ == 0){
            结果的话 = 人物.名称 + "：儿臣谢父皇隆恩。";
         }
         else if(_loc3_ == 1){
            结果的话 = 人物.名称 + "：父皇如此关爱儿臣，儿臣十分感动。";
         }
         else if(_loc3_ == 2){
            结果的话 = 人物.名称 + "：儿臣谢父皇垂爱。";
         }
         else if(_loc3_ == 3){
            结果的话 = 人物.名称 + "：谢父皇赐药。";
         }
      }
      else{
         结果的话 = "乳母给" + 人物.名称 + "喂了药。";
      }
      if(人物.智力 < 90){
         人物.智力 += 2;
         结果的话 += "（智力上升）";
      }
      成药.数量 -= 1;
   }
   else if(成药.类 == "武"){
      _loc3_ = random(4);
      if(人物.年龄 > 3){
         if(_loc3_ == 0){
            结果的话 = 人物.名称 + "：儿臣谢父皇隆恩。";
         }
         else if(_loc3_ == 1){
            结果的话 = 人物.名称 + "：父皇如此关爱儿臣，儿臣十分感动。";
         }
         else if(_loc3_ == 2){
            结果的话 = 人物.名称 + "：儿臣谢父皇垂爱。";
         }
         else if(_loc3_ == 3){
            结果的话 = 人物.名称 + "：谢父皇赐药。";
         }
      }
      else{
         结果的话 = "乳母给" + 人物.名称 + "喂了药。";
      }
      if(人物.武力 < 90){
         人物.武力 += 2;
         结果的话 += "（武力上升）";
      }
      成药.数量 -= 1;
   }
   else if(成药.类 == "政"){
      _loc3_ = random(4);
      if(人物.年龄 > 3){
         if(_loc3_ == 0){
            结果的话 = 人物.名称 + "：儿臣谢父皇隆恩。";
         }
         else if(_loc3_ == 1){
            结果的话 = 人物.名称 + "：父皇如此关爱儿臣，儿臣十分感动。";
         }
         else if(_loc3_ == 2){
            结果的话 = 人物.名称 + "：儿臣谢父皇垂爱。";
         }
         else if(_loc3_ == 3){
            结果的话 = 人物.名称 + "：谢父皇赐药。";
         }
      }
      else{
         结果的话 = "乳母给" + 人物.名称 + "喂了药。";
      }
      if(人物.政治 < 90){
         人物.政治 += 2;
         结果的话 += "（政治上升）";
      }
      成药.数量 -= 1;
   }
   id('剧情对话').style.display = 'block';
   新后宫图形读取程序(剧情头像,42,"特殊");
   新后宫图形读取程序(剧情背景,599993,"背景");
   对话打字效果("太监：赐【" + 成药.名称 + "】予" + 人物.名称 + "，奴才这就去。");
   剧情对话板.onclick = function(){
      出现这个人的头像(剧情头像,人物);
      对话打字效果(结果的话);
     剧情对话板.onclick = function(){
         缓动黑幕();
         id('剧情对话').style.display = 'none';
         查看成药程序();
      };
   };
}