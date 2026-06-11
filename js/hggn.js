function 嫔妃一览程序(参数,珍宝){
	feiziyilan.style.display = 'block';
	var 临时妃嫔列表 = [];
     if(参数 == 0||参数 == 1||参数 == 4||参数 == 6||参数 == 7||参数 == 8||参数 == 11||参数 == 14||参数 == 15||参数 == 999)
       {
          var _loc5_ = 0;
          while(_loc5_ < _all_feizi.length)
          {
             if(_all_feizi[_loc5_].位分 !== "秀女"&&_all_feizi[_loc5_].地位 !==undefined)
             {
                临时妃嫔列表.push(_all_feizi[_loc5_]);
             }
             _loc5_ += 1;
          }
       }
	else if(参数 == 10){
	      _loc5_ = 0;
	      while(_loc5_ < _all_feizi.length)
	      {
	         if(_all_feizi[_loc5_].病 !== 0)
	         {
	            临时妃嫔列表.push(_all_feizi[_loc5_]);
	         }
	         _loc5_ += 1;
	      }
	   }
	else if(参数 == 13){
	    var _loc5_ = 0;
	    while(_loc5_ < 主角.掖庭.length){
	        临时妃嫔列表.push(主角.掖庭[_loc5_]);
	         _loc5_ += 1;
	      }
	}
	else if(参数 == 88||参数 == 89){
	    var _loc5_ = 0;
	    while(_loc5_ < _all_feizi.length) {
			if(_all_feizi[_loc5_].位分 == "秀女"||_all_feizi[_loc5_].地位 ==undefined){
			    临时妃嫔列表.push(_all_feizi[_loc5_]);
			}
	        _loc5_ += 1;
	    }
	}
	else{
	    var _loc5_ = 0;
	    while(_loc5_ < _all_feizi.length) {
			if(_all_feizi[_loc5_].地位 !== 0 && _all_feizi[_loc5_].位分 !== "秀女"&&_all_feizi[_loc5_].地位 !==undefined){
			    临时妃嫔列表.push(_all_feizi[_loc5_]);
			}
	        _loc5_ += 1;
	    }
	}
	序列 = 0;
	临时妃嫔列表.sort(compare("地位"));
	刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝)
	id('feiziyilanqian').onclick = function(){
		if(序列 > 0 ){
		    序列 -= 1;
		    刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝);
		    }
		};
	id('feiziyilanhou').onclick = function(){
		if(序列 < Math.round(临时妃嫔列表.length / 10)){
			序列 += 1;
			    刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝);
			}
	};
	var 开关 = 0;
	id('fznl').onclick = function(){
	    if(开关 == 0){排序计算程序(临时妃嫔列表,"年龄",0);开关 = 1;}
	    else{排序计算程序(临时妃嫔列表,"年龄",1);开关 = 0;}
		序列 = 0;
	    刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝);
	   };
	id('fzmh').onclick = function(){
	    if(开关 == 0){排序计算程序(临时妃嫔列表,"地位",0);开关 = 1;}
	    else{排序计算程序(临时妃嫔列表,"地位",1);开关 = 0;}
		序列 = 0;
	    刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝);
	   };
	id('fzen').onclick = function(){
	    if(开关 == 0){排序计算程序(临时妃嫔列表,"生育",0);开关 = 1;}
	    else{排序计算程序(临时妃嫔列表,"生育",1);开关 = 0;}
		序列 = 0;
	    刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝);
	   };
	id('fzml').onclick = function(){
	    if(开关 == 0){排序计算程序(临时妃嫔列表,"魅力",0);开关 = 1;}
	    else{排序计算程序(临时妃嫔列表,"魅力",1);开关 = 0;}
		序列 = 0;
	    刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝);
	   };
	id('fzjy').onclick = function(){
	    if(开关 == 0){排序计算程序(临时妃嫔列表,"经验",0);开关 = 1;}
	    else{排序计算程序(临时妃嫔列表,"经验",1);开关 = 0;}
		序列 = 0;
	    刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝);
	   };
	id('fza').onclick = function(){
	    if(开关 == 0){排序计算程序(临时妃嫔列表,"爱",0);开关 = 1;}
	    else{排序计算程序(临时妃嫔列表,"爱",1);开关 = 0;}
		序列 = 0;
	    刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝);
	   };
	 id('fzzt').onclick = function(){
	     if(开关 == 0){排序计算程序(临时妃嫔列表,"状态",0);开关 = 1;}
	     else{排序计算程序(临时妃嫔列表,"状态",1);开关 = 0;}
	 	序列 = 0;
	     刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝);
	    };
} 
function 刷新妃嫔信息(参数,临时妃嫔列表,序列,珍宝){
	var _loc4_ = 0;
	while(_loc4_ < className('feizilbx').length){
		var i = 序列 * 10 + _loc4_;
	    var _loc5_ = 临时妃嫔列表[i];
		if(_loc5_ == undefined){className('feizilbx')[_loc4_].style.display = 'none';}
		else{
            className('feizilbx')[_loc4_].style.display = 'block';
			if(_loc5_._code >=1000&&_loc5_._code<=6999||_loc5_._code >= 14000 && _loc5_._code <= 14999){className('f1')[_loc4_].style.color="#ffd0cb"}
			else{className('f1')[_loc4_].style.color="#ffffff"}
			className('f1')[_loc4_].innerText = _loc5_.名字;
			className('f2')[_loc4_].innerText = _loc5_.家族;
			if(_loc5_.家族 == undefined){className('f2')[_loc4_].innerText = "无";}
			className('f3')[_loc4_].innerText = _loc5_.年龄;
			if(参数==10&&_loc5_.位分=="秀女"){
				className('f4')[_loc4_].innerText =  _loc5_.封号 + _loc5_.位分;
				className('f5')[_loc4_].innerText = "";
			}
			else if(参数!== 88&&参数 !== 89){
				className('f4')[_loc4_].innerText =  _loc5_.封号 + _loc5_.位分;
				className('f5')[_loc4_].innerText = _all_palace[_loc5_.宫殿].名称;
			}
			className('f6')[_loc4_].innerText =  _loc5_.生育;
			className('f7')[_loc4_].innerText = _loc5_.魅力;
			className('f8')[_loc4_].innerText = _loc5_.经验;
			className('f9')[_loc4_].innerText = _loc5_.爱;
			if(_loc5_.病 > 0){className('f10')[_loc4_].innerText = "病";className('f10')[_loc4_].style.color = '#0055ff';}
			else if(_loc5_.孕 > 0){className('f10')[_loc4_].innerText = "孕";className('f10')[_loc4_].style.color = '#ffe200';}
			else{className('f10')[_loc4_].innerText = "正常";className('f10')[_loc4_].style.color = '#ffffff';}
		    if(参数 == 13 || 参数 == 88||参数 == 89){
            className('f4')[_loc4_].innerText = "";className('f5')[_loc4_].innerText = "";className('f9')[_loc4_].innerText = _loc5_.爱;}
		}
		className('feizilbx')[_loc4_].取 =  _loc5_;
		className('feizilbx')[_loc4_].onclick = function(){
			if(参数 == 0){
			    出现这个妃嫔的介绍(this.取);
			}
			else if(参数 == 5){
				feiziyilan.style.display = 'none';
			    选择去哪个宫殿(99,this.取)
			}
			else if(参数 == 6){
			    赏赐这个妃子确定(this.取,珍宝);
			    feiziyilan.style.display = 'none';
			}
			 else if(参数 == 7){
			    赏赐这个妃子成药确定(this.取,珍宝);
			    feiziyilan.style.display = 'none';
			}
			else if(参数 == 8){
			   查看血滴子详情程序(1,this.取,"暗查妃子");
			   feiziyilan.style.display = 'none';
			}
			else if(参数 == 9){
               选哪位娘娘出去玩呢(this.取);
               feiziyilan.style.display = 'none';
            }
			else if(参数 == 10){
				id()
               安排御医(2,this.取);
               feiziyilan.style.display = 'none';
            }
			else if(参数 == 11){
			   赏赐这个妃子(this.取,珍宝);
			   feiziyilan.style.display = 'none';
			}
			else if(参数 == 12){
                掖庭程序(this.取);
            }
            else if(参数 == 13){
                放出掖庭(this.取);
            }
			else if(参数 == 15){
			   缓动黑幕();
			   批量赏赐界面(0,this.取,"妃子");
			   feiziyilan.style.display = 'none';
			}
			else if(参数 == 88){
			    出现这个秀女的介绍(this.取,3);
			}
			else if(参数 == 89){
				子女一览程序(17,this.取)
			}
			if(参数 == 999){
			    出现这个妃嫔的介绍(this.取,参数);
			}
		}
		_loc4_ += 1;
	}	 
}
function 出现这个妃嫔的介绍(取数据,参数){
   id('介绍图').style.display = 'block';
   id('介绍图an0').style.display = 'none';
   id('介绍图an1').style.display = 'none';id('介绍图an3').innerText = "关闭";
   出现这个人的头像(id('介绍图头像'),取数据);
   id('介绍图名字').innerText = 取数据.名字;
   id('介绍图介绍').innerText = '文化圈：' + _all_nation[取数据.文化].文化;
   id('介绍图介绍').innerText += "\n性格：" + 出现性格(取数据);
   id('介绍图介绍').innerText += "\n出身：" + 取数据.出身;
   id('介绍图介绍').innerText += "\n寝殿：" + _all_palace[取数据.宫殿].名称 + _all_palace[取数据.宫殿].内殿[取数据.寝殿];
   id('介绍图介绍').innerText += "\n介绍：\n    ";
   id('介绍图介绍').innerText += 导出介绍(取数据);
   id('介绍图an2').style.display = 'block';
   id('介绍图an2').innerText = '事宜';
   id('介绍图an2').onclick = function(){id('介绍图').style.display = 'none';妃嫔事宜(取数据);}
   id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';}
   if(参数==999){id('介绍图an2').style.display = 'none';}
}
function 出现这个秀女的介绍(取数据,参数,选择,皇子){
   id('介绍图').style.display = 'block';id('介绍图an3').innerText = "关闭";
   id('介绍图an0').style.display = 'none';
   id('介绍图an1').style.display = 'none';
   出现这个人的头像(id('介绍图头像'),取数据);
   id('介绍图名字').innerText = 取数据.名称;
   id('介绍图介绍').innerText = '文化圈：' + _all_nation[取数据.文化].文化;
   id('介绍图介绍').innerText += "\n性格：" + 出现性格(取数据);
   if(取数据.性别 == 1){
   	    id('介绍图介绍').innerText += "\n出身：" + 取数据.出身;
   }
   if(参数 == 0){
	   id('介绍图名字').innerText = 取数据.名字;
	   id('介绍图介绍').innerText += "\n魅力：" + 取数据.魅力;
	   id('介绍图an2').style.display = 'none';
   }
   else if(参数 == 1 || 参数 == 9){
	   id('介绍图介绍').innerText += "\n财富：" + 取数据.家产 + '万';
	   id('介绍图介绍').innerText += "\n修养：" + 修养[取数据.修养];
   	   id('介绍图介绍').innerText += "\n魅力：" + 取数据.魅力;
   	   id('介绍图an2').style.display = 'block';
	   if(参数 == 1){
		   出现这个人的头像(id('介绍图头像'),取数据,0);
		   id('介绍图名字').innerText = 取数据.名称;
		   if(选择.innerText ==取数据.名称){
		       id('介绍图an2').innerText = "留牌";
		       id('介绍图an2').onclick = function(){选择.innerText="【"+选择.innerText+"】";id('介绍图').style.display = 'none';}
		   		}
		   else{ id('介绍图an2').innerText = "撂牌";
		   id('介绍图an2').onclick = function(){选择.innerText=取数据.名称;id('介绍图').style.display = 'none';}}
	   }else if(参数 == 9){
		   id('介绍图an2').innerText = "选中";
		   id('介绍图an2').onclick = function(){
			   id('介绍图').style.display = 'none';
			   皇子是否中意(取数据,选择,皇子);
		   }
	   }
   }
   else if(参数 == 3){
	   id('介绍图an1').style.display = 'block';
	   id('介绍图an1').innerText = "驱逐出宫";
	   id('介绍图an2').style.display = 'block';
	   id('介绍图an1').onclick = function(){
		   id('介绍图').style.display = 'none';
		   id('hukoupucha').style.display = 'block';
		   id('huhouTitle').innerText = '驱逐出宫';
		   id('huhouText').innerText = '确认要将秀女'+取数据.名字+'驱逐出宫吗？';
		   id('hkan0').innerText = '确定';
		   id('hkan1').innerText = '取消';
		   id('hkan0').onclick = function (){
		   id('hukoupucha').style.display = 'none';	
		   删除跟这个人有关的三方相性(取数据);
		   删除这个妃子的值(取数据);嫔妃一览程序(88);
		    }
		    id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
		   }
	   id('介绍图an2').innerText = "册封名号";id('介绍图名字').innerText = 取数据.名字;
	   id('介绍图an2').onclick = function(){册封名号(取数据,78);id('介绍图').style.display = 'none';feiziyilan.style.display = 'none';id('neishiMB').style.display = 'none';}
   }
   else{id('介绍图an2').style.display = 'none';}
   id('介绍图介绍').innerText += "\n介绍：\n    ";
   id('介绍图介绍').innerText += 导出介绍(取数据);
   id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';}
}
function 妃嫔事宜(对象){
	id('sy').style.display = 'block';
	id('syb').style.display = 'block';
	id('syTitle').innerText = '妃嫔事宜';
	id('sysm').innerText = '';
	var i = 0;
	while(i < 15){
		if(i < 6){className('sydb')[i].style.display = 'block';}else{className('sydb')[i].style.display = 'none';}
		i++;
	}
	if(对象.地位 == 0){className('sydb')[3].style.display = 'none';className('sydb')[4].style.display = 'none';className('sydb')[0].style.display = 'none';className('sydb')[1].style.display = 'none'}
	else{{className('sydb')[4].style.display = 'block';className('sydb')[3].style.display = 'block';className('sydb')[0].style.display = 'block';className('sydb')[1].style.display = 'block'}}
	className('sydb')[0].innerText = '晋位';
	className('sydb')[1].innerText = '降位';
	className('sydb')[2].innerText = '更改封号';
	className('sydb')[3].innerText = '送入掖庭';
	className('sydb')[4].innerText = '更改资料';
	className('sydb')[0].onclick = function (){id('feiziyilan').style.display = 'none';id('sy').style.display = 'none';册封名号(对象,10);}
	className('sydb')[1].onclick = function (){id('feiziyilan').style.display = 'none';id('sy').style.display = 'none';册封名号(对象,11);}
	className('sydb')[2].onclick = function (){id('feiziyilan').style.display = 'none';id('sy').style.display = 'none';
	id('cf').style.display = 'block';
	id('wfb').style.display = 'none';
	id('御赐封号').style.display = 'block';
	id('cfsm').innerText = '御赐封号';
	id('册封取消').onclick = function(){
	id('御赐封号').style.display = 'none';}
	id('输入封号').value = 对象.封号;
	id('随机封号').onclick = function (){
		if(对象.地位<2 ||对象.位分=="皇贵妃"||对象.位分=="夫人"){
			id('输入封号').value = 皇家名字女字[random(皇家名字女字.length)]+皇家名字女字[random(皇家名字女字.length)];
			id('随机封号').onclick = function (){
				id('输入封号').value = 皇家名字女字[random(皇家名字女字.length)]+皇家名字女字[random(皇家名字女字.length)];
			}
			id('输入封号').maxLength="2";
		}
		else{
			id('输入封号').maxLength="1";
			id('随机封号').onclick = function (){
				id('输入封号').value = 皇家名字女字[random(皇家名字女字.length)];
			}
		}
	}
	id('御赐封号确定').onclick = function (){
		id('御赐封号').style.display = 'none';id('cf').style.display = 'none';
		对象.封号 = id('输入封号').value;
		出圣旨(对象.名字 + "改封号为" + 对象.封号 + "。");
		嫔妃一览程序(0);
	 }
	}
	className('sydb')[3].onclick = function (){id('feiziyilan').style.display = 'none';id('sy').style.display = 'none';掖庭程序(对象);}
	className('sydb')[4].onclick = function (){
		更改妃子资料(对象);
	}
}
function 更改妃子资料(取数据){
	id('syb').style.display = 'none';
	id('syb2').style.display = 'block';
	id('syTitle').innerText = '更改资料';
	id('sysm').innerText = '';
	var i = 0;
	while(i < 32){
		if(i < 2){className('sydb2')[i].style.display = 'block';}else{className('sydb2')[i].style.display = 'none';}
		i++;
	}
	className('sydb2')[0].innerText="赐名";className('sydb2')[1].innerText="更改介绍";
	id('qxsy').onclick = function(){id('syb').style.display = 'block';
	id('syb2').style.display = 'none';id('sy').style.display = 'none';}
	className('sydb2')[0].onclick = function(){
		_loc1_=取数据.封号+取数据.位分+取数据.名字;
		id('御赐').style.display = 'block';
		id('ycsm').innerText = "赐名";
		id('ycts').innerText = "请输入姓氏,不超过4个字";
		id('输入').value = 取数据.家族;
		id('输入').maxLength = "4";
		id('随机一个').onclick = function(){
			id('输入').value = 姓[random(姓.length)];
		};
		id('御赐确定').onclick = function(){
				if(取数据.封号==取数据.家族){
					取数据.封号=id('输入').value;
				}
				取数据.家族=id('输入').value;
				id('ycsm').innerText = "赐名";
				id('ycts').innerText = "请输入名字,不超过6个字。如需资料里名字带姓，请姓和名一起输入";
				id('输入').value = 取数据.名字;
				id('输入').maxLength = "6";
				id('随机一个').onclick = function(){};
				id('御赐确定').onclick = function(){
					if(取数据.名字!==id('输入').value&&id('输入').value.length >0){
					    改变母亲生母(取数据,id('输入').value);
						取数据.名字=id('输入').value;
					    取数据.名称=id('输入').value;
					    id('御赐').style.display = 'none';id('syb').style.display = 'block';
				        id('syb2').style.display = 'none';id('sy').style.display = 'none';
					    出圣旨(_loc1_+"赐姓" + 取数据.家族+"，赐名" + 取数据.名字 + "。");
					    嫔妃一览程序(0);
				    }
				    else{
					    id('御赐').style.display = 'none';id('syb').style.display = 'block';
					    id('syb2').style.display = 'none';id('sy').style.display = 'none';
				    }
			}
		}
	}
	className('sydb2')[1].onclick = function(){
		id('御赐').style.display = 'block';
		id('ycsm').innerText = "更改介绍";
		id('ycts').innerText = "请输入介绍,不超过180个字。什么也不输，取消更改。";
		id('输入').value = "";
		id('输入').maxLength = "180";
		id('随机一个').onclick = function(){
		};
		id('御赐确定').onclick = function(){
			if(id('输入').value.length>0){
				取数据.介绍=id('输入').value;
				id('御赐').style.display = 'none';id('syb').style.display = 'block';
				id('syb2').style.display = 'none';id('sy').style.display = 'none';
			}else{
				id('御赐').style.display = 'none';id('syb').style.display = 'block';
				id('syb2').style.display = 'none';id('sy').style.display = 'none';
			}
			嫔妃一览程序(0);
		}
	}
}
function 计算后宫开销(){
   var _loc4_ = 0;
   var _loc1_ = 0;
   while(_loc1_ < _all_feizi.length){
	   if(_all_feizi[_loc1_].地位==undefined||_all_feizi[_loc1_].位分=="秀女"){
		   _all_feizi[_loc1_].月例 = 1000;
	   }
	   else{
		   _all_feizi[_loc1_].月例 = (后宫位分.length + 3)*1000 - _all_feizi[_loc1_].地位 * 1000;
	   }
      _all_feizi[_loc1_].吃穿 = Math.round(3000 * (2 - 国家.协理六宫[1] / 100) * (2 - _all_feizi[_loc1_].清廉 / 100));
      _all_feizi[_loc1_].宫人俸禄 = 0;
      _all_feizi[_loc1_].太监 = 0;
      _all_feizi[_loc1_].宫女 = 0;
      _all_feizi[_loc1_].护 = 0;
      var _loc2_ = 0;
      while(_loc2_ < _all_taijian.length){
         if(_all_taijian[_loc2_].主子 == _all_feizi[_loc1_].id){
            _all_feizi[_loc1_].宫人俸禄 += 150 * _all_taijian[_loc2_].能力;
            _all_taijian[_loc2_].俸禄 = 150 * _all_taijian[_loc2_].能力;
            _all_feizi[_loc1_].太监 += 1;
            _all_feizi[_loc1_].护 += _all_taijian[_loc2_].能力;
         }
         _loc2_ += 1;
      }
      var _loc3_ = 0;
      while(_loc3_ < _all_gongnv.length){
         if(_all_gongnv[_loc3_].主子 == _all_feizi[_loc1_].id){
            _all_feizi[_loc1_].宫人俸禄 += 150 * _all_gongnv[_loc3_].能力;
            _all_gongnv[_loc3_].俸禄 = 150 * _all_gongnv[_loc3_].能力;
            _all_feizi[_loc1_].宫女 += 1;
            _all_feizi[_loc1_].护 += _all_gongnv[_loc3_].能力;
         }
         _loc3_ += 1;
      }
      _all_feizi[_loc1_].总计 = _all_feizi[_loc1_].月例 + _all_feizi[_loc1_].吃穿 + _all_feizi[_loc1_].宫人俸禄;
      _loc4_ += _all_feizi[_loc1_].总计;
      _loc1_ += 1;
   }
   _loc3_ = 0;
   while(_loc3_ < _all_gongnv.length){
      if(_all_gongnv[_loc3_].主子 == undefined){
         _loc4_ += 100;
         _all_gongnv[_loc3_].俸禄 = 100;
      }
      _loc3_ += 1;
   }
   _loc3_ = 0;
   while(_loc3_ < _all_taijian.length){
      if(_all_taijian[_loc3_].主子 == undefined){
         _loc4_ += 100;
         _all_taijian[_loc3_].俸禄 = 100;
      }
      _loc3_ += 1;
   }
   return _loc4_;
}
function 强制放入后宫人物(对象,参数){
	var 临时对象 = new Object();
	   临时对象._code = 对象._code;
	   临时对象.年龄 = 对象.年龄;
	   临时对象.性别 = 对象.性别;
	   临时对象.喜好 = 0;
	   临时对象.介绍 = undefined;
	   临时对象.爱 = 55 + random(10);
	   临时对象.经验 = 0;
	   临时对象.出身 = 对象.出身;
	   if(对象.称呼==undefined){
	   	   临时对象.称呼 = "宫女";
	   }else{
	   	   临时对象.称呼 = 对象.称呼;
		   临时对象.出身 = _all_nation[对象.文化].名称+对象.称呼;
	   }
	   临时对象.名字 = 对象.名称;
	   临时对象.家族 = 对象.家族;
	   临时对象.头像 = 对象.跳;
	   临时对象.统帅 = 对象.统帅;
	   临时对象.武力 = 对象.武力;
	   临时对象.智力 = 对象.智力;
	   临时对象.政治 = 对象.政治;
	   临时对象.魅力 = 对象.魅力;
	   临时对象.野心 = 对象.野心;
	   临时对象.清廉 = 对象.清廉;
	   临时对象.文化 = 对象.文化;
	   临时对象.状态 = 0;
	   if(对象.性格!==undefined){
		   临时对象.性格 = 对象.性格;
	   }
	   else{
	   性格计算(临时对象);
	   }
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
	   if(参数==undefined){
		   册封名号(临时对象,9);
	   }else{
		   册封名号(临时对象,参数);
	   }
}
function 删除这个妃子的值(对象){
   var _loc2_ = 0;
   var _loc3_ = 0;
   i = 0;
   while(i < 主角.掖庭.length){
      if(主角.掖庭[i].名字 == 对象.名字){
         _loc3_ = 1;
      }
      i++;
   }
   if(_loc2_ == 0 && _loc3_ == 0 && 对象.名字 !== "阿四"){
      主角.追封.push(对象);
      console.log(对象.名字 + "可追封");
   }
   if(对象.名字 == 国家.协理六宫[0]){
      国家.协理六宫[0] = "无";
      国家.协理六宫[1] = 50;
   }
   i = 0;
   while(i < _all_taijian.length){
      if(_all_taijian[i].主子 == 对象.id){
         _all_taijian[i].主子 = undefined;
      }
      i++;
   }
   i = 0;
   while(i < _all_gongnv.length){
      if(_all_gongnv[i].主子 == 对象.id){
         _all_gongnv[i].主子 = undefined;
      }
      i++;
   }
   var i = 0;
   while(i < _all_feizi.length){
      if(_all_feizi[i].id == 对象.id){
         删除跟这个人有关的三方相性(对象);
         _all_feizi.splice(i,1);
      }
      i++;
   }
   刷新_all_palace居住情况();
   刷新各个位分剩余名额();
   计算后宫开销();
}
function 刷新各个位分剩余名额(){
   n = 0;
   g = 0;
   while(n < 后宫位分.length){
      后宫位分[n][3] = 0;
      n++;
   }
   n = 0;
   while(n < 九嫔位分.length){
      九嫔位分[n][3] = 0;
      n++;
   }
   i = 0;
   while(i < _all_feizi.length){
      f = 0;
      while(f < 九嫔位分.length){
         if(_all_feizi[i].位分 == 九嫔位分[f][1]){
            九嫔位分[f][3] += 1;
            g++;
         }
         f++;
      }
      i++;
   }
   i = 0;
   while(i < _all_feizi.length){
      d = 0;
      while(d < 后宫位分.length){
         if(_all_feizi[i].地位 == 后宫位分[d][0]){
            后宫位分[d][3] += 1;
            console.log(后宫位分[d][1] + "已有" + 后宫位分[d][3] + "个");
         }
         else if(g !== 0 && 后宫位分[d][1] == "九嫔"){
            后宫位分[d][3] = g;
         }
         d++;
      }
	  if(_all_feizi[i].位分=="秀女"){
		  _all_feizi[i].地位 =undefined;
	  }
	  if(_all_feizi[i].地位 ==undefined){
	  		_all_feizi[i].位分="秀女";
	  }
      i++;
   }
   var i=0;
   while(i < 九嫔位分.length){
       className('jpsm')[i].innerText = '已有' + 九嫔位分[i][3] + '人，上限1人';
   	i++
   }
    i = 0;
    while(i < 后宫位分.length){
		if(后宫位分[i][1] == "九嫔"){
		 	className('mfsm')[i].innerText = '已有' + 后宫位分[i][3] + '人，上限9人';
		}
        else if(后宫位分[i][2] == 9999){
         	className('mfsm')[i].innerText = '已有' + 后宫位分[i][3] + '人，无上限';
        }
        else{
         	className('mfsm')[i].innerText = '已有' + 后宫位分[i][3] + '人，上限' +后宫位分[i][2]+ '人';
        }
        i++;
    }
}
function 自定义位分程序(){
	刷新各个位分剩余名额();
	id('cf').style.display = 'block';
	id('wfb').style.display = 'block';
	id('zdywf').style.display = 'block';
	id('cfTittle').innerText = '自定义位分';
	id('册封取消').onclick = function (){
		var i=0;
		var _loc2_=[];
		while(i<后宫位分.length){
			if(后宫位分[i][1].length==0){
				_loc2_.push(i);
			}
			i++;
		}
		if(_loc2_.length!==0){
			var i=_loc2_.length-1;
			while(i>=0){
				_loc3_=_loc2_[i];
				if(_loc3_>=12){
					后宫位分.splice(_loc3_,1);
					className('名分板')[_loc3_].remove();
					className('mfsm')[_loc3_].remove();
				}
				else{
					className('名分板')[_loc3_].style.display = 'none';		   
					className('mfsm')[_loc3_].style.display = 'none';
				}
			i--;
			}
		}
		id('cf').style.display = 'none';id('zdywf').style.display = 'none';
		刷新各个位分剩余名额();
	}
    id('-wf').onclick = function (){
		var i = 后宫位分.length;
		if(i > 1){
		后宫位分.splice(i - 1,1);
		    className('名分板')[i - 1].style.display = 'none';
		    className('mfsm')[i - 1].style.display = 'none';
		    i--;
		}else{}
		}
	id('+wf').onclick = function (){
		var q = 后宫位分.length;
		if(q < className('名分板').length)
		{ 
			if(q<12){
			var _loc2_ = 后宫位分备份[q][2];
			var _loc1_ = [q,'',_loc2_,0]}
			else{var _loc1_ = [q,'',9999,0];}
			后宫位分.push(_loc1_);
			className('名分板')[q].innerText = '点击输入';
			className('名分板')[q].style.display = 'block';
			className('mfsm')[q].style.display = 'block';
			if(q < className('名分板').length){q++;}
		}
		else{
			var x = 后宫位分.length;
			var w = Math.round((x + 1) / 3);
			var m = Math.round((x + 1) / 3) - ((x + 1) / 3);
			if(m == 0){var q = 2;w--;}else if(m < 0){var q = 0;}else{var q = 1;w--;}
			var e = w + 1;
            var mf = document.createElement('button');
            mf.className = '名分板';
            mf.id = 'mf-' + x;
            mf.style.left = 50 + 250 * q + 'px';
            mf.style.top = 80 + 50 * w + 'px';
            mf.innerText = '点击输入';
			if(className('名分板').length<12){
			var _loc2_ = 后宫位分备份[className('名分板').length][2];
			var _loc1_ = [className('名分板').length,'',_loc2_,0]}
			else{var _loc1_ = [className('名分板').length,'',9999,0];}
			后宫位分.push(_loc1_);		console.log(后宫位分.length );
			mf.取 = 后宫位分[后宫位分.length - 1];
			mf.onclick = function(){
			替换位分(this);
			}
            id('wfb').appendChild(mf);
            var mfsm = document.createElement('span');
            mfsm.className = 'mfsm';
            mfsm.id = 'mfsm-' + x;
            mfsm.style.left = 180 + 250 * q + 'px';
            mfsm.style.top = 90 + 50 * w + 'px';
			mfsm.innerText = '已有' + 0 + '人，无上限'
            id('wfb').appendChild(mfsm);
		}
	}
	var i = 0;
	while(i < 后宫位分.length){
		className('名分板')[i].style.display = 'block';
		className('mfsm')[i].style.display = 'block';
		className('名分板')[i].innerText = 后宫位分[i][1];
		className('名分板')[i].取 = 后宫位分[i];
		className('名分板')[i].onclick = function(){
		替换位分(this);
		}
		i++;
	}
}
function 替换位分(名分板){
	id('册封取消').style.display = 'none';
	id('zdywf').style.display = 'none';
	id('wfb').style.display = 'none';
	id('御赐封号').style.display = 'block';
	id('cfsm').innerText = '更改位分';
	var _loc1_ = 名分板.取[0];
	id('输入封号').value = 名分板.取[1];
	id('输入封号').maxLength = 3;
	id('随机封号').onclick = function (){}
	id('御赐封号确定').onclick = function (){
		var _loc6_ = 0;
		if(id('输入封号').value=="九嫔"){
			var _loc2_ = 0;
			 while(_loc2_ < _all_feizi.length){
			    if(Math.floor(_all_feizi[_loc2_].地位) == _loc1_&&_all_feizi[_loc2_].位分 !== "秀女"){
					_loc6_++;
			    }
			    _loc2_ += 1;
			 }
		}
		if(_loc6_>9){
			 小提示("原位分超过9人！");id('wfb').style.display = 'block';id('御赐封号').style.display = 'none';
			 id('册封取消').style.display = 'block';
		 }
		else{
			var i =0;var _loc3_=0;
			while(i<后宫位分.length){
				if(id('输入封号').value==后宫位分[i][1]&&id('输入封号').value!==名分板.取[1]){
					_loc3_++;
				}
				i++;
			}
			if(_loc3_!==0&&id('输入封号').value.length>0){
				小提示("已经有这个位分！！")
				id('wfb').style.display = 'block';id('御赐封号').style.display = 'none';
			    id('册封取消').style.display = 'block';
			}
			else{
				后宫位分[_loc1_][1] = id('输入封号').value;
				className('名分板')[_loc1_].innerText = id('输入封号').value;
				var _loc2_ = 0;
				while(_loc2_ < _all_feizi.length){
					if(Math.floor(_all_feizi[_loc2_].地位) == _loc1_&&_all_feizi[_loc2_].位分 !== "秀女"){
						if(id('输入封号').value=="九嫔"){
							_all_feizi[_loc2_].位分 = 九嫔位分[_loc6_-1][1];九嫔位分[_loc6_-1][3]=1;
							_all_feizi[_loc2_].地位 = 后宫位分[_loc1_][0]+九嫔位分[_loc6_-1][0];
							_loc6_-=1;
						}
						else{
							_all_feizi[_loc2_].位分 = id('输入封号').value;
							_all_feizi[_loc2_].地位 = 后宫位分[_loc1_][0];
						}
					}
				    _loc2_ += 1;
				}
				if(id('输入封号').value!=="九嫔"){
					定义位分上限(后宫位分[_loc1_]);
				}
				else{
					id('wfb').style.display = 'block';id('御赐封号').style.display = 'none';
					id('册封取消').style.display = 'block';
				}
			}
		}
	}
}
function 定义位分上限(新位分){
	缓动黑幕();
	id('cfsm').innerText = '更改上限';
	id('输入封号').value = 新位分[2];
	if(新位分[2]==9999){id('输入封号').value="无上限";}
	id('输入封号').maxLength = 3;
	id('随机封号').onclick = function (){}
	id('御赐封号确定').onclick = function (){
		if(id('输入封号').value=="无上限"||id('输入封号').value==9999){
			新位分[2]=9999;
		}
		else if(isNaN(Number(id('输入封号').value))){
			小提示("不是数字！");
		}
		else{
			新位分[2]=Number(id('输入封号').value);
		}
		刷新各个位分剩余名额();
		id('wfb').style.display = 'block';id('御赐封号').style.display = 'none';
		id('册封取消').style.display = 'block';id('zdywf').style.display = 'block';
	}
}
function 家宴程序(){
   缓动黑幕();
   id('youyuan').style.display = 'block';
   id('yyBG').src = LJ + "a0aPic_BG/Tu_846921.webp";
   var _loc3_ = 看一下有多少活着的孩子();
   id('yyText').innerText = _all_feizi.length + "位妃嫔和" + _loc3_.length + "位子女以及诸位皇亲国戚们参加了皇家宴会，气氛十分热闹。\n（所有妃嫔爱情+2、所有子女关系+1）";
   i = 0;
   while(i < _all_feizi.length){
      _all_feizi[i].爱 += 2;
      i++;
   }
   i = 0;
   while(i < _all_child.length){
      _all_child[i].关系 += 1;
      i++;
   }
   id('yykuang').onclick = function(){
      国家.金钱 -= 50000;
      更新资料(属性栏);
      主角.当前时辰 += 1;
      时辰推进();
      id('youyuan').style.display = 'none';
      if(主角._relation_hongxingshou >= 120 && 主角.红星寿 == 1 && 季 !== 4){
         红星寿_剧情_舔舐血刃_执行();
      }
    };
}
function 协理六宫程序(){
   id('sy').style.display = 'block';
   id('syb').style.display = 'none';
   id('syb2').style.display = 'block';
   id('syTitle').innerText = '';
   if(国家.协理六宫[0]=="无"){_loc1_="无";}else{_loc1_=国家.协理六宫[0];}
   id('sysm').innerText = "协理六宫（目前是：" + _loc1_ + "）";
   id('qxsy').onclick = function(){id('syb').style.display = 'block';
   id('syb2').style.display = 'none';id('sy').style.display = 'none';}
   可选的妃子 = [];
   var _loc9_ = 0;
   while(_loc9_ < _all_feizi.length){
      if(_all_feizi[_loc9_].地位 > 0 && _all_feizi[_loc9_].地位 < 4&& _all_feizi[_loc9_].地位 < 后宫位分.length){
         可选的妃子.push(_all_feizi[_loc9_]);
      }
      _loc9_ += 1;
   }
   if(可选的妃子.length == 0){
      小提示("妃位以上才能协理六宫");
      id('syb').style.display = 'block';
      id('syb2').style.display = 'none';id('sy').style.display = 'none';
   }
   else{
      var _loc10_ = 0;
      while(_loc10_ < 32){
         var _loc11_ = 可选的妃子[_loc10_];
         var _loc12_ = className('sydb2')[_loc10_];
         if(_loc11_ == undefined){
            _loc12_.style.display = 'none';
         }
         else{
             _loc12_.style.display = 'block';
            _loc12_.innerText = _loc11_.封号 + _loc11_.位分;
            _loc12_.取 = _loc11_;
            _loc12_.onclick = function(){
               if(this.取.名字 == 国家.协理六宫[0]){ 小提示("目前就是这位嫔妃协理六宫");}
               else{
                  国家.协理六宫[0] = this.取.名字;
                  国家.协理六宫[1] = this.取.清廉;
                  出圣旨(this.取.封号 + this.取.位分 + this.取.名字 + "，恭敬贤惠，谦和宽仁，当属六宫表率，即刻起，着" + this.取.封号 + this.取.位分 + "协理六宫事宜。");
                  id('syb').style.display = 'block';
                  id('syb2').style.display = 'none';id('sy').style.display = 'none';
               }
            };
         }
         _loc10_ += 1;
      }
   }
}
function 大封六宫程序(){
	id('hukoupucha').style.display = 'block';
	id('huhouTitle').innerText = "大封六宫";
	id('huhouText').innerText = "大封六宫可使美人及以下位分的妃子各晋位一级。确定要大封六宫吗？";
	id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
	id('hkan0').onclick = function(){
      i = 0;
      while(i < _all_feizi.length){
         if(_all_feizi[i].地位 >= 7 &&_all_feizi[i].地位<后宫位分.length){
            _all_feizi[i].地位 -= 1;
            _all_feizi[i].位分 = 后宫位分[_all_feizi[i].地位][1];
         }
         i++;
      }
      出圣旨("皇恩浩荡，封赦六宫，千秋万代，万凰永昌。后宫妃嫔凡"+后宫位分[7][1]+"及以下位分者，各晋升一级。");
      id('hukoupucha').style.display = 'none';
   };
}
function 选妃程序(){
	缓动黑幕();
	id('xfmb').style.display = 'block';
	id('xfsm').innerText = "选择满意者留下";
	var _loc2_ = 0;
	var _loc3_ = [];
	var _loc6_ = [];
	d = 0;
	while(d < _all_rencai.length){
	    if(_all_rencai[d].后宫相性 == "" && _all_rencai[d].家族 !== undefined && _all_rencai[d].文化 == 8 && _all_rencai[d].爵位 !== 6){
	       _loc6_.push(_all_rencai[d]);
	    }
	    d++;
	}
	if(_loc6_.length >= 12){
	    var _loc7_ = 0;
	    while(_loc7_ < 12){
	        var _loc8_ = _loc6_[random(_loc6_.length)];
	        var _loc9_ = _loc8_.家族;
	        if(_loc8_.官职 !== undefined){
	            _loc14_ = _loc8_.品阶 + _loc8_.官职 + _loc8_.名字;
	        }
	        else{
	            _loc14_ = _loc8_.名字;
	        }
	        if(_loc8_.年龄 >= 45){
	            关系 = "之女";
	         }
	        else{
	            关系 = "之妹";
	        }
			var _loc11_ = [];
			var _loc12_ = 0;
			while(_loc12_ < 后宫名人.length){
			    if(后宫名人[_loc12_].用过 == undefined && 后宫名人[_loc12_].家族 == _loc8_.家族){
			       _loc11_.push(后宫名人[_loc12_]);
			    }
			    _loc12_ += 1;
			}
			if(_loc11_.length > 0 && random(2)==0){
			    _loc12_ = random(_loc11_.length);
			    _loc13_ = _loc11_[_loc12_].id;
			 	后宫名人[_loc13_].用过 =1;
			    后宫名人[_loc13_].出身 = _loc14_ + 关系;
			    后宫名人[_loc13_].魅力 = 后宫名人[_loc13_].魅力;
			    后宫名人[_loc13_].家产 = random(50) + 10;
			    后宫名人[_loc13_].修养 = 名妃修养计算(后宫名人[_loc13_]);
			    后宫名人[_loc13_].朝廷相性 = _loc8_.id;
			    _loc3_.push(后宫名人[_loc13_]);
			}
			else{
	        var _loc10_ = new Object();
	        _loc10_.修养 = random(12);
	        _loc10_.头像 = random(626)+1;
	        if(random(2) == 0){
	            _loc10_.名称 = _loc9_ + 女名[random(女名.length)] + 女名[random(女名.length)];
	        }
	         else{
	            _loc10_.名称 = _loc9_ + 女名[random(女名.length)];
	        }
	        _loc10_.出身 = _loc14_ + 关系;
	        _loc10_.家产 = random(50) + 10;
	        _loc10_.家族 = _loc9_;
	        _loc10_.文化 = _loc8_.文化;
			_loc10_.性别 = 1;
	        _loc10_.魅力 = random(30) + 65;
	        _loc10_.统帅 = random(40);
	        _loc10_.武力 = random(40);
	        _loc10_.智力 = random(99);
	        _loc10_.政治 = random(99);
	        _loc10_.家产 = random(30) + 6;
	        _loc10_.魅力 = random(30) + 60;
            修养计算属性(_loc10_);
	        性格计算(_loc10_);
			_loc10_.介绍 = _loc10_.出身+"。";
	        _loc10_.朝廷相性 = _loc8_.id;
	        _loc3_.push(_loc10_);
	        _loc7_ += 1;
	      }
		  }
	   }
	   else{
	      _loc7_ = 0;
	      while(_loc7_ < _loc6_.length){
	         var _loc8_= _loc6_[_loc7_];
	         _loc9_ = _loc8_.家族;
	         if(_loc8_.官职 !== undefined){
	            _loc14_ = _loc8_.品阶 + _loc8_.官职 + _loc8_.名字;
	         }
	         else{
	            _loc14_ = _loc8_.名字;
	         }
	         if(_loc8_.年龄 >= 45){
	            关系 = "之女";
	         }
	         else{
	            关系 = "之妹";
	         }
	         var _loc11_ = [];
	         var _loc12_ = 0;
	         while(_loc12_ < 后宫名人.length){
	            if(后宫名人[_loc12_].用过 == undefined && 后宫名人[_loc12_].家族 == _loc8_.家族){
	               _loc11_.push(后宫名人[_loc12_]);
	            }
	            _loc12_ += 1;
	         }
	         if(_loc11_.length > 0 && random(2)==0){
	            _loc12_ = random(_loc11_.length);
	            _loc13_ = _loc11_[_loc12_].id;
				后宫名人[_loc13_].用过 =1;
	            后宫名人[_loc13_].出身 = _loc14_ + 关系;
	            后宫名人[_loc13_].魅力 = 后宫名人[_loc13_].魅力;
	            后宫名人[_loc13_].家产 = random(50) + 10;
	            后宫名人[_loc13_].修养 = 名妃修养计算(后宫名人[_loc13_]);
	            后宫名人[_loc13_].朝廷相性 = _loc8_.id;
	            _loc3_.push(后宫名人[_loc13_]);
	         }
	         else{
	            _loc10_ = new Object();
	            _loc10_.修养 = random(12);
	            _loc10_.头像 = random(626)+1;
	            if(random(2) == 0){
	               _loc10_.名称 = _loc9_ + 女名[random(女名.length)] + 女名[random(女名.length)];
	            }
	            else{
	               _loc10_.名称 = _loc9_ + 女名[random(女名.length)];
	            }
	            _loc10_.出身 = _loc8_.品阶+_loc8_.名字 + 关系;
	            _loc10_.家产 = random(50) + 10;
	            _loc10_.家族 = _loc9_;
	            _loc10_.文化 = _loc8_.文化;
				_loc10_.性别 = 1;
	            _loc10_.魅力 = random(30) + 65;
	            _loc10_.统帅 = random(40);
	            _loc10_.武力 = random(40);
	            _loc10_.智力 = random(99);
	            _loc10_.政治 = random(99);
	            _loc10_.家产 = random(30) + 6;
	            _loc10_.魅力 = random(30) + 60;
	            修养计算属性(_loc10_);
	            性格计算(_loc10_);
				_loc10_.介绍 = _loc10_.出身+"。";
	            _loc10_.朝廷相性 = _loc8_.id;
	            _loc3_.push(_loc10_);
	         }
	         _loc7_ += 1;
	      }
	      _loc7_ = _loc6_.length;
	      while(_loc7_ < 12){
	         _loc11_ = [];
	         _loc12_ = 0;
	         while(_loc12_ < 后宫名人.length){ 
				 if(后宫名人[_loc12_].用过 == undefined){
			       _loc11_.push(后宫名人[_loc12_]);
			    }
			    _loc12_ += 1;
			}
			if(_loc11_.length > 0 && random(3)==0){
			    _loc12_ = random(_loc11_.length);
			    _loc13_ = _loc11_[_loc12_].id;
	            后宫名人[_loc13_].出身 = 出身计算(2);
				后宫名人[_loc13_].用过 =1;
	            后宫名人[_loc13_].魅力 = 后宫名人[_loc13_].魅力;
	            后宫名人[_loc13_].修养 = 名妃修养计算(_loc13_);
	            后宫名人[_loc13_].家产 = random(50) + 10;
	            后宫名人[_loc13_].朝廷相性 = "";
	            _loc3_.push(后宫名人[_loc13_]);
	            }
	         _loc10_ = new Object();
	         _loc10_.修养 = random(12);
	         _loc10_.头像 = random(626)+1;
	         _loc11_ = 姓[random(姓.length)];
	         if(random(10) > 4){
	            _loc12_ = _loc11_ + 女名[random(女名.length)] + 女名[random(女名.length)];
	         }
	         else{
	            _loc12_ = _loc11_ + 女名[random(女名.length)];
	         }
	         _loc10_.名称 = _loc12_;
	         _loc10_.家族 = _loc11_;
	         _loc10_.文化 = 8;
			 _loc10_.性别 = 1;
	         _loc10_.出身 = 出身计算(2);
	         _loc10_.统帅 = random(40);
	         _loc10_.武力 = random(40);
	         _loc10_.智力 = random(99);
	         _loc10_.政治 = random(99);
	         _loc10_.家产 = random(30) + 6;
	         _loc10_.魅力 = random(30) + 60;
	         修养计算属性(_loc10_);
	         性格计算(_loc10_);
	         _loc10_.朝廷相性 = "";
			 _loc10_.介绍 = _loc10_.出身+"。";
	         _loc3_.push(_loc10_);
	         _loc7_ += 1;
	      }
	   }
	   _loc11_ = 0;
	    while(_loc11_ < 12){
	        _loc20_ = className('xfxb')[_loc11_];
	        _loc20_.开关 = 0;
	        _loc20_.序号 = _loc11_;
	        _loc20_.对象 = _loc3_[_loc11_];
	        _loc24_ = _loc20_.对象.头像;
			className('xfxbmz')[_loc11_].innerText = _loc20_.对象.名称;
	        if(_loc20_.对象._code == undefined){
	            className('xfxbmz')[_loc11_].style.color = '#ffffff';
				_loc20_.src = LJ +'a0aPic_FeiZi/Tu_' +_loc24_ +'.webp';
	        }
	        else{
				className('xfxbmz')[_loc11_].style.color = '#ff7300';
				_loc24_ = _loc20_.对象.跳;
	            _loc20_.src = LJ +'a0aPic_MingFei/Tu_' +_loc24_ +'.webp';
	        }
	        _loc20_.onclick = function(){
	            if(this.开关 == 0){
	                出现这个秀女的介绍(this.对象,1,className('xfxbmz')[this.序号]);
	            }
	        };
	        _loc2_ += 1;
	        _loc11_ += 1;
	}
	id('xfgb').style.display="block";
	 id('xfgb').onclick = function(){
	 var i =0;
	 var x =[];
	 while(i<12){
		if(className('xfxbmz')[i].innerText !== className('xfxb')[i].对象.名称)
		{x.push(className('xfxb')[i].对象.名称);收入储秀阁(className('xfxb')[i].对象);}
		else{className('xfxb')[i].对象.用过 =undefined;
		}
		 i++;
	 }
	缓动黑幕();
	id('xfmb').style.display = 'none';
	id('youyuan').style.display = 'block';
	id('yyBG').src = LJ + "a0aPic_BG/Tu_846921.webp";
	id('yyText').innerText = "本次选秀" + x.length + "人中选。";
	if(x.length !== 0){id('yyText').innerText += "分别为："+x;}
    id('yykuang').onclick = function(){
		id('youyuan').style.display = 'none';
        国家.金钱 -= 150000;
        更新资料(属性栏);
        主角.当前时辰 += 1;
        时辰推进();
        }
   };
}
function 修养计算属性(对象){
	if(对象.修养 !== undefined && 对象.修养 == 0)
	{
	   对象.野心 = 0;
	   对象.清廉 = 90;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 1)
	{
	   对象.野心 = 5;
	   对象.清廉 = 80;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 2)
	{
	   对象.野心 = 10;
	   对象.清廉 = 70;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 3)
	{
	   对象.野心 = 20;
	   对象.清廉 = 60;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 4)
	{
	   对象.野心 = 30;
	   对象.清廉 = 50;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 5)
	{
	   对象.野心 = 40;
	   对象.清廉 = 45;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 6)
	{
	   对象.野心 = 50;
	   对象.清廉 = 40;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 7)
	{
	   对象.野心 = 55;
	   对象.清廉 = 35;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 8)
	{
	   对象.野心 = 60;
	   对象.清廉 = 30;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 9)
	{
	   对象.野心 = 70;
	   对象.清廉 = 20;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 10)
	{
	   对象.野心 = 80;
	   对象.清廉 = 10;
	}
	else if(对象.修养 !== undefined && 对象.修养 == 11)
	{
	   对象.野心 = 90;
	   对象.清廉 = 5;
	}
}
function 名妃修养计算(对象){
   if(对象.野心 <= 10 && 对象.清廉 >= 90){
      _loc2_ = 0;
   }
   else if(对象.野心 <= 20 && 对象.清廉 >= 80){
      _loc2_ = 1;
   }
   else if(对象.野心 <= 30 && 对象.清廉 >= 70){
      _loc2_ = 2;
   }
   else if(对象.野心 <= 40 && 对象.清廉 >= 60){
      _loc2_ = 3;
   }
   else if(对象.野心 <= 50 && 对象.清廉 >= 60){
      _loc2_ = 4;
   }
   else if(对象.野心 <= 60 && 对象.清廉 >= 60){
      _loc2_ = 5;
   }
   else if(对象.野心 >= 60 && 对象.清廉 >= 80){
      _loc2_ = 6;
   }
   else if(对象.野心 >= 60 && 对象.清廉 >= 60){
      _loc2_ = 7;
   }
   else if(对象.野心 >= 60 && 对象.清廉 >= 50){
      _loc2_ = 8;
   }
   else if(对象.野心 >= 70 && 对象.清廉 <= 40){
      _loc2_ = 9;
   }
   else if(对象.野心 >= 80 && 对象.清廉 <= 30){
      _loc2_ = 10;
   }
   else if(对象.野心 >= 90 && 对象.清廉 <= 20){
      _loc2_ = 11;
   }
   else{
      _loc2_ = 6;
   }
   return _loc2_;
}
function 掖庭程序(妃子){
   if(妃子.孕 > 0){小提示("妃嫔正在怀孕，无法送入掖庭。");}
   else if(妃子.省亲 !== undefined && 妃子.省亲 > 0){小提示("妃嫔回家省亲了，无法送入掖庭。");}
   else{
     id('hukoupucha').style.display = 'block';
     id('huhouTitle').innerText = "送入掖庭";
     id('huhouText').innerText = "确认要把" + 妃子.封号 + 妃子.位分 + 妃子.名字 + "送入掖庭吗？\n\n注：送入掖庭的妃子会慢慢修正性格秉性和道德修养，但其余能力也会有所下降。在皇宫地图中进入掖庭可随时选择需要放出掖庭的嫔妃。";
     id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
     id('hkan0').onclick = function(){
         妃子入掖庭(妃子);
         id('hukoupucha').style.display = 'none';
      };
   }
}
function 妃子入掖庭(对象){
   出圣旨("即刻将" + 对象.封号 + 对象.位分 + 对象.名字 + "送入掖庭悉心调教，望其虚心悔改，戒骄戒躁。");
   主角.掖庭.push(对象);
   删除跟这个人有关的三方相性(对象);
   删除这个妃子的值(对象);
   更新资料(属性栏);
   嫔妃一览程序(0);
}
function 放出掖庭(妃子){
  id('hukoupucha').style.display = 'block';
  id('huhouTitle').innerText = "放出掖庭";
  id('huhouText').innerText = "确认要把" + 妃子.名字 + "放出掖庭吗？。";
  id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
  id('hkan0').onclick = function(){
      复宠(妃子);
      i = 0;
      while(i < 主角.掖庭.length){
         if(主角.掖庭[i].名字 == 妃子.名字){
            主角.掖庭.splice(i,1);
         }
         i++;
      }
      id('hukoupucha').style.display = 'none';
      feiziyilan.style.display = 'none';
   };
}
function 复宠(对象,参数){
   var 临时对象 = new Object();
   临时对象._code = 对象._code;
   临时对象.年龄 = 对象.年龄;
   临时对象.性别 = 对象.性别;
   临时对象.喜好 = 对象.喜好;
   临时对象.爱 = 对象.爱;
   if(参数 == 0){临时对象.爱 = 55 + random(10);}
   临时对象.经验 = 对象.经验;
   临时对象.称呼 = "宫女";
   临时对象.名字 = 对象.名字;
   临时对象.家族 = 对象.家族;
   临时对象.头像 = 对象.头像;
   临时对象.统帅 = 对象.统帅;
   临时对象.武力 = 对象.武力;
   临时对象.智力 = 对象.智力;
   临时对象.政治 = 对象.政治;
   临时对象.魅力 = 对象.魅力;
   临时对象.野心 = 对象.野心;
   临时对象.清廉 = 对象.清廉;
   临时对象.文化 = 对象.文化;
   临时对象.状态 = 对象.状态;
   临时对象.性格 = 对象.性格;
   临时对象.介绍 = 对象.介绍;
   临时对象.位分 = 对象.位分;
   临时对象.封号 = 对象.封号;
   临时对象.地位 = 对象.地位;
   临时对象.宫殿 = 对象.宫殿;
   临时对象.寝殿 = 对象.寝殿;
   临时对象.出身 = 对象.出身;
   临时对象.id = undefined;
   临时对象.孕 = 0;
   临时对象.病 = 对象.病;
   临时对象.仙 = 对象.仙;
   临时对象.护 = 0;
   临时对象.生育 = 对象.生育;
   临时对象.后宫相性 = "";
   临时对象.后宫势力 = 0;
   临时对象.朝廷相性 = "";
   临时对象.朝廷势力 = 0;
   临时对象.皇嗣相性 = "";
   给她什么名号好呢(7,临时对象);
}
function 冷宫执行程序(妃子){
   if(妃子.后宫势力 > 2 && 妃子.朝廷势力 > 5){
      小提示("多位妃嫔和朝臣给她求情，无法打入冷宫。");
   }
   else if(妃子.孕 > 0){
      小提示("妃嫔正在怀孕，无法打入冷宫。");
   }
   else if(妃子.省亲 !== undefined && 妃子.省亲 > 0){
      小提示("妃嫔回家省亲了，无法打入冷宫。");
   }
   else{
      打入冷宫去吧(妃子);
   }
}
function 打入冷宫去吧(对象){
   出圣旨(对象.封号 + 对象.位分 + 对象.名字 + "送入冷宫，从此不得迈出宫门半步。");
   对象.爱 -= 500;
   对象.任性 -= 300;
   主角.冷宫.push(对象);
   删除跟这个人有关的三方相性(对象);
   删除这个妃子的值(对象);
   属性.暴戾 += 2;
   属性.道德 -= 5;
   更新资料(属性栏);
   嫔妃一览程序(0);
}
function 进入冷宫(){
   console.log("冷宫有多少人" + 主角.冷宫.length);
   主角.冷宫执行 = 1;
   缓动黑幕();
   id('youyuan').style.display = 'block';
   id('yyBG').src = LJ + "a0aPic_BG/Tu_222.webp";
   id('yyText').innerText = "冷宫嫔妃：“皇上，皇上，呜呜呜~~~”";
   id('yykuang').onclick = function(){
      if(主角.冷宫.length > 0 && random(3) == 0){
		id('youyuan').style.display = 'none';
		主角.当前时辰 += 1;
		时辰推进();
        遇到冷宫中的女人();
      }
      else{
         id('yyText').innerText = "这冷宫阴气森森，不宜久留，还是回去吧。";
         id('yykuang').onclick = function(){
            id('youyuan').style.display = 'none';
			主角.当前时辰 += 1;
            时辰推进();
         };
      }
   };
}
function 遇到冷宫中的女人(){
   var 选一个序号 = random(主角.冷宫.length);
   var 遇到谁 = 主角.冷宫[选一个序号];
   if(遇到谁.性别 == 0){
      var 自称 = "臣";
   }
   else{
      var 自称 = "臣妾";
   }
   id('剧情对话').style.display = 'block';
   id('剧情背景').src = LJ + 'a0aPic_BG/Tu_222.webp';
   出现这个人的头像(剧情头像,剧情头像,遇到谁);
   对话打字效果(遇到谁.封号 + 遇到谁.位分 + "：呜呜呜，没想到我也有这一天啊，这样活着还不如一死了之。");
   剧情对话板.onclick = function(){
      对话打字效果("（" + 遇到谁.封号 + 遇到谁.位分 + "不堪忍受冷宫中的生活，正要自尽，皇上是否要出面？）",["出面","无视"]);
      id('剧情an1').onclick = function(){
         对话打字效果(遇到谁.封号 + 遇到谁.位分 + "：皇上，人生苦短，" + 自称 + "先走一步，愿我们来世再见吧。");
         剧情对话板.onclick = function(){
            对话打字效果("（" + 遇到谁.封号 + 遇到谁.位分 + "自尽了。）");
            剧情对话板.onclick = function(){
               主角.冷宫.splice(选一个序号,1);
               id('剧情对话').style.display = 'none';
               缓动黑幕();
            };
         };
      };
      id('剧情an0').onclick = function(){
		  新后宫图形读取程序(剧情头像,0,'皇帝');
         对话打字效果("皇上：" + 遇到谁.封号 + 遇到谁.位分 + "……");
         剧情对话板.onclick = function(){
			 出现这个人的头像(剧情头像,遇到谁);
            对话打字效果(遇到谁.封号 + 遇到谁.位分 + "：皇上，真的是皇上来了吗？");
            剧情对话板.onclick = function(){
				新后宫图形读取程序(剧情头像,0,'皇帝');
               对话打字效果("皇上：爱妃，怎么如此不堪……");
               剧情对话板.onclick = function(){
				   出现这个人的头像(剧情头像,遇到谁);
                  对话打字效果(遇到谁.封号 + 遇到谁.位分 + "：让皇上看见" + 自称 + "现在这个样子，" + 自称 + "还不如去死了，事到如今，不管" + 自称 + "是否犯过大错，是否有心悔改，都已经不重要了，但愿皇上还能记得曾经有一个叫做" + 遇到谁.名字 + "的人侍奉过皇上吧，" + 自称 + "先走一步……");
                  剧情对话板.onclick = function(){
					  新后宫图形读取程序(剧情头像,0,'皇帝');
                     对话打字效果("皇上：爱妃且慢，朕当然记得昔日与你的情分，要不是你犯下大错，朕也不情愿你如此，若你有心悔改，也可以重新做朕的妃嫔。");
                     剧情对话板.onclick = function(){
						 出现这个人的头像(剧情头像,遇到谁);
                        对话打字效果(遇到谁.封号 + 遇到谁.位分 + "：皇上，真的还爱" + 自称 + "吗？");
                        剧情对话板.onclick = function()
                        {
							新后宫图形读取程序(剧情头像,0,'皇帝');
                           对话打字效果("皇上：不然朕为什么还会站在冷宫与你对话呢？");
                           剧情对话板.onclick = function()
                           {
							   出现这个人的头像(剧情头像,遇到谁);
                              对话打字效果("（" + 遇到谁.封号 + 遇到谁.位分 + "放下白绫，向皇上深深叩头）" + 遇到谁.封号 + 遇到谁.位分 + "：" + 自称 + "谢主隆恩。");
                              剧情对话板.onclick = function()
                              {
                                 复宠(遇到谁,0);
                                 主角.冷宫.splice(选一个序号,1);
                                 id('剧情对话').style.display = 'none';
                                 缓动黑幕();
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
function 收入储秀阁(对象){
   国家.妃子顺序 += 1;
   var 临时对象 = new Object();
   临时对象._code = 对象._code;
   if(对象.年龄==undefined){
	   临时对象.年龄 = random(4)+15;
   }else{
	   临时对象.年龄 = 对象.年龄;
   }
   临时对象.性别 = 对象.性别;
   临时对象.喜好 = 0;
   临时对象.爱 = 15 + random(10);
   临时对象._code = 对象._code;
   if(对象.经验==undefined){
   	   临时对象.经验 = 0;
   }else{
   	   临时对象.经验 = 对象.经验;
   }
   if(对象.称呼==undefined){
   	   临时对象.称呼 = "宫女";
   }else{
   	   临时对象.称呼 = 对象.称呼;
   }
   临时对象.名字 = 对象.名称;
   临时对象.名称 = 对象.名字;
   临时对象.家族 = 对象.家族;
   临时对象.头像 = 对象.跳;
   临时对象.统帅 = 对象.统帅;
   临时对象.武力 = 对象.武力;
   临时对象.智力 = 对象.智力;
   临时对象.政治 = 对象.政治;
   临时对象.魅力 = 对象.魅力;
   临时对象.野心 = 对象.野心;
   临时对象.清廉 = 对象.清廉;
   临时对象.文化 = 对象.文化;
   临时对象.状态 = 0;
   if(对象._code == undefined || 对象.头像 !== undefined){临时对象.介绍 = 对象.介绍;临时对象.头像 = 对象.头像}
   if(对象.性格 !==undefined){临时对象.性格 = 对象.性格;}else{性格计算(临时对象);}
   if(对象.出身 !==undefined){临时对象.出身 = 对象.出身;}else{临时对象.出身 = 出身计算(临时对象);}
   临时对象.id = 国家.妃子顺序;
   临时对象.孕 = 0;
   临时对象.病 = 0;
   临时对象.仙 = 0;
   临时对象.护 = 0;
   临时对象.生育 = 0;
   临时对象.地位 = undefined;
   临时对象.任性=random(10)
   临时对象.位分 = "秀女";
   临时对象.封号 = 对象.家族
   临时对象.宫殿 = "";
   临时对象.寝殿 = "";
   临时对象.后宫相性 = "";
   临时对象.后宫势力 = 0;
   临时对象.朝廷相性 = 对象.朝廷相性;
   临时对象.朝廷势力 = 0;
   临时对象.皇嗣相性 = ""
	_all_feizi.push(临时对象);
}
function 宫人一览表(参数,妃子){
	id("qxzb").style.display = "none";
    id('jiajuanyilan').style.display = 'block';
    id('jjText').innerText = '宫人一览';
    id('jia2').innerText = '主子';
    id('jia4').innerText = '宫殿';
    id('jia5').innerText = '职务';
    id('jia6').innerText = '能力';
    id('jia7').innerText = '宫人俸禄';
    id('jia3').style.display = 'none';
	id('jia4').style.display = 'block';
    id('jia6').style.display = 'block';
    临时宫人列表 = [];
    if(参数 == 0){
        var _loc5_ = 0;
        while(_loc5_ < _all_taijian.length){
            临时宫人列表.push(_all_taijian[_loc5_]);
            _loc5_ += 1;
        }
        _loc5_ = 0;
        while(_loc5_ < _all_gongnv.length){
            临时宫人列表.push(_all_gongnv[_loc5_]);
            _loc5_ += 1;
        }
    }
    else if(参数 == 1){
        _loc5_ = 0;
        while(_loc5_ < _all_taijian.length){
            if(_all_taijian[_loc5_].主子 == undefined){
            临时宫人列表.push(_all_taijian[_loc5_]);
            }
            _loc5_ += 1;
        }
        _loc5_ = 0;
        while(_loc5_ < _all_gongnv.length){
            if(_all_gongnv[_loc5_].主子 == undefined){
            临时宫人列表.push(_all_gongnv[_loc5_]);
            }
            _loc5_ += 1;
        }
   }
   else if(参数 == 2||参数 == 3){
      _loc5_ = 0;
      while(_loc5_ < _all_taijian.length){
         if(_all_taijian[_loc5_].主子 == 妃子.id){
            临时宫人列表.push(_all_taijian[_loc5_]);
         }
         _loc5_ += 1;
      }
      _loc5_ = 0;
      while(_loc5_ < _all_gongnv.length){
         if(_all_gongnv[_loc5_].主子 == 妃子.id){
            临时宫人列表.push(_all_gongnv[_loc5_]);
         }
         _loc5_ += 1;
      }
   }
   临时宫人列表.sort(compare("主子"));
   序列 = 0;
   刷新宫人信息(参数,妃子,临时宫人列表,序列);
   id('jiajuanqian').onclick = function(){
      if(序列 > 0){
         序列 -= 1;
         刷新宫人信息(参数,妃子,临时宫人列表,序列);
      }
   };
   id('jiajuanhou').onclick = function(){
      if(序列 < Math.round(临时宫人列表.length / 10)){
         序列 += 1;
         刷新宫人信息(参数,妃子,临时宫人列表,序列);
      }
   };
   id('jia2').onclick = function(){
      宫人排序计算程序(参数,妃子,临时宫人列表,"主子",0);
      序列 = 0;
      刷新宫人信息(参数,妃子,临时宫人列表,序列);
   };
   id('jia5').onclick = function(){
      宫人排序计算程序(参数,妃子,临时宫人列表,"职务",0);
      序列 = 0;
      刷新宫人信息(参数,妃子,临时宫人列表,序列);
   };
   id('jia6').onclick = function(){
      宫人排序计算程序(参数,妃子,临时宫人列表,"能力",0);
      序列 = 0;
      刷新宫人信息(参数,妃子,临时宫人列表,序列);
   };
   id('jia7').onclick = function(){
      宫人排序计算程序(参数,妃子,临时宫人列表,"俸禄",0);
      序列 = 0;
      刷新宫人信息(参数,妃子,临时宫人列表,序列);
   };
}
function 刷新宫人信息(参数,妃子,临时宫人列表,序列,){
   计算后宫开销();
   var _loc1_ = 0;
   while(_loc1_ < className('jiajuanlbx').length){
      var _loc2_ = 临时宫人列表[序列 * 10 + _loc1_];
      var _loc3_ = className('jiajuanlbx')[_loc1_];
      if(_loc2_ == undefined){
         _loc3_.style.display = 'none';
      }
      else{
         _loc3_.style.display = 'block';
		 if(_loc2_._code >=1000&&_loc2_._code<=6999){className('jj1')[_loc4_].style.color="#ffd0cb"}
		 else{className('jj1')[_loc1_].style.color="#ffffff"}
         className('jj1')[_loc1_].innerText = _loc2_.名称;
         if(_loc2_.主子 == undefined){
            className('jj2')[_loc1_].innerText = "无";
            className('jj4')[_loc1_].innerText = "无";
         }
         else{
            className('jj2')[_loc1_].innerText = 取出主子(_loc2_).封号 + 取出主子(_loc2_).位分 + "/" + 取出主子(_loc2_).名字;
            className('jj4')[_loc1_].innerText = _all_palace[取出主子(_loc2_).宫殿].名称;
         }
         if(_loc2_.职务 == 0){
            className('jj5')[_loc1_].innerText = "太监";
         }
         else if(_loc2_.职务 == 1){
            className('jj5')[_loc1_].innerText = "宫女";
         }
         className('jj6')[_loc1_].innerText = _loc2_.能力;
         className('jj7')[_loc1_].innerText = _loc2_.俸禄 + "两";
		 className('jj3')[_loc1_].innerText = "";
         _loc3_.取 = _loc2_;
         _loc3_.onclick = function(){
            if(参数 !== 0){
               if(参数 == 1)
               {
				   if(妃子.位分 =="秀女"){_loc2_ = 0}
				   else{var _loc2_ = 后宫位分.length + 1 - 妃子.地位 + (_all_palace[妃子.宫殿].等级 - 1) * 2;}
                  if(this.取.职务 == 1 && 妃子.宫女 >= _loc2_)
                  {
                     小提示("这个妃子拥有的宫女已达上限");
                  }
                  else if(this.取.职务 == 0 && 妃子.太监 >= _loc2_)
                  {
                     小提示("这个妃子拥有的太监已达上限");
                  }
                  else
                  {
                     this.取.主子 = 妃子.id;
                     刷新宫人信息(参数,妃子,临时宫人列表,序列);
					 宫廷行政表(1);
                  }
               }
               else if(参数 == 2)
               {
                  this.取.主子 = undefined;
                  刷新宫人信息(参数,妃子,临时宫人列表,序列);
				  宫廷行政表(0);
               }
			   else if(参数 == 3){}
            }
         };
      }
      _loc1_ += 1;
   }
}
function 取出主子(宫人){
   i = 0;
   while(i < _all_feizi.length){
      if(_all_feizi[i].id == 宫人.主子){
         var _loc2_ = _all_feizi[i];
      }
      i++;
   }
   return _loc2_;
}
function 宫人排序计算程序(参数,妃子,临时宫人列表,数据,方法){
   if(方法 == 0){
      临时宫人列表.sortOn(数据,18);
   }
   else if(方法 == 1){
      临时宫人列表.sortOn(数据,16);
   }
}
function 宫廷行政表(参数){
  计算后宫开销();
  id('junshibiao').style.display = 'block';
  id('jssm').style.display = 'none';
  id('jssmline').style.display = 'none';
  id('js3').style.display = 'block';
  id('js1').innerText = "名字";
  id('js2').innerText = "名号";
  id('js4').innerText = "月例";
  id('js5').innerText = "用度";
  id('js6').innerText = "宫人俸禄";
  id('js7').innerText = "太监";
  id('js8').innerText = "宫女";
  id('js9').innerText = "总计";
  id('jsTittle').innerText = "宫廷行政";
   临时开销列表 = [];
   var _loc5_ = 0;
   while(_loc5_ < _all_feizi.length){
        临时开销列表.push(_all_feizi[_loc5_]);
      _loc5_ += 1;
   }
   临时开销列表.sort(compare("地位"));
   序列 = 0;
   刷新开销列表信息(参数,临时开销列表,序列);
   id('junshiqian').onclick = function(){
      if(序列 > 0){
         序列 -= 1;
         刷新开销列表信息(参数,临时开销列表,序列);
      }
   };
   id('junshihou').onclick = function(){
      if(序列 < Math.round(临时开销列表.length / 10)){
         序列 += 1;
         刷新开销列表信息(参数,临时开销列表,序列);
      }
   };
   id('js2').onclick = function(){
      妃嫔排序计算程序(临时开销列表,"地位",1);
      序列 = 0;
      刷新开销列表信息(参数,临时开销列表,序列);
   };
   id('js3').onclick = function(){
      妃嫔排序计算程序(临时开销列表,"宫殿",1);
      序列 = 0;
      刷新开销列表信息(参数,临时开销列表,序列);
   };
   id('js4').onclick = function(){
      妃嫔排序计算程序(临时开销列表,"月例",0);
      序列 = 0;
      刷新开销列表信息(参数,临时开销列表,序列);
   };
   id('js5').onclick = function(){
      妃嫔排序计算程序(临时开销列表,"吃穿",0);
      序列 = 0;
      刷新开销列表信息(参数,临时开销列表,序列);
   };
   id('js6').onclick = function(){
      妃嫔排序计算程序(临时开销列表,"宫人俸禄",0);
      序列 = 0;
      刷新开销列表信息(参数,临时开销列表,序列);
   };
   id('js7').onclick = function(){
      妃嫔排序计算程序(临时开销列表,"太监",0);
      序列 = 0;
      刷新开销列表信息(参数,临时开销列表,序列);
   };
   id('js8').onclick = function(){
      妃嫔排序计算程序(临时开销列表,"宫女",0);
      序列 = 0;
      刷新开销列表信息(参数,临时开销列表,序列);
   };
   id('js9').onclick = function(){
      妃嫔排序计算程序(临时开销列表,"总计",0);
      序列 = 0;
      刷新开销列表信息(参数,临时开销列表,序列);
   };
}
function 刷新开销列表信息(参数,临时开销列表,序列){
   var _loc4_ = 0;
   while(_loc4_ < 10){
      var _loc5_ = 临时开销列表[序列 * 10 + _loc4_];
      var _loc6_ = className('junshilbx')[_loc4_];
      if(_loc5_ == undefined){_loc6_.style.display = 'none';}
      else{
         _loc6_.style.display = 'block';
		 className('j1')[_loc4_].style.color="#ffffff"
         className('j1')[_loc4_].innerText = _loc5_.名字;
         className('j2')[_loc4_].innerText = _loc5_.封号 + _loc5_.位分;
		 if(_loc5_.位分 =="秀女"){
		 className('j2')[_loc4_].innerText = _loc5_.位分;
		 className('j3')[_loc4_].innerText ="储秀阁";
		 className('j7')[_loc4_].innerText = "0/0" ;
		 className('j8')[_loc4_].innerText = "0/0";
		 }
		 else{className('j3')[_loc4_].innerText = _all_palace[_loc5_.宫殿].名称;
		 className('j7')[_loc4_].innerText = _loc5_.太监 + "/" + Math.round(后宫位分.length + 1 - _loc5_.地位 + _all_palace[_loc5_.宫殿].等级 - 1);
		 className('j8')[_loc4_].innerText = _loc5_.宫女 +"/" + Math.round(后宫位分.length + 1 - _loc5_.地位 + _all_palace[_loc5_.宫殿].等级 - 1);
		 }
         className('j4')[_loc4_].innerText = _loc5_.月例 + "两";
         className('j5')[_loc4_].innerText = _loc5_.吃穿 + "两";
         className('j6')[_loc4_].innerText = _loc5_.宫人俸禄 + "两";
         className('j9')[_loc4_].innerText = _loc5_.总计 + "两";
         
         _loc6_.取 = _loc5_;
         _loc6_.onclick = function(){
            if(参数 == 0){
               宫人一览表(3,this.取);
            }
            else if(参数 == 1){
               宫人一览表(1,this.取);
            }
            else if(参数 == 2){
               宫人一览表(2,this.取);
            }
         };
      }
      _loc4_ += 1;
   }
}
function 宫人程序(){
   id('neishi2').style.display = 'none';
   id('neishiMB').style.display = 'block';
   id('neishiBG').style.display = 'none';
   id('neishiTitle').innerText = "调配宫人";
   id('neishiText').innerText = "增加宫人：给某个妃嫔增加用人。\n削减宫人：削减某个妃嫔的用人。\n招募宫人：招募宫女太监各5名。\n辞退闲人：辞退所有闲着的宫人。";
   id('nsan0').innerText= "辞退闲人";
   id('nsan1').innerText= "招募宫人";
   id('nsan2').innerText= "削减宫人";
   id('nsan3').innerText= "增加宫人";
   id('nsan0').onclick = function(){辞退所有闲置宫人();};
   id('nsan1').onclick = function(){招募宫人();};
   id('nsan2').onclick = function(){宫廷行政表(2);};
   id('nsan3').onclick = function(){宫廷行政表(1);};
}
function 招募宫人(){
   if(主角.招募宫人 == 1){小提示("本月已经招募过宫人了");}
   else{
      主角.招募宫人 = 1;
      出圣旨("命内务府招募一批宫女太监以侍奉皇宫内廷，即刻执行，不得有误。");
      _all_taijian.push({id:_all_taijian.length,俸禄:100,名称:太监姓氏字库[random(太监姓氏字库.length)] + 太监名字字库[random(太监名字字库.length)] + 太监名字字库[random(太监名字字库.length)],主子:undefined,职务:0,能力:1 + random(3)});
      _all_taijian.push({id:_all_taijian.length,俸禄:100,名称:太监姓氏字库[random(太监姓氏字库.length)] + 太监名字字库[random(太监名字字库.length)] + 太监名字字库[random(太监名字字库.length)],主子:undefined,职务:0,能力:1 + random(3)});
      _all_taijian.push({id:_all_taijian.length,俸禄:100,名称:"小" + 太监名字字库[random(太监名字字库.length)] + "子",主子:undefined,职务:0,能力:1 + random(3)});
      _all_taijian.push({id:_all_taijian.length,俸禄:100,名称:"小" + 太监姓氏字库[random(太监姓氏字库.length)] + "子",主子:undefined,职务:0,能力:1 + random(3)});
      _all_taijian.push({id:_all_taijian.length,俸禄:100,名称:"小" + 太监名字字库[random(太监名字字库.length)] + "子",主子:undefined,职务:0,能力:1 + random(3)});
      _all_gongnv.push({id:_all_gongnv.length,俸禄:100,名称:宫女名字字库[random(宫女名字字库.length)] + 宫女名字字库二[random(宫女名字字库二.length)],主子:undefined,职务:1,能力:1 + random(3)});
      _all_gongnv.push({id:_all_gongnv.length,俸禄:100,名称:"小" + 宫女名字字库[random(宫女名字字库.length)],主子:undefined,职务:1,能力:1 + random(3)});
      _all_gongnv.push({id:_all_gongnv.length,俸禄:100,名称:宫女名字字库[random(宫女名字字库.length)] + 宫女名字字库二[random(宫女名字字库二.length)],主子:undefined,职务:1,能力:1 + random(3)});
      _all_gongnv.push({id:_all_gongnv.length,俸禄:100,名称:"小" + 宫女名字字库[random(宫女名字字库.length)],主子:undefined,职务:1,能力:1 + random(3)});
      var _loc2_ = [];
      var _loc3_ = 0;
      while(_loc3_ < 丫环名人.length){
         if(丫环名人[_loc3_].用过 == undefined){
            _loc2_.push(丫环名人[_loc3_]);
         }
         _loc3_ += 1;
      }
      if(random(2) == 0 && _loc2_.length > 0){
         var _loc4_ = random(_loc2_.length);
         var _loc5_ = _loc2_[_loc4_];
         var _loc6_ = _loc5_.跳;
         var _loc7_ = _loc5_.名称;
         var _loc8_ = _loc5_._code;
         _all_gongnv.push({id:_all_gongnv.length,俸禄:100,名称:_loc7_,主子:undefined,职务:1,能力:4,_code:_loc8_,名字:_loc7_,头像:_loc6_,跳:_loc6_});
         _loc3_ = 0;
         while(_loc3_ < 丫环名人.length){
            if(丫环名人[_loc3_]._code == _loc5_._code){
               丫环名人[_loc3_].用过 = 1;
            }
            _loc3_ += 1;
         }
      }
      else{
         _all_gongnv.push({id:_all_gongnv.length,俸禄:100,名称:宫女名字字库[random(宫女名字字库.length)] + 宫女名字字库二[random(宫女名字字库二.length)],主子:undefined,职务:1,能力:1 + random(3)});
      }
   }
}
function 辞退所有闲置宫人(){
   出圣旨("为缩减宫廷开支，特命内务府辞退所有闲置宫女太监，即刻执行，不得有误。");
   var _loc3_ = [];
   var _loc4_ = [];
   var _loc1_ = 0;
   while(_loc1_ < _all_taijian.length){
      if(_all_taijian[_loc1_].主子 !== undefined){
         _loc3_.push(_all_taijian[_loc1_]);
      }
      _loc1_ += 1;
   }
   var _loc2_ = 0;
   while(_loc2_ < _all_gongnv.length){
      if(_all_gongnv[_loc2_].主子 !== undefined){
         _loc4_.push(_all_gongnv[_loc2_]);
      }
      _loc2_ += 1;
   }
   _all_taijian = _loc3_;
   _all_gongnv = _loc4_;
}
function 辞退这个宫人(宫人){
   if(宫人.职务 == 0){
      i = 0;
      while(i < _all_taijian.length){
         if(_all_taijian[i].名称 == 宫人.名称){
            _all_taijian.splice(i,1);
         }
         i++;
      }
   }
   else if(宫人.职务 == 1){
      i = 0;
      while(i < _all_gongnv.length){
         if(_all_gongnv[i].名称 == 宫人.名称){
            _all_gongnv.splice(i,1);
         }
         i++;
      }
   }
}