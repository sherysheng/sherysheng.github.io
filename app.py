from flask import Flask, render_template

@application.route('/')
def showMachineList():
    return render_template('index.html')

if __name__ == "__main__":
    application.run(host='0.0.0.0')