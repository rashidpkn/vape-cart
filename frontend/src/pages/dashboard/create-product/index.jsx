import { Icon } from '@iconify/react';
import {
  Alert,
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuthContext } from 'src/auth/hooks';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import api from 'src/utils/api';

export default function CreateProduct() {
    
    const [step, setStep] = useState(1);
    
    const { user } = useAuthContext();
    const { displayName, storeName } = user;
    
    const [product, setProduct] = useState({
      name: '', // done
      username: displayName, // done
      storeName: storeName, // done
      userId: user.id, // done
      subDescription: '', // done
      content: '', // done
      images: [], // done
      SKU: '', // done
      quantity: 1, // done
      category: 'None', // done
      colors: [], // done
      tags: [], // done
      regularPrice: '', // done
      salePrice: '', // done
      tax: 0, // done
      publish: true, // done
      type: 'Simple', // done
      attributes: [],
      variable:{

      }
    });

let steps = []
steps = [
    { id: 1, title: 'General', icon: 'material-symbols:settings-outline' },
    { id: 2, title: 'Inventory', icon: 'material-symbols:inventory' },
    { id: 4, title: 'Linked Products', icon: 'fluent-mdl2:product' },
    { id: 5, title: 'Attributes', icon: 'material-symbols:edit-attributes-outline' },
  ];

if(product.type === 'Variable'){
    steps = [
        { id: 1, title: 'General', icon: 'material-symbols:settings-outline' },
        { id: 2, title: 'Inventory', icon: 'material-symbols:inventory' },
        { id: 4, title: 'Linked Products', icon: 'fluent-mdl2:product' },
        { id: 5, title: 'Attributes', icon: 'material-symbols:edit-attributes-outline' },
        { id: 6, title: 'Variable', icon: 'material-symbols:edit-attributes-outline' },
      ];
}

  const [error, setError] = useState('');
  const [message, setMessage] = useState('')

  useEffect(() => {
    setError('')
  }, [product])
  
  const navigate = useNavigate()

  const createProduct = useCallback(async () => {


    if (!product.name) return setError('Product name is mandatory');
    if (product.images.length === 0) return setError('Image is mandatory');
    if (!product.subDescription) return setError('Description is mandatory');
    if (!product.regularPrice) return setError('General Price is mandatory');
    if (!product.salePrice) return setError('Sales Price  is mandatory');
    if (!product.SKU) return setError('SKU  is mandatory');
    if (!product.quantity) return setError('Quantity  is mandatory');
    if (!product.tags.length) return setError('Tags  is mandatory');

    const { data } = await api.post('/products', product);

    setMessage("Product created")
    setTimeout(() => {
        navigate('/dashboard/product')
    }, 1000);

  }, [product]);

  

  return (
    <Box px={5}>
      <CustomBreadcrumbs
        heading="Create Product"
        links={[{}]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Card sx={{ p: 3, mt: 5 }}>
        <TextField
          placeholder="Product Name"
          label="Product Name"
          fullWidth
          value={product.name}
          onChange={(e) =>
            setProduct((prev) => ({
              ...prev,
              name: e.target.value,
              SKU: e.target.value.toUpperCase().substring(0, 4) + '-01',
            }))
          }
        />

        <h3>Product details</h3>

        <Box
          sx={{
            mt: 2,
            height: '150px',
            position: 'relative',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h4>Drop or Select files</h4>
          <p>Please upload the files from your system</p>
          <input
            multiple
            type="file"
            accept=".png, .jpg, .jpeg"
            style={{
              height: '100%',
              width: '100%',
              opacity: '0',
              position: 'absolute',
              zIndex: 100,
            }}
            onChange={async (e) => {
              const { files } = e.target;
              const form = new FormData();
              for (let index = 0; index < files.length; index++) {
                form.append('images', files[index]);
              }
              const { data } = await api.post('/upload', form);
              let images = [...product.images, ...data];
              console.log(images);
              setProduct((prev) => ({ ...prev, images }));
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 1, mt: 3, width: '100%', overflowX: 'scroll' }}>
          {product.images.map((img) => (
            <img
            
              key={img}
              src={img}
              width={100}
              height={100}
              style={{flexShrink:0}}
              onClick={() => {
                setProduct((prev) => ({ ...prev, images: prev.images.filter((e) => e !== img) }));
              }}
            />
          ))}
        </Box>

        <TextField
          placeholder="Description"
          label="Description"
          sx={{ mt: 2 }}
          fullWidth
          multiline
          rows={5}
          value={product.subDescription}
          onChange={(e) => {
            setProduct((prev) => ({
              ...prev,
              subDescription: e.target.value,
              content: e.target.value,
            }));
          }}
        />

        <h3>Product Data</h3>

        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '20%', bgcolor: '#fafafa' }}>
            {steps.map((st) => (
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  border: '1px solid rgba(0,0,0,0.1)',
                  fontSize: '14px',
                  fontWeight: '300',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => setStep(st.id)}
              >
                <Icon icon={st.icon} style={{ height: 18, width: 18, marginRight: '10px' }} />
                {st.title}
              </Box>
            ))}
          </Box>
          <Box sx={{ width: '80%', height: 'auto', border: '1px solid rgba(0,0,0,0.1)', p: 2 }}>
            <h4 style={{ margin: 0 }}>{steps.find((s) => s.id === step).title}</h4>
            {step === 1 && <Step1 product={product} setProduct={setProduct} />}
            {step === 2 && <Step2 product={product} setProduct={setProduct} />}
            {step === 4 && <Step4 product={product} setProduct={setProduct} />}
            {step === 5 && <Step5 product={product} setProduct={setProduct} />}
            {step === 6 && <Step6 product={product} setProduct={setProduct} />}
       
          </Box>
        </Box>

        {error && (
          <Alert variant="outlined" severity="error" sx={{ mt: 3 }}>
            {error}
          </Alert>
        )}

        {message && <Alert variant="outlined" severity="success" sx={{ mt: 3 }}>{message}</Alert>}

        <Box display={'flex'} justifyContent={'end'} mt={3}>
          <Button variant="contained" color="success" onClick={createProduct}>
            Create Product
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

const Step1 = ({ product, setProduct }) => {
  return (
    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <FormControl sx={{ width: '400px' }}>
        <InputLabel>Type</InputLabel>
        <Select
          label="Type"
          value={product.type}
          onChange={(e) => setProduct((prev) => ({ ...prev, type: e.target.value }))}
        >
          <MenuItem value="Simple">Simple</MenuItem>
          <MenuItem value="Variable">Variable</MenuItem>
        </Select>
      </FormControl>

      <TextField
        type="number"
        sx={{ width: '400px' }}
        label="General Price"
        value={product.regularPrice}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, regularPrice: parseFloat(e.target.value) }))
        }
      />
      <TextField
        type="number"
        sx={{ width: '400px' }}
        label="Sales Price"
        value={product.salePrice}
        onChange={(e) => setProduct((prev) => ({ ...prev, salePrice: parseFloat(e.target.value) }))}
      />

      <hr />

      <FormControl sx={{ width: '400px' }}>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          value={product.category}
          onChange={(e) => setProduct((prev) => ({ ...prev, category: e.target.value }))}
        >
          <MenuItem value="None">None</MenuItem>
          <MenuItem value="Disposable">Disposable</MenuItem>
          <MenuItem value="Liquids">Liquids</MenuItem>
          <MenuItem value="Devices">Devices</MenuItem>
          <MenuItem value="Accessories">Accessories</MenuItem>
        </Select>
      </FormControl>

      <hr />


      <TextField
        type="number"
        sx={{ width: '400px' }}
        label="Tax %"
        value={product.tax}
        onChange={(e) => setProduct((prev) => ({ ...prev, tax: parseFloat(e.target.value) }))}
      />
    </Box>
  );
};

