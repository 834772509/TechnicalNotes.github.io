(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{437:function(t,s,e){"use strict";e.r(s);var a=e(12),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"winpe-笔记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#winpe-笔记"}},[t._v("#")]),t._v(" WinPE 笔记")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("部分内容搜集于"),e("a",{attrs:{href:"http://bbs.wuyou.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("无忧论坛"),e("OutboundLink")],1),t._v("，此处仅为集合，如有侵权请联系删除")])]),t._v(" "),e("h2",{attrs:{id:"下载系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载系统"}},[t._v("#")]),t._v(" 下载系统")]),t._v(" "),e("ul",[e("li",[t._v("（推荐）business(商业版）: 专业版 企业版 教育版 专业教育版 专业工作站版")]),t._v(" "),e("li",[t._v("consumer（消费者版）： 专业版 家庭版 家庭单语言版 教育版 专业教育版 专业工作站版")])]),t._v(" "),e("h2",{attrs:{id:"设备管理器-替换原版系统的文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设备管理器-替换原版系统的文件"}},[t._v("#")]),t._v(" 设备管理器（替换原版系统的文件）")]),t._v(" "),e("p",[t._v("System32\\zh-CN\\compmgmt.msc\nSystem32\\zh-CN\\diskmgmt.msc\nSystem32\\zh-CN\\devmgmt.msc\nSystem32\\zh-CN\\services.msc")]),t._v(" "),e("h2",{attrs:{id:"禁用回收站"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#禁用回收站"}},[t._v("#")]),t._v(" 禁用回收站")]),t._v(" "),e("ol",[e("li",[t._v("删除 "),e("code",[t._v("HKEY_LOCAL_MACHINE_default\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\BitBucket")]),t._v(" 下的所有内容（如无此项则创建此项）")]),t._v(" "),e("li",[t._v("右键-权限-高级-取消勾选“包括可从该对象的父项继承的权限”-删除-确定-是")])]),t._v(" "),e("h2",{attrs:{id:"修改-x-盘大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-x-盘大小"}},[t._v("#")]),t._v(" 修改 X 盘大小")]),t._v(" "),e("ol",[e("li",[t._v("替换文件（推荐）: fbwf.cfg")]),t._v(" "),e("li",[t._v("修改注册表 "),e("code",[t._v("HKEY_LOCAL_MACHINE_system\\ControlSet001\\Services\\FBWF")]),t._v("，"),e("code",[t._v('"WinPECacheThreshold"=dword:00000400')])])]),t._v(" "),e("p",[t._v("400=1GB，3200=8GB")]),t._v(" "),e("h2",{attrs:{id:"boot-wim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boot-wim"}},[t._v("#")]),t._v(" boot.wim")]),t._v(" "),e("ul",[e("li",[t._v("卷#1 Windows PE 相当于 winpe.wim")]),t._v(" "),e("li",[t._v("卷#2 Windows Setup 相当于 winre.wim")])]),t._v(" "),e("h2",{attrs:{id:"创建手机引导镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建手机引导镜像"}},[t._v("#")]),t._v(" 创建手机引导镜像")]),t._v(" "),e("ol",[e("li",[t._v("UltraISO-文件-新建-软盘映像")]),t._v(" "),e("li",[t._v("映像大小:原 iso 大小 + 15MB")]),t._v(" "),e("li",[t._v("引导扇区:Win10/8/7/Vista")]),t._v(" "),e("li",[t._v("将 iso 内的文件放入 img 内")]),t._v(" "),e("li",[t._v("保存")])]),t._v(" "),e("h2",{attrs:{id:"修改系统属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改系统属性"}},[t._v("#")]),t._v(" 修改系统属性")]),t._v(" "),e("p",[t._v("C:\\Windows\\System32\\systemcpl.dll")]),t._v(" "),e("h2",{attrs:{id:"删除开始菜单多余文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除开始菜单多余文件夹"}},[t._v("#")]),t._v(" 删除开始菜单多余文件夹")]),t._v(" "),e("p",[t._v("\\Users\\Default\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs")]),t._v(" "),e("h2",{attrs:{id:"注册表对应关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册表对应关系"}},[t._v("#")]),t._v(" 注册表对应关系")]),t._v(" "),e("ul",[e("li",[t._v("Default: [HKEY_CURRENT_USER]")]),t._v(" "),e("li",[t._v("SoftWare: [HKEY_LOCAL_MACHIN]\\SoftWare")]),t._v(" "),e("li",[t._v("System: [HKEY_LOCAL_MACHINE]\\System")]),t._v(" "),e("li",[t._v("SoftWare\\Classes: [HKEY_CLASSES_ROOT]")])]),t._v(" "),e("p",[t._v("注册表服务项：")]),t._v(" "),e("p",[t._v("[HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Services]")]),t._v(" "),e("h2",{attrs:{id:"夜间模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#夜间模式"}},[t._v("#")]),t._v(" 夜间模式：")]),t._v(" "),e("p",[e("code",[t._v("HKEY_LOCAL_MACHINE_Default\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize\\AppsUseLightTheme")]),t._v(" "),e("code",[t._v("HKEY_LOCAL_MACHINE_Default\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize\\SystemUsesLightTheme")])]),t._v(" "),e("ul",[e("li",[t._v("0 : 夜间模式")]),t._v(" "),e("li",[t._v("1 : 白天模式")])]),t._v(" "),e("h2",{attrs:{id:"ipack-图标包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ipack-图标包"}},[t._v("#")]),t._v(" iPack 图标包：")]),t._v(" "),e("p",[e("code",[t._v("imageres.dll")]),t._v(" 、"),e("code",[t._v("imagesp1.dll")]),t._v(" 、"),e("code",[t._v("zipfldr.dll")])]),t._v(" "),e("h2",{attrs:{id:"修改我的电脑、回收站图标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改我的电脑、回收站图标"}},[t._v("#")]),t._v(" 修改我的电脑、回收站图标")]),t._v(" "),e("p",[e("code",[t._v("\\windows\\system32\\Imageres.dll")])]),t._v(" "),e("p",[t._v("注意：我的电脑:1010 或 109，不是 149")]),t._v(" "),e("h2",{attrs:{id:"修改默认输入法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改默认输入法"}},[t._v("#")]),t._v(" 修改默认输入法")]),t._v(" "),e("p",[e("code",[t._v("HKEY_LOCAL_MACHINE_Default\\Keyboard Layout\\Preload")])]),t._v(" "),e("p",[t._v("00000804 　　中文(简体)-美式键盘")]),t._v(" "),e("h2",{attrs:{id:"修改任务栏右键菜单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改任务栏右键菜单"}},[t._v("#")]),t._v(" 修改任务栏右键菜单")]),t._v(" "),e("p",[e("code",[t._v("explorer.exe.mui")]),t._v("，菜单 205-2052 项")]),t._v(" "),e("h2",{attrs:{id:"激活-pe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#激活-pe"}},[t._v("#")]),t._v(" 激活 PE")]),t._v(" "),e("p",[t._v("导入注册表： "),e("code",[t._v("HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Control\\ProductOptions")])]),t._v(" "),e("p",[t._v('注意：釆用 "正常已激活的系统" 的 "ProductOptions.reg" 是真激活，但 "控制面版" 里面还是无法出现正确信息，必须自行修改。\n除了修改'),e("code",[t._v("\\Windows\\System32\\zh-cn\\systemcpl.dll.mui")])]),t._v(" "),e("p",[t._v('字串表第 100 项的值以外，还可以照下图那样把第一项也改成 "Windows 已激活。\n'),e("img",{attrs:{src:"/file/full?type=note_img&fileid=1450339843.yhUMxbJfrQ8SHT8M7-hATw",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"使用-win7-任务管理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-win7-任务管理器"}},[t._v("#")]),t._v(" 使用 Win7 任务管理器")]),t._v(" "),e("p",[e("code",[t._v("\\Windows\\System32\\taskmgr.exe")]),t._v(" (WinRE 中）\n"),e("code",[t._v("\\Windows\\System32\\ZH-CN\\taskmgr.exe.mui")]),t._v(" (特定文件）")]),t._v(" "),e("h2",{attrs:{id:"去除登入桌面左上角个性化窗口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#去除登入桌面左上角个性化窗口"}},[t._v("#")]),t._v(" 去除登入桌面左上角个性化窗口")]),t._v(" "),e("ul",[e("li",[t._v("方法 1：删除 "),e("code",[t._v("Windows\\system32\\zh-CN\\shell32.dll.mui")]),t._v(" 对话框里面的 13120 项")]),t._v(" "),e("li",[t._v("方法 2：\n在 PECMD.ini 中加载 Explorer.exe 之前，添加（删除两个注册表子项）\nREGI HKLM\\SOFTWARE\\Microsoft\\Active Setup\\Installed Components{2C7339CF-2B09-4501-B3F3-F3508C9228ED}!\nREGI HKLM\\SOFTWARE\\Microsoft\\Active Setup\\Installed Components{89820200-ECBD-11cf-8B85-00AA005B4340}!")])]),t._v(" "),e("h2",{attrs:{id:"自适应-dpi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自适应-dpi"}},[t._v("#")]),t._v(" 自适应 DPI")]),t._v(" "),e("p",[e("code",[t._v("HKU\\.DEFAULT\\Control Panel\\Desktop")])]),t._v(" "),e("p",[t._v("Win8DPIScaling = 0\nDesktopDPIOverride = 0")]),t._v(" "),e("p",[t._v("参考资料： https://docs.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/dpi-related-apis-and-registry-settings")]),t._v(" "),e("h2",{attrs:{id:"破解主题文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#破解主题文件"}},[t._v("#")]),t._v(" 破解主题文件")]),t._v(" "),e("p",[e("code",[t._v("C:\\Windows\\System32\\Themeui.dll")]),t._v(" "),e("code",[t._v("C:\\Windows\\System32\\Uxinit.dll")]),t._v(" "),e("code",[t._v("C:\\Windows\\System32\\Uxtheme.dll")])]),t._v(" "),e("h2",{attrs:{id:"修复-ctfmon-提示-unknown-hard-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修复-ctfmon-提示-unknown-hard-error"}},[t._v("#")]),t._v(" 修复 Ctfmon 提示 Unknown Hard error")]),t._v(" "),e("p",[t._v("增加")]),t._v(" "),e("p",[e("code",[t._v("\\Windows\\system32\\Windows.web.dll")]),t._v(" "),e("code",[t._v("\\Windows\\system32\\zh-CN\\Windows.web.dll.mui")])]),t._v(" "),e("p",[t._v("CDP.DLL DSREG.DLL")]),t._v(" "),e("h2",{attrs:{id:"修复-dism-不显示-winpe-的注册表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修复-dism-不显示-winpe-的注册表"}},[t._v("#")]),t._v(" 修复 Dism++不显示 WinPE 的注册表")]),t._v(" "),e("p",[t._v('[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\WinPE] "Version"="10.0.18362.145"')]),t._v(" "),e("h2",{attrs:{id:"修复部分程序无法输入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修复部分程序无法输入"}},[t._v("#")]),t._v(" 修复部分程序无法输入")]),t._v(" "),e("p",[t._v("补充\\Windows\\System32.nls 文件")]),t._v(" "),e("h2",{attrs:{id:"修复服务无法创建管理单元"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修复服务无法创建管理单元"}},[t._v("#")]),t._v(" 修复服务无法创建管理单元")]),t._v(" "),e("p",[t._v("补充 "),e("code",[t._v("Windows\\System32\\")]),t._v(" "),e("code",[t._v("filemgmt.dll")]),t._v(" "),e("code",[t._v("hidserv.dll")]),t._v(" "),e("code",[t._v("jscript9.dll")]),t._v(" "),e("code",[t._v("mshtml.dll")])]),t._v(" "),e("p",[t._v("和 ZH-CN 相关文件")]),t._v(" "),e("h2",{attrs:{id:"修复-winxshell-接管系统属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修复-winxshell-接管系统属性"}},[t._v("#")]),t._v(" 修复 WinXShell 接管系统属性")]),t._v(" "),e("p",[t._v("编辑 WinXShell.lua")]),t._v(" "),e("p",[e("code",[t._v("handle_system_property = nil")]),t._v(" （无单引号）")]),t._v(" "),e("h2",{attrs:{id:"_7z-直接修改-wim-支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7z-直接修改-wim-支持"}},[t._v("#")]),t._v(" 7z 直接修改 wim 支持")]),t._v(" "),e("p",[t._v("imagex.exe(6.1.7600.16385 版本或者不高于 6.1.7600.16385 版即可)")]),t._v(" "),e("p",[e("code",[t._v('imagex.exe /boot /compress max /capture 打包路径 生成 WIM 路径 "WindowsPE"')])]),t._v(" "),e("h2",{attrs:{id:"增加电池图标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加电池图标"}},[t._v("#")]),t._v(" 增加电池图标")]),t._v(" "),e("p",[t._v("Batmeter.dll\nBatmeter.dll.mui")]),t._v(" "),e("h2",{attrs:{id:"解决-uup-吊销"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决-uup-吊销"}},[t._v("#")]),t._v(" 解决 UUP 吊销")]),t._v(" "),e("p",[t._v("在调用 Aria2 时加上 --check-certificate=false")]),t._v(" "),e("h2",{attrs:{id:"修复系统属性左侧不显示图标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修复系统属性左侧不显示图标"}},[t._v("#")]),t._v(" 修复系统属性左侧不显示图标")]),t._v(" "),e("p",[t._v("[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Icons]")]),t._v(" "),e("h2",{attrs:{id:"解决-pe-关机、重启延时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决-pe-关机、重启延时"}},[t._v("#")]),t._v(" 解决 PE 关机、重启延时")]),t._v(" "),e("p",[t._v("删除\nsystem32"),e("br"),t._v("\nauthui.dll\nauthui.mui\nauthui.num\nimapi2.DLL")]),t._v(" "),e("h2",{attrs:{id:"精简-winsxs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#精简-winsxs"}},[t._v("#")]),t._v(" 精简 WinSxS")]),t._v(" "),e("p",[t._v("删除没有打补丁之前的版本的文件，保留当前补丁号版本\n以下目录保留一份：\n"),e("code",[t._v("amd64*microsoft-windows-servicingstack*")]),t._v(" "),e("code",[t._v("x86*microsoft-windows-servicingstack*")])])])}),[],!1,null,null,null);s.default=_.exports}}]);