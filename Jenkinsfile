pipeline {
    agent any

    stages {
         stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], browser: [$class: 'GithubWeb', repoUrl: 'https://github.com/KevinOspina/KMC.git'], extensions: [], userRemoteConfigs: [[credentialsId: '5588d1ab-8ef0-45f4-961a-85d26e404591', url: 'https://github.com/KevinOspina/KMC']]])
            }
        }
        
        stage('Build'){
            steps{
                 
                    
                sh 'node --version'
                sh 'npm --version'
                
                //sh 'docker login -u kevinospina03 -p ${PASS}'
                //sh 'cat ~/pass.txt | docker login --username kevinospina03 --password-stdin'
                //sh 'docker build .'
                //sh 'docker push kevinospina03/node_hello'
                
                 script {
                    /**
                     * login to docker for private repository
                     * create credentials in jenkins page.
                     **/
                     withCredentials([usernamePassword(credentialsId: '37267417-47b3-42ac-9844-3f307ddb9306', passwordVariable: 'password', usernameVariable: 'username')]){

                          sh '''
                           echo "${PASS} | docker login -u ${USER} --password-stdin"
                          '''
                        def app = docker.build("kevinospina03/kmc")
                     }
                }
            }
        }
        
        stage('Deploy') {
            steps {
               
                 withCredentials([usernamePassword(credentialsId: '37267417-47b3-42ac-9844-3f307ddb9306', passwordVariable: 'password', usernameVariable: 'username')]){
                    /**
                    * Restart docker server
                    **/
                    sh '''
                        echo "${PASS} | docker login -u ${USER} --password-stdin"
                        docker stop kmc
                        docker rm kmc
                        docker pull kevinospina03/kmc:latest
                        docker run -d -p 4200:4200 --name kmc -t kevinospina03/kmc:latest
                    '''
                }
            }
        
        }
    }
    
    
}


