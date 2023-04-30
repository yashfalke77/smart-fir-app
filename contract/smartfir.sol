// E-FIR smart contract

pragma solidity ^0.8.0;

contract EFIR {
    
    // Struct to store FIR details
    struct FIR {
        uint256 FIRnumber;
        string objectId;
        address complainantAddress;
        string complainantName;
        string complainantPhone;
        string complainantEmail;
        string FIRdescription;
        bool isFIRfiled;
        bool isFIRverified;
        address verifierAddress;
        string verifierName;
        uint256 timestamp;
    }

    uint256 FirTracker = 0;
    
    // Mapping to store FIR details by FIR number
    mapping(uint256 => FIR) public FIRdetails;
    
    // Event to emit when a new FIR is filed
    event FIRfiled(uint256 FIRnumber);
    
    // Event to emit when a FIR is verified
    event FIRverified(uint256 FIRnumber);
    
    // Modifier to check if the sender is authorized to access the function
    modifier onlyAuthorized {
        require(msg.sender == owner || authorized[msg.sender], "Not authorized");
        _;
    }
    
    // Owner address
    address public owner;
    
    // Mapping to store authorized addresses
    mapping(address => bool) public authorized;
    
    // Constructor to set the owner address
    constructor() {
        owner = msg.sender;
    }
    
    // Function to authorize an address
    function authorize(address _address) public onlyAuthorized {
        authorized[_address] = true;
    }
    
    // Function to revoke authorization of an address
    function revokeAuthorization(address _address) public onlyAuthorized {
        authorized[_address] = false;
    }
    
    // Function to file a new FIR
    function fileFIR(string memory _complainantName, string memory _complainantPhone, 
        string memory _complainantEmail, string memory _FIRdescription, string memory _objectId) public {
        
        // Check if FIR number already exists
        require(FIRdetails[FirTracker].FIRnumber == 0, "FIR number already exists");
        
        // Add new FIR details
        FIRdetails[FirTracker] = FIR({
            FIRnumber: FirTracker,
            complainantAddress: msg.sender,
            complainantName: _complainantName,
            complainantPhone: _complainantPhone,
            complainantEmail: _complainantEmail,
            FIRdescription: _FIRdescription,
            isFIRfiled: true,
            isFIRverified: false,
            verifierAddress: address(0),
            verifierName: "",
            timestamp: block.timestamp,
            objectId: _objectId
        });
        
        // Emit FIRfiled event
        emit FIRfiled(FirTracker);
        FirTracker++;
    }
    
    // // Function to verify a FIR
    // function verifyFIR(uint256 _FIRnumber, address _verifierAddress, string memory _verifierName) public onlyAuthorized {
        
    //     // Check if FIR number exists and is not already verified
    //     require(FIRdetails[_FIRnumber].FIRnumber != 0, "FIR number does not exist");
    //     require(!FIRdetails[_FIRnumber].isFIRverified, "FIR already verified");
        
    //     // Update FIR details
    //     FIRdetails[_FIRnumber].isFIRverified = true;
    //     FIRdetails[_FIRnumber].verifierAddress = _verifierAddress;
    //     FIRdetails[_FIRnumber].verifierName = _verifierName;
        
    //     // Emit FIRverified event
    //     emit FIRverified(_FIRnumber);
    // }

    // Function to get FIR details by FIR number
    function getFIRDetails(uint256 _FIRnumber) public view returns(FIR memory){
        return FIRdetails[_FIRnumber];
    }
}
    
    
