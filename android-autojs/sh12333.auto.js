// 上海人社 app 落户状态查询

var startUp = app.launch("cn.gov.sh12333.humansocialsecurity");
log("等待app启动")

// 首次点击 “落户状态查询”， 进行登录
var widget = className("android.widget.TextView").text("落户状态查询").findOne(10 * 1000).parent()
// 一些控件是无法点击的(clickable为false), 无法通过.click()函数来点击
click(widget.bounds().centerX(), widget.bounds().centerY())

// 登录
className("android.widget.EditText").text("身份证/港澳台通行证/居住证").findOne().setText("xxxxxxxxxxxxx")
// 点击显示密码按钮, 然后才能填写密码
sleep(500);
click(860,547);
sleep(500)

className("android.widget.EditText").text("密码").findOne().setText("xxxxxxxxxxxx")

// 点击登录按钮
click(476,790)

sleep(2000)

// 再次点击 “落户状态查询”， 进行登录
widget = className("android.widget.TextView").text("落户状态查询").findOne(10 * 1000).parent()
click(widget.bounds().centerX(), widget.bounds().centerY())
log(widget.bounds().centerX(), widget.bounds().centerY())
