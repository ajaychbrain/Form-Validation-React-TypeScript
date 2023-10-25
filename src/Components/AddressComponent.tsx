import React from "react";
import { AddressContainer, Label, NameStyle, StyledSelect } from "./styles/FormStyles";
interface IType {
    handleAddressData: (data: any) => void;
  }
const AddressComponent: React.FC<IType>= (props : any)=>{
    
    return(
        <>
          <Label>4. Address</Label>
          <AddressContainer>
          <NameStyle>
          <StyledSelect
            
            defaultValue="Select Country"
            name="country"
            id="country"
          >
            <option value="Select Country" disabled>
              Select Country
            </option>
           
          </StyledSelect>
        </NameStyle>
        <NameStyle>
          <StyledSelect
           
            placeholder="Select State"
            defaultValue="Select State"
            name="state"
            id="state"
          >
            <option value="Select State" disabled>
              Select State
            </option>
           
          </StyledSelect>
        </NameStyle>

        <NameStyle>
          <StyledSelect
            
            defaultValue="Select City"
            name="city"
            id="city"
          >
            <option value="Select City" disabled>
              Select City
            </option>
           
          </StyledSelect>
        </NameStyle>
            </AddressContainer>
        
        </>
    )

}

export default AddressComponent;