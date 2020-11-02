(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{277:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("soup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"正则表达式"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("文本"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配规则"}},[t._v("#")]),t._v(" 匹配规则")]),t._v(" "),a("p",[t._v("元字符转义：在匹配字符前加"),a("code",[t._v("\\")]),t._v("即可表示字符本身")]),t._v(" "),a("ul",[a("li",[t._v("\\d : 匹配 0-9 之间任意一个数字字符，等价于表达式 [0-9]")]),t._v(" "),a("li",[t._v("\\D : 匹配任意一个不是 0-9 之间的数字字符，等价于表达式 [^0-9]")]),t._v(" "),a("li",[t._v("\\s : 匹配任意一个空白字符，包括 空格、tab、换行符等，等价于表达式 [\\t\\n\\r\\f\\v]")]),t._v(" "),a("li",[t._v("\\S : 匹配任意一个非空白字符，等价于表达式 [^ \\t\\n\\r\\f\\v]")]),t._v(" "),a("li",[t._v("\\w : 匹配任意一个文字字符，包括大小写字母、数字、下划线，等价于表达式 [a-zA-Z0-9_]\n缺省情况也包括 Unicode 文字字符，如果指定 ASCII 码标记，则只包括 ASCII 字母")]),t._v(" "),a("li",[t._v("\\W : 匹配任意一个非文字字符，等价于表达式 [^a-za-z0-9_]")])]),t._v(" "),a("h3",{attrs:{id:"匹配所有字符："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配所有字符："}},[t._v("#")]),t._v(" 匹配所有字符：.")]),t._v(" "),a("p",[a("code",[t._v(".")]),t._v(" 表示匹配除了"),a("strong",[t._v("换行符")]),t._v("之外的任何"),a("strong",[t._v("单个")]),t._v("字符")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n苹果是绿色的\n橙子是橙色的\n香蕉是黄色的\n乌鸦是黑色的\n"""')]),t._v("\n\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r".色"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n输出：\n  绿色\n  橙色\n  黄色\n  黑色\n"""')]),t._v("\n")])])]),a("h3",{attrs:{id:"重复匹配任意次："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复匹配任意次："}},[t._v("#")]),t._v(" 重复匹配任意次：*")]),t._v(" "),a("p",[a("code",[t._v("*")]),t._v("表示"),a("strong",[t._v("匹配前面的子表达式")]),t._v("任意次，包括 0 次")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n苹果，是绿色的\n橙子，是橙色的\n香蕉，是黄色的\n乌鸦，是黑色的\n猴子，\n"""')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 匹配"."任意次')]),t._v("\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"，.*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n输出：\n，是绿色的\n，是橙色的\n，是黄色的\n，是黑色的\n，\n"""')]),t._v("\n")])])]),a("h3",{attrs:{id:"重复匹配多次："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复匹配多次："}},[t._v("#")]),t._v(" 重复匹配多次：+")]),t._v(" "),a("p",[a("code",[t._v("+")]),t._v("表示匹配前面的子表达式一次或多次，"),a("strong",[t._v("不包括 0 次")]),t._v("，至少需要出现一次")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n苹果，是绿色的\n橙子，是橙色的\n香蕉，是黄色的\n乌鸦，是黑色的\n猴子，\n"""')]),t._v("\n\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"，.+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n输出：\n，是绿色的\n，是橙色的\n，是黄色的\n，是黑色的\n"""')]),t._v("\n")])])]),a("h3",{attrs:{id:"匹配指定次数："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配指定次数："}},[t._v("#")]),t._v(" 匹配指定次数：{}")]),t._v(" "),a("p",[a("code",[t._v("{n}")]),t._v("表示匹配前面的子表达式 n 次\n"),a("code",[t._v("{n,m}")]),t._v("表示匹配前面的子表达式，最少 n 次，最多 m 次")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n红彤彤，绿油油，黑乎乎，绿油油油油\n"""')]),t._v("\n\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"绿.{2}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n输出：\n绿油油\n绿油油\n"""')]),t._v("\n")])])]),a("h3",{attrs:{id:"匹配几个字符之一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配几个字符之一"}},[t._v("#")]),t._v(" 匹配几个字符之一: []")]),t._v(" "),a("p",[a("code",[t._v("[]")]),t._v("表示匹配方括号内的任意一个字符，方括号内也可出现匹配符（"),a("code",[t._v(".")]),t._v("不适用）"),a("br"),t._v("\n如果在方括号内使用"),a("code",[t._v("^")]),t._v("，表示"),a("code",[t._v("非")]),t._v("方括号内的字符集合")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n张三，手机号码15945678901\n李四，手机号码13945677701\n王二，手机号码13845666901\n"""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配13或15开头的手机号码")]),t._v("\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"1[35]\\d{9}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配13-16开头的手机号码")]),t._v("\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"1[3-6]\\d{9}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"起始位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起始位置"}},[t._v("#")]),t._v(" 起始位置")]),t._v(" "),a("p",[a("code",[t._v("^")]),t._v("表示匹配文本的"),a("code",[t._v("开头")]),t._v("位置")]),t._v(" "),a("ul",[a("li",[t._v("如果是 "),a("code",[t._v("单行模式")]),t._v(" ，表示匹配 "),a("code",[t._v("整个文本")]),t._v(" 的开头位置")]),t._v(" "),a("li",[t._v("如果是 "),a("code",[t._v("多行模式")]),t._v(" ，表示匹配 "),a("code",[t._v("文本每行")]),t._v(" 的开头位置")])]),t._v(" "),a("h3",{attrs:{id:"结尾位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结尾位置"}},[t._v("#")]),t._v(" 结尾位置")]),t._v(" "),a("p",[a("code",[t._v("$")]),t._v("表示匹配文本的"),a("code",[t._v("结尾")]),t._v("位置")]),t._v(" "),a("ul",[a("li",[t._v("如果是 "),a("code",[t._v("单行模式")]),t._v(" ，表示匹配 "),a("code",[t._v("整个文本")]),t._v(" 的结尾位置")]),t._v(" "),a("li",[t._v("如果是 "),a("code",[t._v("多行模式")]),t._v(" ，表示匹配 "),a("code",[t._v("文本每行")]),t._v(" 的结尾位置")])]),t._v(" "),a("h3",{attrs:{id:"多行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多行模式"}},[t._v("#")]),t._v(" 多行模式")]),t._v(" "),a("p",[t._v("在 Python 中，默认为单行模式（基于所有文本内容）")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("soup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"正则表达式"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("文本"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组"}},[t._v("#")]),t._v(" 分组")]),t._v(" "),a("p",[a("code",[t._v("组")]),t._v(" 就是把 正则表达式 匹配的内容 里面 "),a("code",[t._v("其中的某些部分")]),t._v(" 标记为某个组"),a("br"),t._v("\n以提取已经匹配的 内容里面的 某些部分的核心内容")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n苹果，苹果是绿色的\n橙子，橙子是橙色的\n香蕉，香蕉是黄色的\n"""')]),t._v("\n\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"(.+)，"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n输出：\n    苹果\n    橙子\n    香蕉\n"""')]),t._v("\n")])])]),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""张三，手机号码15945678901\n李四，手机号码13945677701\n王二，手机号码13845666901"""')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将姓名、手机号码 进行分组显示")]),t._v("\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"(.+)，.+(\\d{11})"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("\"\"\"\n输出：\n    ('张三', '15945678901')\n    ('李四', '13945677701')\n    ('王二', '13845666901')\n\"\"\"")]),t._v("\n")])])]),a("h2",{attrs:{id:"贪婪模式和非贪婪模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪婪模式和非贪婪模式"}},[t._v("#")]),t._v(" 贪婪模式和非贪婪模式")]),t._v(" "),a("p",[a("code",[t._v("*")]),t._v("、"),a("code",[t._v("+")]),t._v("、"),a("code",[t._v("?")]),t._v("都是"),a("strong",[t._v("尽可能的多的匹配内容")]),t._v("，加上"),a("code",[t._v("?")]),t._v("可使用非贪婪模式")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n<html><head><title>Title</title>\n"""')]),t._v("\n\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"<.*?>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n不加? 输出：[\'<html><head><title>Title</title>\']\n输出：\n  <html>\n  <head>\n  <title>\n  </title>\n"""')]),t._v("\n")])])]),a("h2",{attrs:{id:"分割字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分割字符串"}},[t._v("#")]),t._v(" 分割字符串")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"正则表达式"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 文本"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"关羽; 张飞, 赵云,马超, 黄忠  李逵"')]),t._v("\n\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"[;,\\s]\\s*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("\"\"\"\n输出：\n    ['关羽', '张飞', '赵云', '马超', '黄忠', '李逵']\n\"\"\"")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);