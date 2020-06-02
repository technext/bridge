# create-zion-template
1. Clone **`create-zion-template`** and rename it with your template name.
    ```
    git clone git@gitlab.com:themewagon/create-zion-template.git TEMPLATE_NAME
    ```
    or
    ```
    git clone https://gitlab.com/themewagon/create-zion-template.git TEMPLATE_NAME
    ```
2.  Enter into your template
    ```
    cd TEMPLATE_NAME
    ```
3. Change your remote's URL from **SSH** to **HTTPS** with the `git remote set-url` command.
    ```
    git remote set-url origin git@gitlab.com:USERNAME/REPOSITORY.git
    ```
    or
    ```
    git remote set-url origin https://gitlab.com/USERNAME/REPOSITORY.git
    ```
    Verify that the remote URL has changed.
    ```
    git remote -v
    ```
4. Download dependencies 
    ```
    npm i
    ```
5. To start
    ```
    gulp
    ```
    or
    ```
    npm start
    ```

Changing a remote's URL: [https://help.github.com/en/articles/changing-a-remotes-url](https://help.github.com/en/articles/changing-a-remotes-url)
