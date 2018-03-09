export class MainCtrl implements ng.IController {

    static inject: string[] = ["$scope", "$filter"]

    constructor
        (
            private $http,
            private $scope,
            private $filter
        ){
            this.$scope.$on("POST_SUBMITTED", () => {
                this.getPostList();
            })
        }

        $onInit(){
            this.getPostList();
        }

        getPostList(){
            console.log("main ctrl init")
        }
}