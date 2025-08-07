pipeline {
    agent any

    tools {
        nodejs 'Node17'
    }

    stages {
        stage('Clone Frontend Code') {
            steps {
                git branch: 'main', url: 'https://github.com/madhucm17/ReactFrontend.git'
            }
        }

        stage('Install & Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy to Apache') {
            steps {
                script {
                    sh '''
                        # Ensure jenkins has permissions or sudo access
                        sudo rm -rf /var/www/ReactFrontend/*
                        sudo cp -r build/* /var/www/ReactFrontend/
                        sudo systemctl restart apache2
                    '''
                }
            }
        }
    }
}
