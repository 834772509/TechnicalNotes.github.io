(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{161:function(s,n,o){"use strict";o.r(n);var d=o(0),l=Object(d.a)({},(function(){var s=this,n=s.$createElement,o=s._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[o("h1",{attrs:{id:"winpe-笔记"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#winpe-笔记"}},[s._v("#")]),s._v(" WinPE 笔记")]),s._v(" "),o("h2",{attrs:{id:"下载系统"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#下载系统"}},[s._v("#")]),s._v(" 下载系统")]),s._v(" "),o("ul",[o("li",[s._v("business(商业版）（推荐）:"),o("br"),s._v("\n专业版 企业版 教育版 专业教育版 专业工作站版")]),s._v(" "),o("li",[s._v("consumer（消费者版）："),o("br"),s._v("\n专业版 家庭版 家庭单语言版 教育版 专业教育版 专业工作站版")])]),s._v(" "),o("h2",{attrs:{id:"设备管理器（替换原版系统的文件）"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#设备管理器（替换原版系统的文件）"}},[s._v("#")]),s._v(" 设备管理器（替换原版系统的文件）")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("System32\\zh-CN\\compmgmt.msc  \nSystem32\\zh-CN\\diskmgmt.msc  \nSystem32\\zh-CN\\devmgmt.msc  \nSystem32\\zh-CN\\services.msc\n")])])]),o("h2",{attrs:{id:"禁用回收站"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#禁用回收站"}},[s._v("#")]),s._v(" 禁用回收站")]),s._v(" "),o("p",[s._v("删除\nHKEY_LOCAL_MACHINE_default\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\BitBucket"),o("br"),s._v("\n下的所有内容（如无此项则创建此项），并右键-权限-高级-取消勾选“包括可从该对象的父项继承的权限”-删除-确定-是")]),s._v(" "),o("h2",{attrs:{id:"修改x盘大小"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修改x盘大小"}},[s._v("#")]),s._v(" 修改X盘大小")]),s._v(" "),o("ol",[o("li",[s._v("替换文件（推荐）")]),s._v(" "),o("li",[s._v("修改注册表"),o("br"),s._v('\n[HKEY_LOCAL_MACHINE_system\\ControlSet001\\Services\\FBWF]\n"WinPECacheThreshold"=dword:00000400'),o("br"),s._v("\n400=1GB"),o("br"),s._v("\n3200=8GB")])]),s._v(" "),o("h2",{attrs:{id:"boot-wim"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#boot-wim"}},[s._v("#")]),s._v(" boot.wim")]),s._v(" "),o("ul",[o("li",[s._v("卷#1 Windows PE      相当于 winpe.wim")]),s._v(" "),o("li",[s._v("卷#2 Windows Setup 相当于 winre.wim")])]),s._v(" "),o("h2",{attrs:{id:"创建img镜像文件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#创建img镜像文件"}},[s._v("#")]),s._v(" 创建img镜像文件")]),s._v(" "),o("p",[s._v("UltraISO-文件-新建-软盘映像"),o("br"),s._v("\n映像大小:原iso大小 + 15MB"),o("br"),s._v("\n引导扇区:Win10/8/7/Vista")]),s._v(" "),o("h2",{attrs:{id:"修改系统属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修改系统属性"}},[s._v("#")]),s._v(" 修改系统属性")]),s._v(" "),o("p",[s._v("C:\\Windows\\System32\\systemcpl.dll")]),s._v(" "),o("h2",{attrs:{id:"修复部分安装bug"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修复部分安装bug"}},[s._v("#")]),s._v(" 修复部分安装BUG")]),s._v(" "),o("p",[s._v("创建\nX:\\Program Files (x86)\\Common Files\n目录，就算是空的，也必须得有。")]),s._v(" "),o("h2",{attrs:{id:"增加msi支持"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#增加msi支持"}},[s._v("#")]),s._v(" 增加MSI支持")]),s._v(" "),o("p",[s._v("msiexec.exe"),o("br"),s._v("\nRICHED20.DLL"),o("br"),s._v("\nMSI.DLL")]),s._v(" "),o("h2",{attrs:{id:"删除开始菜单多余文件夹"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#删除开始菜单多余文件夹"}},[s._v("#")]),s._v(" 删除开始菜单多余文件夹")]),s._v(" "),o("p",[s._v("\\Users\\Default\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs")]),s._v(" "),o("h2",{attrs:{id:"注册表对应关系"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#注册表对应关系"}},[s._v("#")]),s._v(" 注册表对应关系")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("Default - [HKEY_CURRENT_USER]\nSoftWare - [HKEY_LOCAL_MACHIN]\\SoftWare\nSystem - [HKEY_LOCAL_MACHINE]\\System\n")])])]),o("h2",{attrs:{id:"注册表服务项"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#注册表服务项"}},[s._v("#")]),s._v(" 注册表服务项")]),s._v(" "),o("p",[s._v("[HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Services]")]),s._v(" "),o("h2",{attrs:{id:"夜间模式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#夜间模式"}},[s._v("#")]),s._v(" 夜间模式")]),s._v(" "),o("p",[s._v("[HKEY_LOCAL_MACHINE_Default\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize\\AppsUseLightTheme]"),o("br"),s._v("\n[HKEY_LOCAL_MACHINE_Default\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize\\SystemUsesLightTheme]"),o("br"),s._v("\n0 : 夜间模式"),o("br"),s._v("\n1 : 白天模式")]),s._v(" "),o("h2",{attrs:{id:"ipack图标包"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ipack图标包"}},[s._v("#")]),s._v(" iPack图标包")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("imageres.dll\nimagesp1.dll\nzipfldr.dll\n")])])]),o("h2",{attrs:{id:"修改我的电脑、回收站图标"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修改我的电脑、回收站图标"}},[s._v("#")]),s._v(" 修改我的电脑、回收站图标")]),s._v(" "),o("p",[s._v("\\windows\\system32\\Imageres.dll\n我的电脑:1010或109，不是149")]),s._v(" "),o("h2",{attrs:{id:"修改默认输入法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修改默认输入法"}},[s._v("#")]),s._v(" 修改默认输入法")]),s._v(" "),o("p",[s._v("HKEY_LOCAL_MACHINE_Default\\Keyboard Layout\\Preload\n00000804　　中文(简体)-美式键盘")]),s._v(" "),o("h2",{attrs:{id:"激活pe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#激活pe"}},[s._v("#")]),s._v(" 激活PE")]),s._v(" "),o("p",[s._v('导入注册表：\nHKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Control\\ProductOptions\n釆用 "正常已激活的系统" 的 "ProductOptions.reg" 是真激活，但 "控制面版" 里面还是无法出现正确信息，必须自行修改。\n除了修改\\Windows\\System32\\zh-cn\\systemcpl.dll.mui\n字串表第 100 项的值以外，还可以照下图那样把第一项也改成 "Windows 已激活。')]),s._v(" "),o("h2",{attrs:{id:"任务管理器（替换原版系统的文件）"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#任务管理器（替换原版系统的文件）"}},[s._v("#")]),s._v(" 任务管理器（替换原版系统的文件）")]),s._v(" "),o("p",[s._v("\\Windows\\System32\\taskmgr.exe (WinRE中）\n\\Windows\\System32\\ZH-CN\\taskmgr.exe.mui (特定文件）")]),s._v(" "),o("h2",{attrs:{id:"去除登入桌面左上角窗口"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#去除登入桌面左上角窗口"}},[s._v("#")]),s._v(" 去除登入桌面左上角窗口")]),s._v(" "),o("ol",[o("li",[o("p",[s._v("删除\nWindows\\system32\\zh-CN\\shell32.dll.mui\n对话框里面的13120项")])]),s._v(" "),o("li",[o("p",[s._v("在PECMD.ini中加载Explorer.exe之前，添加（删除两个注册表子项）"),o("br"),s._v("\nREGI HKLM\\SOFTWARE\\Microsoft\\Active Setup\\Installed Components{2C7339CF-2B09-4501-B3F3-F3508C9228ED}!"),o("br"),s._v("\nREGI HKLM\\SOFTWARE\\Microsoft\\Active Setup\\Installed Components{89820200-ECBD-11cf-8B85-00AA005B4340}!")])])]),s._v(" "),o("h2",{attrs:{id:"自适应dpi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#自适应dpi"}},[s._v("#")]),s._v(" 自适应DPI")]),s._v(" "),o("p",[s._v("HKU.DEFAULT\\Control Panel\\Desktop\nWin8DPIScaling = 0\nDesktopDPIOverride = 0")]),s._v(" "),o("p",[s._v("参考资料：\nhttps://docs.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/dpi-related-apis-and-registry-settings")]),s._v(" "),o("h2",{attrs:{id:"破解主题文件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#破解主题文件"}},[s._v("#")]),s._v(" 破解主题文件")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("C:\\Windows\\System32\\Themeui.dll\nC:\\Windows\\System32\\Uxinit.dll\nC:\\Windows\\System32\\Uxtheme.dll\n")])])]),o("h2",{attrs:{id:"解决wifi服务无法启动"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#解决wifi服务无法启动"}},[s._v("#")]),s._v(" 解决WIFI服务无法启动")]),s._v(" "),o("p",[s._v("补充 Windows\\L2Schemas 目录文件")]),s._v(" "),o("h2",{attrs:{id:"解决qq安装后无提示"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#解决qq安装后无提示"}},[s._v("#")]),s._v(" 解决QQ安装后无提示")]),s._v(" "),o("p",[s._v("增加")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("Windows\\SysWOW64\\avicap32.dll\nWindows\\SysWOW64\\rasman.dll\n")])])]),o("h2",{attrs:{id:"解决照片查看器始终显示-正在加载"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#解决照片查看器始终显示-正在加载"}},[s._v("#")]),s._v(" 解决照片查看器始终显示“正在加载”")]),s._v(" "),o("p",[s._v("补充")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("Windows\\System32\\Spool\nWindows\\System32\\coloradapterclient.dll\n")])])]),o("h2",{attrs:{id:"删除-press-any-key-to-boot-from-cd-or-dvd提示"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#删除-press-any-key-to-boot-from-cd-or-dvd提示"}},[s._v("#")]),s._v(" 删除 press any key to boot from cd or dvd提示")]),s._v(" "),o("ul",[o("li",[s._v("BIOS：删除 \\boot\\bootfix.bin")]),s._v(" "),o("li",[s._v("UEFI：使用efisys_noprompt.bin进行打包")])]),s._v(" "),o("h2",{attrs:{id:"修复dism-不显示winpe的注册表"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修复dism-不显示winpe的注册表"}},[s._v("#")]),s._v(" 修复Dism++不显示WinPE的注册表")]),s._v(" "),o("p",[s._v('[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\WinPE]\n"Version"="10.0.18362.145"')]),s._v(" "),o("h2",{attrs:{id:"修复部分程序无法输入"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修复部分程序无法输入"}},[s._v("#")]),s._v(" 修复部分程序无法输入")]),s._v(" "),o("p",[s._v("补充\\Windows\\System32.nls文件")]),s._v(" "),o("h2",{attrs:{id:"修复服务无法创建管理单元"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修复服务无法创建管理单元"}},[s._v("#")]),s._v(" 修复服务无法创建管理单元")]),s._v(" "),o("p",[s._v("补充")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("Windows\\System32\\\nfilemgmt.dll\nhidserv.dll\njscript9.dll\nmshtml.dll\n")])])]),o("p",[s._v("和ZH-CN相关文件")]),s._v(" "),o("h2",{attrs:{id:"修复winxshell接管系统属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修复winxshell接管系统属性"}},[s._v("#")]),s._v(" 修复WinXShell接管系统属性")]),s._v(" "),o("p",[s._v("编辑WinXShell.lua"),o("br"),s._v("\nhandle_system_property = nil")]),s._v(" "),o("h2",{attrs:{id:"wimboot启动支持"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wimboot启动支持"}},[s._v("#")]),s._v(" wimboot启动支持")]),s._v(" "),o("p",[s._v("\\Windows\\Boot\\PXE\\bootmgr.exe")]),s._v(" "),o("h2",{attrs:{id:"修复中文字体乱码"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修复中文字体乱码"}},[s._v("#")]),s._v(" 修复中文字体乱码")]),s._v(" "),o("p",[s._v("\\Windows\\Fonts\\segoeuib.ttf")]),s._v(" "),o("h2",{attrs:{id:"修复-初始化direct-运行库失败"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#修复-初始化direct-运行库失败"}},[s._v("#")]),s._v(" 修复 初始化Direct 运行库失败")]),s._v(" "),o("p",[s._v("补充")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("Windows\\SysWOW64\nd2d1.dll\nd3d10warp.dll\nd3d10_1.dll\nd3d11.dll\nd3d9.dll\ndui70.dll\nduser.dll\ndwmapi.dll\nDWrite.dll\nDXCore.dll\ndxgi.dll\ndxva2.dll\n")])])]),o("h2",{attrs:{id:"启用administrator账户侧需要保留"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#启用administrator账户侧需要保留"}},[s._v("#")]),s._v(" 启用Administrator账户侧需要保留")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("\\Windows\\System32\\activeds.dll\n\\Windows\\System32\\admin.ini\n\\Windows\\System32\\adsldpc.dll\n\\Windows\\System32\\adsnt.dll\n\\Windows\\System32\\apprepapi.dll\n\\Windows\\System32\\AuthExt.dll\n\\Windows\\System32\\BCP47mrm.dll\n\\Windows\\System32\\BioCredProv.dll\n\\Windows\\System32\\certca.dll\n\\Windows\\System32\\certcli.dll\n\\Windows\\System32\\certCredProvider.dll\n\\Windows\\System32\\CredDialogBroker.dll\n\\Windows\\System32\\CredProv2faHelper.dll\n\\Windows\\System32\\CredProvDataModel.dll\n\\Windows\\System32\\credprovhost.dll\n\\Windows\\System32\\credprovs.dll\n\\Windows\\System32\\cscapi.dll\n\\Windows\\System32\\cscdll.dll\n\\Windows\\System32\\dfscli.dll\n\\Windows\\System32\\FontGlyphAnimator.dll\n\\Windows\\System32\\fontgroupsoverride.dll\n\\Windows\\System32\\globinputhost.dll\n\\Windows\\System32\\gpsvc.dll\n\\Windows\\System32\\hhctrl.ocx\n\\Windows\\System32\\hhsetup.dll\n\\Windows\\System32\\hnetcfg.dll\n\\Windows\\System32\\IDStore.dll\n\\Windows\\System32\\ieframe.dll\n\\Windows\\System32\\InputHost.dll\n\\Windows\\System32\\InputSwitch.dll\n\\Windows\\System32\\itircl.dll\n\\Windows\\System32\\itss.dll\n\\Windows\\System32\\jscript.dll\n\\Windows\\System32\\logoncli.dll\n\\Windows\\System32\\LogonController.dll\n\\Windows\\System32\\LogonUI.exe\n\\Windows\\System32\\lz32.dll\n\\Windows\\System32\\mlang.dll\n\\Windows\\System32\\MrmCoreR.dll\n\\Windows\\System32\\mshtml.dll\n\\Windows\\System32\\msiltcfg.dll\n\\Windows\\System32\\msls31.dll\n\\Windows\\System32\\msoert2.dll\n\\Windows\\System32\\msvcp_win.dll\n\\Windows\\System32\\mtxex.dll\n\\Windows\\System32\\netjoin.dll\n\\Windows\\System32\\ngccredprov.dll\n\\Windows\\System32\\ngckeyenum.dll\n\\Windows\\System32\\ninput.dll\n\\Windows\\System32\\nlaapi.dll\n\\Windows\\System32\\profapi.dll\n\\Windows\\System32\\profext.dll\n\\Windows\\System32\\profprov.dll\n\\Windows\\System32\\profsvc.dll\n\\Windows\\System32\\profsvcext.dll\n\\Windows\\System32\\rasman.dll\n\\Windows\\System32\\rasplap.dll\n\\Windows\\System32\\rmclient.dll\n\\Windows\\System32\\RstrtMgr.dll\n\\Windows\\System32\\SecEdit.exe\n\\Windows\\System32\\seclogon.dll\n\\Windows\\System32\\Sens.dll\n\\Windows\\System32\\SensApi.dll\n\\Windows\\System32\\shacct.dll\n\\Windows\\System32\\SmartcardCredentialProvider.dll\n\\Windows\\System32\\su.ini\n\\Windows\\System32\\taskkill.exe\n\\Windows\\System32\\tasklist.exe\n\\Windows\\System32\\threadpoolwinrt.dll\n\\Windows\\System32\\tscon.exe\n\\Windows\\System32\\tsdiscon.exe\n\\Windows\\System32\\ucrtbase.dll\n\\Windows\\System32\\urlmon.dll\n\\Windows\\System32\\userinit.exe\n\\Windows\\System32\\userinitext.dll\n\\Windows\\System32\\usermgr.dll\n\\Windows\\System32\\usermgrcli.dll\n\\Windows\\System32\\usermgrproxy.dll\n\\Windows\\System32\\ustprov.dll\n\\Windows\\System32\\whoami.exe\n\\Windows\\System32\\wincorlib.dll\n\\Windows\\System32\\Windows.ApplicationModel.dll\n\\Windows\\System32\\Windows.Globalization.dll\n\\Windows\\System32\\Windows.Globalization.Fontgroups.dll\n\\Windows\\System32\\Windows.UI.dll\n\\Windows\\System32\\Windows.UI.Logon.dll\n\\Windows\\System32\\Windows.UI.Xaml.Controls.dll\n\\Windows\\System32\\Windows.UI.Xaml.dll\n\\Windows\\System32\\Windows.UI.Xaml.Resources.19h1.dll\n\\Windows\\System32\\Windows.UI.Xaml.Resources.Common.dll\n\\Windows\\System32\\Windows.UI.XamlHost.dll\n\\Windows\\System32\\wlidcredprov.dll\n\\Windows\\System32\\wmiclnt.dll\n\\Windows\\System32\\wuceffects.dll\n\\Windows\\System32\\en-US\\windows.ui.xaml.dll.mui\n\\Windows\\System32\\zh-CN\\activeds.dll.mui\n\\Windows\\System32\\zh-CN\\adsnt.dll.mui\n\\Windows\\System32\\zh-CN\\AuthExt.dll.mui\n\\Windows\\System32\\zh-CN\\BioCredProv.dll.mui\n\\Windows\\System32\\zh-CN\\certca.dll.mui\n\\Windows\\System32\\zh-CN\\certcli.dll.mui\n\\Windows\\System32\\zh-CN\\certcredprovider.dll.mui\n\\Windows\\System32\\zh-CN\\CredDialogBroker.dll.mui\n\\Windows\\System32\\zh-CN\\CredProv2faHelper.dll.mui\n\\Windows\\System32\\zh-CN\\credprovhost.dll.mui\n\\Windows\\System32\\zh-CN\\credprovs.dll.mui\n\\Windows\\System32\\zh-CN\\gpsvc.dll.mui\n\\Windows\\System32\\zh-CN\\hhctrl.ocx.mui\n\\Windows\\System32\\zh-CN\\hnetcfg.dll.mui\n\\Windows\\System32\\zh-CN\\ieframe.dll.mui\n\\Windows\\System32\\zh-CN\\InputSwitch.dll.mui\n\\Windows\\System32\\zh-CN\\jscript.dll.mui\n\\Windows\\System32\\zh-CN\\LogonController.dll.mui\n\\Windows\\System32\\zh-CN\\mlang.dll.mui\n\\Windows\\System32\\zh-CN\\mshtml.dll.mui\n\\Windows\\System32\\zh-CN\\msoert2.dll.mui\n\\Windows\\System32\\zh-CN\\netjoin.dll.mui\n\\Windows\\System32\\zh-CN\\ngccredprov.dll.mui\n\\Windows\\System32\\zh-CN\\ngckeyenum.dll.mui\n\\Windows\\System32\\zh-CN\\profext.dll.mui\n\\Windows\\System32\\zh-CN\\profsvc.dll.mui\n\\Windows\\System32\\zh-CN\\rasplap.dll.mui\n\\Windows\\System32\\zh-CN\\rstrtmgr.dll.mui\n\\Windows\\System32\\zh-CN\\secedit.exe.mui\n\\Windows\\System32\\zh-CN\\seclogon.dll.mui\n\\Windows\\System32\\zh-CN\\sens.dll.mui\n\\Windows\\System32\\zh-CN\\SmartcardCredentialProvider.dll.mui\n\\Windows\\System32\\zh-CN\\taskkill.exe.mui\n\\Windows\\System32\\zh-CN\\tasklist.exe.mui\n\\Windows\\System32\\zh-CN\\tscon.exe.mui\n\\Windows\\System32\\zh-CN\\tsdiscon.exe.mui\n\\Windows\\System32\\zh-CN\\urlmon.dll.mui\n\\Windows\\System32\\zh-CN\\userinit.exe.mui\n\\Windows\\System32\\zh-CN\\userinitext.dll.mui\n\\Windows\\System32\\zh-CN\\usermgr.dll.mui\n\\Windows\\System32\\zh-CN\\whoami.exe.mui\n\\Windows\\System32\\zh-CN\\Windows.ApplicationModel.dll.mui\n\\Windows\\System32\\zh-CN\\Windows.UI.Xaml.Controls.dll.mui\n\\Windows\\System32\\zh-CN\\windows.ui.xaml.dll.mui\n\\Windows\\SystemResources\\certCredProvider.dll.mun\n\\Windows\\SystemResources\\ieframe.dll.mun\n\\Windows\\SystemResources\\mshtml.dll.mun\n\\Windows\\SystemResources\\rasplap.dll.mun\n\\Windows\\SystemResources\\Windows.UI.Logon\n\\Windows\\SystemResources\\Windows.UI.Logon\\pris\n\\Windows\\SystemResources\\Windows.UI.Logon\\Windows.UI.Logon.pri\n\\Windows\\SystemResources\\Windows.UI.Logon\\pris\\Windows.UI.Logon.zh-CN.pri\n\\Windows\\syswow64\\activeds.dll\n\\Windows\\syswow64\\admin.ini\n\\Windows\\syswow64\\adsldpc.dll\n\\Windows\\syswow64\\adsnt.dll\n\\Windows\\syswow64\\apprepapi.dll\n\\Windows\\syswow64\\AuthExt.dll\n\\Windows\\syswow64\\BCP47mrm.dll\n\\Windows\\syswow64\\BioCredProv.dll\n\\Windows\\syswow64\\certca.dll\n\\Windows\\syswow64\\certcli.dll\n\\Windows\\syswow64\\certCredProvider.dll\n\\Windows\\syswow64\\CredDialogBroker.dll\n\\Windows\\syswow64\\CredProv2faHelper.dll\n\\Windows\\syswow64\\CredProvDataModel.dll\n\\Windows\\syswow64\\credprovhost.dll\n\\Windows\\syswow64\\credprovs.dll\n\\Windows\\syswow64\\cscapi.dll\n\\Windows\\syswow64\\cscdll.dll\n\\Windows\\syswow64\\dfscli.dll\n\\Windows\\syswow64\\en-US\n\\Windows\\syswow64\\FontGlyphAnimator.dll\n\\Windows\\syswow64\\fontgroupsoverride.dll\n\\Windows\\syswow64\\globinputhost.dll\n\\Windows\\syswow64\\gpsvc.dll\n\\Windows\\syswow64\\hhctrl.ocx\n\\Windows\\syswow64\\hhsetup.dll\n\\Windows\\syswow64\\hnetcfg.dll\n\\Windows\\syswow64\\IDStore.dll\n\\Windows\\syswow64\\ieframe.dll\n\\Windows\\syswow64\\InputHost.dll\n\\Windows\\syswow64\\InputSwitch.dll\n\\Windows\\syswow64\\itircl.dll\n\\Windows\\syswow64\\itss.dll\n\\Windows\\syswow64\\jscript.dll\n\\Windows\\syswow64\\logoncli.dll\n\\Windows\\syswow64\\LogonController.dll\n\\Windows\\syswow64\\LogonUI.exe\n\\Windows\\syswow64\\lz32.dll\n\\Windows\\syswow64\\mlang.dll\n\\Windows\\syswow64\\MrmCoreR.dll\n\\Windows\\syswow64\\mshtml.dll\n\\Windows\\syswow64\\msiltcfg.dll\n\\Windows\\syswow64\\msls31.dll\n\\Windows\\syswow64\\msoert2.dll\n\\Windows\\syswow64\\msvcp_win.dll\n\\Windows\\syswow64\\mtxex.dll\n\\Windows\\syswow64\\netjoin.dll\n\\Windows\\syswow64\\ngccredprov.dll\n\\Windows\\syswow64\\ngckeyenum.dll\n\\Windows\\syswow64\\ninput.dll\n\\Windows\\syswow64\\nlaapi.dll\n\\Windows\\syswow64\\profapi.dll\n\\Windows\\syswow64\\profext.dll\n\\Windows\\syswow64\\profprov.dll\n\\Windows\\syswow64\\profsvc.dll\n\\Windows\\syswow64\\profsvcext.dll\n\\Windows\\syswow64\\rasman.dll\n\\Windows\\syswow64\\rasplap.dll\n\\Windows\\syswow64\\rmclient.dll\n\\Windows\\syswow64\\RstrtMgr.dll\n\\Windows\\syswow64\\SecEdit.exe\n\\Windows\\syswow64\\seclogon.dll\n\\Windows\\syswow64\\Sens.dll\n\\Windows\\syswow64\\SensApi.dll\n\\Windows\\syswow64\\shacct.dll\n\\Windows\\syswow64\\SmartcardCredentialProvider.dll\n\\Windows\\syswow64\\su.ini\n\\Windows\\syswow64\\taskkill.exe\n\\Windows\\syswow64\\tasklist.exe\n\\Windows\\syswow64\\threadpoolwinrt.dll\n\\Windows\\syswow64\\tscon.exe\n\\Windows\\syswow64\\tsdiscon.exe\n\\Windows\\syswow64\\ucrtbase.dll\n\\Windows\\syswow64\\urlmon.dll\n\\Windows\\syswow64\\userinit.exe\n\\Windows\\syswow64\\userinitext.dll\n\\Windows\\syswow64\\usermgr.dll\n\\Windows\\syswow64\\usermgrcli.dll\n\\Windows\\syswow64\\usermgrproxy.dll\n\\Windows\\syswow64\\ustprov.dll\n\\Windows\\syswow64\\whoami.exe\n\\Windows\\syswow64\\wincorlib.dll\n\\Windows\\syswow64\\Windows.ApplicationModel.dll\n\\Windows\\syswow64\\Windows.Globalization.dll\n\\Windows\\syswow64\\Windows.Globalization.Fontgroups.dll\n\\Windows\\syswow64\\Windows.UI.dll\n\\Windows\\syswow64\\Windows.UI.Logon.dll\n\\Windows\\syswow64\\Windows.UI.Xaml.Controls.dll\n\\Windows\\syswow64\\Windows.UI.Xaml.dll\n\\Windows\\syswow64\\Windows.UI.Xaml.Resources.19h1.dll\n\\Windows\\syswow64\\Windows.UI.Xaml.Resources.Common.dll\n\\Windows\\syswow64\\Windows.UI.XamlHost.dll\n\\Windows\\syswow64\\wlidcredprov.dll\n\\Windows\\syswow64\\wmiclnt.dll\n\\Windows\\syswow64\\wuceffects.dll\n\\Windows\\syswow64\\en-US\\windows.ui.xaml.dll.mui\n\\Windows\\syswow64\\zh-CN\\activeds.dll.mui\n\\Windows\\syswow64\\zh-CN\\adsnt.dll.mui\n\\Windows\\syswow64\\zh-CN\\AuthExt.dll.mui\n\\Windows\\syswow64\\zh-CN\\BioCredProv.dll.mui\n\\Windows\\syswow64\\zh-CN\\certca.dll.mui\n\\Windows\\syswow64\\zh-CN\\certcli.dll.mui\n\\Windows\\syswow64\\zh-CN\\certcredprovider.dll.mui\n\\Windows\\syswow64\\zh-CN\\CredDialogBroker.dll.mui\n\\Windows\\syswow64\\zh-CN\\CredProv2faHelper.dll.mui\n\\Windows\\syswow64\\zh-CN\\credprovhost.dll.mui\n\\Windows\\syswow64\\zh-CN\\credprovs.dll.mui\n\\Windows\\syswow64\\zh-CN\\gpsvc.dll.mui\n\\Windows\\syswow64\\zh-CN\\hhctrl.ocx.mui\n\\Windows\\syswow64\\zh-CN\\hnetcfg.dll.mui\n\\Windows\\syswow64\\zh-CN\\ieframe.dll.mui\n\\Windows\\syswow64\\zh-CN\\InputSwitch.dll.mui\n\\Windows\\syswow64\\zh-CN\\jscript.dll.mui\n\\Windows\\syswow64\\zh-CN\\LogonController.dll.mui\n\\Windows\\syswow64\\zh-CN\\mlang.dll.mui\n\\Windows\\syswow64\\zh-CN\\mshtml.dll.mui\n\\Windows\\syswow64\\zh-CN\\msoert2.dll.mui\n\\Windows\\syswow64\\zh-CN\\netjoin.dll.mui\n\\Windows\\syswow64\\zh-CN\\ngccredprov.dll.mui\n\\Windows\\syswow64\\zh-CN\\ngckeyenum.dll.mui\n\\Windows\\syswow64\\zh-CN\\profext.dll.mui\n\\Windows\\syswow64\\zh-CN\\profsvc.dll.mui\n\\Windows\\syswow64\\zh-CN\\rasplap.dll.mui\n\\Windows\\syswow64\\zh-CN\\rstrtmgr.dll.mui\n\\Windows\\syswow64\\zh-CN\\secedit.exe.mui\n\\Windows\\syswow64\\zh-CN\\seclogon.dll.mui\n\\Windows\\syswow64\\zh-CN\\sens.dll.mui\n\\Windows\\syswow64\\zh-CN\\SmartcardCredentialProvider.dll.mui\n\\Windows\\syswow64\\zh-CN\\taskkill.exe.mui\n\\Windows\\syswow64\\zh-CN\\tasklist.exe.mui\n\\Windows\\syswow64\\zh-CN\\tscon.exe.mui\n\\Windows\\syswow64\\zh-CN\\tsdiscon.exe.mui\n\\Windows\\syswow64\\zh-CN\\urlmon.dll.mui\n\\Windows\\syswow64\\zh-CN\\userinit.exe.mui\n\\Windows\\syswow64\\zh-CN\\userinitext.dll.mui\n\\Windows\\syswow64\\zh-CN\\usermgr.dll.mui\n\\Windows\\syswow64\\zh-CN\\whoami.exe.mui\n\\Windows\\syswow64\\zh-CN\\Windows.ApplicationModel.dll.mui\n\\Windows\\syswow64\\zh-CN\\Windows.UI.Xaml.Controls.dll.mui\n\\Windows\\syswow64\\zh-CN\\windows.ui.xaml.dll.mui\n")])])]),o("h2",{attrs:{id:"精简winpe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#精简winpe"}},[s._v("#")]),s._v(" 精简WinPE")]),s._v(" "),o("ol",[o("li",[s._v("精简Windows目录")]),s._v(" "),o("li",[s._v("精简System32目录")]),s._v(" "),o("li",[s._v("精简字体 (Windows\\Fonts)")]),s._v(" "),o("li",[s._v("精简SysWOW64文件")]),s._v(" "),o("li",[s._v("精简Winsxs文件")]),s._v(" "),o("li",[s._v("精简注册表")])])])}),[],!1,null,null,null);n.default=l.exports}}]);