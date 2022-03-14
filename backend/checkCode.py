import time

from aip import AipOcr


# 验证码的获取和处理
def get_captcha(driver):
    png = driver.find_element_by_id('checkimg')
    png.screenshot('capt.png')  # 将图片截屏并保存


# 验证码的识别
def discern_captcha(driver):
    # 识别码
    APP_ID = '22975815'
    API_KEY = 'GkBwS2IeXvbKF9XK3jP1K7fA'
    SECRET_KEY = 'BFZduRc081PP3yFnv2Y2FfKlQItC5DA1'
    # 初始化对象
    client = AipOcr(APP_ID, API_KEY, SECRET_KEY)
    # 读取图片
    def get_file_content(file_path):
        with open(file_path, 'rb') as f:
            return f.read()

    image = get_file_content('capt.png')
    # 定义参数变量
    options = {'language_type': 'ENG', }  # 识别语言类型，默认为'CHN_ENG'中英文混合
    # 调用通用文字识别
    result = client.basicGeneral(image, options)  # 高精度接口 basicAccurate\basicGeneral
    print(result)
    for word in result['words_result']:
        captcha = (word['words'])
        print('识别结果：' + captcha)
        if len(captcha) == 4 and captcha[0].isdigit() and captcha[1].isdigit() and captcha[2].isdigit() and captcha[3].isdigit():
            return captcha
        else:
            driver.find_element_by_id("checkimg").click()
            time.sleep(1)
            get_captcha(driver)
            result = client.basicGeneral(image, options)  # 高精度接口 basicAccurate
            for word in result['words_result']:
                captcha = (word['words'])
            print('获取新的验证码识别新的识别结果：' + captcha)
            print(len(captcha))
