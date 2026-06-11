function 生病了的程序() {
	id("shengbing").style.display = "block";
	setTimeout(function() {
		id("yundaole").style.top = "10px";
		id("yundaole").style.left = "180px";
	}, 500);
	setTimeout(function() {
		id("yundaole").style.top = "200px";
		id("yundaole").style.left = "600px";
	}, 1000);
	setTimeout(function() {
		id("yundaole").style.top = "70px";
		id("yundaole").style.left = "280px";
	}, 1500);
	setTimeout(function() {
		id("yundaole").style.top = "300px";
		id("yundaole").style.left = "80px";
	}, 2000)
	setTimeout(function() {
		id("yundaole").style.top = "160px";
		id("yundaole").style.left = "560px";
	}, 2500)
	setTimeout(function() {
		id("yundaole").style.display = "none";
	}, 3000)
	setTimeout(function() {
		id("shengbing").style.display = "none";
		id("yundaole").style.top = "100px";
		id("yundaole").style.left = "380px";
		id("yundaole").style.display = "block";
		御医出现咯();
	}, 3990)
}
function 生病出图程序() {
	主角.开科考试 = 0;
	主角.祭祀活动 = 0;
	i = 0;
	while (i < _all_rencai.length) {
		if (_all_rencai[i].任务中 == 1) {
			_all_rencai[i].任务中 = 0;
		}
		i++;
	}
	属性.体力 = 10;
	属性.健康 -= 30;
	if (属性.健康 < 10) {
		属性.健康 = 10;
	}
	主角.生病次数 += 1;
	属性.寿命 -= random(20) + 10 * 主角.生病次数;
	生病了的程序();
	更新资料();
}
function 御医出现咯() {
	id('youyuan').style.display = 'block';
	id('yyBG').src =LJ +  "a0aPic_BG/Tu_987203.webp";
	if (属性.寿命 <= 10) {
		id('yyText').innerText = "召集所有御医，可是回天无力。";
		id('yykuang').onclick = function() {
			死亡判定(0);
			id('youyuan').style.display = 'none';
		};
	} else {
		if (属性.寿命 <= 100) {
			id('yyText').innerText = "御医前来诊断，皇上病情看来有些严重。";
		} else {
			id('yyText').innerText = "皇上因体力透支导致昏迷，御医前来诊断。";
		}
		id('yykuang').onclick = function() {
			属性.体力 = 60;
			主角.当前时辰 = 4;
			主角.生病刚好 = 1;
			时辰推进();
			id('youyuan').style.display = 'none';
		};
	}
}
function 禅让的哪个程序() {
	i = 0;
	while (i < _all_child.length) {
		if (_all_child[i].id == 国家.皇储id) {
			var _loc2_ = _all_child[i];
		}
		i++;
	}
	if (_loc2_.年龄 < 16) {
		小提示("皇储年龄还小，无法继承大统");
	} else if (_loc2_ == undefined) {
		小提示("请先立皇储再禅让");
	} else {
		皇帝禅让事件();
		id('紫宸殿内').style.display = 'none';
	}
}
function 死亡判定(参数) {
	剧情头像.style.display = 'none';
	id("剧情对话").style.display = 'block';
	皇宫._visible = false;
	属性栏._visible = false;
	var _loc3_ = "";
	if (年 == 1) {
		_loc3_ = 主角.年号 + "元年 " + 季节 + "季 " + 旬;
	} else {
		_loc3_ = 主角.年号 + "" + 年 + "年 " + 季节 + "季 " + 旬;
	}
	if (参数 == 0) {
		剧情背景.src =LJ +  "a0aPic_BG/Tu_991101.webp";
		var 死亡内容 = _loc3_ + "。" + 主角.姓氏 + 主角.名字 + "皇帝寿终正寝。在位" + 年 + "年。";
	} else if (参数 == 1) {
		剧情背景.src =LJ +  "a0aPic_BG/Tu_991101.webp";
		var 死亡内容 = _loc3_ + "。" + 主角.姓氏 + 主角.名字 + "皇帝寿终正寝。在位" + 年 + "年。";
	} else if (参数 == 2) {
		剧情背景.src =LJ +  "a0aPic_BG/Tu_991102.webp";
		var 死亡内容 = _loc3_ + "。" + 主角.姓氏 + 主角.名字 + "在位" + 年 + "年。禅让，太子即日登基。";
	} else if (参数 == 3) {
		剧情背景.src =LJ +  "a0aPic_BG/Tu_991101.webp";
		var 死亡内容 = _loc3_ + "。" + 主角.姓氏 + 主角.名字 + "在位" + 年 + "年。刺客行刺，驾崩。";
	} else if (参数 == 4) {
		剧情背景.src =LJ +  "a0aPic_BG/Tu_991103.webp";
		var 死亡内容 = _loc3_ + "。" + 主角.姓氏 + 主角.名字 + "在位" + 年 + "年。国库亏空严重，国家机器停止运转。";
	} else if (参数 == 5) {
		剧情背景.src =LJ +  "a0aPic_BG/Tu_991103.webp";
		var 死亡内容 = _loc3_ + "。" + 主角.姓氏 + 主角.名字 + "在位" + 年 + "年。京城沦陷，死于混战之中。";
	} else if (参数 == 7) {
		剧情背景.src =LJ +  "a0aPic_BG/Tu_991105.webp";
		var 死亡内容 = _loc3_ + "。" + 主角.姓氏 + 主角.名字 + "在位" + 年 + "年。放弃皇位，与一生挚爱浪迹天涯。";
	} else if (参数 == 8) {
		剧情背景.src =LJ +  "a0aPic_BG/Tu_991104.webp";
		var 死亡内容 = _loc3_ + "。" + 主角.姓氏 + 主角.名字 + "在位" + 年 + "年。外戚长期控制朝廷，发动政变，皇帝被杀，太子变成傀儡。";
	} else if (参数 == 6) {
		剧情背景.src =LJ +  "a0aPic_BG/Tu_991104.webp";
		var 死亡内容 = _loc3_ + "。" + 主角.姓氏 + 主角.名字 + "在位" + 年 + "年。首脑大臣控制朝廷，皇权崩溃，护卫冲入你的寝宫，乱刀砍死。";
	} else if (参数 == 9) {
		剧情背景.src = "a0aPic_BG/Tu_991103.webp";
		var 死亡内容 = _loc3_ + "。" + 主角.姓氏 + 主角.名字 + "在位" + 年 + "年。因宫内断粮，饿死。。。。";
	}
	id("剧情文本").innerText = 死亡内容;
	剧情对话板.onclick = function() {
		if (主角._yinntiki >= 1) {
			死亡内容 += "由于与魔女签订契约，结束时被夺走了生前的一切。";
			魔女的索取(死亡内容);
		} else {
			id("剧情文本").innerText = "游戏已经结束，点击进入皇帝评价。";
			剧情对话板.onclick = function() {
				结局面板总程序(死亡内容);
				id("剧情对话").style.display = 'none';
			};
		}
	};
}
function 结局面板总程序(死亡内容) {
	id("属性栏").style.display = 'none';
	id("jieju").style.display = 'block';
	id("jiejan0").onclick = function() {
		大事笔记程序();
	};
	id("jiejan1").onclick = function() {
		嫔妃一览程序(999);
	};
	id("jiejan2").onclick = function() {
		子女一览程序(999);
	};
	id("jiejan3").onclick = function() {
		皇孙一览表(0);
	};
	id("jiejan4").onclick = function() {
		世界地图();
	};
	刷新每个国家几城的程序();
	var _loc5_ = 0;
	_loc5_ += 年 * 30;
	_loc5_ += Math.round(属性.威望);
	_loc5_ += Math.round(属性.道德 / 2 - 属性.暴戾);
	_loc5_ += Math.round((属性.统帅 + 属性.武力 + 属性.智力 + 属性.政治 + 属性.魅力 + 属性.才艺) / 6);
	id("jiejutext").innerHTML = true;
	id("jiejutext").innerHTML = 死亡内容 + "<br>皇帝属性：";
	id("jiejutext").innerHTML += "威望：" + 属性.威望 + "，道德：" + 属性.道德 + "，暴戾：" + 属性.暴戾;
	id("jiejutext").innerHTML += "<br>统帅：" + 属性.统帅 + "，武力：" + 属性.武力 + "，智力：" + 属性.智力 + "，政治：" + 属性.政治 + "，魅力：" + 属性.魅力 +
		"，才艺：" + 属性.才艺;
	var _loc6_ = 0;
	var _loc7_ = 0;
	var _loc8_ = 0;
	while (_loc8_ < _all_city.length) {
		if (_all_city[_loc8_].归属 == 8 || _all_city[_loc8_].归属 == 23) {
			_loc5_ += 5 * _all_city[_loc8_].等级;
			_loc6_ += 1;
			_loc7_ += _all_city[_loc8_].等级;
		}
		_loc8_ += 1;
	}
	id("jiejutext").innerHTML += "<br>国家数据：<br>国库：" + 国家.金钱 + "，粮食：" + 国家.粮食 + "，城池数：" + _loc6_ + "，平均等级：" + Math.round(
		_loc7_ / _loc6_);
	var _loc9_ = 0;
	var _loc10_ = 0;
	var _loc11_ = 0;
	var _loc12_ = 0;
	var _loc13_ = 0;
	var _loc14_ = 0;
	var _loc15_ = 0;
	var _loc16_ = 0;
	if (_all_rencai.length > 0) {
		_loc8_ = 0;
		while (_loc8_ < _all_rencai.length) {
			_loc9_ += _all_rencai[_loc8_].统帅;
			_loc10_ += _all_rencai[_loc8_].武力;
			_loc11_ += _all_rencai[_loc8_].智力;
			_loc12_ += _all_rencai[_loc8_].政治;
			_loc13_ += _all_rencai[_loc8_].魅力;
			_loc14_ += _all_rencai[_loc8_].清廉;
			_loc15_ += _all_rencai[_loc8_].野心;
			_loc16_ += _all_rencai[_loc8_].关系;
			_loc8_ += 1;
		}
	}
	var _loc17_ = Math.round(_loc9_ / _all_rencai.length);
	var _loc18_ = Math.round(_loc10_ / _all_rencai.length);
	var _loc19_ = Math.round(_loc11_ / _all_rencai.length);
	var _loc20_ = Math.round(_loc12_ / _all_rencai.length);
	var _loc21_ = Math.round(_loc13_ / _all_rencai.length);
	var _loc22_ = Math.round(_loc14_ / _all_rencai.length);
	var _loc23_ = Math.round(_loc15_ / _all_rencai.length);
	var _loc24_ = Math.round(_loc16_ / _all_rencai.length);
	_loc5_ += _loc17_ + _loc18_ + _loc19_ + _loc20_ + _loc21_ + _loc22_ - _loc23_ * 5 + _loc24_ * 2;
	id("jiejutext").innerHTML += "<br>官员数量：" + _all_rencai.length + "，君臣关系：" + _loc24_ + "<br>官员平均统帅：" + _loc17_ +
		"，武力：" + _loc18_ + "，智力：" + _loc19_ + "，政治：" + _loc20_ + "，魅力：" + _loc21_ + "，清廉：" + _loc22_ + "，野心：" + _loc23_;
	var _loc25_ = 0;
	var _loc26_ = 0;
	var _loc27_ = 0;
	var _loc28_ = 0;
	if (_all_feizi.length > 0) {
		_loc8_ = 0;
		while (_loc8_ < _all_feizi.length) {
			_loc25_ += _all_feizi[_loc8_].爱;
			_loc26_ += _all_feizi[_loc8_].魅力;
			if (_all_feizi[_loc8_].爱 > 800) {
				_loc28_ += 1;
			} else if (_all_feizi[_loc8_].爱 > 100) {
				_loc27_ += 1;
			}
			_loc8_ += 1;
		}
	}
	_loc5_ += Math.round(_loc26_ / _all_feizi.length) + _loc28_ * 10 + _loc27_ * 2;
	id("jiejutext").innerHTML += "<br>妃子数量：" + _all_feizi.length + "，妃子平均爱情：" + Math.round(_loc25_ / _all_feizi
		.length) + "，妃子平均魅力：" + Math.round(_loc26_ / _all_feizi.length);
	var _loc29_ = 0;
	var _loc30_ = 0;
	var _loc31_ = 0;
	var _loc32_ = 0;
	var _loc33_ = 0;
	var _loc34_ = 0;
	var _loc35_ = 0;
	var _loc36_ = 0;
	var _loc37_ = 0;
	if (_all_child.length > 0) {
		_loc8_ = 0;
		while (_loc8_ < _all_child.length) {
			if (_all_child[_loc8_].状态 == 0) {
				_loc29_ += 1;
				_loc30_ += _all_child[_loc8_].统帅;
				_loc31_ += _all_child[_loc8_].武力;
				_loc32_ += _all_child[_loc8_].智力;
				_loc33_ += _all_child[_loc8_].政治;
				_loc34_ += _all_child[_loc8_].魅力;
				_loc35_ += _all_child[_loc8_].清廉;
				_loc36_ += _all_child[_loc8_].野心;
				_loc37_ += _all_child[_loc8_].关系;
			}
			_loc8_ += 1;
		}
	}
	var _loc38_ = Math.round(_loc30_ / _loc29_);
	var _loc39_ = Math.round(_loc31_ / _loc29_);
	var _loc40_ = Math.round(_loc32_ / _loc29_);
	var _loc41_ = Math.round(_loc33_ / _loc29_);
	var _loc42_ = Math.round(_loc34_ / _loc29_);
	var _loc43_ = Math.round(_loc35_ / _loc29_);
	var _loc44_ = Math.round(_loc36_ / _loc29_);
	var _loc45_ = Math.round(_loc37_ / _loc29_);
	_loc5_ += _loc38_ + _loc39_ + _loc40_ + _loc41_ + _loc42_ + _loc43_ - _loc44_ * 5 + _loc45_ * 2;
	_loc5_ += 3 * _loc29_;
	_loc5_ += 4 * _all_grandchild.length;
	id("jiejutext").innerHTML += "<br>子女数量：" + _loc29_ + "，子女关系：" + _loc45_ + "，皇孙数量：" + _all_grandchild.length +
		"<br>子女平均统帅：" + _loc38_ + "，武力：" + _loc39_ + "，智力：" + _loc40_ + "，政治：" + _loc41_ + "，魅力：" + _loc42_ + "，清廉：" +
		_loc43_ + "，野心：" + _loc44_;
	var _loc46_ = 0;
	_loc8_ = 0;
	while (_loc8_ < 所有物品.length) {
		if (所有物品[_loc8_].数量 > 0) {
			_loc46_ += 1;
			_loc5_ += 2;
		}
		_loc8_ += 1;
	}
	var _loc47_ = 0;
	_loc8_ = 0;
	while (_loc8_ < 剧情汇总.length) {
		if (剧情汇总[_loc8_].达成 > 0) {
			_loc47_ += 1;
			_loc5_ += 5;
		}
		_loc8_ += 1;
	}
	id("jiejutext").innerHTML += "<br>物品收集率：" + _loc46_ + "/" + 所有物品.length + "，剧情达成率：" + _loc47_ + "/" + 剧情汇总.length;
	if (主角._yinntiki >= 1) {
		_loc5_ = 0;
		id("jiejutext").innerHTML = "<br>" + 死亡内容;
	}
	id("jiejutext").innerHTML += "<br>黄金乡次数：" + 主角._yinntiki;
	id("jiejutext").innerHTML += "<br><br>您本次游戏的总分为：" + 颜色代码(_loc5_, "ff0000") + "分。<br><br>";
	id("jiejutext").innerHTML += "游戏完善还需要一段时间，目前数值上，逻辑上还可能存在一些的问题。希望你能继续支持，我会尽快对游戏进行更新。注：本游戏为免费同人游戏，部分素材来源网络。";
}
function 奇珍宝库程序() {
	id('sy').style.display = 'block';
	id('syb').style.display = 'none';
	id('syb2').style.display = 'block';
	id('syTitle').innerText = '奇珍异宝';
	id('sysm').innerText = "";
	id('qxsy').onclick = function() {
		id('syb').style.display = 'block';
		id('syb2').style.display = 'none';
		id('sy').style.display = 'none';
	}
	var 临时宝物 = [];
	_loc6_ = 0;
	while (_loc6_ < 所有物品.length) {
		if (所有物品[_loc6_].等级 >= 6 && 所有物品[_loc6_].数量 > 0) {
			临时宝物.push(所有物品[_loc6_]);
		}
		_loc6_ = _loc6_ + 1;
	}
	序列 = 0;
	整理宝物展示(临时宝物, 序列);
	id('syqian').onclick = function() {
		if (序列 >= 1) {
			序列 -= 1;
			整理宝物展示(临时宝物, 序列);
		}
	};
	id('syhou').onclick = function() {
		if (序列 < 临时宝物.length / 32) {
			序列 += 1;
			整理宝物展示(临时宝物, 序列);
		}
	};
}
function 整理宝物展示(临时宝物, 序列) {
	var _loc3_ = 0;
	while (_loc3_ < 32) {
		var _loc4_ = 临时宝物[序列 * 32 + _loc3_];
		var _loc2_ = className('sydb2')[_loc3_];
		if (_loc4_ == undefined) {
			_loc2_.style.display = 'none';
		} else {
			_loc2_.style.display = 'block';
			_loc2_.innerText = _loc4_.名称;
			_loc2_.取 = _loc4_;
			_loc2_.onclick = function() {
				使用这个珍宝道具(this.取);
			};
		}
		_loc3_ = _loc3_ + 1;
	}
}
function 使用这个珍宝道具(对象) {
	id('syb').style.display = 'block';
	id('syb2').style.display = 'none';
	id('sy').style.display = 'none';
	id('neishiMB').style.display = 'block';
	id('neishiBG').style.display = 'none';
	id('neishi2').style.display = 'none';
	id('neishiTitle').innerText = 对象.名称
	id('neishiText').innerText = 对象.说明 + "\n皇上，这件珍宝：" + 对象.名称 + "您想怎么处理？";
	id('nsan0').innerText = '送给大臣';
	id('nsan1').innerText = '送给妃子';
	id('nsan2').innerText = '送给子女';
	id('nsan3').innerText = '贱价处理';
	id('nsan0').onclick = function() {
		人才列表显示(26, 对象);
		id('neishiMB').style.display = 'none';
	};
	id('nsan1').onclick = function() {
		嫔妃一览程序(6, 对象);
		id('neishiMB').style.display = 'none';
	};
	id('nsan2').onclick = function() {
		子女一览程序(5, 对象);
		id('neishiMB').style.display = 'none';
	}
	id('nsan3').onclick = function() {
		if (对象._code == 1000) {
			小提示("卖了用啥盖印。");
		} else {
			变卖这个珍宝(对象, 序列号码);
			id('syb').style.display = 'block';
			id('syb2').style.display = 'none';
			id('sy').style.display = 'none';
			id('neishiMB').style.display = 'none';
		}
	};
}
function 赏赐这个大臣确定(人物, 珍宝) {
	var 结果的话 = "";
	if (珍宝._code == 1000) {
		var _loc2_ = random(4);
		if (_loc2_ == 0) {
			结果的话 = "" + 人物.名字 + "：臣万死不敢接受这个东西。(珍宝已退回。)";
		} else if (_loc2_ == 1) {
			结果的话 = "（" + 人物.名字 + "跪在那，一句不吭。珍宝已退回。)";
		} else if (_loc2_ == 2) {
			结果的话 = "" + 人物.名字 + "：臣罪该万死，但臣绝对忠诚于皇上。(珍宝已退回。)";
		} else if (_loc2_ == 3) {
			结果的话 = "" + 人物.名字 + "：传国玉玺雕刻得真精美啊。(珍宝已退回。)";
		}
	} else if (珍宝.类别 == "情") {
		_loc2_ = random(4);
		if (_loc2_ == 0) {
			结果的话 = "" + 人物.名字 + "：皇上这是什么意思？(珍宝已退回。)";
		} else if (_loc2_ == 1) {
			结果的话 = "" + 人物.名字 + "：公公，这东西是做什么用的？(珍宝已退回。)";
		} else if (_loc2_ == 2) {
			结果的话 = "" + 人物.名字 + "：公公，赐这东西，臣下实在想不通。(珍宝已退回。)";
		} else if (_loc2_ == 3) {
			结果的话 = "" + 人物.名字 + "：公公，你拿错了吧。(珍宝已退回。)";
		}
	} else {
		_loc2_ = random(4);
		if (_loc2_ == 0) {
			结果的话 = "" + 人物.名字 + "：臣谢皇上隆恩。(大臣很高兴，忠诚提高。)";
		} else if (_loc2_ == 1) {
			结果的话 = "" + 人物.名字 + "：谢主隆恩。(大臣很高兴，忠诚提高。)";
		} else if (_loc2_ == 2) {
			结果的话 = "" + 人物.名字 + "：臣叩谢皇上。(大臣很高兴，忠诚提高。)";
		} else if (_loc2_ == 3) {
			结果的话 = "" + 人物.名字 + "：吾皇万岁万岁万万岁。(大臣很高兴，忠诚提高。)";
		}
		人物.忠诚 = 100;
		珍宝.数量 -= 1;
	}
	id('剧情对话').style.display = 'block';
	新后宫图形读取程序(剧情头像, 42, "特殊");
	新后宫图形读取程序(剧情背景, 14, "背景");
	对话打字效果("太监：赐【" + 珍宝.名称 + "】予" + 人物.名字 + "，奴才这就去。");
	剧情对话板.onclick = function() {
		if (人物._code !== undefined) {
			出现这个人的头像(剧情头像, 人物);
		} else {
			新后宫图形读取程序(剧情头像, 人物.头像, "特殊");
		}
		对话打字效果(结果的话);
		剧情对话板.onclick = function() {
			缓动黑幕();
			id('剧情对话').style.display = 'none';
			奇珍宝库程序();
		};
	};
}
function 赏赐这个妃子确定(人物, 珍宝, 序列号码) {
	var 结果的话 = "";
	if (珍宝._code == 1000) {
		var _loc2_ = random(4);
		if (_loc2_ == 0) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：玉玺真好看。(珍宝已退回。)";
		} else if (_loc2_ == 1) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：这个玉玺最配威武的皇上了。(珍宝已退回。)";
		} else if (_loc2_ == 2) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：雕刻得真精致呀。(珍宝已退回。)";
		} else if (_loc2_ == 3) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：据说玉玺是由和氏璧雕制而成。(珍宝已退回。)";
		}
	} else if (珍宝.类 == "情") {
		_loc2_ = random(4);
		if (_loc2_ == 0) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：这是什么。[羞]";
		} else if (_loc2_ == 1) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：[惊]这是什么！";
		} else if (_loc2_ == 2) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：[惊]这是什么……[呆]";
		} else if (_loc2_ == 3) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：[惊]这是什么。[羞])";
		}
		人物.爱 += 50;
		珍宝.数量 -= 1;
	} else {
		_loc2_ = random(4);
		if (_loc2_ == 0) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：臣妾谢皇上隆恩。(娘娘很高兴，爱情提高。)";
		} else if (_loc2_ == 1) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：谢主隆恩。(娘娘很高兴，爱情提高。)";
		} else if (_loc2_ == 2) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：皇上太帅了，臣妾最爱皇上了。(娘娘很高兴，爱情提高。)";
		} else if (_loc2_ == 3) {
			结果的话 = "" + 人物.封号 + 人物.位分 + "：皇上万岁万岁万万岁。(娘娘很高兴，爱情提高。)";
		}
		人物.爱 += 10;
		珍宝.数量 -= 1;
	}
	id('剧情对话').style.display = 'block';
	新后宫图形读取程序(剧情头像, 42, "特殊");
	新后宫图形读取程序(剧情背景, 14, "背景");
	对话打字效果("太监：赐【" + 珍宝.名称 + "】予" + 人物.封号 + 人物.位分 + "娘娘，奴才这就去。");
	剧情对话板.onclick = function() {
		if (人物._code !== undefined) {
			出现这个人的头像(剧情头像, 人物);
		} else {
			新后宫图形读取程序(剧情头像, 人物.头像);
		}
		对话打字效果(结果的话);
		剧情对话板.onclick = function() {
			缓动黑幕();
			id('剧情对话').style.display = 'none';
			奇珍宝库程序();
		};
	};
}
function 赏赐这个子女确定(人物, 珍宝) {
	var 结果的话 = "";
	if (人物.年龄 <= 3) {
		结果的话 = "（" + 人物.名称 + "还小，不懂事，见到东西玩了两下就扔到地上了，珍宝已退回。)";
	} else if (珍宝._code == 1000) {
		var _loc2_ = random(4);
		if (_loc2_ == 0) {
			结果的话 = "" + 人物.名称 + "：父皇还在位，儿臣万死不敢接受这个东西。(珍宝已退回。)";
		} else if (_loc2_ == 1) {
			结果的话 = "" + 人物.名称 + "：父皇这是什么意思？是属意于儿臣吗？(珍宝已退回。)";
		} else if (_loc2_ == 2) {
			结果的话 = "" + 人物.名称 + "：儿臣绝对忠诚于父皇，绝无叛逆之心。(珍宝已退回。)";
		} else if (_loc2_ == 3) {
			结果的话 = "" + 人物.名称 + "：传国玉玺雕刻得真精美啊。(珍宝已退回。)";
		}
	} else if (珍宝.类 == "情") {
		_loc2_ = random(4);
		if (_loc2_ == 0) {
			结果的话 = "" + 人物.名称 + "：父皇这是什么意思？(珍宝已退回。)";
		} else if (_loc2_ == 1) {
			结果的话 = "" + 人物.名称 + "：这东西是做什么用的？(珍宝已退回。)";
		} else if (_loc2_ == 2) {
			结果的话 = "" + 人物.名称 + "：赐这东西，儿臣实在想不通。(珍宝已退回。)";
		} else if (_loc2_ == 3) {
			结果的话 = "" + 人物.名称 + "：公公，你拿错了吧。(珍宝已退回。)";
		}
	} else {
		_loc2_ = random(4);
		if (_loc2_ == 0) {
			结果的话 = "" + 人物.名称 + "：儿臣谢父皇隆恩。(与该子女关系提高。)";
		} else if (_loc2_ == 1) {
			结果的话 = "" + 人物.名称 + "：父皇果然还是看重儿臣的。(与该子女关系提高。)";
		} else if (_loc2_ == 2) {
			结果的话 = "" + 人物.名称 + "：儿臣叩谢皇上。(与该子女关系提高。)";
		} else if (_loc2_ == 3) {
			结果的话 = "" + 人物.名称 + "：吾皇万岁万岁万万岁。(与该子女关系提高。)";
		}
		人物.关系 += 5;
		珍宝.数量 -= 1;
	}
	id('剧情对话').style.display = 'block';
	新后宫图形读取程序(剧情头像, 42, "特殊");
	新后宫图形读取程序(剧情背景, 14, "背景");
	对话打字效果("太监：赐【" + 珍宝.名称 + "】予" + 人物.名称 + "，奴才这就去。");
	剧情对话板.onclick = function() {
		出现这个人的头像(剧情头像, 人物);
		对话打字效果(结果的话);
		剧情对话板.onclick = function() {
			缓动黑幕();
			id('剧情对话').style.display = 'none';
			奇珍宝库程序();
		};
	};
}
function 变卖这个珍宝(珍宝) {
	珍宝.数量 -= 1;
	var _loc2_ = random(40) * 10000;
	var _loc4_ = 所有国内的大名人[random(所有国内的大名人.length)];
	var _loc5_ = "拍卖吸引不少国内名人，最终" + _loc4_ + "以" + _loc2_ + "两白银，将" + 珍宝.名称 + "购走。";
	国家.金钱 += _loc2_;
	更新资料();
	特殊说话(_loc5_, 4);
	id('tjBgCon').onclick = function() {
		id('taijianBg').style.display = 'none';
	};
}
function 剧情总览程序() {
	id('jqzl').style.display = 'block';
	var 临时剧情 = [];
	_loc5_ = 0;
	while (_loc5_ < 剧情汇总.length) {
		临时剧情.push(剧情汇总[_loc5_]);
		_loc5_ += 1;
	}
	序列 = 0;
	整理剧情展示(临时剧情, 序列);
	id('juqinqian').onclick = function() {
		if (序列 >= 1) {
			序列 -= 1;
			整理剧情展示(临时剧情, 序列);
		}
	};
	id('juqinhou').onclick = function() {
		if (序列 < 临时剧情.length / 6) {
			序列 += 1;
			整理剧情展示(临时剧情, 序列);
		}
	};
}
function 整理剧情展示(临时剧情, 序列) {
	var _loc4_ = 0;
	while (_loc4_ < 6) {
		var _loc5_ = 临时剧情[序列 * 6 + _loc4_];
		if (_loc5_ == undefined) {
			className('juqingb')[_loc4_].style.display = 'none';
			className('juqing')[_loc4_].innerText = '';
			className('zhuyaorw')[_loc4_].innerText = '';
			className('dacheng')[_loc4_].innerText = '';
		} else {
			className('juqingb')[_loc4_].style.display = 'block';
			if (_loc5_.开启 == 1) {
				className('juqing')[_loc4_].innerText = "No." + _loc5_.id + " " + _loc5_.名称;
			} else if (_loc5_.开启 == 0) {
				className('juqing')[_loc4_].innerText = "No." + _loc5_.id + " ——————";
			}
			if (_loc5_.达成 == 1) {
				className('zhuyaorw')[_loc4_].innerText = "主要人物：" + _loc5_.人物;
				className('dacheng')[_loc4_].innerText = "已达成";
				className('dacheng')[_loc4_].style.color = "#FFF000";
			} else {
				className('zhuyaorw')[_loc4_].innerText = "";
				className('dacheng')[_loc4_].innerText = "未达成";
				className('dacheng')[_loc4_].style.color = "#55aaff";
			}
		}
		_loc4_ += 1;
	}
}
id('gengxingsm').onclick = function() {
	id('gameEnter').style.display = 'none';
	id('属性栏').style.display = 'none';
	id('szb').style.display = 'block';
	id('szbTittle').innerText = "更新说明";
	id('szbText').innerText = "【江山社稷 v26.0.0】\n原制作：猫猫，现制作：内舍阁工作室";
	id('szbText').innerText +="\n\n【22.02.15】v0.90 \n原版1.19的内容差不多全制作完成，个别无关紧要的功能比如御膳房以后有时间再制作。"
	id('szbText').innerText +="\n新增功能：\n一、前朝：\n1.六部制。操作由六部官员完成，对应官职，可更换官员。"
	id('szbText').innerText += "\n2.外交方面，新增3个国家，8个城市，增加初始外国皇室内容(部分为名人)；增加索要内容-索要美女。\n3.其他：简化城市建设操作。"
	id('szbText').innerText += "\n二、后宫:\n1.自定义位分，可自定义位分名字，增加、删减位分个数（上限无限个，下限1个。ps:不要加太多多余的，会增加后宫开销，不过也没多少啦）\n2.介绍界面增加性格、出身，目前名妃和外域美人固定了性格，随机人物或者未固定的根据属性计算性格。\n3.宫殿内部增设殿名，阁名，可自定义。"
	id('szbText').innerText +="\n4.更改妃子名字、介绍。\n5.选秀和皇子选妃出现名妃，点击头像可看介绍。皇子亲选王妃，皇子的反应剧情。\n6.彤史，记录侍寝(其实这是伯爵之前写好的)。\n7.储秀阁功能：安排宫女可选择收入储秀阁，选秀默认收入储秀阁，可以把秀女赐给皇子。"
	id('szbText').innerText +="\n三、其他:\n1.皇帝头像，所有剧情已装填。\n2.黄金乡但为君故功能:获得指定名妃名臣。\n3.战争俘虏、巡游美女刺客等解除城市绑定，改为一个城市可获得对应该城市文化圈所有外域美人。\n4.灵山太妃列表，概率名妃。\n5.名人图鉴功能，以及一些名人数据的增减、修改。\n6.其他：批量赏赐珍宝、家眷可看介绍图、安排宫女册封之前点击头像看介绍等。"
		id('szbText').innerText +="\n\n【26.6.11】v26.6.11 \n1.皇宫界面增加寿康宫按钮\n2.删除灵山显示太妃的代码\n3.删除开局自定义皇后，改成了默认生成皇后。"
	id('szbgb').onclick = function(){
		id('szb').style.display = 'none';
		id('gameEnter').style.display = 'block';
		id('属性栏').style.display = 'block';
	}
}

function 输入路径(){
	id("lujin").style.display="block";
	id("lujinqueding").onclick=function (){
		var _loc1_ = id("textlujin").value;
		_loc4_ = localStorage.setItem("立绘路径",_loc1_);
		gameEnter.style.display = 'block';console.log(_loc1_)
		LJ= id("textlujin").value;
		id("lujin").style.display="none";	
	};
	id("lujingb").onclick=function (){
		this.parentNode.style.display = 'none';	
	};
}
function 读取路径(){
	var _loc2_ = localStorage.getItem("立绘路径");
    LJ= _loc2_;
	console.log(LJ)
}