﻿angular.module("candidates").controller("EducationModalController", [
    "$http", "$uibModalInstance", "data", function($http, $uibModalInstance, data) {
        var vm = this;

        vm.institutions = [];

        $http.get("/Institution/").success(function(response) {
            vm.institutions = response;
        });

        if (data) {
            vm.degree = data.degree;
            vm.fieldOfStudy = data.fieldOfStudy;
            vm.grade = data.grade;
            vm.institution = data.institution;
            vm.startDate = data.startDate;
            vm.endDate = data.endDate;
            vm.present = data.present;
            vm.activites = data.activites;
            vm.notes = data.notes;
        }

        vm.save = function() {
            vm.form.submitted = true;

            if (vm.form.$valid) {
                var education = {
                    degree: vm.degree,
                    fieldOfStudy: vm.fieldOfStudy,
                    grade: vm.grade,
                    institution: vm.institution,
                    startDate: vm.startDate,
                    endDate: vm.endDate,
                    present: vm.present,
                    activites: vm.activites,
                    notes: vm.notes
                };

                if (data && data.$$hashKey) {
                    education.$$hashKey = data.$$hashKey;
                }

                $uibModalInstance.close(education);
            }
        };

        vm.cancel = function() {
            $uibModalInstance.dismiss("cancel");
        };
    }
]);