const Step2 = ({ product, setProduct }) => {
  return (
    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <TextField
        sx={{ width: '400px' }}
        label="SKU"
        value={product.SKU}
        onChange={(e) => setProduct((prev) => ({ ...prev, SKU: e.target.value }))}
      />

      <TextField
        type="number"
        sx={{ width: '400px' }}
        label="Quantity"
        value={product.quantity}
        onChange={(e) => setProduct((prev) => ({ ...prev, quantity: parseFloat(e.target.value) }))}
      />

      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Track stock quantity for this product"
      />

      <FormControl>
        <FormLabel>Stock status</FormLabel>
        <RadioGroup sx={{ width: '200px' }}>
          <FormControlLabel value="in_stock" control={<Radio />} label="In Stock" defaultChecked />
          <FormControlLabel value="out_stock" control={<Radio />} label="Out of Stock" />
        </RadioGroup>
      </FormControl>

      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Limit purchases to 1 item per order"
      />
    </Box>
  );
};

const Step4 = ({ product, setProduct }) => {
  return (
    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <FormControl sx={{ width: '400px' }}>
        <InputLabel>Tages</InputLabel>
        <Select
          label="Tages"
          value={product.tags}
          onChange={(e) => setProduct((prev) => ({ ...prev, tags: e.target.value }))}
          multiple
          renderValue={(selected) => selected.join(', ')}
        >
          {[
            'Juul',
            'SMOK',
            'Vaporesso',
            'Innokin',
            'Aspire',
            'GeekVape',
            'Uwell',
            'Voopoo',
            'Eleaf',
            'Lost Vape',
            'Joyetech',
            'Vandy Vape',
            'Wismec',
            'Rincoe',
            'Augvape',
          ].map((e) => (
            <MenuItem value={e} key={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const Step5 = ({ product, setProduct }) => {
  return (
    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <FormControl sx={{ width: '600px' }}>
        <InputLabel>Attributes</InputLabel>
        <Select
          label="Attributes"
          value={product.attributes}
          onChange={(e) => setProduct((prev) => ({ ...prev, attributes: e.target.value }))}
          multiple
          renderValue={(selected) => selected.join(', ')}
        >
          <MenuItem value="Batteries">Batteries</MenuItem>
          <MenuItem value="Bottle Size">Bottle Size</MenuItem>
          <MenuItem value="Brand">Brand</MenuItem>
          <MenuItem value="Device Color">Device Color</MenuItem>
          <MenuItem value="Nicotine Level">Nicotine Level</MenuItem>
          <MenuItem value="Option">Option</MenuItem>
          <MenuItem value="Puffs">Puffs</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

const batteriesVariable =  ["Built In", "Dual", "Single", "Triple"]
const bottleSizeVariable = ["100ml (Shortfills)", "10ml", "50 ml", "50ml", "50ml (Shortfills)", "75ml", "75ml", "Tobacco Platinum", "100ml", "120ml", "30ml", "60ml"]
const brandVariable = ["4nx", "Acid Juice", "Acrohm", "Advken", "Aerogin", "Air Factory", "AISU", "All Dat Stuff", 
"AQUA", "ArtX", "Aspire", "AsVape", "Bazooka", "Beard Vape Co.", "Blush", "BLVK Unicorn", 
"Bolt", "California Clouds", "Cambridge Labs", "Cambridge Labs Salt", "Candy Shop", 
"Carnival Juice Roll-Upz", "Charlie's Chalk Dust", "Clic", "Cloud Breakers", "Cloud Nurdz", 
"Clowds", "Core", "Crave", "Cravve", "Cream Team", "Cuttwood E-Liquids", "Daze", "Demon Killer", 
"DigiFlavor", "Dinner Lady", "Don Cristo", "Doozy Vape Co.", "Dr. Vapes", "Drip Bar", "DYB", 
"eCigara", "Effest", "Eleaf", "Elf Bar", "Esco Bars", "Fantasi", "Fifty 50", "Five Pawns", 
"Flavorfog", "FOGG", "Found Mary", "Frunk Bar", "FUMMO", "Geek Bar", "Geek Vape", "Ghost Max", 
"Ghost Pro", "Ghost Salt", "Glas Basix", "Goat", "Gold Leaf Liquids", "Golisi", "GÖST Vapor", 
"Halcyon Haze", "Hellvape", "Hexa", "HorizonTech", "Hyla", "Hyppe", "I Love Salts", "IJOY", 
"INFZN", "Innevape", "Innokin", "IVG E-Liquids", "Jam Monster", "Joyetech", "Juice Head E-Liquid", 
"Juice Roll-Upz", "Juicy Salts", "Just Juice", "JustFog", "JUUL", "Kalyan", "KangerTech", 
"Keep It 100", "Kief", "Killa Fruits", "Kilo", "KK Energy", "KonceptXIX", "LG", "Loaded", 
"Mad Hatter Juice", "Maskking", "Mazaj", "Medusa", "Mike Vapes"]

const colorVariable = [
    "7 Color Armor", "7 Color Carbon Fiber", "7 Color Cobra", "7 Color Oil", "7 Color Shell", "7 Color Spray", "7-Color Armor", 
    "Acrylic Fluid Blue", "Almighty Blue", "Alpine Berry", "Ancient Silver", "Aqua Blue", "Aqua Teal", "Army Green", "Artic Silver", 
    "Ash Brown", "Aura Glow", "Aurora Blue", "Aurora Borealis", "Aurora Green", "Beetle Black", "Betta Fish", "Black + Black", 
    "Black and Gold", "Black and White Resin", "Black Armor", "Black Carbon Fiber", "Black carbon fibre", "Black Cobra", "Black Coffee", 
    "Black Leather", "Black Pink", "Black Purple", "Black Red Marbling", "Black Stabilizing Wood", "Black Violet", "Blue and Brown", 
    "Blue Cobra", "Blue Gold", "Blue Green", "Blue Grey Armor", "Blue Grey Cobra", "Blue Leather", "Blue Purple", "Blue Stabilizing Wood", 
    "Brick Red Shell", "Bronze Gold", "Bronze Knight", "Brown Leather", "California Orange", "Camo/Gunmetal", "Camouflage", "Carbon Black", 
    "Carbon Fiber", "Carbon Fiber Black", "Carbon Silver", "Champagne Gold", "Charcoal Grey", "Chestnut", "Claret Violet", "Classic", 
    "Classic Blue", "Classic Red", "Classic Silver", "Cobalt Green", "Coffee", "Cosmic Blue", "Crystal Red", "Cyan Pink", "Cyan Pink Cobra", 
    "Dark Black", "Dark Blue", "Dark Brown", "Dark Red", "Daylight Walker", "Dazzeling Marble", "Dazzling Green", "Deep Ocean", "Deep sea", 
    "Dessert Camouflage", "Devil Red", "Diamond", "Diamond Black", "Elite White", "Enjoy", "Fluid 7 Color", "Fluid 7-Color", "Fluid Black Grey", 
    "Fluid Blue", "Fluid Gold", "Fluid Purple", "Fluid Red", "Frosted Grey", "Galaxy Blue", "Galaxy Green", "Garda Blue", "Gem Blue", "Glacier Mint", 
    "Glass Fiber"
]

const nicotineLevelVariable = [
    "10 MG", "15 MG", "36 MG", "9 MG", "11 MG", "14 MG", "16 MG", "51 MG", "52 MG", "53 MG", 
    "54 MG", "55 MG", "56 MG", "57 MG", "58 MG", "59 MG", "61 MG", "62 MG", "63 MG", "64 MG", 
    "65 MG", "66 MG", "0 MG", "3 MG", "6 MG", "12 MG", "18 MG", "20 MG", "24 MG", "25 MG", 
    "30 MG", "35 MG", "40 MG", "45 MG", "48 MG", "50 MG", "60 MG"
]

const optionsVariable = ["Full Kit", "Pod Only"]

const puffsVariable = [
    "1000 Puffs", "1200 Puffs", "1500", "1500 Puffs", "2000 Puffs", "2500 Puffs", "300 Puffs", 
    "3000 Puffs", "350 Puffs", "3500 Puffs", "400 Puffs", "4000 Puffs", "450 Puffs", "4500 Puffs", 
    "500 Puffs", "5000 Puffs", "5500 Puffs", "575 Puffs", "600 Puffs", "800 Puffs", "10000 Puffs", 
    "12000 Puffs", "245 Puffs", "2600 Puffs", "320 Puffs", "5001 Puffs", "5002 Puffs", "5003 Puffs", 
    "5004 Puffs", "5005 Puffs", "5006 Puffs", "5800 Puffs", "6000 Puffs", "700 Puffs", "7000 Puffs", 
    "8000 Puffs", "8500 Puffs"
]



const Step6 = ({product , setProduct}) => {

    

    const setPrice = (attribute, variable, price) => {
        setProduct(prev => {
          let currentVariable =  prev.variable
            
          for (let key in currentVariable) {
            if ( currentVariable[key].length === 0) {
                delete currentVariable[key];
            }
        }

        if (price && !Array.isArray(currentVariable[attribute])) {
            currentVariable[attribute] = [];
        }

        currentVariable[attribute] = currentVariable[attribute].filter(item => item.name !== variable);        

        if(price){
            currentVariable[attribute].push({name:variable,price})
        }{

             currentVariable[attribute].filter(e=>e.name !== variable)
        }
        

      
        

        return ({...prev,variable:currentVariable})

        });
      };


  return (
    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        {product.attributes.map(att=>{
            return(
        <Box key={att} sx={{ display: 'flex', gap: '10px', flexDirection: 'row',flexWrap:'wrap' }}>
            <p style={{width:'100%'}}>{att}</p>
            {att === 'Batteries' && batteriesVariable.map(variable=><VariablePrice variable={variable} att={att}  product={product} setProduct={setProduct}/>)}
            {att === 'Bottle Size' && bottleSizeVariable.map(variable=><VariablePrice variable={variable} att={att}  product={product} setProduct={setProduct}/>)}
            {att === 'Brand' && brandVariable.map(variable=><VariablePrice variable={variable} att={att}  product={product} setProduct={setProduct}/>)}
            {att === 'Device Color' && colorVariable.map(variable=><VariablePrice variable={variable} att={att}  product={product} setProduct={setProduct}/>)}
            {att === 'Nicotine Level' && nicotineLevelVariable.map(variable=><VariablePrice variable={variable} att={att}  product={product} setProduct={setProduct}/>)}
            {att === 'Option' && optionsVariable.map(variable=><VariablePrice variable={variable} att={att}  product={product} setProduct={setProduct}/>)}
            {att === 'Puffs' && puffsVariable.map(variable=><VariablePrice variable={variable} att={att}  product={product} setProduct={setProduct}/>)}
            

        </Box>)
        })}
            


    </Box>
  );
};


const VariablePrice = ({variable,att,product , setProduct}) =>{

  console.log(product);
  const setPrice = (attribute, variable,price) => {
    setProduct(prev => {
      let currentVariable =  prev.variable
        for (let key in currentVariable) {
        if ( currentVariable[key].length === 0) delete currentVariable[key];
    }

    if (price && !Array.isArray(currentVariable[attribute])) currentVariable[attribute] = [];
  
    currentVariable[attribute] = currentVariable[attribute].filter(item => item.name !== variable);        

    if(price) currentVariable[attribute].push({name:variable,price})
      else currentVariable[attribute].filter(e=>e.name !== variable)
    
    return ({...prev,variable:currentVariable})

    });
  };


  return(
    <Box sx={{width:'40%'}}>
    <TextField key={variable} size='small' label={variable} onChange={e=>setPrice(att,variable,parseFloat(e.target.value))} />
    </Box>
  )
}
