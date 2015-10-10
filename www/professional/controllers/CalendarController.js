app.controller('CalendarCtrl', ['$scope', function ($scope) {
  $scope.appointments = [
    {
      time: new Date(),
      user: {
        name: 'Kat Von D',
        pic: 'https://protoio.s3.amazonaws.com/juliocoelho-197040-proto/projects/79ba260c-5533-4291-8792-905e83ead3a3/assets/root/t_43d571bb69093c051573a670407d8e0b.png?AWSAccessKeyId=AKIAJX27SISJ6O6QJ6CA&Expires=1441130000&Signature=DjMN%2Fj%2BoJYZU1I76EIhh14o2wkQ%3D&ts=1440645837'
      }
    },
    {
      time: new Date(),
      user: {
        name: 'Jessica Alba',
        pic: 'https://protoio.s3.amazonaws.com/juliocoelho-197040-proto/projects/79ba260c-5533-4291-8792-905e83ead3a3/assets/root/t_441ce8d069093c05157a7d5b0b818c2e.png?AWSAccessKeyId=AKIAJX27SISJ6O6QJ6CA&Expires=1441130000&Signature=OXVDg0R%2BdT6mh65QxWvDbjiQJpk%3D&ts=1440646307'
      }
    },
    {
      time: new Date(),
      user: {
        name: 'Dani Suzuki',
        pic: 'https://protoio.s3.amazonaws.com/juliocoelho-197040-proto/projects/79ba260c-5533-4291-8792-905e83ead3a3/assets/root/t_42f7768c69093c051575ec95960a98ae.png?AWSAccessKeyId=AKIAJX27SISJ6O6QJ6CA&Expires=1441130000&Signature=jHCzs%2B8mv8jaC9LHBMRKx1o%2FarU%3D&ts=1440644383'
      }
    },
    {
      time: new Date(),
      user: {
        name: 'Maju Coutinho',
        pic: 'https://protoio.s3.amazonaws.com/juliocoelho-197040-proto/projects/79ba260c-5533-4291-8792-905e83ead3a3/assets/root/t_431a0eac69093c051570fb97bcdfde10.png?AWSAccessKeyId=AKIAJX27SISJ6O6QJ6CA&Expires=1441130000&Signature=L8XXHbCr22dnx9QVYEg38XDY8uw%3D&ts=1440644609'
      }
    },
    {
      time: new Date(),
      user: {
        name: 'Aninha Arósio',
        pic: 'https://protoio.s3.amazonaws.com/juliocoelho-197040-proto/projects/79ba260c-5533-4291-8792-905e83ead3a3/assets/root/t_430e143069093c05157af26239d8c657.png?AWSAccessKeyId=AKIAJX27SISJ6O6QJ6CA&Expires=1441130000&Signature=kZTfHD4siRD0e%2Fyz14qYOKwm6p0%3D&ts=1440644530'
      }
    },
    {
      time: new Date(),
      user: {
        name: 'Nat Por',
        pic: 'https://protoio.s3.amazonaws.com/juliocoelho-197040-proto/projects/79ba260c-5533-4291-8792-905e83ead3a3/assets/root/t_4385157469093c0515704c22a43be33e.png?AWSAccessKeyId=AKIAJX27SISJ6O6QJ6CA&Expires=1441130000&Signature=BCQgsxzRFqLp2LBIa5AaE2uE2aY%3D&ts=1440645311'
      }
    }
  ];
}]);
